"use client";

import ApplicationForm from "@/components/agent-application/ApplicationForm";
import StartButton from "@/components/become-agent/StartButton";
import StatusCard from "@/components/become-agent/StatusCard";
import { useAuth } from "@/context/AuthContext";
import { ChartBar, CheckCircle, User } from "lucide-react";
import React, { useState } from "react";

const items = [
  "Valid government ID",
  "Professional license",
  "Company or brokerage info",
  "Profile photo (selfie)",
];

const packages = [
  {
    header: "Grow your Business",
    description: "Get more visibility and connect with potential clients",
    icon: <User size={30} color="green" />,
    color: "bg-green-100",
  },
  {
    header: "Build Trust",
    description:
      "Gain credibility with our trusted platform and client reviews",
    icon: <CheckCircle size={30} color="blue" />,
    color: "bg-blue-100",
  },
  {
    header: "Powerful Tools",
    description:
      "Access advanced tools to manage listings and track performance",
    icon: <ChartBar size={30} className="text-amber-600" />,
    color: "bg-amber-100",
  },
];

const BecomeAgentPage = () => {
  const [stage, setStage] = useState<"requirements" | "application">(
    "requirements",
  );
  const { user } = useAuth();

  console.log(user);
  return (
    <div className="flex justify-center items-center w-full p-8">
      <div
        className={`${stage === "requirements" ? "block" : "hidden"} w-full`}
      >
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Become a Verified Agent</h1>
          <p className="text-gray-500 mt-2">
            Join our network of trusted real estate professionals and grow your
            business with us.
          </p>
        </div>

        {packages.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <div
              key={pkg.header}
              className={`flex border border-gray-300 rounded-xl mb-4 justify-start items-center p-4 gap-8`}
            >
              <div className={`p-4 rounded-xl ${pkg.color}`}>{Icon}</div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">{pkg.header}</h2>
                <p className="text-gray-500">{pkg.description}</p>
              </div>
            </div>
          );
        })}

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold mb-4">Requirements</h3>

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

        <StartButton onStageChange={setStage} />
      </div>

      <div className={`${stage === "application" ? "block" : "hidden"} w-full`}>
        {/* Application Form */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold mb-4">Application Form</h3>
          {/* Form fields would go here */}
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default BecomeAgentPage;
