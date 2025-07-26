import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}



export function AuthProvider({ children }) {

  const [isLog, setIsLog] = useState(false);

    const value = { isLog, setIsLog };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
