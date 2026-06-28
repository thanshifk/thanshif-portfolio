import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  FaGithub,
  FaTimes,
  FaCode,
  FaLaptopCode,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

type PopupProps = {
  project: string | null;
  onClose: () => void;
};

const projectData = {
  service: {
    title: "Service Monitoring GUI",
    description:
      "Enterprise Linux monitoring dashboard for RHEL with real-time service monitoring, service control, logs and analytics.",
    technologies: ["React", "PHP", "MySQL", "Linux", "RHEL"],
    features: [
      "Real-time service monitoring",
      "Start / Stop / Restart services",
      "Log viewer",
      "System analytics dashboard",
      "Responsive UI",
    ],
    github: "https://github.com/thanshifk",
    demo: "#",
  },

  canteen: {
    title: "Canteen Management System",
    description:
      "Android application for attendance, food count, reports and complete canteen management.",
    technologies: ["Android", "Kotlin", "MySQL"],
    features: [
      "Food Count",
      "Attendance",
      "Reports",
      "QR Login",
      "Manager Dashboard",
    ],
    github: "https://github.com/thanshifk",
    demo: "#",
  },

  attendance: {
    title: "Attendance Management App",
    description:
      "QR-code based attendance application with secure authentication and live attendance tracking.",
    technologies: ["Kotlin", "MySQL"],
    features: [
      "QR Scanner",
      "Attendance History",
      "Authentication",
      "Reports",
    ],
    github: "https://github.com/thanshifk",
    demo: "#",
  },

  linux: {
    title: "Linux Service Dashboard",
    description:
      "Python dashboard for monitoring Linux services, logs and complete system health.",
    technologies: ["Python", "Linux", "RHEL"],
    features: [
      "CPU Monitoring",
      "Memory Monitoring",
      "Log Viewer",
      "Service Status",
    ],
    github: "https://github.com/thanshifk",
    demo: "#",
  },
};

export default function ProjectPopup({
  project,
  onClose,
}: PopupProps) {

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", esc);
    };
  }, [project, onClose]);

  if (!project) return null;

  const data =
    projectData[project as keyof typeof projectData];

  return (
    <AnimatePresence>

      <motion.div
        onClick={onClose}
        className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
        >

          <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition"
          >
            <FaTimes />
          </button>

          <div className="p-5 sm:p-8">

            {/* Header */}

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
                <FaLaptopCode />
              </div>

              <div>

                <h2 className="text-2xl sm:text-3xl font-bold">
                  {data.title}
                </h2>

                <p className="text-slate-400 mt-1">
                  Portfolio Project
                </p>

              </div>

            </div>

            <p className="text-slate-300 leading-8">
              {data.description}
            </p>

            {/* Technologies */}

            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-3">

              {data.technologies.map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Features */}

            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">
              Key Features
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {data.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 bg-slate-800 rounded-xl p-4"
                >
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={data.demo}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <button
                className="flex justify-center items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl transition"
              >
                <FaCode />
                Source Code
              </button>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}