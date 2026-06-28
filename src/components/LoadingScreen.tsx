import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950"
    >
      <div className="flex flex-col items-center">

        {/* Logo */}

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          {/* Logo Image */}

          <motion.img
            src={logo}
            alt="Thanshif Logo"
            className="w-24 h-24 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-blue-500"
          />

        </motion.div>

        {/* Name */}

        <motion.h2
          className="mt-8 text-3xl font-bold text-white"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Thanshif K
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          className="mt-3 text-slate-400 tracking-wide"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Initializing Experience...
        </motion.p>

      </div>
    </motion.div>
  );
}