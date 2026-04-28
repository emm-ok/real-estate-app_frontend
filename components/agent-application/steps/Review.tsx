import AnimateStep from "@/components/layout/AnimateStep";
import React from "react";

export const Review = ({ formData, goToStep }) => {

  const docsMap = (formData?.documents || []).reduce((acc, doc) => {
    acc[doc.type] = doc;
    return acc;
  }, {});

  const sections = [
    {
      title: "Professional Info",
      step: 3,
      data: {
        "License Number": formData?.professional?.licenseNumber,
        "License Country": formData?.professional?.licenseCountry,
        "Years Experience": formData?.professional?.yearsExperience,
        "Company Name": formData?.professional?.companyName,
        "Website": formData?.professional?.website,
        "Specializations": formData?.professional?.specialization?.join(", "),
      }
    },
    {
      title: "Documents",
      step: 3,
      data: {
        "ID Card": docsMap["ID_CARD"] ? "Uploaded" : "Missing",
        "Real Estate License": docsMap["LICENSE"] ? "Uploaded" : "Missing",
        "Photo": docsMap["SELFIE"] ? "Uploaded" : "Missing",
      }
    }
  ];

  return (
    <AnimateStep>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold">Review & Submit</h2>

        <div className="space-y-6">
          {sections.map(section => (
            <div key={section.title} className="shadow-md rounded-xl p-4">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold">{section.title}</h3>
                <button
                  onClick={() => goToStep(section.step)}
                  className="text-sm text-blue-600"
                >
                  Edit
                </button>
              </div>

              <div className="space-y-2 text-sm">
                {Object.entries(section.data).map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-medium">{value || "—"}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateStep>
  );
};

