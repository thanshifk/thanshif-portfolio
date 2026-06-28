import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <motion.div
        className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[120px]"
        animate={{
          x: [0, 200, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{
          x: [0, -180, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />
    </div>
  );
}