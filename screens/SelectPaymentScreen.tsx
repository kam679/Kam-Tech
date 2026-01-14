import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectPaymentScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('card');

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-surface-light dark:bg-background-dark p-4 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-primary-light dark:text-white transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Select Payment</h2>
      </header>

      <main className="flex flex-col gap-6 p-4">
        <div className="flex flex-col items-center justify-center rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Total Amount</span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">$55.13</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-1 text-xs font-medium text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900/30">
            <span className="material-symbols-outlined text-[14px]">timer</span>
            <span>Payment due in 14:59</span>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold leading-tight tracking-tight px-1 mb-3">Payment Methods</h3>
          <div className="flex flex-col gap-4">
            <div className={`group relative overflow-hidden rounded-xl border-2 transition-all ${selectedMethod === 'card' ? 'border-primary bg-surface-light dark:bg-surface-dark shadow-md' : 'border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark'}`} onClick={() => setSelectedMethod('card')}>
              <div className="flex items-center gap-3 p-4 cursor-pointer">
                <span className={`material-symbols-outlined ${selectedMethod === 'card' ? 'text-primary' : 'text-gray-300 dark:text-gray-600'}`}>{selectedMethod === 'card' ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                <div className="flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 p-2 text-primary">
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Credit or Debit Card</p>
                </div>
                <div className="flex gap-1 opacity-60">
                  <span className="text-[10px] font-bold border border-gray-200 dark:border-gray-700 rounded px-1 text-gray-500">VISA</span>
                  <span className="text-[10px] font-bold border border-gray-200 dark:border-gray-700 rounded px-1 text-gray-500">MC</span>
                </div>
              </div>
              
              {selectedMethod === 'card' && (
                <div className="border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/20 p-4 animate-fadeIn">
                  <div className="flex flex-col gap-3">
                    <label className="flex cursor-pointer items-center justify-between rounded-lg border border-primary bg-surface-light dark:bg-surface-dark p-3 shadow-sm ring-1 ring-primary/20">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-10 rounded bg-gradient-to-br from-blue-600 to-blue-800"></div>
                        <div>
                          <p className="text-sm font-medium">Visa •••• 4242</p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Expires 12/25</p>
                        </div>
                      </div>
                      <div className="flex size-5 items-center justify-center rounded-full bg-primary text-white">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </div>
                    </label>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 p-3 text-sm font-medium text-text-secondary-light hover:bg-white hover:text-primary dark:text-text-secondary-dark dark:hover:bg-gray-800 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                      Add New Card
                    </button>
                  </div>
                </div>
              )}
            </div>

            {[
              { id: 'mobile', icon: 'smartphone', label: 'Mobile Money', sub: 'M-Pesa, Orange Money', color: 'orange' },
              { id: 'wallet', icon: 'account_balance_wallet', label: 'Digital Wallets', sub: 'Apple Pay, Google Pay', color: 'gray' }
            ].map((method) => (
              <button key={method.id} onClick={() => setSelectedMethod(method.id)} className={`group relative flex w-full items-center gap-3 rounded-xl border p-4 text-left shadow-sm transition-all ${selectedMethod === method.id ? 'border-primary ring-1 ring-primary/50' : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'} bg-surface-light dark:bg-surface-dark`}>
                <span className={`material-symbols-outlined ${selectedMethod === method.id ? 'text-primary' : 'text-gray-300 dark:text-gray-600'}`}>{selectedMethod === method.id ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                <div className={`flex items-center justify-center rounded-lg p-2 ${method.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                  <span className="material-symbols-outlined">{method.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{method.label}</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{method.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark opacity-75">
          <span className="material-symbols-outlined filled text-[16px]">lock</span>
          <span>Payments are SSL encrypted and 100% secure</span>
        </div>
      </main>

      <div className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-20">
        <button onClick={() => navigate('/booking/confirmation')} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors">
          <span>Pay $55.13</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default SelectPaymentScreen;