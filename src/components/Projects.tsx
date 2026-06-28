import { useState } from "react";
import AnimatedCard from "./AnimatedCard";
import {
  FaServer,
  FaUtensils,
  FaClipboardCheck,
  FaLinux,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

type ProjectsProps = {
  onSelectProject: (project: string) => void;
};

const projects = [
  {
    id: "service",
    title: "Service Monitoring GUI",
    description:
      "Linux service monitoring dashboard for RHEL with real-time status monitoring and management.",
    tech: ["React", "PHP", "MySQL", "RHEL"],
    icon: <FaServer />,
    category: "Web",
    github: "https://github.com/thanshifk",
    demo: "",
  },
  {
    id: "canteen",
    title: "Canteen Management System",
    description:
      "Android application for food count, attendance and canteen management.",
    tech: ["Kotlin", "MySQL", "Android"],
    icon: <FaUtensils />,
    category: "Android",
    github: "https://github.com/thanshifk",
    demo: "",
  },
  {
    id: "attendance",
    title: "Attendance Management App",
    description:
      "QR code based attendance management application for employees and students.",
    tech: ["Kotlin", "MySQL"],
    icon: <FaClipboardCheck />,
    category: "Android",
    github: "https://github.com/thanshifk",
    demo: "",
  },
  {
    id: "linux",
    title: "Linux Service Dashboard",
    description:
      "Dashboard for monitoring Linux services, logs and system health.",
    tech: ["Python", "Linux", "RHEL"],
    icon: <FaLinux />,
    category: "Linux",
    github: "https://github.com/thanshifk",
    demo: "",
  },
];

export default function Projects({
  onSelectProject,
}: ProjectsProps) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      filter === "All" || project.category === filter
  );

  return (
    <AnimatedCard
      delay={0.7}
      className="col-span-12 p-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

        <div>
          <h2 className="text-3xl font-bold">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-2">
            Some of the projects I've built using modern technologies.
          </p>
        </div>

      </div>

      {/* Filter Buttons */}

      <div className="flex flex-wrap gap-3 mb-8">

        {["All", "Web", "Android", "Linux"].map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === item
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Projects */}

      <div className="grid lg:grid-cols-2 gap-7">

        {filteredProjects.map((project) => (

          <div
            key={project.id}
            className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] transition-all duration-300"
          >

            {/* Top Gradient */}

            <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

            <div className="p-7">

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                {project.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* Description */}

              <p className="text-slate-400 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex items-center justify-between mt-8">

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
                  >
                    <FaGithub />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-green-600 flex items-center justify-center transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                </div>

                <button
                  onClick={() => onSelectProject(project.id)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  View Details
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </AnimatedCard>
  );
}