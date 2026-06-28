import AnimatedCard from "./AnimatedCard";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaFlagCheckered,
} from "react-icons/fa";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech AI & Data Science",
    subtitle:
      "Dhanalakshmi Srinivasan College of Engineering and Technology",
    icon: <FaGraduationCap />,
    color: "bg-blue-600",
  },
  {
    year: "2025",
    title: "L&T Internship",
    subtitle: "Network Management System (NMS)",
    icon: <FaBriefcase />,
    color: "bg-green-600",
  },
  {
    year: "2026",
    title: "Major Projects",
    subtitle: "AI • Linux • Full Stack Development",
    icon: <FaCode />,
    color: "bg-purple-600",
  },
  {
    year: "2027",
    title: "Expected Graduation",
    subtitle: "Bachelor of Technology",
    icon: <FaFlagCheckered />,
    color: "bg-red-600",
  },
];

export default function Timeline() {
  return (
    <AnimatedCard
      delay={0.6}
      className="h-full p-5 sm:p-6 lg:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Timeline
      </h2>

      {/* Timeline */}

      <div className="relative border-l-4 border-blue-500 ml-5 sm:ml-6">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="relative pl-8 sm:pl-10 pb-10 last:pb-0"
          >

            {/* Circle */}

            <div
              className={`absolute -left-[24px] sm:-left-[30px] top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg`}
            >
              {item.icon}
            </div>

            {/* Year */}

            <span className="text-blue-400 font-bold text-base sm:text-lg">
              {item.year}
            </span>

            {/* Title */}

            <h3 className="text-lg sm:text-xl font-semibold mt-1 leading-7">
              {item.title}
            </h3>

            {/* Subtitle */}

            <p className="text-slate-400 mt-2 leading-7 text-sm sm:text-base">
              {item.subtitle}
            </p>

          </div>

        ))}

      </div>

      {/* Journey Card */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

        <h3 className="text-xl font-semibold text-blue-400">
          Career Journey
        </h3>

        <p className="text-slate-300 mt-4 leading-7 text-sm sm:text-base">
          My journey started with Artificial Intelligence &
          Data Science, followed by hands-on industrial
          experience at Larsen & Toubro, where I worked on
          Linux-based Network Management Systems and modern
          web technologies. I continue building projects that
          combine AI, Linux administration, networking and
          full stack development.
        </p>

      </div>

    </AnimatedCard>
  );
}