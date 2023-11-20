import { motion } from "framer-motion";
import Dialog from "@/components/Dialog";

function DialogContent() {
  return (
    <div className="flex-auto grid place-content-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-green-500 rounded-md shadow-lg shadow-green-500/70 select-none"
        onClick={() => {
          Dialog.show(<DialogContent />);
        }}
      >
        click here~
      </motion.button>
    </div>
  );
}

export default function DialogBtn() {
  return (
    <div className="flex flex-col gap-[30px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-green-500 rounded-md shadow-lg shadow-green-500/70 select-none"
        onClick={() => {
          Dialog.show(<DialogContent />);
        }}
      >
        click here~
      </motion.button>
    </div>
  );
}
