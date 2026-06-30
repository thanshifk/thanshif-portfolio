import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

import ChatHeader from "./ChatHeader";
import SuggestionChips from "./SuggestionChips";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { initialMessages, suggestions } from "./constants";
import type { Message } from "./types";

import { API_URL } from "../../config";
import { Analytics } from "../../analytics";

export default function AIAssistant() {
  // ==========================
  // State
  // ==========================

  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

  // ==========================
  // Wake Render Backend
  // ==========================

  useEffect(() => {
    const warmUp = async () => {
      try {
        await fetch(API_URL);
        console.log("✅ Backend Awake");
      } catch {
        console.log("⚠️ Backend Sleeping");
      }
    };

    warmUp();
  }, []);

  // ==========================
  // Clear Chat
  // ==========================

  const clearChat = () => {
    setMessages([...initialMessages]);
  };

  // ==========================
  // Send Message
  // ==========================

  const sendMessage = async (text?: string) => {
    const question = (text ?? input).trim();

    if (!question || typing) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text: question,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTyping(true);

    // Google Analytics Event
    Analytics.aiQuestion();

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        sender: "ai",
        text:
          data.answer ??
          "Sorry, I couldn't generate a response.",
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text:
            "❌ Sorry, I couldn't connect to my AI server.\n\nPlease try again in a moment.",
          createdAt: new Date(),
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  // ==========================
  // UI
  // ==========================

  return (
    <>
      {/* Floating AI Button */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-8
          right-8
          z-50
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          text-white
          text-2xl
          shadow-2xl
          shadow-cyan-500/40
          flex
          items-center
          justify-center
        "
      >
        <FaRobot />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-md
              "
            />

            {/* AI Window */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                left-1/2
                top-1/2
                z-50
                -translate-x-1/2
                -translate-y-1/2
                w-[560px]
                max-w-[95vw]
                h-[820px]
                max-h-[100dvh]
                rounded-3xl
                border
                border-slate-700
                bg-slate-900/95
                backdrop-blur-xl
                shadow-[0_30px_80px_rgba(0,0,0,.7)]
                overflow-hidden
                flex
                flex-col
              "
            >
              <ChatHeader
                onClose={() => setOpen(false)}
                onClear={clearChat}
              />

              <SuggestionChips
                suggestions={suggestions}
                onSelect={sendMessage}
              />

              <ChatMessages
                messages={messages}
                typing={typing}
              />

              <ChatInput
                value={input}
                onChange={setInput}
                onSend={sendMessage}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}