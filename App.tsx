import React, { useState, useCallback } from 'react';
import LeafletMap from './components/LeafletMap';
import Sidebar from './components/Sidebar';
import { Destination, AIResponse, TripOption, SavedTrip } from './types';
import { generateTripItinerary, generateDetailedItinerary, getSingleDestination } from './services/geminiService';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: '东京, 日本',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    description: '日本的首都，传统与现代的完美融合。您可以在这里体验繁忙的都市生活，也可以在静谧的庭院中寻找安宁。',
    days: 3,
    activities: ['漫步涩谷十字路口', '参观浅草寺', '秋叶原动漫巡礼', '筑地市场品尝寿司']
  },
  {
    id: '2',
    name: '京都, 日本',
    coordinates: { lat: 35.0116, lng: 135.7681 },
    description: '日本文化的中心，拥有无数的寺庙、神社和传统茶屋。漫步在花见小路，感受古都的韵味。',
    days: 2,
    activities: ['伏见稻荷大社千本鸟居', '金阁寺', '岚山竹林', '体验茶道']
  },
  {
    id: '3',
    name: '大阪, 日本',
    coordinates: { lat: 34.6937, lng: 135.5023 },
    description: '日本的厨房，以热情的人民和美味的街头食物闻名。',
    days: 2,
    activities: ['道顿堀美食之旅', '大阪城公园', '环球影城 (USJ)']
  }
];

const App: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>(INITIAL_DESTINATIONS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [tripSummary, setTripSummary] = useState<string>("日本黄金路线示范行程。");
  
  // New State for Options
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
    setTripOptions(undefined); // Reset options
    setLastPrompt(prompt);

    try {
      const response: AIResponse = await generateTripItinerary(prompt);
      
      if (response.isAmbiguous && response.options && response.options.length > 0) {
        // Scenario A: Ambiguous -> Show Options
        setTripOptions(response.options);
        setTripSummary("请选择一个感兴趣的方案，AI 将为您生成详细行程。");
      } else if (response.destinations) {
        // Scenario B: Specific -> Show Itinerary
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
      alert("生成行程失败。请重试。请确保您的 API Key 有效。");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectOption = async (option: TripOption) => {
    setIsGenerating(true);
    setTripOptions(undefined); // Hide options UI
    try {
      const response = await generateDetailedItinerary(option.title, lastPrompt);
      
      if (response.destinations) {
        const newDestinations: Destination[] = response.destinations.map(d => ({
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
      console.error("Failed to generate detailed trip", error);
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
        name: destInfo.name,
        coordinates: destInfo.coordinates,
        description: destInfo.description,
        days: destInfo.days,
        activities: destInfo.activities
      };
      setDestinations(prev => [...prev, newDest]);
    } catch (error) {
      console.error("Failed to add destination", error);
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
      
      {/* Sidebar Navigation */}
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

      {/* Main Map Area */}
      {/* On desktop, we add margin-left to account for the fixed sidebar */}
      <main className="flex-1 relative w-full h-full md:ml-96">
        <LeafletMap 
          destinations={destinations} 
        />
        
        {/* Floating action button or overlay could go here if needed */}
      </main>
    </div>
  );
};

export default App;