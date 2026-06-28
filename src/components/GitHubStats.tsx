import { useEffect, useState } from "react";
import AnimatedCard from "./AnimatedCard";
import {
  FaBook,
  FaUsers,
  FaCodeBranch,
  FaStar,
} from "react-icons/fa";

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

export default function GitHubStats() {
  const [data, setData] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/thanshifk")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <AnimatedCard
        delay={0.9}
        className="p-6"
      >
        <h2 className="text-3xl font-bold mb-6">
          GitHub Statistics
        </h2>

        <p className="text-slate-400">
          Loading GitHub statistics...
        </p>
      </AnimatedCard>
    );
  }

  const stats = [
    {
      icon: <FaBook />,
      title: "Repositories",
      value: data.public_repos,
      color: "bg-blue-600",
    },
    {
      icon: <FaUsers />,
      title: "Followers",
      value: data.followers,
      color: "bg-green-600",
    },
    {
      icon: <FaCodeBranch />,
      title: "Following",
      value: data.following,
      color: "bg-purple-600",
    },
    {
      icon: <FaStar />,
      title: "Portfolio",
      value: "Live",
      color: "bg-orange-600",
    },
  ];

  return (
    <AnimatedCard
      delay={0.9}
      className="p-6"
    >
      <h2 className="text-3xl font-bold mb-8">
        GitHub Statistics
      </h2>

      {/* Live Stats */}

      <div className="grid grid-cols-2 gap-5">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="bg-slate-800 rounded-2xl p-5 text-center hover:bg-slate-700 transition duration-300"
          >

            <div
              className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4`}
            >
              {stat.icon}
            </div>

            <h3 className="text-3xl font-bold">
              {stat.value}
            </h3>

            <p className="text-slate-400 mt-2">
              {stat.title}
            </p>

          </div>

        ))}

      </div>

      {/* Divider */}

      <div className="border-t border-slate-700 my-10"></div>

      <h3 className="text-2xl font-semibold text-blue-400 mb-6">
        GitHub Overview
      </h3>

      <div className="space-y-6">

        {/* GitHub Stats */}

        <img
          src="https://github-readme-stats.vercel.app/api?username=thanshifk&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github"
          alt="GitHub Stats"
          className="rounded-2xl w-full"
        />

        {/* Streak */}

        <img
          src="https://streak-stats.demolab.com?user=thanshifk&theme=tokyonight&hide_border=true"
          alt="GitHub Streak"
          className="rounded-2xl w-full"
        />

        {/* Languages */}

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=thanshifk&layout=compact&theme=tokyonight&hide_border=true"
          alt="Top Languages"
          className="rounded-2xl w-full"
        />

      </div>

    </AnimatedCard>
  );
}