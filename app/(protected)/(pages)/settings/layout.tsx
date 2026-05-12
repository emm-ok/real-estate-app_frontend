"use client"

import Sidebar from "@/components/settings/Sidebar";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  useEffect(() => router.push("/settings/profile"), []);
  return <div>
    <Sidebar>
        {children}
    </Sidebar>
    </div>;
};

export default SettingsLayout;
