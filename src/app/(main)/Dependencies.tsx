import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Dependencies() {
  return (
    <div className="flex gap-[10px]">
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#62DAFB60]"
        style={{ backgroundColor: `#62DAFB20`, borderColor: `#62DAFB` }}
      >
        <Icon icon="devicon:react" className="text-[20px]" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#FFFFFF60]"
        style={{ backgroundColor: `#FAEDFF`, borderColor: `##E9D8FF20` }}
      >
        <Icon icon="devicon:nextjs" className="text-[20px]" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#FFFFFF60]"
        style={{ backgroundColor: `#FAEDFF`, borderColor: `##E9D8FF20` }}
      >
        <Icon icon="devicon:framermotion" className="text-[20px]" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}
        className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#38BDF860]"
        style={{ backgroundColor: `#38BDF820`, borderColor: `#38BDF8` }}
      >
        <Icon icon="devicon:tailwindcss" className="text-[20px]" />
      </motion.div>
    </div>
  );
}
