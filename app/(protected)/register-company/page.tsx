"use client";

import StartButton from "@/components/become-agent/StartButton";
import StatusCard from "@/components/become-agent/StatusCard";
import CompanyForm from "@/components/company-registration/CompanyForm";
import { ChartBar, CheckCircle, User, UserCircle } from "lucide-react";
import React, { useState } from "react";

const items = [
  "Valid government ID",
  "Professional license",
  "Company or brokerage info",
  "Certificate",
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
  {
    header: "Access Agents",
    description: "Get access to various multiple real estate professionals.",
    icon: <UserCircle size={30} className="text-neutral-800" />,
    color: "bg-stone-200",
  },
];

const RegisterCompanyPage = () => {
  const [stage, setStage] = useState<"requirements" | "registration">(
    "requirements",
  );
  return (
    <div className="flex justify-center items-center w-full p-8">
      <div
        className={`${stage === "requirements" ? "block" : "hidden"} w-full`}
      >
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Register your Company</h1>
          <p className="text-gray-500 mt-2">
            Create or registr your company with us and get opportunity to
            showcase real estate assets to over 2 million users.
          </p>
        </div>

        <div className="grid md:grid-cols-4">
          {packages.map((pkg, index) => {
            return (
              <div
                key={pkg.header}
                className={`flex ${index === 0 && "border border-gray-300"} rounded-xl mb-4 justify-start items-center p-4 gap-8`}
              >
                <div className={`p-4 rounded-xl ${pkg.color}`}>{pkg.icon}</div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold">{pkg.header}</h2>
                  <p className="text-gray-500">{pkg.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 w-full">
          <h3 className="font-semibold mb-4">Requirements</h3>

          <ul className="text-xl text-gray-800 flex justify-between items-center">
            {items.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-4 shadow-md p-10 rounded-xl"
              >
                <span className="size-10 flex justify-center items-center rounded-full bg-green-500 text-white">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

            <StatusCard />

         <StartButton onStageChange={setStage} />
      </div>

      <div className={`${stage === "registration" ? "block" : "hidden"} w-full`}>
        {/* Application Form */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold mb-4">Application Form</h3>
          {/* Form fields would go here */}
          <CompanyForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterCompanyPage;
