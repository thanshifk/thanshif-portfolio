import ReactGA from "react-ga4";

ReactGA.initialize("G-YWGMGXJGQ7");

export default ReactGA;

export const Analytics = {
  pageView: () => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  },

  aiQuestion: () => {
    ReactGA.event({
      category: "AI Assistant",
      action: "Question Asked",
    });
  },

  resumeDownload: () => {
    ReactGA.event({
      category: "Resume",
      action: "Download",
    });
  },

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

  contactClick: () => {
    ReactGA.event({
      category: "Contact",
      action: "Contact Button Click",
    });
  },
};