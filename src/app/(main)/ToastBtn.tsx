import { motion } from "framer-motion";
import Toast from "@/components/Toast";

export default function ToastBtn() {
  return (
    <div className="flex flex-col gap-[30px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-gray-500 rounded-md shadow-lg shadow-gray-500/70 select-none
        "
        onClick={() => {
          Toast.show({
            content: "2333",
            type: "info",
          });
        }}
      >
        click here~
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-orange-500 rounded-md shadow-lg shadow-amber-500/70 select-none
        "
        onClick={() => {
          Toast.show({
            content: "2333",
            type: "warning",
            duration: 3000,
          });
        }}
      >
        click here~
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-green-500 rounded-md shadow-lg shadow-green-500/70 select-none
        "
        onClick={() => {
          Toast.show({
            content: "2333",
            type: "success",
            duration: 4000,
          });
        }}
      >
        click here~
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-red-500 rounded-md shadow-lg shadow-red-500/70 select-none
        "
        onClick={() => {
          Toast.show({
            content: "2333",
            type: "error",
            duration: 5000,
          });
        }}
      >
        click here~
      </motion.button>
    </div>
  );
}
