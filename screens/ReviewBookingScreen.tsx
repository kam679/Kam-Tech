import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewBookingScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-surface-light dark:bg-background-dark p-4 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-primary-light dark:text-white transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Review Booking</h2>
      </header>

      <main className="flex flex-col gap-4 p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col justify-center gap-2 flex-[2_2_0px]">
            <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Premium Service</span>
            <div>
              <p className="text-lg font-bold leading-tight mb-1">AC Repair Service</p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Kam Tech Solutions</p>
            </div>
          </div>
          <div className="w-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0 aspect-square" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEjErynN5LLWKXlCdKR-elRX9T3GRZO4fOJTqTuzSwq4z38j1COgfd23wjga5VVegH2n4Zybm09_V3h0wTx9OLfxlRo163W8gFaVE-lGs00W2ftYn32JGzLG87MN5sYjtVq9Ub-QIW8bvxcpiWNhEwqBMURyVszo0QmnqalEtZ0daZqERO0FXQSgRunBt6VpfpBTDJCGQyKSwoiBwf_NlRvQqsAio4wSesCLY2wjKPxbdO2NmgJuzTzvvwaIEYxDWipgFlLZVzA1Ju")' }}></div>
        </div>

        <div>
          <h3 className="text-lg font-bold leading-tight tracking-tight py-2">Booking Details</h3>
          <div className="flex flex-col gap-3">
            {[
              { icon: 'calendar_today', label: 'Date & Time', value: 'Oct 24, 2023 at 10:00 AM' },
              { icon: 'location_on', label: 'Location', value: '123 Tech Avenue, Apt 4B' },
              { icon: 'edit_note', label: 'Notes', value: '"Please call upon arrival."', italic: true }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl bg-surface-light dark:bg-surface-dark px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-800 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium leading-normal line-clamp-1">{item.label}</p>
                    <p className={`text-text-secondary-light dark:text-text-secondary-dark text-xs font-normal leading-normal line-clamp-2 ${item.italic ? 'italic' : ''}`}>{item.value}</p>
                  </div>
                </div>
                <button className="text-primary text-sm font-semibold hover:underline px-2">Edit</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-lg font-bold leading-tight tracking-tight py-2">Payment Summary</h3>
          <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
            {[
              { label: 'Service Fee', value: '$50.00' },
              { label: 'Booking Fee', value: '$2.50' },
              { label: 'Tax (5%)', value: '$2.63' }
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-text-secondary-light dark:text-text-secondary-dark">{row.label}</span>
                <span className="font-medium">{row.value}</span>
              </div>
            ))}
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-1"></div>
            <div className="flex justify-between items-center">
              <span className="text-base font-bold">Total Price</span>
              <span className="text-xl font-bold text-primary">$55.13</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
              <span className="material-symbols-outlined text-[16px] filled">verified_user</span>
              <span>Secure payment powered by Kam Tech</span>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-20">
        <button onClick={() => navigate('/booking/payment')} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors">
          <span>Confirm Booking</span>
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewBookingScreen;