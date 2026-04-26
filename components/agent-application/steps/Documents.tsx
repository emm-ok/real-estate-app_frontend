"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import React, { useState } from "react";

const docs = [
  { title: "ID Card", description: "Upload your National ID", name: "idCard" },
  {
    title: "Real Estate License",
    description: "Upload your real estate license",
    name: "license",
  },
  {
    title: "Profile Photo",
    description: "Upload a professional photo",
    name: "photo",
  },
];
const Documents = ({ onNext, onBack, onChange }) => {
  const [form, setForm] = useState({});

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
        <h2 className="text-xl font-semibold">Upload Documents</h2>
        <div className="bg-white space-y-6">
          {docs.map((doc) => (
            <div
              key={doc.title}
              className="border border-dashed border-gray-300 rounded-xl p-5 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <Upload size={25} />
                <div className="space-y-4">
                  <h2 className="font-medium">{doc.title}</h2>
                  <p className="text-sm text-gray-500">{doc.description}</p>
                </div>
              </div>
              <label className="cursor-pointer bg-black text-white px-4 py-2 rounded-lg text-sm">
                Upload
                <input type="file" className="hidden" />
              </label>
            </div>
          ))}
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

export default Documents;
