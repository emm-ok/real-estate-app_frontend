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
      <div className="flex flex-col justify-between w-full h-full gap-8 md:w-3/4">
        <div className="flex flex-col justify-between gap-4">
          {docs.map((doc) => (
            <div
              key={doc.title}
              className="flex justify-between items-center p-4 gap-4 border border-gray-400 rounded-md"
            >
              <div className="flex items-center gap-4">
                <Upload size={25} />
                <div className="space-y-4">
                  <h2 className="font-bold text-gray-700">{doc.title}</h2>
                  <p>{doc.description}</p>
                </div>
              </div>
              <button className="px-4 py-3 text-sm border border-gray-400 rounded-md">
                <Input type="file" name={doc.name} hidden />
                Upload
              </button>
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
            className="bg-neutral-800 text-white px-6 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </AnimateStep>
  );
};

export default Documents;
