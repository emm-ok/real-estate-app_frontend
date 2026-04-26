"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Skeleton from "../ui/Skeleton";
import {
  createAgentApplication,
  getMyAgentApplication,
} from "@/lib/agent-application";
import Loader from "../ui/Loader";
import { useAuth } from "@/context/AuthContext";
import { AgentApplication } from "@/types";

const StartButton = ({
  onStageChange,
}: {
  onStageChange: (stage: "requirements" | "application") => void;
}) => {
  const [application, setApplication] = useState<AgentApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMyAgentApplication();
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
      //   onStageChange("application");
      //   return;
      // }
      // const res = await createAgentApplication();
      // router.push(`/agent-application?app=${res.id}`)
      onStageChange("application");
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
    <div className="bg-neutral-900 text-white rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">Ready to get verified?</h3>
        <p className="text-sm text-neutral-400 mt-2">
          Start your application and unlock access to premium listings and
          clients.
        </p>
      </div>

      <button
        onClick={() => onStageChange("application")}
        className="mt-6 bg-white text-black py-3 rounded-xl font-medium hover:scale-[1.02] transition"
      >
        Start Application
      </button>
    </div>
  );
};

export default StartButton;
