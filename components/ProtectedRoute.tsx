// app/(protected)/layout.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "./ui/Loader";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/sign-in");
    } else if (user.status !== "ACTIVE") {
      router.replace("/deactivated");
    }
  }, [user, loading]);

  if (loading) return <Loader text="Loading..." />;

  if (!user || user.status !== "ACTIVE") return null;

  return <>{children}</>;
}