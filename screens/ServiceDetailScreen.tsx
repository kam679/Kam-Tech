import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ServiceDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowTitle(scrollRef.current.scrollTop > 150);
      }
    };
    const div = scrollRef.current;
    if (div) div.addEventListener('scroll', handleScroll);
    return () => div?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl relative">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className={`flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white transition-opacity duration-300 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
          Service Details
        </h2>
        <div className="flex size-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-transparent text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto pb-24 scroll-smooth no-scrollbar">
        <div className="relative w-full">
          <div className="flex snap-x snap-mandatory overflow-x-auto pb-4 no-scrollbar">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBUVs2WjOL4ES7GUrqy72syc9SIgT-XoN66Dir00dKrvx_-8jCMl5hoPmHNoRoUTFtvfrEorYU8TVDj57X3neeGmfC3ldrigymcxThSSQQO3sMDBOJBw3itL7p7tG8NLHqlpBqgx5jl8hDzmqus4a2OJSFbOGFmZiRGdJDEg8hCuj0UXB6MTESSMd5lh6DEKGWiN2fK-I5xjPQQ7UX9WlYvtm_XsVFmnZFttA0PgBUaMzvan21T3EAtbmnhrwHHk1eVdKdrO7oIyvqo",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFvlrqpQIy0i3SIpr_WY9jmzrbZCqn80xZyys4L8wrBEJOaLtcAmBQrGuZHJunP8lINEsz48C_d47Iv-v9OTVlwn0RfPt4K4RUM-g3HwwXJbie0iSfeZTcUcgj5hQxpZrwxvoWwFPfb2qHOlAFXxCkR0uHfj6mTS8K_4tUB0WFZ9-4gd5n3EaEwjDmXQ-1VqOCOEHiO6Cq5Gab6A-9LZVTU7DSnlDZKfyIB1iFCrd514ufozolkHEM6JECenaZNsQ2uC13JeFJxF7",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD0aDCUC0dfZHHSC_IuzGFsnqiYPb3uXC49-9iZtiF51pqGG6ZAclNA9aijoBo7CntWO6zUrcLx1JorCArcnsTeKcC4UXZaCU6emS4mDQsCWJAgfBx6QPp1YHkvz_vOgvutC9szoUYcAa_odszffXcxxbKXGE2nzZJm11cfEaLEAnoCfFcIyjLPB3JYrb5c3bEMYlwKq3G6wgihMRKWFn-VSuHlxit-ITNIXMv0XfJnJ3HiSDmEqwrHl7FImjZwD0OnIHLPpW78bfIM"
            ].map((img, i) => (
              <div key={i} className="flex shrink-0 snap-center w-full px-4 pt-2">
                <div className="w-full aspect-video rounded-xl bg-gray-200 dark:bg-surface-dark bg-cover bg-center shadow-lg relative overflow-hidden group" style={{ backgroundImage: `url('${img}')` }}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 pb-2">
            <div className="h-1.5 w-4 rounded-full bg-primary"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="px-4 pt-2 pb-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">Premium AC Deep Cleaning</h1>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-white dark:bg-surface-dark p-3 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRSHgahtM7J-MITXpHlYEQOyL8AcrtH6L2FtMXFHufHjksXQvKjjKho81qx2ieFTo5_kaFs4KdDxuRmuEMl0egUZ4k008mKkbzhGyYD1CUB8LESltx0KR0c2g64ItHmiZ4xhKgxlwJSgZdS-yJqHoKWcu4Ny_g6lXaSymIfkfvaPe4G58Bt_OFJsvcWrSAWdC3wCDpkSiUDCekETyXw2hPKYy7X4OBlnuvpWfMQeW7VyxbY5MrXBEYqwLhVRwo_1GqevT0YMkLPMaK")' }}></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 dark:text-white">Kam Tech Solutions</span>
                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined text-yellow-400 text-[16px] filled">star</span>
                  <span className="font-medium text-slate-900 dark:text-white">4.8</span>
                  <span>(120 reviews)</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </div>

        <div className="px-4 pb-6">
          <div className="flex flex-col rounded-xl bg-primary/10 dark:bg-surface-dark border border-primary/20 p-5">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Price per unit</p>
            <div className="mt-1 flex items-baseline justify-between">
              <p className="text-3xl font-bold text-primary">$45.00</p>
              <span className="rounded-full bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary">Best Value</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">local_offer</span>
              <span>Includes service charge & taxes</span>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">About Service</h3>
          <div className="prose prose-sm prose-slate dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>Restore your AC's efficiency with our Premium Deep Cleaning service. We use high-pressure water jets and eco-friendly cleaning agents to remove dust, mold, and bacteria from deep within your unit.</p>
            <ul className="mt-4 space-y-3">
              {[
                "Comprehensive filter & coil cleaning",
                "Drainage system flushing to prevent leaks",
                "Gas pressure check included"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-gray-200 dark:bg-gray-800"></div>

        <div className="px-4 pb-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Reviews</h3>
            <button className="text-sm font-semibold text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg bg-white dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHg8d_ybXGMl0JfmBz2qwNO8dWdNcTPIZ6Dj35n9RJm1Zj0Dylk6EG_NvaIHrOmpGPe769GkuGzpPGRVZ-qGiP8gRV_n7KNKfDinCw-MjE8SHdHtqfjB-SpEEWCfPjKUXvACn-9CTGSHcViio5t-yKlpfVebhEcyQgxg5wcqqNWDYGfPlgEe10qL2QE29mIGut6rBj6ITmsFxBVLPFC-4qm2JdD1Ak4ShroiNyPHHlRRX2lpdGOh1ueRQve4NSXkKCPd4cLZ_oAMEU")' }}></div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Alex M.</span>
                </div>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
              <div className="mt-2 flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[16px] filled">star</span>)}
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Great service, very punctual! The technician explained everything clearly and left no mess behind.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-8">
          <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">Service Area</h3>
          <div className="w-full h-32 rounded-lg bg-gray-200 dark:bg-surface-dark bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEVviPe88VQzieiqvfbCrzfbWCort7MHTzlh8GXln3W8qbxylFdhkKuPu8yYfUmKAZYoNT6PGy9CrCh1GaIACRISHnvOd5D8JQSiCB4oFphV7R-grvLK5cd-MZESGza3SnX9hIF3sOCeQvio2DrAZfo8wKby4ofQk5fuFhe1ITAVvtBZ2jq-mwXt1Lj_EEPYWD1Ol_FsK6CYG-CTbyxROvIpcT_cRvhSy-QSAw0DkHoLQ2ufAV0eLU8xKgHNvlSsFA7Jm3L6s-MWIL")' }}>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">map</span>
                View Coverage
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-4 pb-8 safe-area-pb">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Total Price</span>
            <span className="text-xl font-bold text-slate-900 dark:text-white">$45.00</span>
          </div>
          <button onClick={() => navigate('/booking/date')} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3.5 px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform active:scale-[0.98]">
            <span>Book Now</span>
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailScreen;