"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import Loader from "@/components/ui/Loader";
import { useCompanyApplication } from "@/context/CompanyApplicationContext";
import { CompanyDocumentType } from "@/types";
import { Upload } from "lucide-react";

const docs = [
  { title: "ID", description: "Upload your ID", name: "OWNER_ID" },
  {
    title: "Real Estate License",
    description: "Upload your real estate license",
    name: "LICENSE",
  },
  {
    title: "Certificate",
    description: "Upload a certificate",
    name: "CERTIFICATE",
  },
];
const Documents = ({ formData, localDocs, setLocalDocs }) => {
  const { deleteDocument, deleteLoading } = useCompanyApplication();

  const docsMap = (formData.documents || []).reduce(
    (acc, doc) => {
      acc[doc.type] = doc;
      return acc;
    },
    {} as Record<string, any>,
  );

  return (
    <AnimateStep>
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold">Upload Documents</h2>

        <div className="bg-white space-y-6">
          {docs.map((doc) => {
            const backendDoc: any = docsMap[doc.name];
            const display =
              backendDoc &&
              backendDoc.type + " " + backendDoc?.publicId?.split("/").pop();

            return (
              <div
                key={doc.name}
                className="border border-dashed rounded-xl p-5 flex justify-between items-center"
              >
                <div className="flex items-center gap-4 p-4">
                  <Upload size={25} />
                  <div>
                    <h2 className="font-medium">{doc.title}</h2>

                    <p className="text-gray-500">
                      {/* priority: local -> backend -> default */}
                      {localDocs[doc.name]?.name || display || doc.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="cursor-pointer bg-black text-white px-4 py-2 rounded-lg text-sm">
                    Upload
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        setLocalDocs((prev) => ({
                          ...prev,
                          [doc.name]: file,
                        }));
                      }}
                    />
                  </label>

                  {backendDoc && (
                    <button
                      onClick={() =>
                        deleteDocument(doc.name as CompanyDocumentType)
                      }
                      className="text-red-500 text-sm border border-red-200 rounded cursor-pointer py-2 px-4"
                    >
                      {deleteLoading ? <Loader text="Removing..." /> : "Remove"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimateStep>
  );
};

export default Documents;
