import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-YWGMGXJGQ7";

ReactGA.initialize(MEASUREMENT_ID);

export default ReactGA;

export const Analytics = {
  // ==========================
  // Page View
  // ==========================

  pageView: () => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  },

  // ==========================
  // AI Assistant
  // ==========================

  aiQuestion: () => {
    ReactGA.event({
      category: "AI Assistant",
      action: "Question Asked",
    });
  },

  // ==========================
  // Resume
  // ==========================

  resumeDownload: () => {
    ReactGA.event({
      category: "Resume",
      action: "Download Resume",
    });
  },

  // ==========================
  // Contact
  // ==========================

  contactClick: () => {
    ReactGA.event({
      category: "Contact",
      action: "Contact Button Click",
    });
  },

  // ==========================
  // Social
  // ==========================

  githubClick: () => {
    ReactGA.event({
      category: "Social",
      action: "GitHub Click",
    });
  },

  linkedinClick: () => {
    ReactGA.event({
      category: "Social",
      action: "LinkedIn Click",
    });
  },

  // ==========================
  // Projects
  // ==========================

  projectClick: (project: string) => {
    ReactGA.event({
      category: "Projects",
      action: "View Details",
      label: project,
    });
  },

  projectGithub: (project: string) => {
    ReactGA.event({
      category: "Projects",
      action: "GitHub Click",
      label: project,
    });
  },

  projectDemo: (project: string) => {
    ReactGA.event({
      category: "Projects",
      action: "Live Demo",
      label: project,
    });
  },

  projectFilter: (filter: string) => {
    ReactGA.event({
      category: "Projects",
      action: "Filter Selected",
      label: filter,
    });
  },
};