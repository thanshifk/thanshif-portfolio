import AnimatedCard from "./AnimatedCard";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

export default function GitHubContributions() {
  return (
    <AnimatedCard
      delay={0.95}
      className="col-span-12 p-6"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-3xl">
          <FaGithub />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            GitHub Contributions
          </h2>

          <p className="text-slate-400">
            My coding activity
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <GitHubCalendar
          username="thanshifk"
          blockSize={14}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
        />
      </div>

      <p className="text-slate-400 mt-6 text-center">
        Every square represents a day of coding activity.
      </p>
    </AnimatedCard>
  );
}