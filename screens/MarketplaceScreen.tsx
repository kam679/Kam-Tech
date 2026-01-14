import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SERVICES = [
  {
    id: '1',
    title: "Professional PC Repair",
    company: "Kam Tech Solutions",
    price: "45.00",
    rating: "4.9 (128)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzyN15qLimn8_So8xvNhfPQd3eyCEuFAMvpIZ68UnX2ffKEnnwbCarekpnJk0_jtVvA3sl9QlehINVzahUCVaSGFreEuGcFDlqTLrP3KVEX341MGQPudYHV5RczTDL05UJDgDyGRnJ17AlcsusiQsrSdIsRiIBsAG58XYf1duGCl2NHEOSZeZoGLbq9YfSuSEz5CJcDHEB6vqWsi9A--ga75HUCbBoB7ZIRaDVTwu9L6t987NVilGmuC9SXKzqOMLMd4tUlHPgxaL4",
    tag: "Tech Support",
    tagColor: "bg-primary/90",
    distance: "2.5 km",
    avail: "Available Today",
    action: "Book Now"
  },
  {
    id: '2',
    title: "Full House Cleaning",
    company: "Sparkle Cleaners",
    price: "80.00",
    rating: "4.7 (85)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvWCFopIjAaPZ6Qf_J6MPMHINTHFmp0PfUx6M8g-Oh972_xWbZPrXrqq_N7CRDIeNjpfksGS4Pj7ryxPn4uZsxUVN6HyLdlKZa34xgH01I8EOcW0FSoIO4mmfHnmh9xgjxMZnz8OPzbQD2-FuZ7bRUHqOvJT5sJ5cYlS9e_OQRZpWBnRTVEhK0v1bESn2j2kQL4jZlr0Gxn_MtrxSp4FhtgYmdvNlp0ngKgC8e-8AK7eO-m4Jr9P3FU8lwJ4p5g9KL5IH1KpZrLrIB",
    tag: "Home Services",
    tagColor: "bg-purple-600/90",
    distance: "5.0 km",
    avail: "Next Slot: Tomorrow",
    action: "View Details"
  },
  {
    id: '3',
    title: "Express Oil Change",
    company: "Turbo Auto Care",
    price: "35.00",
    rating: "5.0 (42)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr-EEuW8KyRgdPO3xOE3A9BVj-gQg6WDgA0qN3GKLAMHvDsK9KgBkevDcIbzzeSe9v2yJfaSUng835p8WG1mBrlj84ZWBZq-3t7IRnq0nbcMZsz-oE2-myQ9eik4XdpLCxK4OguweTeP6SneCqsiPng5B-EL_M47uTKgUntNUmF_jxlefaeQ43mS9Qth4IEJAkgeYpzh-oKYtzJ6_X0mU2rfqsUeQRAiwYFu1ByVU-GX_K-sq28TXaYPAcdVLnYAjgj7c8NTvPtvOY",
    tag: "Automotive",
    tagColor: "bg-orange-500/90",
    distance: "1.2 km",
    avail: "Open Now",
    action: "Book Now"
  },
  {
    id: '4',
    title: "Luxury Spa & Massage",
    company: "Serenity Wellness",
    price: "90.00",
    rating: "4.8 (210)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy6ySd4Z7wBvpxEgrcqKv73zaIuMH0oHhUcK2qRY88gZRib7hR-f8_pWZr0IDfnM1rwN1Az80vhralbhJmrxZ9lCvcwNIVCDx1OElRcAkVS_Mh6wICMGu7-2OCxUBkCabfFCy-TpzP3ERiEfyOOqNSevoXPBjLeiKzRgPkTJRj1Ytq1PaTeRiPlEFO4VHwa_ScrYd1deHFVgI9lmVBOk3aVWtI5vnhFpXtJTJsREqLa6KC7vHzrFg7m-qC4Z7nTbECf6fCuptUS53B",
    tag: "Beauty",
    tagColor: "bg-pink-500/90",
    distance: "0.8 km",
    avail: "Next Slot: 2:00 PM",
    action: "View Details"
  }
];

const MarketplaceScreen: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col mx-auto max-w-md bg-background-light dark:bg-background-dark shadow-xl overflow-hidden">
      <div className="sticky top-0 z-50 flex flex-col bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer transition-opacity hover:opacity-70">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Marketplace</h2>
          <div className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-end cursor-pointer transition-opacity hover:opacity-70">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input 
              className="block w-full pl-10 pr-3 py-3 border-none rounded-xl leading-5 bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 sm:text-sm" 
              placeholder="Find services, businesses..." 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div 
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setSearchQuery('')}
              >
                <span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">close</span>
              </div>
            )}
            {!searchQuery && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">tune</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar snap-x">
          <button className="snap-start shrink-0 flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            All
          </button>
          {[
            { icon: 'brush', label: 'Beauty' },
            { icon: 'plumbing', label: 'Home Services' },
            { icon: 'directions_car', label: 'Automotive' },
            { icon: 'fitness_center', label: 'Wellness' }
          ].map((cat) => (
            <button key={cat.label} className="snap-start shrink-0 flex items-center gap-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold">
            {searchQuery ? 'Search Results' : 'Popular Near You'}
          </h3>
          {!searchQuery && <button className="text-primary text-sm font-semibold hover:underline">See All</button>}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-24">
        {filteredServices.length > 0 ? (
          filteredServices.map((item) => (
            <Link to={item.id === '1' ? '/service/ac-repair' : '#'} key={item.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 transition-all hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${item.image}")` }}></div>
                <div className="absolute top-3 right-3 rounded-full bg-white/90 dark:bg-black/60 px-2 py-1 text-xs font-bold backdrop-blur-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 text-[14px] filled">star</span>
                  {item.rating}
                </div>
                <div className={`absolute top-3 left-3 rounded-full text-white px-2 py-1 text-xs font-bold backdrop-blur-sm ${item.tagColor}`}>
                  {item.tag}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium mb-2">{item.company}</p>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>{item.avail}</span>
                  <span className="mx-1">•</span>
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>{item.distance}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/50 pt-3 mt-1">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Starting at</span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">${item.price}</span>
                  </div>
                  <button className={`rounded-lg text-sm font-semibold px-4 py-2 transition-colors ${item.action === 'Book Now' ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white'}`}>
                    {item.action}
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-500">search_off</span>
            </div>
            <p className="text-slate-900 dark:text-white font-medium text-lg mb-1">No matches found</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px]">
              We couldn't find any services matching "{searchQuery}". Try different keywords.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-primary font-bold text-sm hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* AI Support Chat FAB */}
      <div className="fixed bottom-36 right-6 z-30">
        <button 
          onClick={() => navigate('/chat')} 
          className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-primary to-blue-400 text-white shadow-xl hover:scale-105 transition-transform shadow-primary/40 relative group"
        >
          <span className="material-symbols-outlined text-2xl group-hover:animate-pulse">smart_toy</span>
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-background-dark"></span>
          </span>
        </button>
      </div>
      
      {/* Mobile Floating Map Button */}
      <div className="fixed bottom-20 right-6 z-30 lg:hidden">
        <button className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-2xl">map</span>
        </button>
      </div>
    </div>
  );
};

export default MarketplaceScreen;