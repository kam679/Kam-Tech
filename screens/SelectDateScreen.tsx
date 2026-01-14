import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectDateScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl relative">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Select Date & Time</h2>
        <div className="flex size-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-transparent text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 scroll-smooth no-scrollbar">
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
            <span>Step 2 of 3</span>
            <span>66%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-primary transition-all duration-300"></div>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center justify-between px-4 mb-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">October 2023</h3>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>

          <div className="flex overflow-x-auto px-4 pb-6 gap-3 no-scrollbar snap-x snap-mandatory">
            {[
              { day: 'Mon', date: '09', disabled: true },
              { day: 'Tue', date: '10', selected: true },
              { day: 'Wed', date: '11' },
              { day: 'Thu', date: '12' },
              { day: 'Fri', date: '13' },
              { day: 'Sat', date: '14', weekend: true },
              { day: 'Sun', date: '15', weekend: true },
            ].map((item, i) => (
              <div key={i} className={`snap-start flex min-w-[72px] flex-col items-center justify-center gap-1 rounded-2xl p-3 border ${
                item.selected 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/25 ring-2 ring-primary ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark' 
                  : item.disabled 
                    ? 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-surface-dark/50 opacity-50' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark shadow-sm'
              }`}>
                <span className={`text-xs font-medium ${item.selected ? 'text-white/90' : item.weekend ? 'text-red-400' : 'text-gray-500 dark:text-gray-400'}`}>{item.day}</span>
                <span className={`text-xl font-bold ${item.selected ? 'text-white' : item.disabled ? 'text-gray-400' : 'text-slate-900 dark:text-white'}`}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 dark:bg-gray-800 mb-6"></div>

        <div className="px-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Available Slots</h3>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">wb_twilight</span>
              <span>Morning</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '11:30 AM'].map((time, i) => (
                <button key={time} disabled={time === '08:00 AM'} className={`flex items-center justify-center rounded-lg border py-3 text-sm font-semibold shadow-sm transition-colors relative ${
                  time === '10:00 AM' 
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                    : time === '08:00 AM'
                      ? 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-surface-dark/30 text-gray-400 line-through cursor-not-allowed'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white hover:border-primary/50'
                }`}>
                  {time}
                  {time === '10:00 AM' && (
                    <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-primary ring-1 ring-gray-100">
                      <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
              <span>Afternoon</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'].map((time) => (
                <button key={time} disabled={time === '04:00 PM'} className={`flex items-center justify-center rounded-lg border py-3 text-sm font-semibold shadow-sm transition-colors ${
                  time === '04:00 PM'
                    ? 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-surface-dark/30 text-gray-400 line-through cursor-not-allowed'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white hover:border-primary/50'
                }`}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pb-8">
          <div className="rounded-lg bg-blue-50 dark:bg-primary/10 p-4 border border-blue-100 dark:border-primary/20">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary shrink-0">info</span>
              <p className="text-sm text-slate-700 dark:text-gray-300">
                The service usually takes <strong>1.5 hours</strong>. Please ensure someone is home during the selected time slot.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-4 pb-8 safe-area-pb backdrop-blur-md bg-opacity-95">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Selected Schedule:</span>
            <span className="font-bold text-slate-900 dark:text-white">Tue, Oct 10 at 10:00 AM</span>
          </div>
          <button onClick={() => navigate('/booking/review')} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform active:scale-[0.98]">
            <span>Continue to Payment</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectDateScreen;