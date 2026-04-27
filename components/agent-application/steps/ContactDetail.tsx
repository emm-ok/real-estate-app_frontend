"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { inputClass } from "@/lib/utils";
import React, { useState } from "react";

const ContactDetail = ({ formData, onNext, onBack, updateForm }) => {
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
  });

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
        <h2 className="text-xl font-semibold">Contact Details</h2>
        <div className="bg-white space-y-4">
          <div>
            <label htmlFor="">Address</label>
            <Input
              type="text"
              placeholder="Address no 1 Great Street"
              className={inputClass}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="">City</label>
              <Input
                type="text"
                placeholder="Birmingham City"
                className={inputClass}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="">State / Province</label>
              <Input
                type="text"
                placeholder="Paris"
                className={inputClass}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              />
            </div>
          </div>
          <div>
            <select className={inputClass}>
              <option value="">Country</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onBack} className="border px-6 py-2 rounded-md">
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
};

export default ContactDetail;
