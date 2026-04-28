"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { FormDataType } from "@/context/AgentApplicationContext";
import { inputClass } from "@/lib/utils";
import React from "react";

const options = [
  "RESIDENTIAL",
  "COMMERCIAL",
  "LUXURY",
  "STUDENT",
  "SHORTLET",
  "LAND",
];
const Professional = ({ updateForm, formData }) => {
  const data = formData.professional || {};
  const specialization = data.specialization || [];
  
  const toggle = (value: string) => {
    const next = specialization.includes(value)
    ? specialization.filter((x) => x !== value)
    : [...specialization, value];
    
    updateForm("professional", {
      specialization: next,
    });
  };
  console.log("formData", formData);

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
        <h2 className="text-xl font-semibold">Agent Details</h2>
        <div className="bg-white space-y-4">
          <label htmlFor="">License Number</label>
          <Input
            type="text"
            value={data.licenseNumber || ""}
            placeholder="ANSAOS30492JKD"
            className={inputClass}
            onChange={(e) =>
              updateForm("professional", { licenseNumber: e.target.value })
            }
          />
          <label htmlFor="">License Country</label>
          <Input
            type="text"
            value={data.licenseCountry || ""}
            placeholder="USA"
            className={inputClass}
            onChange={(e) =>
              updateForm("professional", { licenseCountry: e.target.value })
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              {options.map((opt) => (
                <label key={opt} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={specialization.includes(opt)}
                    onChange={() => toggle(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Years of Experience
              </label>
              <Input
                type="number"
                value={data.yearsExperience || ""}
                placeholder="10"
                className={inputClass}
                onChange={(e) =>
                  updateForm("professional", {
                    yearsExperience: e.target.value ? Number(e.target.value) : undefined
                  })
                }
              />
            </div>
          </div>
          <label htmlFor="">Company Name</label>
          <Input
            type="text"
            value={data.companyName || ""}
            placeholder="Vortex"
            className={inputClass}
            onChange={(e) =>
              updateForm("professional", { companyName: e.target.value })
            }
          />
          <label htmlFor="">Website</label>
          <Input
            type="text"
            value={data.website || ""}
            placeholder="https://www.example.com"
            className={inputClass}
            onChange={(e) =>
              updateForm("professional", { website: e.target.value })
            }
          />
        </div>
      </div>
    </AnimateStep>
  );
};

export default Professional;
