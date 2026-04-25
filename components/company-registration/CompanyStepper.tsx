import React from "react";

interface Props {
  steps: string[];
  currentStep: number;
}

const CompanyStepper = ({ steps, currentStep }: Props) => {
  return (
    <div className="">
      <div className="text-center text-xl font-extrabold">{steps[currentStep]}</div>
      <div className="flex my-10 w-full">
        {steps.map((step, index) => (
        <div key={index} className="flex-1 flex items-center">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-sm
                    ${index <= currentStep ? "bg-neutral-800 text-white" : "bg-gray-100 shadow-md"}`}
          >
            {index + 1}
          </div>
          {index !== steps.length - 1 && (
            <div className={`flex-1 h-[2px] ${index < currentStep ? "bg-black" : "bg-gray-400"} ${index == steps.length - 1 && "hidden"} transition-all`} />
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default CompanyStepper;
