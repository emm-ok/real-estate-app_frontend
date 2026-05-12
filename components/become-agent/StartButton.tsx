"use client";

import Skeleton from "../ui/Skeleton";
import {
  createAgentApplication,
} from "@/lib/agent-application";
import { useAgentApplication } from "@/context/AgentApplicationContext";
import { toast } from "sonner";

const StartButton = ({
  onStageChange,
}: {
  onStageChange: (stage: "requirements" | "application") => void;
}) => {
  const { application, loading, setLoading } = useAgentApplication();

  const blocked = ["PENDING", "APPROVED"];
  const status = application?.status;
  const isBlocked = status !== undefined && blocked.includes(status);

  const handleStart = async () => {
    try {
      if (application) {
        if (isBlocked) {
          toast.info(`Application ${status}`);
        }
        onStageChange("application");
        return;
      }
      await createAgentApplication();
      onStageChange("application");
    } catch(error: any){
      console.error(error);
    } 
    finally {
        setLoading(false);
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
