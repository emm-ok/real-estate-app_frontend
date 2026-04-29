"use client";

import { deleteCompanyDocument, getMyCompanyApplication, submitCompanyApplication, updateCompanyApplication, uploadCompanyDocument } from "@/lib/company-application";
import { CompanyApplication, CompanyDocumentType } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const steps = [
  "Personal Information",
  "Contact Details",
  "Company Info",
  "Documents",
  "Review",
];

export type FormDataType = {
  companyInfo: {
    name: string;
    email: string;
    logo: string;
    website: string;
    address: string;
    type: string;
    registrationNumber: string;
    licenseNumber: string;
  };
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

  application: CompanyApplication | null;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;

  updateForm: (section: keyof FormDataType, data: any) => void;
  deleteDocument: (type: CompanyDocumentType) => Promise<void>;
  submitApplication: () => Promise<void>;
}

const CompanyApplicationContext = createContext<ContextType | null>(null);

export const CompanyApplicationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setdeleteLoading] = useState(false);
  const [stepLoading, setStepLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({});
  const [localDocs, setLocalDocs] = useState<any>({});
  const [application, setApplication] = useState<CompanyApplication | null>(
    null,
  );

  const fetchApplication = async () => {
    try {
      const res = await getMyCompanyApplication();
      setApplication(res.application);
      const app = res.application;
      console.log("CompanyApplication", app);
      setStep(app.currentStep || 0);

      setFormData((prev) => ({
        ...prev,
        companyInfo: app.companyInfo,
        documents: app.documents || {},
      }));
      // console.log("Company Application", application);
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

  const nextStep = async () => {
    try {
      setStepLoading(true);

      const next = step + 1;

      if (step === 3) {
        if (localDocs.OWNER_ID)
          await uploadCompanyDocument("OWNER_ID", localDocs.OWNER_ID);
          
          if (localDocs.LICENSE)
            await uploadCompanyDocument("LICENSE", localDocs.LICENSE);
          
          if (localDocs.CERTIFICATE)
            await uploadCompanyDocument("CERTIFICATE", localDocs.CERTIFICATE);

        const refreshed = await getMyCompanyApplication();
        setFormData((prev) => ({
          ...prev,
          documents: refreshed.application.documents,
        }));
      }

      const payload: any = { step: next };

      if (next === 3) {
        payload.companyInfo = formData.companyInfo;
      }
      // console.log("Payload", payload)
      const data = await updateCompanyApplication(payload);
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
      setStep(step);
    };
  
    const deleteDocument = async (type: CompanyDocumentType) => {
      try {
        setdeleteLoading(true);
        await deleteCompanyDocument(type);
  
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
      const response = await submitCompanyApplication();
      
      toast.success(response.message);
    } catch(error){
      console.error(error);
    } finally{
      setSubmitLoading(false)
    }
  }
  

  return (
    <CompanyApplicationContext.Provider
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
        deleteDocument,
        submitApplication
      }}
    >
      {children}
    </CompanyApplicationContext.Provider>
  );
};

export const useCompanyApplication = () => {
  const context = useContext(CompanyApplicationContext);
  if (!context) {
    throw new Error(
      "useCompanyApplication must be within CompanyApplicationProvider",
    );
  }
  return context;
};
