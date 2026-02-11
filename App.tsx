
import React, { useState, useEffect } from 'react';
import { LogOut, Leaf, Mail, Lock, ArrowRight, UserPlus } from 'lucide-react';
import { Language, Theme, User } from './types';
import { TRANSLATIONS } from './constants';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { MapPlaceholder } from './components/MapPlaceholder';
import { Calculator } from './components/Calculator';
import { PickupForm } from './components/PickupForm';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [lang, setLang] = useState<Language>('en');
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<'login' | 'signup'>('login');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email, isLoggedIn: true });
    }
  };

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'th' : 'en'));

  const logout = () => {
    setUser(null);
    setEmail('');
    setPassword('');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 transition-colors duration-500 flex flex-col">
        {/* Header Controls */}
        <div className="absolute top-6 right-6 flex items-center gap-4">
          <LanguageToggle lang={lang} onToggle={toggleLang} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="flex-grow flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Logo Area */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-900 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-emerald-900/20">
                <Leaf className="text-amber-500" size={32} />
              </div>
              <h1 className="text-4xl font-extrabold text-emerald-900 dark:text-emerald-50 mb-2">
                {t.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                {t.tagline}
              </p>
            </div>

            {/* Login/Signup Card */}
            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-emerald-50 dark:border-emerald-900/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {view === 'login' ? t.login : t.creatingAccount}
              </h2>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 ml-1">{t.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">{t.password}</label>
                    {view === 'login' && (
                      <button type="button" className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                        {t.forgotPassword}
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-emerald-900/30 group"
                >
                  <span>{view === 'login' ? t.login : t.signUp}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {view === 'login' ? t.donthaveAccount : t.backToLogin}
                </p>
                <button
                  onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                  className="mt-2 text-emerald-700 dark:text-emerald-400 font-bold hover:underline flex items-center justify-center gap-2 mx-auto"
                >
                  {view === 'login' ? (
                    <>
                      <UserPlus size={16} />
                      {t.signUp}
                    </>
                  ) : (
                    t.login
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-bold">
            © 2024 {t.title} Sustainable Resources Inc.
          </p>
        </footer>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 transition-colors duration-500 pb-12">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-50 dark:border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <Leaf className="text-amber-500" size={20} />
            </div>
            <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50 hidden sm:inline">
              {t.title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <LanguageToggle lang={lang} onToggle={toggleLang} />
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-800 mx-1 hidden sm:block"></div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium text-sm transition-all active:scale-95"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">{t.logout}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {t.dashboard}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Welcome back, <span className="text-emerald-600 dark:text-emerald-400">{user.email.split('@')[0]}</span>
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-sm border border-emerald-50 dark:border-emerald-900/30 whitespace-nowrap">
               <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Total Impact</p>
               <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">124 L Saved</p>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-sm border border-emerald-50 dark:border-emerald-900/30 whitespace-nowrap">
               <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Total Earnings</p>
               <p className="text-xl font-bold text-amber-500">1,860 ฿</p>
            </div>
          </div>
        </div>

        {/* Map Section - Top Half */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 px-1">{t.mapTitle}</h3>
          </div>
          <MapPlaceholder />
        </section>

        {/* Bottom Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bottom Left: Calculator */}
          <section className="h-full">
            <Calculator lang={lang} />
          </section>

          {/* Bottom Right: Pickup Form */}
          <section className="h-full">
            <PickupForm lang={lang} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
