import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

export type SkillData = {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
  experience: string;
  description: string;
  projects: string[];
  technologies: string[];
};

type SkillPopupProps = {
  skill: SkillData | null;
  onClose: () => void;
};

export default function SkillPopup({
  skill,
  onClose,
}: SkillPopupProps) {

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [onClose]);

  if (!skill) return null;

  return (
    <AnimatePresence>

      <motion.div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/80
          backdrop-blur-md
          p-3
          sm:p-5
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >

        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
          }}
          transition={{
  type: "spring",
  stiffness: 260,
  damping: 24,
}}
          className="
relative
w-[560px]
max-w-[95vw]
h-[720px]
max-h-[90vh]
rounded-3xl
border
border-slate-700
bg-slate-900/95
backdrop-blur-xl
shadow-[0_30px_80px_rgba(0,0,0,.7)]
overflow-hidden
flex
flex-col
"
        >

          <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              z-20
              w-10
              h-10
              rounded-full
              bg-slate-800
              hover:bg-red-600
hover:rotate-90
duration-300
              transition
              flex
              items-center
              justify-center
            "
          >
            <FaTimes />
          </button>

          <div
  className="
    flex-1
    overflow-y-auto
    p-6
    scrollbar-thin
    scrollbar-thumb-blue-500
    scrollbar-track-slate-800
  "
>

            <div className="flex items-center gap-4">

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl text-white shadow-lg`}
              >
                {skill.icon}
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {skill.name}
                </h2>

                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 text-sm">
                  {skill.experience}
                </span>

              </div>

            </div>

            <div className="mt-6">

              <div className="flex justify-between mb-2">

                <span className="text-slate-300">
                  Proficiency
                </span>

                <span className="text-blue-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-4 rounded-full bg-slate-700 overflow-hidden">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-300">
              {skill.description}
            </p>
                        {/* Projects */}

            <div className="mt-6">

              <h3 className="flex items-center gap-2 text-2xl font-semibold text-blue-400 mb-5">
                <FaCheckCircle />
                Related Projects
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                {skill.projects.map((project) => (

                  <motion.div
                    key={project}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                      bg-slate-800
                      rounded-xl
                      p-4
                      border
                      border-slate-700
                    "
                  >
                    <div className="flex items-center gap-3">

                      <FaCheckCircle className="text-green-400" />

                      <span className="text-slate-200">
                        {project}
                      </span>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>
                        {/* Technologies */}

            <div className="mt-6">

              <h3 className="flex items-center gap-2 text-2xl font-semibold text-blue-400 mb-5">
                <FaCode />
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.technologies.map((tech) => (

                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-600/20
                      border
                      border-blue-500
                      text-sm
                      text-blue-300
                    "
                  >
                    {tech}
                  </motion.span>

                ))}

              </div>

            </div>

            {/* Sticky Footer */}

            <div
              className="
                sticky
                bottom-0
                mt-6
                pt-6
                pb-2
                border-t
                border-slate-700
                bg-slate-900
                flex
                flex-col
                sm:flex-row
                justify-between
                items-center
                gap-4
              "
            >

              <p className="text-slate-400 text-sm">
                Explore more technologies and projects in my portfolio.
              </p>

              <button
                onClick={onClose}
                className="
px-7
py-3
rounded-xl
bg-gradient-to-r
from-blue-600
to-cyan-500
hover:scale-105
active:scale-95
transition-all
duration-300
font-medium
shadow-lg
shadow-blue-500/30
"
              >
                Close
              </button>

            </div>

                    </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}