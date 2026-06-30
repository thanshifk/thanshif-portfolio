import AnimatedCounter from "./AnimatedCounter";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaLaptopCode,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

import { Analytics } from "../analytics";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="col-span-12"
    >
      <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 hover:border-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.18)] transition-all duration-300">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Profile Image */}

          <div className="flex-shrink-0">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={profile}
                alt="Thanshif"
                className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.45)] hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Content */}

          <div className="flex-1 text-center lg:text-left">

            <span className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 border border-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-5">
              🚀 Available for Internship & Freelance
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white">
              Thanshif K
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-semibold mt-4 h-10">
              <TypeAnimation
                sequence={[
                  "Artificial Intelligence Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Linux Administrator",
                  2000,
                  "React Developer",
                  2000,
                  "Network Engineer",
                  2000,
                ]}
                speed={65}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 leading-7 lg:leading-8 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0 text-slate-300">
              Passionate AI & Data Science student with hands-on
              experience in Linux Administration, Networking,
              React, TypeScript, PHP, Python and MySQL.
              Currently working on enterprise Network Management
              Systems at Larsen & Toubro.
            </p>

            {/* Statistics */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

              <div className="bg-slate-800 rounded-2xl p-5 text-center hover:-translate-y-2 hover:bg-slate-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <FaLaptopCode className="mx-auto text-blue-400 text-3xl mb-3" />
                <h3 className="text-3xl font-bold text-white">
                  <AnimatedCounter end={4} suffix="+" />
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Projects
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-5 text-center hover:-translate-y-2 hover:bg-slate-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <FaCode className="mx-auto text-green-400 text-3xl mb-3" />
                <h3 className="text-3xl font-bold text-white">
                  <AnimatedCounter end={12} suffix="+" />
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Technologies
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-5 text-center hover:-translate-y-2 hover:bg-slate-700 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                <FaBriefcase className="mx-auto text-orange-400 text-3xl mb-3" />
                <h3 className="text-3xl font-bold text-white">
                  L&amp;T
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Internship
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => Analytics.resumeDownload()}
                className="w-full sm:w-auto flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={() => Analytics.contactClick()}
                className="w-full sm:w-auto flex justify-center items-center gap-2 border border-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <FaEnvelope />
                Contact Me
              </a>

            </div>

            {/* Social */}

            <div className="flex justify-center lg:justify-start gap-4 mt-8">

              <a
                href="https://github.com/thanshifk"
                target="_blank"
                rel="noreferrer"
                onClick={() => Analytics.githubClick()}
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/thanshifk"
                target="_blank"
                rel="noreferrer"
                onClick={() => Analytics.linkedinClick()}
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}