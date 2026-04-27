"use client"

import React, { createContext, useContext, useState } from "react";

interface CompanyApplicationContextType {
    nextStep: () => void,
    prevStep: () => void,
    step: number,
    steps: string[],
}

const steps = [
  "Personal Information",
  "Contact Details",
  "Company Info",
  "Documents",
  "Review",
];

const CompanyApplicationContext = createContext<CompanyApplicationContextType | null>(null);

export const CompanyApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(0);

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));
  
  return (
    <CompanyApplicationContext.Provider value={{nextStep, prevStep, step, steps }}>
      {children}
    </CompanyApplicationContext.Provider>
  );
};

export const useCompanyApplication = () => {
    const context = useContext(CompanyApplicationContext);
    if(!context){
        throw new Error("useCompanyApplication must be within CompanyApplicationProvider")
    }
    return context;
};
