import Sidebar from "@/components/dashboard/Sidebar";
import MainAnimate from "@/components/layout/MainAnimate";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Sidebar role="USER">
        <MainAnimate>{children}</MainAnimate>
      </Sidebar>
    </>
  );
};

export default ProtectedLayout;
