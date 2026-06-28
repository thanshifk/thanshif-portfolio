import AnimatedCard from "./AnimatedCard";
import {
  FaBrain,
  FaServer,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";

export default function About() {
  return (
    <AnimatedCard
      delay={0.2}
      className="h-full flex flex-col p-5 sm:p-6 lg:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-slate-300 text-sm sm:text-base leading-7 lg:leading-8">
        I'm a passionate Artificial Intelligence & Data Science student
        with a strong interest in Linux Administration, Networking,
        Full Stack Development and modern web technologies.
      </p>

      <p className="text-slate-300 text-sm sm:text-base leading-7 lg:leading-8 mt-5">
        I enjoy building enterprise applications, monitoring systems,
        and user friendly web applications using React, TypeScript,
        Python, PHP and MySQL.
      </p>

      {/* Skills */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">
          <FaBrain className="text-blue-400 text-3xl mb-3" />

          <h3 className="font-semibold text-lg">
            AI & Data Science
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            Machine Learning
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">
          <FaServer className="text-cyan-400 text-3xl mb-3" />

          <h3 className="font-semibold text-lg">
            Linux
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            RHEL Administration
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">
          <FaLaptopCode className="text-green-400 text-3xl mb-3" />

          <h3 className="font-semibold text-lg">
            Full Stack
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            React • PHP
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">
          <FaNetworkWired className="text-orange-400 text-3xl mb-3" />

          <h3 className="font-semibold text-lg">
            Networking
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            Linux & NMS
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 my-8"></div>

      <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3">
        Career Objective
      </h3>

      <p className="text-slate-300 text-sm sm:text-base leading-7 lg:leading-8">
        Seeking opportunities to contribute to innovative AI, Cloud,
        Linux and Full Stack projects while continuously improving my
        technical skills and delivering impactful software solutions.
      </p>

      <div className="flex-grow"></div>

    </AnimatedCard>
  );
}