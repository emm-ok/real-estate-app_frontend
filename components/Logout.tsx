"use client";

import { useAuth } from "@/context/AuthContext";
import { useConfirm } from "@/context/providers/ConfirmProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PageLoader from "./ui/PageLoader";

const Logout = () => {
  const confirm = useConfirm();
  const { logout, isLoggingOut } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    confirm({
      title: "Are you sure you want to logout?",
      description: "You'll be signed out of your account",
      confirmText: "Logout",
      variant: "warning",
      onConfirm: async () => {
        await logout();
        router.push("/sign-in");
      },
    });
  };

  if(isLoggingOut) return <PageLoader text="Logging out..."  />
  return (
    <button
      onClick={handleLogout}
      className="w-full font-medium px-4 py-2 bg-neutral-800 rounded-md text-white hover:bg-neutral-900 cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;
