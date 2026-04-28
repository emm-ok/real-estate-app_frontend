"use client";

import {
  deleteAgentDocument,
  getMyAgentApplication,
  submitAgentApplication,
  updateAgentApplication,
  uploadAgentDocument,
} from "@/lib/agent-application";
import { AgentApplication, AgentDocumentType } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export type FormDataType = {
  personal?: {
    name: string;
    email: string;
    country?: string;
    dob?: string;
    phone?: string;
    nationality?: string;
  };
  contact?: any;
  professional?: any;
  documents?: Record<string, any>;
};

interface ContextType {
  nextStep: () => Promise<void>;
  prevStep: () => void;
  formData: FormDataType;
  loading: boolean;
  deleteLoading: boolean;
  submitLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  localDocs: any;
  setLocalDocs: any;

  step: number;
  steps: string[];
  stepLoading: boolean;
  goToStep: (step: number) => Promise<void>;

  application: AgentApplication | null;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;

  updateForm: (section: keyof FormDataType, data: any) => void;
  // uploadDocument: (type: string, file: File) => Promise<void>
  deleteDocument: (type: AgentDocumentType) => Promise<void>;
  submitApplication: () => Promise<void>
}

const steps = [
  "Personal Information",
  "Contact Details",
  "Professional Info",
  "Documents",
  "Review",
];

const AgentApplicationContext = createContext<ContextType | null>(null);

export const AgentApplicationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setdeleteLoading] = useState(false);
  const [stepLoading, setStepLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({});
  const [localDocs, setLocalDocs] = useState<any>({});
  const [application, setApplication] = useState<AgentApplication | null>(null);
  const [editReturnStep, setEditReturnStep] = useState<number | null>(null);

  const fetchApplication = async () => {
    try {
      const res = await getMyAgentApplication();
      setApplication(res.application);
      const app = res.application;
      console.log("AgentApplication", app);
      setStep(app.currentStep || 0);

      setFormData((prev) => ({
        ...prev,
        professional: {
          ...app.professional,
          specialization: app.professional?.specialization || [],
        },
        documents: app.documents || {},
      }));
      // console.log("Agent Application", application);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  const updateForm = (section: keyof FormDataType, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  console.log("Context form Data", formData);

  const nextStep = async () => {
    try {
      setStepLoading(true);

      const next = step + 1;

      if (step === 3) {
        if (localDocs.ID_CARD)
          await uploadAgentDocument("ID_CARD", localDocs.ID_CARD);

        if (localDocs.LICENSE)
          await uploadAgentDocument("LICENSE", localDocs.LICENSE);

        if (localDocs.SELFIE)
          await uploadAgentDocument("SELFIE", localDocs.SELFIE);

        const refreshed = await getMyAgentApplication();
        setFormData((prev) => ({
          ...prev,
          documents: refreshed.application.documents,
        }));
      }

      const payload: any = { step: next };

      if (next === 3) {
        payload.professional = formData.professional;
      }
      // console.log("Payload", payload)
      const data = await updateAgentApplication(payload);
      // console.log("Updated Application", data.application)
      setStep(data.application.currentStep);
    } catch (error: any) {
      console.error(
        "Step error:",
        error?.response?.data || error.message || error,
      );
    } finally {
      setStepLoading(false);
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const goToStep = async (step: number) => {
    setEditReturnStep(step);
    setStep(step);
  };

  const deleteDocument = async (type: AgentDocumentType) => {
    try {
      setdeleteLoading(true);
      await deleteAgentDocument(type);

      setFormData((prev) => ({
        ...prev,
        documents: (prev.documents || []).filter((doc) => doc.type !== type),
      }));

      setLocalDocs((prev) => {
        const copy = { ...prev };
        delete copy[type];
        return copy;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setdeleteLoading(false);
    }
  };

  const submitApplication = async() => {
    try{
      setSubmitLoading(true);
      const response = await submitAgentApplication();
      
      toast.success(response.message);
    } catch(error){
      console.error(error);
    } finally{
      setSubmitLoading(false)
    }
  }

  return (
    <AgentApplicationContext.Provider
      value={{
        nextStep,
        prevStep,
        step,
        steps,
        goToStep,
        loading,
        localDocs,
        setLocalDocs,
        application,
        formData,
        setFormData,
        setLoading,
        deleteLoading,
        stepLoading,
        submitLoading,
        updateForm,
        // uploadDocument,
        deleteDocument,
        submitApplication
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
