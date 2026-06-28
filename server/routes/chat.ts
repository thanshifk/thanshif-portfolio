import { Router } from "express";
import { GoogleGenAI } from "@google/genai";
import { portfolioData } from "../portfolioData";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        answer: "Please provide a valid message.",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        answer: "Gemini API key not found.",
      });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
${portfolioData}

------------------------------

User Question:

${message}

------------------------------

Answer professionally as Thanshif K's AI Portfolio Assistant.
Only answer questions related to Thanshif's portfolio.
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      answer: result.text,
    });

  } catch (error: any) {
    console.error("Gemini Error");
    console.error(error);

    res.status(500).json({
      answer: "Sorry, Gemini AI is currently unavailable.",
    });
  }
});

export default router;