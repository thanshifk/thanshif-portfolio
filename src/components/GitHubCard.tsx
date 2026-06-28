import AnimatedCard from "./AnimatedCard";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

export default function GitHubCard() {
  return (
    <AnimatedCard
      delay={0.8}
      className="h-full p-5 sm:p-6 lg:p-8"
    >
      {/* Header */}

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

        <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-4xl hover:bg-slate-700 transition">
          <FaGithub />
        </div>

        <div className="text-center sm:text-left">

          <h2 className="text-2xl sm:text-3xl font-bold">
            GitHub
          </h2>

          <p className="text-slate-400">
            @thanshifk
          </p>

        </div>

      </div>

      {/* Description */}

      <p className="text-slate-300 text-sm sm:text-base leading-7 lg:leading-8 mt-6">
        I enjoy building AI applications, Linux utilities,
        Full Stack web applications, and modern software
        solutions. Explore my repositories, projects and
        development journey on GitHub.
      </p>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5 text-center hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

          <FaLaptopCode className="text-3xl text-blue-400 mx-auto mb-3" />

          <h3 className="text-3xl font-bold">
            4+
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Projects
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5 text-center hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

          <FaCodeBranch className="text-3xl text-green-400 mx-auto mb-3" />

          <h3 className="text-3xl font-bold">
            2025
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Active Since
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5 text-center hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

          <FaStar className="text-3xl text-yellow-400 mx-auto mb-3" />

          <h3 className="text-3xl font-bold">
            AI
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Focus Area
          </p>

        </div>

      </div>

      {/* Technologies */}

      <div className="mt-8">

        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          Primary Technologies
        </h3>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            "TypeScript",
            "Python",
            "PHP",
            "MySQL",
            "Linux",
            "RHEL",
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

      {/* Button */}

      <a
        href="https://github.com/thanshifk"
        target="_blank"
        rel="noreferrer"
        className="mt-8 w-full sm:w-fit inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
      >
        <FaGithub />

        Visit GitHub

        <FaArrowRight />
      </a>

    </AnimatedCard>
  );
}