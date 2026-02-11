
import React, { useState } from 'react';
import { Droplets, DollarSign } from 'lucide-react';
import { OIL_RATE_THB, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface CalculatorProps {
  lang: Language;
}

export const Calculator: React.FC<CalculatorProps> = ({ lang }) => {
  const [liters, setLiters] = useState<number | ''>('');
  const t = TRANSLATIONS[lang];

  const total = liters === '' ? 0 : liters * OIL_RATE_THB;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-emerald-50 dark:border-emerald-900 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded-lg">
          <Droplets size={24} />
        </div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.calcTitle}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
            {t.amountLiters}
          </label>
          <div className="relative">
            <input
              type="number"
              value={liters}
              onChange={(e) => setLiters(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="0"
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white text-lg font-medium"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">L</span>
          </div>
        </div>

        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900">
          <p className="text-sm text-emerald-800 dark:text-emerald-400 mb-1 font-medium">{t.estimatedEarning}</p>
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <DollarSign size={20} />
            <span className="text-3xl font-bold">{total.toLocaleString()}</span>
            <span className="text-xl font-semibold">฿</span>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center uppercase tracking-widest font-bold">
          {t.ratePerLiter}
        </p>
      </div>
    </div>
  );
};
