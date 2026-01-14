import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminAuthContextType {
    isAdminLoggedIn: boolean;
    adminLogin: (email: string, password: string) => boolean;
    adminLogout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const ADMIN_EMAIL = 'admin@kamtech.com';
const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'kam_tech_admin_auth';

export const AdminAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'true';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, String(isAdminLoggedIn));
    }, [isAdminLoggedIn]);

    const adminLogin = (email: string, password: string): boolean => {
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            setIsAdminLoggedIn(true);
            return true;
        }
        return false;
    };

    const adminLogout = () => {
        setIsAdminLoggedIn(false);
        localStorage.removeItem(STORAGE_KEY);
    };

    return (
        <AdminAuthContext.Provider value={{ isAdminLoggedIn, adminLogin, adminLogout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export const useAdminAuth = (): AdminAuthContextType => {
    const context = useContext(AdminAuthContext);
    if (!context) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
};
