"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  steps: string[];
  currentStep: number;
}

const CompanyStepper = ({ steps, currentStep }: Props) => {
  return (
    <div className="w-full">
      {/* MOBILE (HORIZONTAL) */}
      <div className="md:hidden flex items-center justify-center gap-2 ml-10">
        {steps.map((_, index) => {
          const isActive = index <= currentStep;

          return (
            <div key={index} className="flex items-center gap-2 flex-1">
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{
                  scale: index === currentStep ? 1.15 : 1,
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
              >
                {index + 1}
              </motion.div>

              {index !== steps.length - 1 && (
                <div
                  className={`h-[2px] flex-1 rounded-full transition-all duration-300 ${
                    index < currentStep ? "bg-black" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP (VERTICAL) */}
      <div className="hidden md:flex flex-col items-start gap-6 relative">
        {/* BACKBONE LINE */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200" />

        {/* PROGRESS LINE */}
        <motion.div
          className="absolute left-5 top-0 w-[2px] bg-black"
          initial={{ height: 0 }}
          animate={{
            height: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex items-start gap-4 relative">
              {/* STEP DOT */}
              <motion.div
                animate={{
                  scale: isCurrent ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-sm z-10
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-400"
                  }
                `}
              >
                {index + 1}
              </motion.div>

              {/* LABEL */}
              <div className="pt-1">
                <p
                  className={`text-sm font-medium transition-all ${
                    isActive ? "text-black" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>

                {isCurrent && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-gray-500 mt-1"
                  >
                    Current step
                  </motion.p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyStepper;