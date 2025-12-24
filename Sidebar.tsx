import React, { useState, useRef, useEffect } from 'react';
import { Destination, TripOption, SavedTrip } from './types'; // FIX
import { saveTrip, getSavedTrips, deleteTrip } from './storageService'; // FIX
import { v4 as uuidv4 } from 'uuid';
import { 
  Loader2, MapPin, Navigation, Plus, Sparkles, Trash2, 
  Menu, X, GripVertical, ArrowRight, Flag, Save, FolderHeart, Calendar, ArrowLeft, Check
} from 'lucide-react';

interface SidebarProps {
  destinations: Destination[];
  tripOptions?: TripOption[]; 
  onRemoveDestination: (id: string) => void;
  onReorderDestinations: (destinations: Destination[]) => void;
  onGenerateTrip: (prompt: string) => Promise<void>;
  onSelectOption: (option: TripOption) => Promise<void>; 
  onAddDestination: (name: string) => Promise<void>;
  onLoadTrip: (trip: SavedTrip) => void;
  isGenerating: boolean;
  tripSummary?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  destinations, 
  tripOptions,
  onRemoveDestination, 
  onReorderDestinations,
  onGenerateTrip, 
  onSelectOption,
  onAddDestination,
  onLoadTrip,
  isGenerating,
  tripSummary 
}) => {
  // Navigation & State
  const [viewMode, setViewMode] = useState<'planner' | 'saved'>('planner');
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>([]);
  const [activeTripId, setActiveTripId] = useState<string | null>(null);
  
  // Planner State
  const [prompt, setPrompt] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Mobile toggle
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDestName, setNewDestName] = useState('');

  // Drag and drop refs
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  // Load trips when switching to saved view
  useEffect(() => {
    if (viewMode === 'saved') {
      setSavedTrips(getSavedTrips());
    }
  }, [viewMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setActiveTripId(null); // Reset saved state on new generation
    await onGenerateTrip(prompt);
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDestName.trim()) return;
    setActiveTripId(null); // Reset saved state on modification
    await onAddDestination(newDestName);
    setNewDestName('');
    setShowAddModal(false);
  };

  const handleSort = () => {
    let _destinations = [...destinations];
    
    if (dragItem.current === null || dragOverItem.current === null) return;
    
    const draggedItemContent = _destinations.splice(dragItem.current, 1)[0];
    _destinations.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setActiveTripId(null); // Reset saved state on reorder
    onReorderDestinations(_destinations);
  };

  const handleSaveTrip = () => {
    if (destinations.length === 0) return;

    // Auto-generate title logic
    let title = "未命名行程";
    if (destinations.length > 0) {
      // Get the city name part (before any comma if present)
      const firstCity = destinations[0].name.split(/[，,]/)[0];
      
      if (destinations.length === 1) {
        title = `${firstCity}深度游`;
      } else {
        const lastCity = destinations[destinations.length - 1].name.split(/[，,]/)[0];
        title = `${firstCity} - ${lastCity} 之旅`;
      }
    }

    const newTripId = uuidv4();
    const newTrip: SavedTrip = {
      id: newTripId,
      title: title,
      createdAt: Date.now(),
      destinations: destinations,
      tripSummary: tripSummary
    };

    saveTrip(newTrip);
    // Optimistically update the list so if we switch views it's there
    setSavedTrips(prev => [newTrip, ...prev]);
    setActiveTripId(newTripId); // Set as active
    
    alert(`行程 "${title}" 已成功保存到收藏夹！`);
  };

  const handleDeleteTrip = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if(window.confirm("确定要删除这个行程吗？")) {
        const updated = deleteTrip(id);
        setSavedTrips(updated);
        if (activeTripId === id) {
          setActiveTripId(null);
        }
    }
  };

  const handleLoadSavedTrip = (trip: SavedTrip) => {
    onLoadTrip(trip);
    setPrompt(''); 
    setActiveTripId(trip.id); // Track that we are viewing this specific trip
    setViewMode('planner');
    setIsOpen(false); 
  };

  const handleSelectOptionWrapper = async (option: TripOption) => {
    setActiveTripId(null);
    await onSelectOption(option);
  }

  const handleRemoveDestinationWrapper = (id: string) => {
    setActiveTripId(null);
    onRemoveDestination(id);
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-20 bg-white p-2 rounded-full shadow-lg text-brand-700 hover:bg-brand-50 transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-10 w-full md:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        
        {/* Header */}
        <div className="p-6 bg-brand-600 text-white flex justify-between items-start shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Navigation className="h-6 w-6" />
              <h1 className="text-xl font-bold">环球探路者</h1>
            </div>
            <p className="text-brand-100 text-sm">AI 驱动的旅行规划助手</p>
          </div>
          <button 
            onClick={() => setViewMode(viewMode === 'planner' ? 'saved' : 'planner')}
            className="p-2 hover:bg-brand-500 rounded-lg transition-colors text-brand-50 flex flex-col items-center gap-1 group"
            title={viewMode === 'planner' ? "我的收藏" : "返回规划"}
          >
            {viewMode === 'planner' ? <FolderHeart size={20} className="group-hover:scale-110 transition-transform"/> : <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>}
            <span className="text-[10px] font-medium">{viewMode === 'planner' ? "收藏" : "返回"}</span>
          </button>
        </div>

        {/* --- SAVED TRIPS VIEW --- */}
        {viewMode === 'saved' ? (
           <div className="flex-1 overflow-y-auto p-6 bg-gray-50 animate-in slide-in-from-left-4 duration-300">
             <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
               <FolderHeart className="text-brand-500" size={20} />
               我的行程收藏
             </h2>
             
             {savedTrips.length === 0 ? (
               <div className="text-center text-gray-400 py-12 border-2 border-dashed border-gray-200 rounded-xl">
                 <FolderHeart size={48} className="mx-auto mb-3 opacity-20" />
                 <p>暂无收藏的行程。</p>
                 <p className="text-xs mt-1">在规划页面点击“保存”即可添加。</p>
               </div>
             ) : (
               <div className="space-y-3">
                 {savedTrips.map(trip => (
                   <div 
                     key={trip.id}
                     onClick={() => handleLoadSavedTrip(trip)}
                     className={`
                       p-4 rounded-xl shadow-sm border transition-all cursor-pointer group relative overflow-hidden
                       ${activeTripId === trip.id ? 'bg-brand-50 border-brand-300 ring-1 ring-brand-300' : 'bg-white border-gray-100 hover:shadow-md hover:border-brand-300'}
                     `}
                   >
                     <div className={`absolute left-0 top-0 bottom-0 w-1 transition-opacity ${activeTripId === trip.id ? 'bg-brand-500 opacity-100' : 'bg-brand-500 opacity-0 group-hover:opacity-100'}`} />
                     
                     <div className="flex justify-between items-start mb-2 pl-2">
                       <h3 className="font-bold text-gray-800 line-clamp-1 group-hover:text-brand-700 transition-colors">{trip.title}</h3>
                       <button 
                         onClick={(e) => handleDeleteTrip(e, trip.id)}
                         className="text-gray-300 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-full transition-colors z-10"
                         title="删除行程"
                       >
                         <Trash2 size={16} />
                       </button>
                     </div>
                     <div className="flex items-center gap-4 text-xs text-gray-500 pl-2">
                       <span className="flex items-center gap-1">
                         <Calendar size={12} />
                         {new Date(trip.createdAt).toLocaleDateString()}
                       </span>
                       <span className="flex items-center gap-1">
                         <MapPin size={12} />
                         {trip.destinations.length} 站点
                       </span>
                     </div>
                   </div>
                 ))}
               </div>
             )}
           </div>
        ) : (
        /* --- PLANNER VIEW --- */
        <>
          {/* AI Input Section */}
          <div className="p-6 border-b border-gray-100 bg-gray-50 shrink-0">
            <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              规划新行程
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="例如：去一个温暖的海边，或者历史悠久的欧洲城市..."
                className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none h-24 shadow-sm"
              />
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 disabled:bg-brand-300 text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    正在生成...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    生成行程
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
            
            {tripOptions ? (
               /* OPTION SELECTION VIEW */
               <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                    请选择一个方案
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">AI 根据您的描述为您推荐了两个方向：</p>
                  
                  {tripOptions.map((option) => (
                    <div 
                      key={option.id}
                      className="bg-white border-2 border-brand-100 hover:border-brand-500 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                      onClick={() => handleSelectOptionWrapper(option)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-brand-900">{option.title}</h4>
                        <div className="bg-brand-50 text-brand-600 p-1 rounded-full group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                      <div className="inline-block bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded font-medium">
                        ✨ {option.highlight}
                      </div>
                    </div>
                  ))}
               </div>
            ) : (
               /* ITINERARY LIST VIEW */
               <>
                  {tripSummary && (
                    <div className="mb-6 p-4 bg-white rounded-lg border border-brand-100 text-brand-900 text-sm leading-relaxed shadow-sm relative group">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-brand-700 font-bold flex items-center gap-2">
                          <Flag className="h-4 w-4"/> 您的行程计划
                        </h3>
                        {destinations.length > 0 && (
                          <button 
                            id="save-btn"
                            onClick={activeTripId ? undefined : handleSaveTrip}
                            disabled={!!activeTripId}
                            className={`
                              text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm
                              ${activeTripId 
                                ? 'bg-green-50 text-green-700 border border-green-200 cursor-default' 
                                : 'bg-white hover:bg-brand-50 text-brand-700 border border-brand-200 hover:border-brand-300'
                              }
                            `}
                            title={activeTripId ? "当前行程已保存" : "保存到收藏夹"}
                          >
                            {activeTripId ? <Check size={14} /> : <Save size={14} />}
                            {activeTripId ? "已保存" : "保存"}
                          </button>
                        )}
                      </div>
                      {tripSummary}
                    </div>
                  )}

                  <div className="flex justify-between items-baseline mb-4">
                     <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                       行程节点 ({destinations.length})
                     </h3>
                     <span className="text-xs text-gray-400">拖拽可排序</span>
                  </div>

                  <div className="space-y-4">
                    {destinations.length === 0 ? (
                      <div className="text-center text-gray-400 py-8">
                        <MapPin className="h-12 w-12 mx-auto mb-2 opacity-20" />
                        <p>暂无目的地。</p>
                        <p className="text-xs">请 AI 为您规划旅程！</p>
                      </div>
                    ) : (
                      destinations.map((dest, index) => (
                        <div 
                          key={dest.id} 
                          className="group relative bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
                          draggable
                          onDragStart={(e) => {
                            dragItem.current = index;
                            e.currentTarget.style.opacity = '0.5';
                          }}
                          onDragEnter={(e) => {
                            dragOverItem.current = index;
                          }}
                          onDragEnd={(e) => {
                            handleSort();
                            e.currentTarget.style.opacity = '1';
                          }}
                          onDragOver={(e) => e.preventDefault()}
                        >
                          {/* Connector Line */}
                          {index !== destinations.length - 1 && (
                            <div className="absolute left-[27px] top-[50px] bottom-[-20px] w-0.5 bg-gray-100 -z-10 group-hover:bg-brand-100 transition-colors" />
                          )}

                          <div className="flex items-start gap-3">
                            {/* Drag Handle */}
                            <div className="text-gray-300 hover:text-gray-500 flex items-center justify-center pt-1 -ml-1 cursor-grab active:cursor-grabbing self-center">
                              <GripVertical size={16} />
                            </div>

                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold mt-0.5 ring-4 ring-white">
                              {index + 1}
                            </div>
                            
                            <div className="flex-1 min-w-0 select-none">
                              <div className="flex justify-between items-start mb-1">
                                <div>
                                  <h4 className="font-bold text-gray-900 leading-tight">{dest.name}</h4>
                                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded mt-1 inline-block">
                                    {dest.days} 天
                                  </span>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation(); 
                                    handleRemoveDestinationWrapper(dest.id);
                                  }}
                                  className="text-gray-300 hover:text-red-500 transition-colors p-1 opacity-0 group-hover:opacity-100 focus:opacity-100"
                                  title="移除目的地"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                              
                              <p className="text-sm text-gray-600 leading-snug mb-3 line-clamp-2 hover:line-clamp-none transition-all">
                                {dest.description}
                              </p>

                              {/* Activities Tags */}
                              {dest.activities && dest.activities.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {dest.activities.map((act, i) => (
                                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                      • {act}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="mt-8 flex justify-center pb-8">
                    <button 
                      onClick={() => setShowAddModal(true)}
                      className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-800 font-medium transition-colors bg-brand-50 hover:bg-brand-100 px-4 py-2 rounded-full"
                    >
                      <Plus className="h-4 w-4" />
                      添加自定义站点
                    </button>
                  </div>
               </>
            )}
          </div>
        </>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400 bg-white shrink-0">
          由 Google Gemini & Leaflet 提供支持
        </div>
      </div>
      
      {/* Add Destination Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-800">添加新目的地</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleAddSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">地点名称</label>
                <input
                  type="text"
                  autoFocus
                  value={newDestName}
                  onChange={(e) => setNewDestName(e.target.value)}
                  placeholder="例如：巴黎, 伦敦, 长城"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">AI 将自动获取该地点的坐标、简介和推荐活动。</p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={!newDestName.trim() || isGenerating}
                  className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center gap-2 transition-colors"
                >
                  {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isGenerating ? '获取信息中...' : '确认添加'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-0 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
