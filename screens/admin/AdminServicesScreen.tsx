import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const SERVICES = [
    { id: '1', title: 'Professional PC Repair', company: 'Kam Tech Solutions', price: 45, category: 'Tech Support', status: 'active' },
    { id: '2', title: 'Full House Cleaning', company: 'Sparkle Cleaners', price: 80, category: 'Home Services', status: 'active' },
    { id: '3', title: 'Express Oil Change', company: 'Turbo Auto Care', price: 35, category: 'Automotive', status: 'active' },
    { id: '4', title: 'Luxury Spa & Massage', company: 'Serenity Wellness', price: 90, category: 'Beauty', status: 'inactive' },
];

const NAV_ITEMS = [
    { label: 'Dashboard', icon: 'dashboard', path: '/admin/dashboard' },
    { label: 'Services', icon: 'home_repair_service', path: '/admin/services' },
    { label: 'Bookings', icon: 'calendar_month', path: '/admin/bookings' },
    { label: 'Users', icon: 'group', path: '/admin/users' },
];

const AdminServicesScreen: React.FC = () => {
    const { adminLogout } = useAdminAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredServices = SERVICES.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.path === '/admin/services'
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
                            <h1 className="text-2xl font-bold text-white">Services</h1>
                            <p className="text-slate-400 text-sm mt-1">Manage marketplace services</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded-xl text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-lg">add</span>
                            Add Service
                        </button>
                    </div>

                    {/* Search */}
                    <div className="mb-6">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* Services Table */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700/50">
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Service</th>
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Category</th>
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Price</th>
                                    <th className="text-left p-4 text-slate-400 text-sm font-medium">Status</th>
                                    <th className="text-right p-4 text-slate-400 text-sm font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/50">
                                {filteredServices.map((service) => (
                                    <tr key={service.id} className="hover:bg-slate-700/20 transition-colors">
                                        <td className="p-4">
                                            <div>
                                                <p className="text-white font-medium">{service.title}</p>
                                                <p className="text-slate-400 text-sm">{service.company}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-slate-300">{service.category}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-white font-medium">${service.price}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${service.status === 'active'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-slate-500/20 text-slate-400'
                                                }`}>
                                                {service.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors">
                                                    <span className="material-symbols-outlined text-lg">delete</span>
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

export default AdminServicesScreen;
