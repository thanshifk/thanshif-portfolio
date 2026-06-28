import { motion } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaTrash,
  FaCircle,
} from "react-icons/fa";

type Props = {
  onClose: () => void;
  onClear: () => void;
};

export default function ChatHeader({
  onClose,
  onClear,
}: Props) {
  return (
    <div className="relative overflow-hidden">

      {/* Animated Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700" />

      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,.15), transparent, rgba(255,255,255,.15))",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Header */}

      <div className="relative z-10 px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-4">

          {/* Animated Avatar */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="relative"
          >

            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl text-white shadow-lg">

              <FaRobot />

            </div>

            <span className="absolute bottom-0 right-0 text-green-400">

              <FaCircle size={12} />

            </span>

          </motion.div>

          {/* Text */}

          <div>

            <h2 className="text-xl font-bold text-white">

              Thanshif AI

            </h2>

            <p className="text-sm text-white/90">

              Powered by Gemini 2.5 Flash

            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-2">

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onClear}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
            title="Clear Chat"
          >
            <FaTrash />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 transition flex items-center justify-center text-white"
            title="Close"
          >
            <FaTimes />
          </motion.button>

        </div>

      </div>

    </div>
  );
}