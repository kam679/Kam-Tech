import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const AdminLoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { adminLogin } = useAdminAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 500));

        const success = adminLogin(email, password);
        if (success) {
            navigate('/admin/dashboard');
        } else {
            setError('Invalid admin credentials');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 mb-4 shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-white text-3xl">admin_panel_settings</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
                    <p className="text-slate-400 text-sm">Kam Tech Marketplace Management</p>
                </div>

                {/* Login Card */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-center gap-3">
                                <span className="material-symbols-outlined text-red-400">error</span>
                                <p className="text-red-400 text-sm font-medium">{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-500 text-xl">mail</span>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="admin@kamtech.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-slate-300 text-sm font-medium mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-500 text-xl">lock</span>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-xl">login</span>
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
                        <button
                            onClick={() => navigate('/')}
                            className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
                        >
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to App
                        </button>
                    </div>
                </div>

                <p className="text-center text-slate-500 text-xs mt-6">
                    Protected Admin Access Only
                </p>
            </div>
        </div>
    );
};

export default AdminLoginScreen;
