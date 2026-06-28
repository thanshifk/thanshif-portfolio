import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full
          bg-gradient-to-r from-blue-600 to-cyan-500
          shadow-lg shadow-blue-500/40
          hover:scale-110 hover:shadow-blue-500/60
          transition-all duration-300
          flex items-center justify-center"
        >
          <ChevronUp size={28} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}