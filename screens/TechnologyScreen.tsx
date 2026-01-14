import React from 'react';
import { useNavigate } from 'react-router-dom';

const TechnologyScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display antialiased selection:bg-primary selection:text-white">
      <div className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-transparent dark:border-white/5 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Our Technology</h2>
      </div>

      <div className="flex-1 overflow-y-auto max-w-md mx-auto w-full">
        <div className="p-4 pt-2">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-surface-light dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-white/5">
            <div className="w-full bg-center bg-no-repeat h-48 bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAY4mPmIv33eRxgezKTr2-bvQnmKxv7jMgBS4KIdSPO5_Xhc1J3kB7hOJTX6js4eh0xA1Xs3AoB3ylk_NMZk_HA7TnIoKqG23xVE8gNzy97dfCOMddRUKLPk55FljpGTIK5NY56_Er-aF2rnWTHai0YcGDfzOrm93-h5n39LUqJE_sj0kmqE-Hhu9LgBrAMnHoOaA1t_CW1cbhQXib84LqJL0s2MDOc_ZWK3tWWe73SU5CRV1Dp1oX9kaFZp3zQ56AbGzLkkyB_deyc")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-light/80 dark:from-surface-dark/90 to-transparent"></div>
            </div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-1 -mt-12 relative z-10 px-4 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-7 items-center justify-center gap-x-2 rounded-full bg-green-500/10 border border-green-500/20 pl-2.5 pr-3 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-green-700 dark:text-green-400 text-xs font-semibold leading-normal">System Operational</p>
                </div>
              </div>
              <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">Built for Speed & Safety</p>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed mt-2">
                We leverage advanced architectural patterns to provide a reliable platform for your daily needs.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 ml-1">Core Architecture</h3>
        </div>

        <div className="flex flex-col gap-3 px-4 pb-8">
          {[
            { icon: 'view_in_ar', title: 'Modular Design', desc: 'Just like building blocks, our system is made of independent parts.' },
            { icon: 'cloud_sync', title: 'Infinite Scalability', desc: 'Whether it\'s 10 users or 10 million, our cloud engine grows instantly.' },
            { icon: 'verified_user', title: 'Bank-Grade Protection', desc: 'Your data is encrypted from end-to-end using industry-leading standards.' }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 items-start">
              <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{feature.icon}</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">{feature.title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 pt-0 mb-6">
          <button className="w-full group bg-surface-light dark:bg-surface-dark border border-primary/30 hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98] transition-all duration-200 py-3 px-4 rounded-xl flex items-center justify-center gap-2">
            <span className="text-primary font-bold text-sm">Read Technical Whitepaper</span>
            <span className="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-6">
            Powered by Kam Tech Engineering v2.4.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyScreen;