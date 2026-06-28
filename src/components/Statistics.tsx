import AnimatedCard from "./AnimatedCard";
import {
  FaFolderOpen,
  FaCode,
  FaCertificate,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const stats = [
  {
    title: "Projects",
    value: "4+",
    icon: <FaFolderOpen />,
    color: "bg-blue-600",
  },
  {
    title: "Technologies",
    value: "12+",
    icon: <FaCode />,
    color: "bg-green-600",
  },
  {
    title: "Certifications",
    value: "4",
    icon: <FaCertificate />,
    color: "bg-purple-600",
  },
  {
    title: "Internship",
    value: "1",
    icon: <FaBriefcase />,
    color: "bg-orange-600",
  },
  {
    title: "Graduation",
    value: "2027",
    icon: <FaGraduationCap />,
    color: "bg-red-600",
  },
  {
    title: "Experience",
    value: "AI & Full Stack",
    icon: <FaLaptopCode />,
    color: "bg-cyan-600",
  },
];

export default function Statistics() {
  return (
    <AnimatedCard
      delay={1}
      className="h-full p-5 sm:p-6 lg:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Statistics
      </h2>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >

            <div
              className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center text-2xl mb-4`}
            >
              {stat.icon}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white break-words">
              {stat.value}
            </h3>

            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              {stat.title}
            </p>

          </div>

        ))}

      </div>

      {/* Career Overview */}

      <div className="mt-8 bg-blue-600/20 border border-blue-500 rounded-2xl p-5 hover:border-cyan-400 transition">

        <h3 className="text-xl font-semibold text-blue-400">
          Career Overview
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-7 mt-4">
          Passionate AI & Data Science student with practical
          experience in Linux Administration, Networking,
          Full Stack Development, React, PHP, Python and MySQL.
          Continuously learning and building real-world projects
          while expanding my expertise in enterprise software
          development.
        </p>

      </div>

    </AnimatedCard>
  );
}