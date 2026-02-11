
import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  lang: Language;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ lang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm"
    >
      <Languages size={18} />
      <span>{lang === 'en' ? 'ไทย' : 'English'}</span>
    </button>
  );
};
