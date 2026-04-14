"use client"

import { useAuth } from "@/context/AuthContext";
import { useConfirm } from "@/context/providers/ConfirmProvider";
import React from "react";

const Logout = () => {
  const confirm = useConfirm();
  const {logout} = useAuth()

  return (
    <button
      onClick={() =>
        confirm({
          title: "Are you sure you want to logout?",
          description: "You'll be signed out of your account",
          confirmText: "Logout",
          variant: "warning",
          onConfirm: async() => {
            await logout();
            window.location.href = "/sign-in";
          }
        })
      }
      className="w-full font-medium px-4 py-2 bg-neutral-800 rounded-md text-white hover:bg-neutral-900 cursor-pointer"
    >
        Logout
    </button>
  );
};

export default Logout;
