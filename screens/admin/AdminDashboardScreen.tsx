import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const STATS = [
    { label: 'Total Services', value: '24', icon: 'home_repair_service', color: 'from-blue-500 to-blue-600', change: '+3 this week' },
    { label: 'Total Bookings', value: '156', icon: 'calendar_month', color: 'from-green-500 to-green-600', change: '+12 today' },
    { label: 'Active Users', value: '1,248', icon: 'group', color: 'from-purple-500 to-purple-600', change: '+48 this month' },
    { label: 'Revenue', value: '$12,450', icon: 'payments', color: 'from-orange-500 to-orange-600', change: '+8% vs last month' },
];

const RECENT_BOOKINGS = [
    { id: 1, service: 'PC Repair', user: 'John Doe', status: 'confirmed', time: '2 hours ago' },
    { id: 2, service: 'House Cleaning', user: 'Jane Smith', status: 'pending', time: '4 hours ago' },
    { id: 3, service: 'Oil Change', user: 'Mike Johnson', status: 'confirmed', time: '5 hours ago' },
];

const NAV_ITEMS = [
    { label: 'Dashboard', icon: 'dashboard', path: '/admin/dashboard' },
    { label: 'Services', icon: 'home_repair_service', path: '/admin/services' },
    { label: 'Bookings', icon: 'calendar_month', path: '/admin/bookings' },
    { label: 'Users', icon: 'group', path: '/admin/users' },
];

const AdminDashboardScreen: React.FC = () => {
    const { adminLogout } = useAdminAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        adminLogout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-slate-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-800/50 border-r border-slate-700/50 p-4 flex flex-col">
                <div className="flex items-center gap-3 mb-8 px-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">admin_panel_settings</span>
                    </div>
                    <div>
                        <h1 className="text-white font-bold">Kam Tech</h1>
                        <p className="text-slate-400 text-xs">Admin Panel</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-1">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.path === '/admin/dashboard'
                                    ? 'bg-primary/20 text-primary'
                                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="pt-4 border-t border-slate-700/50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">logout</span>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                            <p className="text-slate-400 text-sm mt-1">Welcome back, Admin</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded-xl text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-lg">add</span>
                            Add Service
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                                        <span className="material-symbols-outlined text-white text-2xl">{stat.icon}</span>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                                <p className="text-white text-2xl font-bold">{stat.value}</p>
                                <p className="text-green-400 text-xs mt-2">{stat.change}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Bookings */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
                            <h2 className="text-white font-bold">Recent Bookings</h2>
                            <Link to="/admin/bookings" className="text-primary text-sm font-medium hover:underline">
                                View All
                            </Link>
                        </div>
                        <div className="divide-y divide-slate-700/50">
                            {RECENT_BOOKINGS.map((booking) => (
                                <div key={booking.id} className="flex items-center justify-between p-4 hover:bg-slate-700/20 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-400">person</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{booking.service}</p>
                                            <p className="text-slate-400 text-sm">{booking.user}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'confirmed'
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                            {booking.status}
                                        </span>
                                        <p className="text-slate-500 text-xs mt-1">{booking.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboardScreen;
