"use client"

import { getMyAgentApplication } from "@/lib/agent-application";
import { AgentApplication, ApplicationStatus } from "@/types";
import React, { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";

const StatusCard = () => {
  const [application, setApplication] = useState<AgentApplication | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMyAgentApplication();
        console.log("Application", data);
        setApplication(data.application);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <Skeleton className="w-40 h-4 mb-3" />
        <Skeleton className="w-24 h-4" />
      </div>
    );
  }

  if (!application) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">
        <p className="text-sm text-gray-500">Application Status</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-2">
          Not Started
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          Start your journey to become a verified agent.
        </p>
      </div>
    );
  }

  const statusColor: Record<ApplicationStatus, string> = {
    DRAFT: "bg-gray-100 text-neutral-800 border",
    PENDING: "bg-blue-100 text-blue-700",
    APPROVED: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">
      <p className="text-sm text-gray-500">Application Status</p>

      <div className="flex items-center gap-3 mt-2">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[application.status]}`}
        >
          {application.status}
        </span>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Submitted on{" "}
        {new Date(application.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default StatusCard;
