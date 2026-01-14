import React from 'react';
import { useNavigate } from 'react-router-dom';

const PerformanceScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased overflow-x-hidden transition-colors duration-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col mx-auto max-w-md bg-background-light dark:bg-background-dark shadow-xl overflow-hidden">
        <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-opacity hover:opacity-70">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Performance</h2>
        </div>

        <div className="@container">
          <div className="p-4">
            <div className="relative flex min-h-[320px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat items-center justify-end p-6 pb-10 shadow-lg" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(16, 28, 34, 0) 0%, rgba(16, 28, 34, 0.8) 60%, rgba(16, 28, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzyN15qLimn8_So8xvNhfPQd3eyCEuFAMvpIZ68UnX2ffKEnnwbCarekpnJk0_jtVvA3sl9QlehINVzahUCVaSGFreEuGcFDlqTLrP3KVEX341MGQPudYHV5RczTDL05UJDgDyGRnJ17AlcsusiQsrSdIsRiIBsAG58XYf1duGCl2NHEOSZeZoGLbq9YfSuSEz5CJcDHEB6vqWsi9A--ga75HUCbBoB7ZIRaDVTwu9L6t987NVilGmuC9SXKzqOMLMd4tUlHPgxaL4")' }}>
              <div className="flex flex-col gap-3 text-center z-10">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                </div>
                <h1 className="text-white text-3xl font-black leading-tight tracking-tight drop-shadow-sm">Built for Speed.<br />Engineered for Uptime.</h1>
                <p className="text-slate-200 text-sm font-medium leading-normal max-w-[280px] mx-auto opacity-90">Kam Tech is designed to ensure a fast, stable, and seamless experience for every user.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2">
          <div className="flex items-center justify-between rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">All Systems Operational</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">chevron_right</span>
          </div>
        </div>

        <div className="px-4 pt-6 pb-2">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Core Technologies</h3>
        </div>

        <div className="flex flex-col gap-4 p-4 pt-0">
          {[
            { icon: 'public', title: 'Global Speed (CDN)', desc: 'We cache content globally to ensure lightning-fast load times, no matter where you are located.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr-EEuW8KyRgdPO3xOE3A9BVj-gQg6WDgA0qN3GKLAMHvDsK9KgBkevDcIbzzeSe9v2yJfaSUng835p8WG1mBrlj84ZWBZq-3t7IRnq0nbcMZsz-oE2-myQ9eik4XdpLCxK4OguweTeP6SneCqsiPng5B-EL_M47uTKgUntNUmF_jxlefaeQ43mS9Qth4IEJAkgeYpzh-oKYtzJ6_X0mU2rfqsUeQRAiwYFu1ByVU-GX_K-sq28TXaYPAcdVLnYAjgj7c8NTvPtvOY' },
            { icon: 'database', title: 'Data Efficiency', desc: 'Intelligent database indexing means your search results and transaction history appear instantly.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvWCFopIjAaPZ6Qf_J6MPMHINTHFmp0PfUx6M8g-Oh972_xWbZPrXrqq_N7CRDIeNjpfksGS4Pj7ryxPn4uZsxUVN6HyLdlKZa34xgH01I8EOcW0FSoIO4mmfHnmh9xgjxMZnz8OPzbQD2-FuZ7bRUHqOvJT5sJ5cYlS9e_OQRZpWBnRTVEhK0v1bESn2j2kQL4jZlr0Gxn_MtrxSp4FhtgYmdvNlp0ngKgC8e-8AK7eO-m4Jr9P3FU8lwJ4p5g9KL5IH1KpZrLrIB' },
            { icon: 'sync_lock', title: 'Always Responsive', desc: 'Heavy lifting happens in the background, keeping the app smooth while you continue working.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy6ySd4Z7wBvpxEgrcqKv73zaIuMH0oHhUcK2qRY88gZRib7hR-f8_pWZr0IDfnM1rwN1Az80vhralbhJmrxZ9lCvcwNIVCDx1OElRcAkVS_Mh6wICMGu7-2OCxUBkCabfFCy-TpzP3ERiEfyOOqNSevoXPBjLeiKzRgPkTJRj1Ytq1PaTeRiPlEFO4VHwa_ScrYd1deHFVgI9lmVBOk3aVWtI5vnhFpXtJTJsREqLa6KC7vHzrFg7m-qC4Z7nTbECf6fCuptUS53B' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-stretch gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800/50">
              <div className="flex flex-col gap-2 flex-[3_3_0px]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                  <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">{item.title}</p>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-full sm:w-24 h-32 sm:h-auto shrink-0 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative" style={{ backgroundImage: `url("${item.img}")` }}>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 pt-2 pb-8">
          <button className="w-full flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 transition-colors shadow-lg shadow-primary/20">
            <span>View Detailed Metrics</span>
            <span className="material-symbols-outlined text-lg">bar_chart</span>
          </button>
          <p className="text-center text-xs text-slate-400 mt-4">Last updated: Just now</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceScreen;