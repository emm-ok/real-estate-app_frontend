import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="">
      {/* <ProtectedRoute> */}
        <Navbar />
        {children}
        <Footer />
      {/* </ProtectedRoute> */}
    </main>
  );
};

export default layout;
