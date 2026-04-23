"use client";

import StartButton from "@/components/become-agent/StartButton";
import StatusCard from "@/components/become-agent/StatusCard";
import { useAuth } from "@/context/AuthContext";
import { CheckCircle } from "lucide-react";
import React from "react";

const items = [
  "Valid government ID",
  "Professional license",
  "Company or brokerage info",
  "Profile photo (selfie)",
];

const BecomeAgentPage = () => {

  const {user} = useAuth();

  console.log(user)
  return (
    <div className="flex justify-center items-center w-full p-8">
      <div className="w-full">
        {/* Hero */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow">
          <h1 className="text-3xl font-semibold">Become a Verified Agent</h1>
          <p className="text-gray-500 mt-2">
            Get Access to premium listings, verified leads, and agent tools.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold mb-4">What you’ll need</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Application Status */}
        <StatusCard />

        <StartButton />
      </div>
    </div>
  );
};

export default BecomeAgentPage;
