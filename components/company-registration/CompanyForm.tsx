import React, { useState } from "react";
import AnimateStep from "../layout/AnimateStep";
import StepLayout from "../layout/StepLayout";
import Image from "next/image";
import agentImage from "@/public/assets/real-estate-img3.jpg";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import ContactDetail from "./steps/ContactDetail";
import CompanyInfo from "./steps/CompanyInfo";
import CompanyStepper from "./CompanyStepper";
import { CheckCircle } from "lucide-react";
import Review from "./steps/Review";
import Documents from "./steps/Documents";

const steps = [
  "Personal Information",
  "Contact Details",
  "Company Info",
  "Documents",
  "Review",
];

const CompanyForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState([]);

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const updateData = () => {
    setFormData((prev) => ({ ...prev, ...formData }));
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
          <CompanyInfo onNext={next} onBack={prev} onChange={updateData} />
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
      <div className="p-8">
        <p>
          Step {step + 1} of {steps.length}
        </p>
        <CompanyStepper steps={steps} currentStep={step} />
      </div>

      <div className="flex justify-between gap-4">
        <div className="space-y-8 w-1/3 hidden md:block">
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
    </AnimateStep>
  );
};

export default CompanyForm;
