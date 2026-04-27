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
import { useCompanyApplication } from "@/context/CompanyApplicationContext";

const CompanyForm = ({
  onStageChange,
}: {
  onStageChange: (stage: "requirements" | "registration") => void;
}) => {
  const { nextStep, prevStep, step, steps } = useCompanyApplication();
  const [formData, setFormData] = useState([]);

  const updateData = () => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalInfoStep onNext={nextStep} onChange={updateData} />;
      case 1:
        return (
          <ContactDetail onNext={nextStep} onBack={prevStep} onChange={updateData} />
        );
      case 2:
        return (
          <CompanyInfo onNext={nextStep} onBack={prevStep} onChange={updateData} />
        );
      case 3:
        return <Documents onNext={nextStep} onBack={prevStep} onChange={updateData} />;
      case 4:
        return <Review onBack={prevStep} />;
      default:
        return null;
    }
  };
  return (
    <div className="w-full mx-auto">
      <AnimateStep>
        {/* HEADER */}
        <button onClick={() => onStageChange("requirements")} className="underline text-xl font-bold">Back</button>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold">
            Company Verification Onboarding
          </h1>
          <p className="text-gray-500 mt-2">
            Complete your profile step-by-step to get verified and unlock
            platform access.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* STEP INDICATOR */}
          <div className="flex justify-center mb-10">
            <CompanyStepper steps={steps} currentStep={step} />
          </div>
          

          {/* RIGHT FORM AREA */}
          <div className="md:col-span-2">
            <StepLayout>{renderStep()}</StepLayout>
          </div>

          {/* LEFT TRUST PANEL */}
          <div className=" md:block space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold">Why verification matters</h3>
              <p className="text-sm text-gray-500 mt-2">
                Verified companies get higher visibility, trust badges, and more
                leads.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <p className="text-sm">Secure data encryption</p>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <p className="text-sm">Manual verification process</p>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <p className="text-sm">Trusted by 10,000+ companies</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateStep>
    </div>
  );
};

export default CompanyForm;
