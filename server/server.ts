import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoute from "./routes/chat";
dotenv.config();

console.log("Gemini Key Loaded:", !!process.env.GEMINI_API_KEY);
console.log("Key Prefix:", process.env.GEMINI_API_KEY?.slice(0, 8));

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    status: "online",
    message: "Thanshif Portfolio AI Backend Running 🚀",
  });
});

app.use("/chat", chatRoute);

app.listen(PORT, () => {
  console.log("==================================");
  console.log("🚀 AI Portfolio Backend Started");
  console.log("==================================");

  if (process.env.GEMINI_API_KEY) {
  console.log("✅ Gemini API Key Loaded");
} else {
  console.log("❌ GEMINI_API_KEY not found");
}

  console.log(`🌐 Server: http://localhost:${PORT}`);
  console.log(`🤖 Chat API: http://localhost:${PORT}/chat`);
});