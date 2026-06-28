import { useEffect, useState } from "react";
import AnimatedCard from "./AnimatedCard";

const commands = [
  {
    command: "whoami",
    output: "Thanshif K",
  },
  {
    command: "role",
    output: "Artificial Intelligence & Data Science Student",
  },
  {
    command: "internship",
    output: "Larsen & Toubro (Network Management System)",
  },
  {
    command: "skills",
    output: `React
TypeScript
Python
PHP
MySQL
Linux
RHEL
Networking`,
  },
  {
    command: "status",
    output: "Available for Internship & Freelance",
  },
];

export default function AITerminal() {
  const [visibleCommands, setVisibleCommands] = useState(0);

  useEffect(() => {
    if (visibleCommands >= commands.length) return;

    const timer = setTimeout(() => {
      setVisibleCommands((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visibleCommands]);

  return (
    <AnimatedCard
      delay={0.75}
      className="overflow-hidden p-0"
    >
      {/* Terminal Header */}

      <div className="flex items-center gap-2 bg-slate-800 px-6 py-4 border-b border-slate-700">

        <div className="w-3 h-3 rounded-full bg-red-500"></div>

        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <span className="ml-4 text-slate-400 text-sm">
          thanshif@portfolio:~
        </span>

      </div>

      {/* Terminal Body */}

      <div className="bg-[#050816] p-6 font-mono text-green-400 text-sm md:text-base leading-8">

        {commands.slice(0, visibleCommands).map((item, index) => (
          <div key={index} className="mb-5">
            <div>
              <span className="text-cyan-400">
                thanshif@portfolio
              </span>

              <span className="text-white">
                :~$
              </span>{" "}

              <span className="text-yellow-400">
                {item.command}
              </span>
            </div>

            <pre className="whitespace-pre-wrap text-green-400 mt-1">
              {item.output}
            </pre>
          </div>
        ))}

        {/* Blinking Cursor */}

        <div className="flex">
          <span className="text-cyan-400">
            thanshif@portfolio
          </span>

          <span className="text-white">
            :~$
          </span>

          <span className="ml-1 animate-pulse text-white">
            █
          </span>
        </div>

      </div>
    </AnimatedCard>
  );
}