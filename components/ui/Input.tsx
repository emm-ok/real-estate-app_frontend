import React from "react";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="ml-1 text-green-300" size={18} />
      </div>
      <input
        {...props}
        className="w-full pl-16 pr-3 py-2  bg-opacity-50 rounded-lg border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 transition duration-200"
      />
    </div>
  );
};

export default Input;
