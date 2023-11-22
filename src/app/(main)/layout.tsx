"use client";

import React from "react";
import HeadBar from "@/app/(main)/HeadBar";
import { useEffect } from "react";
import Light from "@/components/Light";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useEffect(() => {
    Light.generate();
  });

  return (
    <div className="flex flex-col relative overflow-x-hidden">
      {/* <HeadBar /> */}
      {/* <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        {children}
      </motion.div> */}
      {children}
    </div>
  );
}
