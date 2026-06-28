import type { Message } from "./types";

export const suggestions = [
  "Tell me about yourself",
  "Internship",
  "Projects",
  "Skills",
  "Education",
  "Linux",
  "GitHub",
  "Why should I hire you?",
];

export const initialMessages: Message[] = [
  {
    id: crypto.randomUUID(),
    sender: "ai",
    text:
      "👋 **Welcome!**\n\nI'm **Thanshif AI**, powered by **Google Gemini**.\n\nAsk me anything about:\n\n- My internship\n- Skills\n- Projects\n- Education\n- Linux\n- GitHub\n\nI'm here to help!",
    createdAt: new Date(),
  },
];