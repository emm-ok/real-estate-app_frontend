"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { LoginCredentials, RegisterCredentials, User } from "@/types";
import React from "react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
  isLoggingOut: boolean;
}
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  // const searchParams = useSearchParams();

  const fetchUser = async () => {
    try {
      const res = await api.get(`/user`);
      setUser(res.data.user);
    } catch (error: any) {
      setUser(null);
      console.error("Fetch User error", error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setIsLoggingOut(true);
    try {
      const res = await api.post(`/auth/logout`);
      toast.success(res.data.message);
      router.push("/sign-in");
    } catch (error: any) {
      console.error(error.messsage);
    } finally{
      setIsLoggingOut(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, logout, fetchUser, isLoggingOut}}>
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
