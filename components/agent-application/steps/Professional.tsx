"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Professional = ({ onNext, onBack, onChange }) => {
  const [form, setForm] = useState({
    licenseNumber: "",
    licenseCountry: "",
    specialization: "",
    yearsExperience: "",
    companyName: "",
    website: "",
  });

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8 md:w-1/2">
        <div className="flex flex-col justify-between gap-4">
          <label htmlFor="">License Number</label>
          <Input
            type="text"
            placeholder="ANSAOS30492JKD"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) =>
              setForm({ ...form, licenseNumber: e.target.value })
            }
          />
          <label htmlFor="">License Country</label>
          <Input
            type="text"
            placeholder="USA"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) =>
              setForm({ ...form, licenseCountry: e.target.value })
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <select className="border border-gray-300 rounded-md">
              <option value="">Specialization</option>
            </select>

            <div>
              <label htmlFor="" className="text-sm">
                Years of Experience
              </label>
              <Input
                type="text"
                placeholder="10"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                onChange={(e) =>
                  setForm({ ...form, yearsExperience: e.target.value })
                }
              />
            </div>
          </div>
          <label htmlFor="">Company Name</label>
          <Input
            type="text"
            placeholder="Vortex"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          />
          <label htmlFor="">Website</label>
          <Input
            type="text"
            placeholder="https://www.example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onBack} className="border px-6 py-2 rounded-md">
            Back
          </button>
          <button
            onClick={() => {
              onChange({ form });
              onNext();
            }}
            className="bg-neutral-800 text-white px-6 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </AnimateStep>
  );
};

export default Professional;
