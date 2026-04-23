"use client"

import { getMyAgentApplication } from "@/lib/agent-application";
import { AgentApplication, ApplicationStatus } from "@/types";
import React, { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";
import StartButton from "./StartButton";
import { useAuth } from "@/context/AuthContext";

const StatusCard = () => {
  const [application, setApplication] = useState<AgentApplication | null>(null);
  const [loading, setLoading] = useState(true);
  

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

  if (loading) {
    return (
      <div className="flex justify-between items-center shadow p-6">
        <div>
          <Skeleton className="w-50 h-3" />
          <Skeleton className="w-30 h-3 mt-3" />
        </div>
        <Skeleton className="w-50 h-3" />
      </div>
    );
  }

  if (!application) {
    return(
      <div className="bg-white rounded-2xl shadow flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Your application</p>
          <p className="font-semibold text-gray-500">No application</p>
        </div>
        <span>No Application</span>
      </div>
    )
  };

  const statusColor: Record<ApplicationStatus, string> = {
    DRAFT: "text-yellow-600",
    PENDING: "text-blue-600",
    APPROVED: "text-green-600",
    REJECTED: "text-red-600",
  };
  
  console.log("statusColor", statusColor[application.status])
  return (
    <div className="bg-white rounded-2xl shadow flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Your application</p>
        <p className={` font-semibold ${statusColor[application.status]}`}>
          {application.status}
        </p>

        <span className="text-xs text-gray-400">
          Submitted {new Date(application.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default StatusCard;
