import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-surface-light dark:bg-background-dark p-4 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate('/marketplace')} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-primary-light dark:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Confirmation</h2>
      </header>

      <main className="flex flex-col gap-6 p-4 items-center pt-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-green-500 shadow-lg text-white">
            <span className="material-symbols-outlined text-[48px] font-bold">check</span>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">Booking Confirmed!</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">Thank you for your booking.</p>
        </div>

        <div className="w-full rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center">
          <span className="text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider mb-2">Booking ID</span>
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-black/20 px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700 border-dashed">
            <span className="text-xl font-mono font-bold text-primary">#KAM-88293</span>
            <button className="ml-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
            </button>
          </div>
        </div>

        <div className="w-full rounded-xl bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="bg-primary/5 p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-primary shadow-sm">
              <span className="material-symbols-outlined">design_services</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">AC Repair Service</h3>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Provided by Kam Tech Solutions</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span className="text-sm">Date</span>
              </div>
              <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">Oct 24, 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="text-sm">Time</span>
              </div>
              <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">10:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                <span className="text-sm">Location</span>
              </div>
              <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark text-right max-w-[180px]">123 Tech Avenue</span>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-800 my-1"></div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-text-primary-light dark:text-text-primary-dark">Total Amount Paid</span>
              <span className="text-lg font-bold text-primary">$55.13</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-lg justify-center mt-1">
              <span className="material-symbols-outlined filled text-[16px]">check_circle</span>
              <span>Payment Successful via Visa •••• 4242</span>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-3 mt-2">
          <button className="flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-4 shadow-sm transition-all hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-gray-800">
            <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-2 text-primary">
              <span className="material-symbols-outlined">calendar_add_on</span>
            </div>
            <span className="text-xs font-semibold">Add to Calendar</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark p-4 shadow-sm transition-all hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-gray-800">
            <div className="rounded-full bg-purple-50 dark:bg-purple-900/20 p-2 text-purple-600 dark:text-purple-400">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <span className="text-xs font-semibold">View Receipt</span>
          </button>
        </div>
      </main>

      <div className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-20 flex flex-col gap-3">
        <button onClick={() => navigate('/bookings')} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors">
          <span>View My Bookings</span>
        </button>
        <button onClick={() => navigate('/marketplace')} className="w-full bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <span>Go to Home</span>
        </button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;