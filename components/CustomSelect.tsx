"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CustomSelect = ({ options, type }: { options: string[], type: string }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        !selectRef.current ||
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="relative w-48 text-sm">
      <div
        onClick={() => setOpen(!open)}
        ref={selectRef}
        // onMouseEnter={() => {
        //     setOpen(true)
        // }}
        // onMouseLeave={() => {
        //     setOpen(false)
        // }}
        className="flex items-center justify-between border border-gray-300 p-2 rounded-md cursor-pointer bg-white"
      >
        {selected || type } <ChevronDown size={12} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full bg-white mt-2 rounded-md shadow-lg z-10"
          >
            {options.map((opt, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="p-2 cursor-poimter hover:bg-gray-100 cursor-pointer"
              >
                {opt}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
