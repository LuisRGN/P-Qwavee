export interface AuthContextType {
    isLoggedIn: boolean;
    handleLogout: () => void;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}