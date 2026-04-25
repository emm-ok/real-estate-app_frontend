"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const MainAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainAnimate;
