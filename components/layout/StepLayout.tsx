import React from "react";

const StepLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl shadow-sm p-12 w-full overflow-hidden">
        {children}
    </div>
  );
};

export default StepLayout;
