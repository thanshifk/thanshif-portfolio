import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 items-center">

      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
        <FaRobot />
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-md px-5 py-4">

        <div className="flex gap-2">

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: i * 0.15,
              }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-400"
            />
          ))}

        </div>

      </div>

    </div>
  );
}