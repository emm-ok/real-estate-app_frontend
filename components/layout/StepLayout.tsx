import React from "react";

const StepLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-4 shadow-sm overflow-hidden">
        {children}
    </div>
  );
};

export default StepLayout;
