import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const BOOKINGS = [
    { id: '1', service: 'PC Repair', user: 'John Doe', email: 'john@example.com', date: '2024-01-15', time: '10:00 AM', status: 'confirmed' },
    { id: '2', service: 'House Cleaning', user: 'Jane Smith', email: 'jane@example.com', date: '2024-01-16', time: '02:00 PM', status: 'pending' },
    { id: '3', service: 'Oil Change', user: 'Mike Johnson', email: 'mike@example.com', date: '2024-01-17', time: '11:00 AM', status: 'confirmed' },
    { id: '4', service: 'Spa & Massage', user: 'Sarah Williams', email: 'sarah@example.com', date: '2024-01-18', time: '03:00 PM', status: 'cancelled' },
];

const NAV_ITEMS = [
    { label: 'Dashboard', icon: 'dashboard', path: '/admin/dashboard' },
    { label: 'Services', icon: 'home_repair_service', path: '/admin/services' },
    { label: 'Bookings', icon: 'calendar_month', path: '/admin/bookings' },
    { label: 'Users', icon: 'group', path: '/admin/users' },
];

const AdminBookingsScreen: React.FC = () => {
    const { adminLogout } = useAdminAuth();
    const navigate = useNavigate();
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredBookings = statusFilter === 'all'
        ? BOOKINGS
        : BOOKINGS.filter(b => b.status === statusFilter);

    const handleLogout = () => {
        adminLogout();
        navigate('/admin/login');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return 'bg-green-500/20 text-green-400';
            case 'pending': return 'bg-yellow-500/20 text-yellow-400';
            case 'cancelled': return 'bg-red-500/20 text-red-400';
            default: return 'bg-slate-500/20 text-slate-400';
        }
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
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.path === '/admin/bookings'
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
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Bookings</h1>
                            <p className="text-slate-400 text-sm mt-1">Manage customer bookings</p>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2 mb-6">
                        {['all', 'confirmed', 'pending', 'cancelled'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${statusFilter === status
                                        ? 'bg-primary text-white'
                                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
                                    }`}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Bookings Table */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700/50">
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Customer</th>
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Service</th>
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Date & Time</th>
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Status</th>
                                    <th className="text-right p-4 text-slate-400 text-sm font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/50">
                                {filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-slate-700/20 transition-colors">
                                        <td className="p-4">
                                            <div>
                                                <p className="text-white font-medium">{booking.user}</p>
                                                <p className="text-slate-400 text-sm">{booking.email}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-slate-300">{booking.service}</span>
                                        </td>
                                        <td className="p-4">
                                            <div>
                                                <p className="text-white">{booking.date}</p>
                                                <p className="text-slate-400 text-sm">{booking.time}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-green-500/20 text-slate-400 hover:text-green-400 transition-colors">
                                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors">
                                                    <span className="material-symbols-outlined text-lg">cancel</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminBookingsScreen;
