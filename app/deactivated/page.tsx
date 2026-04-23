import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import React from "react";

const DeactivatedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="space-y-6 flex flex-col justify-center items-center">
          <AlertTriangle size={40} />
        <h2 className="text-3xl font-bold">
          Account has been Suspended.{" "}
        </h2>
        <p>Please contact our support team to find out more. </p>
        <p>@contact-12345678</p>
      <Link href="/sign-in" className="p-4 bg-neutral-800 rounded text-white text-md w-full">Go back to login</Link>
      </div>
    </div>
  );
};

export default DeactivatedPage;
