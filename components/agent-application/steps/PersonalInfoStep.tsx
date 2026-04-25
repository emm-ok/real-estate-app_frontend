"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function PersonalInfoStep({ onNext, onChange }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleNext = () => {
    onChange(form);
    onNext();
  };

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8 md:w-1/2">
        <div className="flex flex-col justify-between h-full gap-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label
            htmlFor="number"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone Number
          </label>

          <div className="flex items-center">
            <select className="border border-gray-300 p-1 mr-2">
              <option value="">Country</option>
            </select>
            <Input
              type="number"
              id="number"
              placeholder="(555) 123-4567"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <label
            htmlFor="date"
            className="block text-sm font-semibold text-gray-700"
          >
            Date of Birth
          </label>
          <Input
            type="date"
            id="date"
            placeholder="MM/DD/YYYY"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />

          <select className="w-full border border-gray-300 p-1 mr-2">
            <option value="">Select your nationality</option>
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick="" className="border px-6 py-2 rounded-md border-gray-300 text-gray-400">
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-neutral-800 text-white px-6 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </AnimateStep>
  );
}
