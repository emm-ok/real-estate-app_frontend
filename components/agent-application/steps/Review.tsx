import AnimateStep from "@/components/layout/AnimateStep";
import React from "react";

const Review = ({ onBack }) => {
  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
        <h2 className="text-xl font-semibold">Review & Submit</h2>

        <p className="text-gray-500">
          Please confirm your information before submission.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
          All your data will be reviewed within 24–48 hours.
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={onBack} className="border px-6 py-2 rounded-md">
            Back
          </button>
          <button className="bg-neutral-800 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-black transition">
            Submit
          </button>
        </div>
      </div>
    </AnimateStep>
  );
};

export default Review;
