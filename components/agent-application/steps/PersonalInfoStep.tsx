"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { inputClass } from "@/lib/utils";
import { useState } from "react";

export default function PersonalInfoStep({ formData, onNext, updateForm }: any) {
  const { user} = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
         <div>
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <p className="text-sm text-gray-500">
        Tell us who you are so we can verify your identity.
      </p>
    </div>
        <div className="bg-white rounded-2xl space-y-6">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            value={user?.name}
            placeholder="Full Name"
            className={inputClass}
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
            value={user?.email}
            placeholder="Email"
            className={inputClass}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />


          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
            htmlFor="date"
            className="block text-sm font-semibold text-gray-700"
          >
            Country
          </label>
              <select className={inputClass}>
              <option value="">Country</option>
            </select>
            </div>
           <div>
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
            className={`${inputClass} py-6`}
          /></div> 
          </div>
          <label
            htmlFor="number"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone Number
          </label>
            <Input
              type="number"
              id="number"
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          

          <select className={inputClass}>
            <option value="">Select your nationality</option>
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <button className="text-gray-400 px-4 py-2">
            Back
          </button>
          <button
            onClick={onNext}
            className="bg-neutral-800 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-black transition"
          >
            Continue
          </button>
        </div>
      </div>
    </AnimateStep>
  );
}
