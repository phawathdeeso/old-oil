
import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { MOCK_COLLECTION_POINTS } from '../constants';

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
      {/* Visual Map Background - Simplified Grid representation */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#065f46 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #065f46 1px, transparent 1px), linear-gradient(#065f46 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      {/* Mock Map Points */}
      {MOCK_COLLECTION_POINTS.map((point) => (
        <div
          key={point.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{
            top: `${30 + (point.lat % 1) * 300}%`,
            left: `${30 + (point.lng % 1) * 300}%`,
          }}
        >
          <div className="relative flex flex-col items-center">
            <div className="p-2 bg-white dark:bg-emerald-900 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500">
              <MapPin size={24} />
            </div>
            <div className="absolute top-full mt-2 hidden group-hover:block z-20 w-max bg-white dark:bg-gray-800 p-2 rounded-lg shadow-xl border border-emerald-100 dark:border-emerald-900">
              <p className="text-sm font-semibold text-gray-800 dark:text-emerald-50">{point.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{point.type} Point</p>
            </div>
          </div>
        </div>
      ))}

      {/* UI Elements on Map */}
      <div className="absolute top-4 left-4 flex gap-2">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur p-2 px-4 rounded-full shadow-lg text-xs font-medium text-emerald-800 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
           Active Collection Points in Bangkok
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
         <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">+</button>
         <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">-</button>
      </div>
      
      <div className="absolute bottom-4 left-4">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur p-3 rounded-xl shadow-lg border border-emerald-50 dark:border-emerald-900 flex items-start gap-3 max-w-[200px]">
          <Info size={16} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="text-[10px] text-gray-600 dark:text-gray-300 leading-tight">
            Click on pins to see collection details or use the dashboard to request a home pickup.
          </p>
        </div>
      </div>
    </div>
  );
};
