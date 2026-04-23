"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Skeleton from "../ui/Skeleton";
import { createAgentApplication, getMyAgentApplication } from "@/lib/agent-application";
import Loader from "../ui/Loader";
import { useAuth } from "@/context/AuthContext";
import { AgentApplication } from "@/types";

const StartButton = () => {
  const [application, setApplication] = useState<AgentApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMyAgentApplication();
        console.log(data);
        setApplication(data);
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
      if (application) {
        if (isBlocked) {
          toast.info(`Application ${status}`);
        }
        // router.push(`/agent-application?app=${application.id}`);
        console.log("Application",application);
        console.log("ApplicationId",application.id);
        return;
      }
      const res = await createAgentApplication();
      // router.push(`/agent-application?app=${res.id}`)
      console.log(res.id);
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
        <Skeleton className="w-175 h-12" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow text-center space-y-4">
      <p className="text-gray-600">Ready to start your verification</p>

      <button
        onClick={handleStart}
        disabled={isBlocked}
        className={`w-full py-4 rounded-xl 
                font-medium text-white transition-all 
                ${
                  isBlocked
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-neutral-800 hover:scale-[1.02]"
                }`}
      >
        {!application && "Start Application"}
        {loading && <Loader text="Redirecting..." />}
        {status === "DRAFT" && "Continue Application"}
        {status === "PENDING" && "Under Review"}
        {status === "APPROVED" && "Approved"}
        {status === "REJECTED" && "Rejected"}
      </button>

      {isBlocked && (
        <p className="text-xs text-gray-400">Application already active</p>
      )}
    </div>
  );
};

export default StartButton;
