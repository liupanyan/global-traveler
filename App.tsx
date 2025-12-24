import React, { useState, useCallback } from 'react';
import LeafletMap from './LeafletMap'; // 修改引用路径
import Sidebar from './Sidebar';       // 修改引用路径
import { Destination, AIResponse, TripOption, SavedTrip } from './types'; // 修改引用路径
import { generateTripItinerary, generateDetailedItinerary, getSingleDestination } from './geminiService'; // 修改引用路径
import { v4 as uuidv4 } from 'uuid';

const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: '东京, 日本',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    description: '日本的首都，传统与现代的完美融合。',
    days: 3,
    activities: ['漫步涩谷十字路口', '参观浅草寺', '秋叶原动漫巡礼']
  }
];

const App: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>(INITIAL_DESTINATIONS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [tripSummary, setTripSummary] = useState<string>("日本黄金路线示范行程。");
  const [tripOptions, setTripOptions] = useState<TripOption[] | undefined>(undefined);
  const [lastPrompt, setLastPrompt] = useState<string>("");

  const handleRemoveDestination = useCallback((id: string) => {
    setDestinations(prev => prev.filter(d => d.id !== id));
  }, []);

  const handleReorderDestinations = useCallback((newOrder: Destination[]) => {
    setDestinations(newOrder);
  }, []);

  const handleGenerateTrip = async (prompt: string) => {
    setIsGenerating(true);
    setTripOptions(undefined);
    setLastPrompt(prompt);

    try {
      const response: AIResponse = await generateTripItinerary(prompt);
      
      if (response.isAmbiguous && response.options && response.options.length > 0) {
        setTripOptions(response.options);
        setTripSummary("请选择一个感兴趣的方案，AI 将为您生成详细行程。");
      } else if (response.destinations) {
        const newDestinations: Destination[] = response.destinations.map(d => ({
          id: uuidv4(),
          name: d.name,
          coordinates: { lat: d.lat, lng: d.lng },
          description: d.description,
          days: d.suggestedDays,
          activities: d.activities
        }));
        setDestinations(newDestinations);
        setTripSummary(response.tripSummary || "行程已生成");
        setTripOptions(undefined);
      }
    } catch (error) {
      console.error("Failed to generate trip", error);
      alert("生成行程失败。请检查 API Key 是否正确配置。");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectOption = async (option: TripOption) => {
    setIsGenerating(true);
    setTripOptions(undefined);
    try {
      const response = await generateDetailedItinerary(option.title, lastPrompt);
      if (response.destinations) {
        const newDestinations = response.destinations.map(d => ({
          id: uuidv4(),
          name: d.name,
          coordinates: { lat: d.lat, lng: d.lng },
          description: d.description,
          days: d.suggestedDays,
          activities: d.activities
        }));
        setDestinations(newDestinations);
        setTripSummary(response.tripSummary || `${option.title} 行程计划`);
      }
    } catch (error) {
      alert("生成详细行程失败，请重试。");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddDestination = async (name: string) => {
    setIsGenerating(true);
    try {
      const destInfo = await getSingleDestination(name);
      const newDest: Destination = {
        id: uuidv4(),
        ...destInfo
      };
      setDestinations(prev => [...prev, newDest]);
    } catch (error) {
      alert("无法找到该地点，请检查拼写或重试。");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLoadTrip = (trip: SavedTrip) => {
    setDestinations(trip.destinations);
    setTripSummary(trip.tripSummary || "已加载收藏的行程");
    setTripOptions(undefined);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      <Sidebar 
        destinations={destinations}
        tripOptions={tripOptions}
        onRemoveDestination={handleRemoveDestination}
        onReorderDestinations={handleReorderDestinations}
        onGenerateTrip={handleGenerateTrip}
        onSelectOption={handleSelectOption}
        onAddDestination={handleAddDestination}
        onLoadTrip={handleLoadTrip}
        isGenerating={isGenerating}
        tripSummary={tripSummary}
      />
      <main className="flex-1 relative w-full h-full md:ml-96">
        <LeafletMap destinations={destinations} />
      </main>
    </div>
  );
};

export default App;
