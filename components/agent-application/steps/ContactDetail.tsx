"use client";

import AnimateStep from "@/components/layout/AnimateStep";
import { Input } from "@/components/ui/input";
import { inputClass } from "@/lib/utils";

const ContactDetail = ({ formData, updateForm }) => {

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
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="">City</label>
              <Input
                type="text"
                placeholder="Birmingham City"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="">State / Province</label>
              <Input
                type="text"
                placeholder="Paris"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <select className={inputClass}>
              <option value="">Country</option>
            </select>
          </div>
        </div>
      </div>
    </AnimateStep>
  );
};

export default ContactDetail;
