// import { Loader2 } from 'lucide-react';
import { Loader2 } from "lucide-react";
import React from "react";

const Loader = ({ size = 24, text }: { size?: number; text?: string }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
      {text && <span>{text}</span>}
    </div>
  );
};

export default Loader;
