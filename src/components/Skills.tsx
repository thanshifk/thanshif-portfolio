import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import SkillPopup from "./SkillPopup";
import type { SkillData } from "./SkillPopup";
import {
  FaPython,
  FaJava,
  FaReact,
  FaLinux,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiPhp,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

const skills: SkillData[] = [
  {
    name: "Python",
    level: 90,
    icon: <FaPython />,
    color: "from-yellow-400 to-yellow-600",
    experience: "Advanced",
    description:
      "Experienced in backend development, automation, Linux scripting, AI applications and data processing.",
    projects: [
      "Linux Dashboard",
      "Service Monitoring GUI",
    ],
    technologies: [
      "Flask",
      "FastAPI",
      "Pandas",
      "Automation",
    ],
  },

  {
    name: "Java",
    level: 80,
    icon: <FaJava />,
    color: "from-orange-400 to-orange-600",
    experience: "Intermediate",
    description:
      "Strong understanding of Object-Oriented Programming and Java application development.",
    projects: [
      "College Projects",
    ],
    technologies: [
      "OOP",
      "Collections",
      "JDBC",
    ],
  },

  {
    name: "React",
    level: 85,
    icon: <FaReact />,
    color: "from-cyan-400 to-cyan-600",
    experience: "Advanced",
    description:
      "Building modern responsive web applications using React, Tailwind CSS and Framer Motion.",
    projects: [
      "Portfolio Website",
      "Monitoring GUI",
    ],
    technologies: [
      "Hooks",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    name: "TypeScript",
    level: 80,
    icon: <SiTypescript />,
    color: "from-blue-500 to-blue-700",
    experience: "Intermediate",
    description:
      "Developing scalable React applications with strong typing.",
    projects: [
      "Portfolio",
    ],
    technologies: [
      "Interfaces",
      "Types",
      "React",
    ],
  },
    {
    name: "PHP",
    level: 75,
    icon: <SiPhp />,
    color: "from-purple-400 to-purple-600",
    experience: "Intermediate",
    description:
      "Developing secure backend applications, APIs and dynamic web solutions using PHP.",
    projects: [
      "Service Monitoring GUI",
    ],
    technologies: [
      "PHP",
      "REST API",
      "MVC",
    ],
  },

  {
    name: "Linux",
    level: 90,
    icon: <FaLinux />,
    color: "from-gray-300 to-gray-500",
    experience: "Advanced",
    description:
      "Experienced in Linux administration, shell scripting, system services and troubleshooting.",
    projects: [
      "Linux Dashboard",
      "L&T Internship",
    ],
    technologies: [
      "Shell",
      "Bash",
      "Systemd",
      "CLI",
    ],
  },

  {
    name: "MySQL",
    level: 85,
    icon: <SiMysql />,
    color: "from-sky-400 to-sky-600",
    experience: "Advanced",
    description:
      "Designing databases, optimizing queries and managing relational data for enterprise applications.",
    projects: [
      "Portfolio Backend",
      "Canteen Management",
      "Service Monitoring GUI",
    ],
    technologies: [
      "Indexes",
      "Joins",
      "Views",
      "Triggers",
    ],
  },

  {
    name: "SQL",
    level: 85,
    icon: <FaDatabase />,
    color: "from-blue-400 to-blue-600",
    experience: "Advanced",
    description:
      "Writing optimized SQL queries and managing relational databases.",
    projects: [
      "Monitoring GUI",
      "Canteen Management",
    ],
    technologies: [
      "MySQL",
      "MariaDB",
      "Stored Procedures",
    ],
  },

  {
    name: "Git",
    level: 80,
    icon: <FaGitAlt />,
    color: "from-orange-500 to-orange-700",
    experience: "Intermediate",
    description:
      "Version control, collaboration and source code management using Git and GitHub.",
    projects: [
      "Portfolio",
      "Internship",
    ],
    technologies: [
      "GitHub",
      "Branches",
      "Pull Requests",
      "Merge",
    ],
  },

  {
    name: "Networking",
    level: 80,
    icon: <>🌐</>,
    color: "from-green-400 to-green-600",
    experience: "Intermediate",
    description:
      "Worked with enterprise networking concepts including routing, switching and Network Management Systems.",
    projects: [
      "L&T Network Management System",
    ],
    technologies: [
      "TCP/IP",
      "Routing",
      "Switching",
      "Network Monitoring",
    ],
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] =
    useState<SkillData | null>(null);

  return (
    <>
      <AnimatedCard
        delay={0.3}
        className="p-6"
      >
        <h2 className="text-3xl font-bold mb-8">
          Skills
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
                    {skills.map((skill, index) => (

            <motion.button
              key={skill.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => setSelectedSkill(skill)}
              className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-6 text-left transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              {/* Background Glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon & Percentage */}

              <div className="relative flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-2xl text-white shadow-lg`}
                  >
                    {skill.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {skill.experience}
                    </p>

                  </div>

                </div>

                <span className="text-2xl font-bold text-blue-400">
                  {skill.level}%
                </span>

              </div>

              {/* Progress */}

              <div className="relative mt-6 h-3 overflow-hidden rounded-full bg-slate-700">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />

              </div>

              {/* Footer */}

              <div className="relative mt-6 flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Click to explore
                </span>

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="text-blue-400"
                >
                  →
                </motion.div>

              </div>

            </motion.button>

          ))}

        </div>

      </AnimatedCard>

      <SkillPopup
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

    </>
  );
}