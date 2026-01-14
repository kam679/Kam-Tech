import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-10 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800/30">
        <div className="flex w-12 items-center justify-start">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center text-text-primary-light dark:text-text-primary-dark">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Profile</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 hover:opacity-80 transition-opacity">Edit</button>
        </div>
      </div>

      <div className="flex p-4 flex-col items-center pt-8">
        <div className="relative group cursor-pointer">
          <div className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-4 border-surface-light dark:border-surface-dark shadow-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCi4UYN_HbhhAVvST0fDeZDQIiK-8AXCPeGbUa9hKlw2A0ekmZeBXoAyoW9f9jbwS4-MI_99vmvVY_q7JBoOw9EZdremHqLdMmcLZee85s6pUrU0dHz527BswinmU4TRdWekBV6v0Bkw43vzmk6YHBJW8qCeBVgOPY5dUYSHnBZLxusy7hXX0A_7w52jLngmXhpCJCgw8d9J2VEnvSaZcQSjxM2kmdfvVx5KpZ5O_fUyQnF1t31DU2d5J9ahXS9Nrd07NqJQ8lIapZl")' }}></div>
          <div className="absolute bottom-1 right-1 bg-primary rounded-full p-1.5 flex items-center justify-center border-2 border-background-light dark:border-background-dark">
            <span className="material-symbols-outlined text-white text-[18px]">edit</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-text-primary-light dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Kamal Taylor</p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal text-center mt-1">Member since 2023</p>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Personal Information</h3>
        <div className="flex flex-col gap-4">
          {[
            { label: 'Full Name', value: 'Kamal Taylor', icon: 'person' },
            { label: 'Email', value: 'kamal.taylor@example.com', icon: 'mail' },
            { label: 'Phone Number', value: '+1 (555) 012-3456', icon: 'call' }
          ].map((field, i) => (
            <div key={i} className="flex flex-col gap-1">
              <label className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">{field.label}</label>
              <div className="relative">
                <input
                  className="w-full rounded-lg bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-primary-light dark:text-text-primary-dark h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-text-secondary-light/50 dark:placeholder:text-text-secondary-dark/50"
                  defaultValue={field.value}
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">{field.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-8">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Activity & Finance</h3>
        <div className="flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700">
          <Link to="/bookings" className="flex items-center justify-between p-4 active:bg-primary/5 transition-colors border-b border-gray-200 dark:border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
              </div>
              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">My Bookings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">2 Active</span>
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl">chevron_right</span>
            </div>
          </Link>
          <button className="flex items-center justify-between p-4 active:bg-primary/5 transition-colors border-b border-gray-200 dark:border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-xl">credit_card</span>
              </div>
              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">Payment Methods</span>
            </div>
            <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl">chevron_right</span>
          </button>
          <Link to="/chat" className="flex items-center justify-between p-4 active:bg-primary/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-xl">support_agent</span>
              </div>
              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">Customer Support Chat</span>
            </div>
            <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl">chevron_right</span>
          </Link>
        </div>
      </div>

      <div className="px-4 mt-8">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Settings</h3>
        <div className="flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700">
          {[
            { label: 'Notifications', icon: 'notifications' },
            { label: 'Security & Password', icon: 'lock' },
          ].map((item, i) => (
            <button key={i} className="flex items-center justify-between p-4 active:bg-primary/5 transition-colors border-b border-gray-200 dark:border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                </div>
                <span className="text-text-primary-light dark:text-text-primary-dark font-medium">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl">chevron_right</span>
            </button>
          ))}
          <button className="flex items-center justify-between p-4 active:bg-primary/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-xl">language</span>
              </div>
              <span className="text-text-primary-light dark:text-text-primary-dark font-medium">Language</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">English</span>
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl">chevron_right</span>
            </div>
          </button>
        </div>
      </div>

      {/* Admin Access */}
      <div className="px-4 mt-8">
        <Link
          to="/admin"
          className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 group hover:border-primary/50 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600">
              <span className="material-symbols-outlined text-white text-xl">admin_panel_settings</span>
            </div>
            <div>
              <span className="text-white font-semibold block">Admin Panel</span>
              <span className="text-slate-400 text-xs">Manage your marketplace</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
        </Link>
      </div>

      <div className="p-4 mt-6 mb-4">
        <button className="w-full bg-surface-light dark:bg-surface-dark border border-red-500/30 text-red-500 font-bold py-4 rounded-xl active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/10">
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>
        <p className="text-center text-text-secondary-light/60 dark:text-text-secondary-dark/60 text-xs mt-4">Version 2.4.0</p>
      </div>
    </div>
  );
};

export default ProfileScreen;