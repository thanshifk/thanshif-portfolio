import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import Background from "./components/Background";
import ParticlesBackground from "./components/ParticlesBackground";
import MouseGlow from "./components/MouseGlow";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Reveal from "./components/Reveal";
import AIAssistant from "./components/AIAssistant";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import GitHubCard from "./components/GitHubCard";
import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";
import GitHubContributions from "./components/GitHubContributions";
import AITerminal from "./components/AITerminal";
import Contact from "./components/Contact";
import ProjectPopup from "./components/ProjectPopup";

export default function App() {
  const [selectedProject, setSelectedProject] =
    useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Background />
          <ParticlesBackground />
          <MouseGlow />
          <ScrollProgress />
          <Navbar />
          <BackToTop />
          

          <main className="relative z-20 min-h-screen bg-slate-950 text-white pt-28 px-6 pb-10">
            <div className="max-w-7xl mx-auto space-y-6 pb-10">

              <section id="home">
                <Hero />
              </section>

              <div className="grid lg:grid-cols-2 gap-6">
                <Reveal delay={0.1}>
                  <section id="about">
                    <About />
                  </section>
                </Reveal>

                <Reveal delay={0.2}>
                  <section id="skills">
                    <Skills />
                  </section>
                </Reveal>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Reveal delay={0.3}>
                  <section id="education">
                    <Education />
                  </section>
                </Reveal>

                <Reveal delay={0.4}>
                  <section id="internship">
                    <Internship />
                  </section>
                </Reveal>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Reveal delay={0.5}>
                  <section id="timeline">
                    <Timeline />
                  </section>
                </Reveal>

                <Reveal delay={0.6}>
                  <section id="github">
                    <GitHubCard />
                  </section>
                </Reveal>
              </div>

              <Reveal delay={0.7}>
                <section id="projects">
                  <Projects
                    onSelectProject={setSelectedProject}
                  />
                </section>
              </Reveal>

              <Reveal delay={0.75}>
                <section id="terminal">
                  <AITerminal />
                </section>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-6">
                <Reveal delay={0.8}>
                  <section id="certifications">
                    <Certifications />
                  </section>
                </Reveal>

                <Reveal delay={0.9}>
                  <section id="statistics">
                    <GitHubStats />
                  </section>
                </Reveal>
              </div>

              <Reveal delay={1.0}>
                <section id="github-contributions">
                  <GitHubContributions />
                </section>
              </Reveal>

              <Reveal delay={1.1}>
                <Contact />
              </Reveal>

            </div>
          </main>

          <ProjectPopup
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>

<AIAssistant />

          <ProjectPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </motion.div>
      )}
    </>
  );
}