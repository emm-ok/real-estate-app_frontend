"use client";

import {
  getMyAgentApplication,
  updateAgentApplication,
} from "@/lib/agent-application";
import { AgentApplication } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AgentApplicationContextType {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
  steps: string[];
  application: AgentApplication | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  stepLoading: boolean;
  setFormData: React.Dispatch<React.SetStateAction<[]>>;
  formData: any[];
  updateForm: (data: any) => void;
}

const steps = [
  "Personal Information",
  "Contact Details",
  "Professional Info",
  "Documents",
  "Review",
];

const AgentApplicationContext =
  createContext<AgentApplicationContextType | null>(null);

export const AgentApplicationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [stepLoading, setStepLoading] = useState(false);
  const [formData, setFormData] = useState<any>([]);
  const [application, setApplication] = useState<AgentApplication | null>(null);

  const fetchApplication = async () => {
    try {
      const res = await getMyAgentApplication();
      setApplication(res.application);
      const data = res.application;
      setFormData({
        professional: {
          ...data.professional,
          specialization: data.professional.specialization || [],
        },
        documents: data.documents || {},
      });
      setStep(step || 0);
      // console.log("Agent Application", application);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = async () => {
    setStepLoading(true);
    try {
      if (step === 2) {
        await updateAgentApplication({
          step,
          professional: formData.professional,
        });
      }
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    } finally {
      setStepLoading(false);
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const updateForm = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  return (
    <AgentApplicationContext.Provider
      value={{
        nextStep,
        prevStep,
        step,
        steps,
        loading,
        application,
        formData,
        setFormData,
        setLoading,
        stepLoading,
        updateForm,
      }}
    >
      {children}
    </AgentApplicationContext.Provider>
  );
};

export const useAgentApplication = () => {
  const context = useContext(AgentApplicationContext);
  if (!context) {
    throw new Error(
      "useAgentApplication must be within AgentApplicationProvider",
    );
  }
  return context;
};
