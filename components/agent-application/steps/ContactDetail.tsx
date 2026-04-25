"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const ContactDetail = ({ onNext, onBack, onChange }) => {
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
  });

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8 md:w-3/4">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <label htmlFor="">Address</label>
            <Input
              type="text"
              placeholder="Address no 1 Great Street"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="">City</label>
              <Input
                type="text"
                placeholder="Birmingham City"
                className="w-full border border-gray-400 rounded-md px-4 py-2"
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="">State / Province</label>
              <Input
                type="text"
                placeholder="Paris"
                className="w-full border border-gray-400 rounded-md px-4 py-2"
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              />
            </div>
          </div>
          <div>
            <select className="border border-gray-400 p-1 w-full">
              <option value="">Country</option>
            </select>
          </div>
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

export default ContactDetail;
