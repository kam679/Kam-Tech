import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/marketplace');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden transition-colors duration-200">
      <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <button className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] text-center">Kam Tech</h2>
        <div className="size-10"></div>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-4 pb-10 max-w-md mx-auto w-full z-10">
        <div className="flex justify-center mb-6">
          <div className="size-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-[40px]">hub</span>
          </div>
        </div>

        <h2 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center mb-2">Welcome Back</h2>
        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal text-center mb-8">
          Log in to manage your bookings, payments, and connect with businesses.
        </p>

        <div className="flex w-full mb-8">
          <div className="flex w-full items-center justify-center rounded-xl bg-slate-200 dark:bg-surface-dark p-1">
            <label className="flex-1 cursor-pointer">
              <input 
                className="peer sr-only" 
                name="auth-mode" 
                type="radio" 
                checked={authMode === 'login'} 
                onChange={() => setAuthMode('login')} 
              />
              <div className={`flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-all ${authMode === 'login' ? 'bg-white dark:bg-[#233038] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>
                Login
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input 
                className="peer sr-only" 
                name="auth-mode" 
                type="radio" 
                checked={authMode === 'register'} 
                onChange={() => setAuthMode('register')}
              />
              <div className={`flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-all ${authMode === 'register' ? 'bg-white dark:bg-[#233038] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>
                Register
              </div>
            </label>
          </div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <label className="flex flex-col w-full">
            <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Email or Phone</span>
            <div className="relative flex w-full items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all overflow-hidden">
              <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal" placeholder="user@example.com" type="text" />
              <div className="flex items-center justify-center pr-4 text-slate-400">
                <span className="material-symbols-outlined">mail</span>
              </div>
            </div>
          </label>
          <label className="flex flex-col w-full">
            <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">Password</span>
            <div className="relative flex w-full items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all overflow-hidden">
              <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal" placeholder="••••••••" type="password" />
              <button type="button" className="flex items-center justify-center pr-4 text-slate-400 hover:text-primary transition-colors focus:outline-none">
                <span className="material-symbols-outlined">visibility_off</span>
              </button>
            </div>
          </label>
          <div className="flex justify-end">
            <button type="button" className="text-primary text-sm font-medium hover:text-blue-400 transition-colors">Forgot Password?</button>
          </div>
          <button type="submit" className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary h-14 text-white text-base font-bold tracking-wide shadow-lg shadow-primary/25 hover:bg-blue-500 active:scale-[0.98] transition-all">
            {authMode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-[#233038] transition-colors">
            <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZNCgEo6eOiGcQDc0c_2QJF1LRoAB8HhjhFR0FiqkH-gV-nZ1RnwERZ547y-pL3L6b9zUCqAY_xaLn9Q7Vi_rDQjewVU6wRwiiMz6gIOXI30d47fShQx7l76LYbqgosIlCAKV9jH0KDhw_fqjvPnte4g4dQ0SIkz5iHSNTod5k821dKCFIpkjDoxxKzTplzQkD8Rxgvyr4JLViZ3THWIiQ0a_x8lFcr2a_IAjLC7U1s0GdhHBmzKkzUOAHBUJaVkyRrynXW7YYXiyS" />
            <span className="text-slate-700 dark:text-white text-sm font-medium">Google</span>
          </button>
          <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-[#233038] transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-white text-[22px]">ios</span>
            <span className="text-slate-700 dark:text-white text-sm font-medium">Apple</span>
          </button>
        </div>

        {/* Footer Info Links */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-center gap-4 text-xs text-slate-400">
          <Link to="/technology" className="hover:text-primary">Technology</Link>
          <Link to="/security" className="hover:text-primary">Security</Link>
          <Link to="/performance" className="hover:text-primary">Performance</Link>
        </div>
      </div>

      <div className="fixed top-[-20%] right-[-20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </div>
  );
};

export default LoginScreen;