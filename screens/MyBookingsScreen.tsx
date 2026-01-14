import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyBookingsScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-surface-light dark:bg-background-dark p-4 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-primary-light dark:text-white transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight text-center">My Bookings</h2>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-primary-light dark:text-white transition-colors">
          <span className="material-symbols-outlined">filter_list</span>
        </button>
      </header>

      <div className="sticky top-[73px] z-10 bg-background-light dark:bg-background-dark px-4 pt-4 pb-2">
        <div className="flex p-1 bg-gray-200 dark:bg-surface-dark rounded-xl">
          <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-white transition-all">
            Upcoming
          </button>
          <button className="flex-1 py-2 text-sm font-medium rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-white transition-all">
            Past
          </button>
        </div>
      </div>

      <main className="flex flex-col gap-4 p-4">
        {[
          {
            title: 'Home Cleaning',
            provider: 'Sparkle Cleaners Ltd.',
            date: 'Mon, 24 Oct 2023',
            time: '10:00 AM - 12:00 PM',
            status: 'Confirmed',
            statusColor: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-100 dark:border-green-800',
            icon: 'cleaning_services',
            iconColor: 'bg-blue-50 dark:bg-blue-900/30 text-primary'
          },
          {
            title: 'AC Maintenance',
            provider: 'Cool Air Pros',
            date: 'Wed, 26 Oct 2023',
            time: '02:00 PM - 03:00 PM',
            status: 'Upcoming',
            statusColor: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-800',
            icon: 'hvac',
            iconColor: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
          },
          {
            title: 'Plumbing Repair',
            provider: 'Mario Bros Services',
            date: 'Fri, 28 Oct 2023',
            time: '09:00 AM - 10:30 AM',
            status: 'Pending',
            statusColor: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800',
            icon: 'plumbing',
            iconColor: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
          }
        ].map((booking, i) => (
          <div key={i} className="w-full rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${booking.iconColor}`}>
                    <span className="material-symbols-outlined">{booking.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">{booking.title}</h3>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">{booking.provider}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${booking.statusColor}`}>
                  {booking.status}
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-2 bg-background-light dark:bg-black/20 rounded-lg p-3">
                <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">{booking.date}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">{booking.time}</span>
                </div>
              </div>
            </div>
            <div className="flex divide-x divide-gray-100 dark:divide-gray-800">
              <button className="flex-1 py-3 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">info</span> Details
              </button>
              <button className="flex-1 py-3 text-sm font-medium text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">edit_calendar</span> Reschedule
              </button>
              <button className="flex-1 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">cancel</span> Cancel
              </button>
            </div>
          </div>
        ))}
        <div className="text-center py-4">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Showing upcoming bookings only</p>
        </div>
      </main>
    </div>
  );
};

export default MyBookingsScreen;