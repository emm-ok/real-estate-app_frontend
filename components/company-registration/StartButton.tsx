"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Skeleton from "../ui/Skeleton";
import { createCompanyApplication, getMyCompanyApplication } from "@/lib/company-application";
import Loader from "../ui/Loader";
import { useAuth } from "@/context/AuthContext";
import { CompanyApplication } from "@/types";

const StartButton = ({ onStageChange }: { onStageChange: (stage: "requirements" | "registration") => void }) => {
  const [application, setApplication] = useState<CompanyApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMyCompanyApplication();
        console.log("Application", data.application);
        setApplication(data.application);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const blocked = ["PENDING", "APPROVED"];

  const status = application?.status;
  const isBlocked = status !== undefined && blocked.includes(status);

  const handleStart = async () => {
    try {
      // if (application) {
      //   if (isBlocked) {
      //     toast.info(`Application ${status}`);
      //   }
      //   // router.push(`/agent-application?app=${application.id}`);
      //   console.log("Application",application);
      //   console.log("ApplicationId",application.id);
      //   onStageChange("registration");
      //   return;
      // }
      // const res = await createCompanyApplication();
      // router.push(`/agent-application?app=${res.id}`)
      onStageChange("registration");
      // console.log(res.id);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 mt-15 shadow p-6">
        <Skeleton className="w-50 h-3" />
        <Skeleton className="w-96 md:w-175 h-12" />
      </div>
    );
  }

return (
  <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold">
        Begin Company Verification
      </h3>

      <p className="text-sm text-slate-400 mt-2">
        Complete your registration to unlock listing access and business tools.
      </p>
    </div>

    <button
      onClick={handleStart}
      disabled={isBlocked}
      className={`mt-6 w-full py-3 rounded-xl font-medium transition
        ${
          isBlocked
            ? "bg-white/20 cursor-not-allowed"
            : "bg-white text-black hover:scale-[1.02]"
        }`}
    >
      {!application && "Start Registration"}
      {loading && "Redirecting..."}
      {status === "DRAFT" && "Continue Registration"}
      {status === "PENDING" && "Under Review"}
      {status === "APPROVED" && "Verified"}
      {status === "REJECTED" && "Rejected"}
    </button>

    {isBlocked && (
      <p className="text-xs text-slate-400 mt-3">
        Application is currently in progress
      </p>
    )}
  </div>
);
};

export default StartButton;
