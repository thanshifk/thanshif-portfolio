import AnimatedCard from "./AnimatedCard";
import {
  FaBuilding,
  FaCalendarAlt,
  FaLaptopCode,
  FaServer,
  FaLinux,
  FaCheckCircle,
} from "react-icons/fa";

export default function Internship() {
  return (
    <AnimatedCard
      delay={0.5}
      className="h-full p-5 sm:p-6 lg:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Internship
      </h2>

      {/* Company */}

      <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-3xl flex-shrink-0">
            <FaBuilding />
          </div>

          <div>

            <h3 className="text-xl sm:text-2xl font-bold">
              Larsen & Toubro
            </h3>

            <p className="text-blue-400 mt-1">
              Network Management System (NMS)
            </p>

          </div>

        </div>

      </div>

      {/* Details */}

      <div className="space-y-6 mt-8">

        <div className="flex items-start gap-4">

          <FaCalendarAlt className="text-blue-400 text-2xl mt-1 flex-shrink-0" />

          <div>

            <h3 className="font-semibold text-lg">
              Duration
            </h3>

            <p className="text-slate-400">
              July 2025 – August 2025
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaLaptopCode className="text-blue-400 text-2xl mt-1 flex-shrink-0" />

          <div>

            <h3 className="font-semibold text-lg">
              Role
            </h3>

            <p className="text-slate-400">
              Software Development Intern
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaServer className="text-blue-400 text-2xl mt-1 flex-shrink-0" />

          <div>

            <h3 className="font-semibold text-lg">
              Domain
            </h3>

            <p className="text-slate-400">
              Network Management Systems
            </p>

          </div>

        </div>

      </div>

      {/* Responsibilities */}

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="text-xl font-semibold text-blue-400 mb-5">
          Responsibilities
        </h3>

        <div className="space-y-4">

          {[
            "Developed Linux-based service monitoring solutions.",
            "Worked with Network Management Systems (NMS).",
            "Built web interfaces using React, PHP and MySQL.",
            "Managed Linux services using systemd and RHEL.",
          ].map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >
              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

              <p className="text-slate-300 leading-7">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Technologies */}

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="text-xl font-semibold text-blue-400 mb-5">
          Technologies Used
        </h3>

        <div className="flex flex-wrap gap-3">

          {[
            "Linux",
            "RHEL",
            "React",
            "PHP",
            "Python",
            "MySQL",
            "Networking",
            "Git",
          ].map((tech) => (

            <span
              key={tech}
              className="px-4 py-2 rounded-full text-sm bg-blue-600/20 border border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white transition"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* Achievement */}

      <div className="mt-8 bg-blue-600/20 border border-blue-500 rounded-2xl p-5 hover:border-cyan-400 transition">

        <div className="flex flex-col sm:flex-row gap-4">

          <FaLinux className="text-4xl text-blue-400 flex-shrink-0" />

          <div>

            <h3 className="text-lg font-bold">
              Internship Achievement
            </h3>

            <p className="text-slate-300 mt-2 leading-7">
              Successfully contributed to Linux based
              Network Management projects and gained
              hands-on experience with enterprise software
              development using modern technologies.
            </p>

          </div>

        </div>

      </div>

    </AnimatedCard>
  );
}