import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authAPI } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    const token = localStorage.getItem('royalsahara_token');
    if (!token) { setLoading(false); return; }
    try {
      const res = await authAPI.getMe();
      setUser(res.data);
    } catch {
      localStorage.removeItem('royalsahara_token');
      localStorage.removeItem('royalsahara_user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadUser(); }, [loadUser]);

  const login = async (credentials) => {
    const res = await authAPI.login(credentials);
    localStorage.setItem('royalsahara_token', res.token);
    localStorage.setItem('royalsahara_user', JSON.stringify(res.data));
    setUser(res.data);
    return res;
  };

  const logout = () => {
    localStorage.removeItem('royalsahara_token');
    localStorage.removeItem('royalsahara_user');
    setUser(null);
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin, loadUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
