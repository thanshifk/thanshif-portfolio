import AnimatedCard from "./AnimatedCard";
import {
  FaCertificate,
  FaPython,
  FaLinux,
  FaNetworkWired,
  FaBrain,
} from "react-icons/fa";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Programming Fundamentals",
    year: "2024",
    icon: <FaPython />,
    color: "bg-yellow-500",
  },
  {
    title: "Linux Administration",
    issuer: "Linux System Management",
    year: "2025",
    icon: <FaLinux />,
    color: "bg-red-500",
  },
  {
    title: "Networking Fundamentals",
    issuer: "Computer Networks",
    year: "2025",
    icon: <FaNetworkWired />,
    color: "bg-green-500",
  },
  {
    title: "Artificial Intelligence",
    issuer: "AI & Data Science",
    year: "2025",
    icon: <FaBrain />,
    color: "bg-purple-500",
  },
];

export default function Certifications() {
  return (
    <AnimatedCard
      delay={0.9}
      className="h-full p-5 sm:p-6 lg:p-8"
    >
      {/* Header */}

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">

        <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
          <FaCertificate />
        </div>

        <div className="text-center sm:text-left">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Certifications
          </h2>

          <p className="text-slate-400">
            Learning Journey
          </p>

        </div>

      </div>

      {/* Certificates */}

      <div className="space-y-5">

        {certifications.map((certificate) => (

          <div
            key={certificate.title}
            className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300"
          >

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div className="flex items-center gap-4">

                <div
                  className={`w-12 h-12 rounded-xl ${certificate.color} flex items-center justify-center text-xl flex-shrink-0`}
                >
                  {certificate.icon}
                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    {certificate.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {certificate.issuer}
                  </p>

                </div>

              </div>

              <span className="self-start sm:self-center bg-blue-600 px-3 py-1 rounded-full text-sm">
                {certificate.year}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* Summary */}

      <div className="mt-8 bg-blue-600/20 border border-blue-500 rounded-2xl p-5 hover:border-cyan-400 transition">

        <h3 className="text-blue-400 text-xl font-semibold">
          Continuous Learning
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-7 mt-4">
          I continuously enhance my skills in Artificial Intelligence,
          Linux Administration, Networking, Full Stack Development,
          and Cloud Technologies through certifications, practical
          projects, and industry experience.
        </p>

      </div>

    </AnimatedCard>
  );
}