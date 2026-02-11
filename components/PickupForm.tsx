
import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface PickupFormProps {
  lang: Language;
}

export const PickupForm: React.FC<PickupFormProps> = ({ lang }) => {
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !address) return;
    
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setAddress('');
      setDate('');
    }, 5000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-emerald-50 dark:border-emerald-900 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 rounded-lg">
          <Calendar size={24} />
        </div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.pickupTitle}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 flex items-center gap-2">
              <Calendar size={14} />
              {t.pickupDate}
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all dark:text-white text-sm"
            />
          </div>
          <div className="md:col-span-1">
             <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5 flex items-center gap-2">
              <MapPin size={14} />
              {t.address}
            </label>
            <textarea
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={t.addressPlaceholder}
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all dark:text-white text-sm resize-none"
            />
          </div>
        </div>

        <div className="mt-auto pt-4">
          {isSuccess ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 font-medium animate-bounce">
              <CheckCircle2 size={24} />
              <span>{t.successMessage}</span>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-emerald-900 hover:bg-emerald-800 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transform transition-all active:scale-95 disabled:opacity-50"
              disabled={!date || !address}
            >
              {t.confirmSale}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
