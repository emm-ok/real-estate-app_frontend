"use client";

import { getMyCompanyApplication } from "@/lib/company-application";
import { CompanyApplication, ApplicationStatus } from "@/types";
import React, { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";

const StatusCard = () => {
  const [application, setApplication] = useState<CompanyApplication | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getMyCompanyApplication();
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
      <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="w-24 h-4" />
      </div>
    );
  }

  if (!application) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <p className="text-sm text-gray-500">Company Application</p>

        <h3 className="text-lg font-semibold text-gray-800 mt-2">
          Not Started
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Your company is not yet registered in our system.
        </p>
      </div>
    );
  }

  const statusColor: Record<ApplicationStatus, string> = {
    DRAFT: "bg-yellow-100 text-yellow-700",
    PENDING: "bg-blue-100 text-blue-700",
    APPROVED: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <p className="text-sm text-gray-500">Company Status</p>

      <div className="mt-3 flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[application.status]}`}
        >
          {application.status}
        </span>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Submitted on {new Date(application.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default StatusCard;
