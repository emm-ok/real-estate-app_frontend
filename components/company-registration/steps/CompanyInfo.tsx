"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { inputClass } from "@/lib/utils";
import React, { useState } from "react";

const CompanyInfo = ({ onNext, onBack, onChange }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    logo: "",
    website: "",
    address: "",
    type: "",
    registrationNumber: "",
    licenseNumber: "",
  });

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
        <h2 className="text-xl font-semibold">Company Details</h2>
        <div className="bg-white space-y-4">
          <label htmlFor="">Company Name</label>
          <Input
            type="text"
            placeholder="Vortex"
            className={inputClass}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <label htmlFor="">Email</label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            className={inputClass}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="">License Number</label>
              <Input
                type="number"
                placeholder="NDS9J3402J3040J0324"
                className={inputClass}
                onChange={(e) =>
                  setForm({ ...form, licenseNumber: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">Registration Number</label>
              <Input
                type="number"
                placeholder="NDS9J3402J3040J0324"
                className={inputClass}
                onChange={(e) =>
                  setForm({ ...form, registrationNumber: e.target.value })
                }
              />
            </div>
          </div>
            <select className={inputClass}>
              <option value="">Type</option>
              <option value="llc">LLC</option>
            </select>

            <div>
              <label htmlFor="" className="text-sm">
                Website
              </label>
              <Input
                type="text"
                placeholder="https://www.vortex.com"
                className={inputClass}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>
          <label htmlFor="">Address</label>
          <Input
            type="text"
            placeholder="no1 ketunger street, luton, United Kingdom"
            className={inputClass}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
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
            className="bg-neutral-800 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-black transition"
          >
            Continue
          </button>
        </div>
      </div>
    </AnimateStep>
  );
};

export default CompanyInfo;
