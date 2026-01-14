import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto border-x border-slate-200 dark:border-slate-800">
        <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Security & Privacy</h2>
        </div>

        <div className="@container">
          <div className="flex flex-col gap-6 px-4 py-6">
            <div className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover rounded-xl overflow-hidden shadow-lg relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHM6nzl8VOR-ylT4avRQSfydrkqmQALaAVulsj7b2XzeEXJ0k2k4FdVjqn9t7CQd_JFGzAvwWqnh-0fYmj-hF6xFOzss-ISLuGNEspdoIJKwsI5QAmRSFn-wedLuNqjGZr3U5o2ZVSPNWquCTVhXYx3U52Wu-zumggg8zibGbXzkw8qAziXnIMvXWb7s9zVBjA6Yyc9JSWcqhupdkNJNGgItLntGc_DM0wlR5afVzt2HfHsOgSeQAd78gT0fp2k9xAp9csdkLkLvrN")' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="material-symbols-outlined text-white text-4xl mb-2">verified_user</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Your trust is our priority</h1>
              <h2 className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">At Kam Tech, we are committed to protecting your data and privacy with industry-leading security standards.</h2>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2 pt-2">
          <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight text-left">Security Measures</h2>
        </div>

        <div className="flex flex-col gap-10 px-4 py-4 @container">
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: 'lock', title: 'Data Encryption', desc: 'We use TLS 1.2+ for data in transit and AES-256 for data at rest.' },
              { icon: 'credit_card', title: 'Secure Payments', desc: 'Payments are processed via PCI-DSS compliant partners; we never store card details.' },
              { icon: 'vpn_key', title: 'Secure API Access', desc: 'Strict authentication protocols ensure only authorized requests interact with your data.' },
              { icon: 'visibility', title: 'Activity Monitoring', desc: 'Continuous logging and 24/7 monitoring help us detect and prevent suspicious activity.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-row items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1b2327] p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">{item.title}</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pb-2 pt-4">
          <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight text-left">Resources</h2>
        </div>

        <div className="px-4 pb-12">
          <div className="flex flex-col gap-3">
            {['Read Privacy Policy', 'Contact Security Team'].map((text, i) => (
              <button key={i} className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-100 dark:bg-[#1b2327] hover:bg-slate-200 dark:hover:bg-[#252f35] transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">{i === 0 ? 'description' : 'security'}</span>
                  <span className="text-slate-900 dark:text-white font-medium">{text}</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-sm">arrow_forward_ios</span>
              </button>
            ))}
          </div>
          <div className="mt-8 mb-4 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-600">Kam Tech v4.2.0 • Build 20231024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityScreen;