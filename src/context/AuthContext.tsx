import  React, { createContext, useContext, useState, ReactNode } from 'react'; 

interface User {
  id: string;
  name: string;
  email: string;
  role: 'reader' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Fantasy Reader',
    email: 'reader@bookhaven.com',
    role: 'reader'
  });

  const login = async (email: string, password: string) => {
    setUser({
      id: '1',
      name: 'Fantasy Reader',
      email,
      role: email.includes('admin') ? 'admin' : 'reader'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
 