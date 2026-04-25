import AnimateStep from "@/components/layout/AnimateStep";
import React from "react";

const Review = ({onBack}) => {

  return (
    <AnimateStep>
    <div className="flex flex-col justify-between w-full h-full gap-8 md:w-3/4">
      <h2>Review Step</h2>
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="border px-6 py-2 rounded-md"
        >
          Back
        </button>
        <button
          //   onClick={() => {
          //     onChange({ form });
          //     onNext();
          //   }}
          className="bg-neutral-800 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
    </AnimateStep>
  );
};

export default Review;
