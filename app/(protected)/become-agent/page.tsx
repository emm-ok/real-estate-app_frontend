"use client";

import ApplicationForm from "@/components/agent-application/ApplicationForm";
import StartButton from "@/components/become-agent/StartButton";
import StatusCard from "@/components/become-agent/StatusCard";
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

  return (
  <div className="mx-auto px-6 py-10 space-y-10">
    {stage === "requirements" && (
      <>
        {/* HERO */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold leading-tight">
              Become a Verified Real Estate Agent
            </h1>
            <p className="text-neutral-300 mt-4 text-lg">
              Join a premium network of trusted agents, gain more visibility,
              and close deals faster with our platform.
            </p>
          </div>

          <button
            onClick={() => setStage("application")}
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-[1.03] transition"
          >
            Get Started
          </button>
        </div>

        {/* BENEFITS */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Why join our agent network?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.header}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${pkg.color}`}
                >
                  {pkg.icon}
                </div>

                <h3 className="font-semibold text-lg">{pkg.header}</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  {pkg.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* REQUIREMENTS */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Requirements to get started
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50"
              >
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                  <CheckCircle size={18} />
                </div>

                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS + CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <StatusCard />
          <StartButton onStageChange={setStage} />
        </div>
      </>
    )}

    {stage === "application" && (
      <div className="rounded-3xl p-8">
        <ApplicationForm onStageChange={setStage} />
      </div>
    )}
  </div>
);
};

export default BecomeAgentPage;
