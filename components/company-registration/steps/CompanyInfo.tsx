"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { inputClass } from "@/lib/utils";

const CompanyInfo = ({ updateForm, formData }) => {
  const data = formData.companyInfo || {};
  console.log("FormData", data)

  return (
    <AnimateStep>
      <div className="flex flex-col justify-between w-full h-full gap-8">
        <h2 className="text-xl font-semibold">Company Details</h2>
        <div className="bg-white space-y-4">
          <label htmlFor="">Company Name</label>
          <Input
            type="text"
            value={data.name || ""}
            placeholder="Vortex"
            className={inputClass}
            onChange={(e) =>
              updateForm("companyInfo", { name: e.target.value })
            }
          />
          <label htmlFor="">Email</label>
          <Input
            type="email"
            value={data.email || ""}
            placeholder="example@gmail.com"
            className={inputClass}
            onChange={(e) =>
              updateForm("companyInfo", { email: e.target.value })
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="">License Number</label>
              <Input
                value={data.licenseNumber || ""}
                placeholder="NDS9J3402J3040J0324"
                className={inputClass}
                onChange={(e) =>
                  updateForm("companyInfo", { licenseNumber: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">Registration Number</label>
              <Input
                value={data.registrationNumber || ""}
                placeholder="NDS9J3402J3040J0324"
                className={inputClass}
                onChange={(e) =>
                  updateForm("companyInfo", {
                    registrationNumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <select 
          value={data.type || ""}
            onChange={(e) =>
              updateForm("companyInfo", { type: e.target.value })
            }
            className={inputClass}>
            <option value="sec">SEC</option>
            <option value="llc">LLC</option>
          </select>

          <div>
            <label htmlFor="" className="text-sm">
              Website
            </label>
            <Input
              type="text"
              value={data.website || ""}
              placeholder="https://www.vortex.com"
              className={inputClass}
              onChange={(e) =>
              updateForm("companyInfo", { website: e.target.value })
            }
            />
          </div>
          <label htmlFor="">Address</label>
          <Input
            type="text"
            value={data.address || ""}
            placeholder="no1 ketunger street, luton, United Kingdom"
            className={inputClass}
            onChange={(e) =>
              updateForm("companyInfo", { address: e.target.value })
            }
          />
        </div>
      </div>
    </AnimateStep>
  );
};

export default CompanyInfo;
