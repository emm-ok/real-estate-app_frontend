"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@/types";
import React from "react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>
}
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const res = await api.get(`/user`);
      setUser(res.data.user);
    } catch (error: any) {
      setUser(null);
      console.error("Fetch User error", error?.response?.data || error.message);
    } finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async() => {
    const res = await api.post(`/auth/logout`);
    setUser(null)
    toast.success(res.data.message);
    router.push("/sign-in");
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within AuthProvider");
  }

  return context;
};
