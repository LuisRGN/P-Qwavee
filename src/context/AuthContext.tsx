'use client'
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContextType, AuthProviderProps } from '@/interfaces/AuthContext';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogout = () => {
        import('sweetalert2').then(Swal => {
            Swal.default
                .fire({
                    title: 'Are you sure?',
                    text: 'You are about to log out',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, log out',
                    cancelButtonText: 'Cancel',
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('userEmail');
                        setIsLoggedIn(false);
                        router.push('/');
                        Swal.default.fire(
                            'You are offline!',
                            'Your session has been closed successfully.',
                            'success'
                        );
                    }
                });
        });
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

