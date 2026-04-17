"use client";

import { apiUrl } from "@/lib/api";
import React, { useState } from "react";
import Loader from "./Loader";
import { usePathname, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const GoogleAppleButton = () => {
  const [isGoogleLoading, setisGoogleLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <button
        onClick={() => {
          setisGoogleLoading(true);
          const redirect = searchParams?.get("redirect") || "/";
          window.location.href = `${apiUrl}/auth/google?redirect=${encodeURIComponent(redirect)}`;
        }}
        disabled={isGoogleLoading}
        className="mt-4 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-medium hover:opacity-70 cursor-pointer disabled:opacity-50 transition"
      >
        {isGoogleLoading ? (
          <Loader text="Redirecting to Google..." />
        ) : (
          <>
            <FcGoogle size={22} />
            {pathname === "/sign-in" && "Sign in with Google"}
            {pathname === "/sign-up" && "Sign up with Google"}
          </>
        )}
      </button>
    </div>
  );
};

export default GoogleAppleButton;
