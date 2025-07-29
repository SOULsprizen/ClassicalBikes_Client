import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}



export function AuthProvider({ children }) {

  const [isLog, setIsLog] = useState(false);
  const [userDashboard, setUserDashboard] = useState(false);

    const value = { isLog, setIsLog,userDashboard, setUserDashboard };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
