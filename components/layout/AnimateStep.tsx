"use client"

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AnimateStep = ({ children }: { children: React.ReactNode }) => {
  return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
  );
};

export default AnimateStep;
