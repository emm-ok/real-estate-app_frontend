"use client";

import CompanyForm from "@/components/company-registration/CompanyForm";
import StartButton from "@/components/company-registration/StartButton";
import StatusCard from "@/components/company-registration/StatusCard";
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
    <div className=" mx-auto px-6 py-10 space-y-12">
      {stage === "requirements" && (
        <>
          {/* HERO */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10">
            <h1 className="text-4xl font-semibold">Register Your Company</h1>

            <p className="text-slate-300 mt-4 max-w-2xl text-lg">
              Join our verified business network and showcase your real estate
              portfolio to millions of potential clients across the platform.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setStage("registration")}
                className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-[1.03] transition"
              >
                Start Registration
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-xl text-white hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* VALUE GRID (Reworked packages) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                <h3 className="font-semibold">{pkg.header}</h3>
                <p className="text-gray-500 text-sm mt-2">{pkg.description}</p>
              </div>
            ))}
          </div>

          {/* REQUIREMENTS (Structured + enterprise feel) */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Verification Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <CheckCircle size={18} />
                  </div>

                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STATUS + CTA GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            <StatusCard />
            <StartButton onStageChange={setStage} />
          </div>
        </>
      )}

      {/* FORM STEP */}
      {stage === "registration" && (
        <div className="rounded-3xl p-8">
          <CompanyForm onStageChange={setStage} />
        </div>
      )}
    </div>
  );
};

export default RegisterCompanyPage;
