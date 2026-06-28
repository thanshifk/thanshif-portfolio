import AnimatedCard from "./AnimatedCard";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

export default function Education() {
  return (
    <AnimatedCard
      delay={0.4}
      className="h-full p-5 sm:p-6 lg:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Education
      </h2>

      {/* Degree Card */}

      <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
            <FaGraduationCap />
          </div>

          <div>

            <h3 className="text-lg sm:text-xl font-semibold leading-7">
              B.Tech Artificial Intelligence &
              <br className="hidden sm:block" />
              Data Science
            </h3>

            <p className="text-slate-400 mt-1">
              Anna University
            </p>

          </div>

        </div>

      </div>

      {/* Information */}

      <div className="mt-8 space-y-6">

        <div className="flex items-start gap-4">

          <FaUniversity className="text-blue-400 text-2xl mt-1 flex-shrink-0" />

          <div>

            <h3 className="font-semibold text-lg">
              College
            </h3>

            <p className="text-slate-400 leading-7">
              Dhanalakshmi Srinivasan College of
              Engineering and Technology
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaCalendarAlt className="text-blue-400 text-2xl mt-1 flex-shrink-0" />

          <div>

            <h3 className="font-semibold text-lg">
              Duration
            </h3>

            <p className="text-slate-400">
              2023 – 2027
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <FaAward className="text-blue-400 text-2xl mt-1 flex-shrink-0" />

          <div>

            <h3 className="font-semibold text-lg">
              Status
            </h3>

            <p className="text-green-400 font-medium">
              Final Year Student
            </p>

          </div>

        </div>

      </div>

      {/* Academic Highlights */}

      <div className="mt-8 border-t border-slate-700 pt-6">

        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          Academic Highlights
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {[
            "Artificial Intelligence",
            "Data Science",
            "Linux Administration",
            "Full Stack Development",
            "Networking",
            "System Monitoring",
          ].map((item) => (

            <div
              key={item}
              className="bg-slate-800 rounded-xl px-4 py-3 hover:bg-slate-700 transition"
            >
              <span className="text-green-400 mr-2">
                ✓
              </span>

              <span className="text-slate-300">
                {item}
              </span>
            </div>

          ))}

        </div>

      </div>

    </AnimatedCard>
  );
}