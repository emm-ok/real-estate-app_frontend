"use client";

import React, { useState } from "react";
import AgentStepper from "./AgentStepper";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import StepLayout from "../layout/StepLayout";
import Image from "next/image";
import agentImage from "@/public/assets/todd-kent-QG756pvuQZ0-unsplash.jpg";
import { CheckCircle } from "lucide-react";
import ContactDetail from "./steps/ContactDetail";
import Professional from "./steps/Professional";
import Documents from "./steps/Documents";
import Review from "./steps/Review";
import AnimateStep from "../layout/AnimateStep";

const steps = [
  "Personal Information",
  "Contact Details",
  "Professional Info",
  "Documents",
  "Review",
];

const ApplicationForm = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<any>([]);

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const updateData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalInfoStep onNext={next} onChange={updateData} />;
      case 1:
        return (
          <ContactDetail onNext={next} onBack={prev} onChange={updateData} />
        );
      case 2:
        return (
          <Professional onNext={next} onBack={prev} onChange={updateData} />
        );
      case 3:
        return <Documents onNext={next} onBack={prev} onChange={updateData} />;
      case 4:
        return <Review onBack={prev} />;
      default:
        return null;
    }
  };
  return (
    <AnimateStep>
      <div className="p-8 flex flex-col justify-between items-center w-full">
        <p>
          Step {step + 1} of {steps.length}
        </p>
        <AgentStepper steps={steps} currentStep={step} />

        <div className="flex justify-center items-center gap-4 w-3/4">
          <div className="space-y-8 hidden md:block">
            <Image
              src={agentImage}
              width={500}
              height={500}
              alt="Agent Application img"
              className="w-[300px] rounded-xl"
            />

            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={15} />
                <h2 className="text-sm">Secure & Verified</h2>
              </div>
              <p className="text-xs">
                Your information is protected and will be verified
              </p>
            </div>
          </div>

          <StepLayout>{renderStep()}</StepLayout>
        </div>
      </div>
    </AnimateStep>
  );
};

export default ApplicationForm;
