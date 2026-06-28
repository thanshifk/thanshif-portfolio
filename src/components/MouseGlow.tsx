import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 140,
    damping: 22,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 140,
    damping: 22,
    mass: 0.4,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices / small screens
    if (window.innerWidth >= 1024) {
      setEnabled(true);
    }

    const handleResize = () => {
      setEnabled(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* Main Glow */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-10
        w-[500px]
        h-[500px]
        rounded-full
        blur-[170px]
        opacity-80
        bg-gradient-to-r
        from-cyan-400/20
        via-blue-500/15
        to-purple-500/20
        "
      />

      {/* Inner Bright Glow */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="
        pointer-events-none
        fixed
        top-[110px]
        left-[110px]
        z-10
        w-[180px]
        h-[180px]
        rounded-full
        blur-[70px]
        bg-cyan-400/20
        "
      />
    </>
  );
}