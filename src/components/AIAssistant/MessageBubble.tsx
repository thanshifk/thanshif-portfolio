import { motion } from "framer-motion";
import { FaRobot, FaUser, FaRegCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

import MarkdownMessage from "./MarkdownMessage";
import type { Message } from "./types";

type Props = {
  message: Message;
};

export default function MessageBubble({
  message,
}: Props) {
  const [copied, setCopied] = useState(false);

  const isUser = message.sender === "user";

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message.text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      console.error("Failed to copy message");
    }
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
  duration: 0.35,
  ease: "easeOut",
}}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex gap-3 ${
          isUser
            ? "max-w-[70%] ml-auto flex-row-reverse"
            : "max-w-[92%]"
        }`}
      >
        {/* Avatar */}

        <div
          className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-white shadow-lg ${
            isUser
              ? "bg-blue-600"
              : "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-xl shadow-cyan-500/30bg-gradient-to-br from-cyan-500 to-blue-600"
          }`}
        >
          {isUser ? <FaUser /> : <FaRobot />}
        </div>

        {/* Bubble */}

        <div
          className={`
            group
            relative
            rounded-2xl
            px-6
            py-5
            transition-all
            duration-300
            shadow-lg
            ${
              isUser
                ? "bg-blue-600 text-white rounded-br-md"
                : "bg-slate-800 border border-slate-700 rounded-bl-md hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
            }
          `}
        >
          <div className="pr-10">
            <div className="text-base leading-8 text-slate-100">
              <MarkdownMessage text={message.text} />
            </div>
          </div>

          {!isUser && (
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={copyMessage}
              title="Copy response"
              className="
                absolute
                top-4
                right-4
                w-9
                h-9
                rounded-full
                bg-slate-700/90
                hover:bg-cyan-600
                transition-all
                opacity-0
                group-hover:opacity-100
                flex
                items-center
                justify-center
                backdrop-blur
              "
            >
              {copied ? (
                <FaCheck className="text-green-400 text-sm" />
              ) : (
                <FaRegCopy className="text-sm" />
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}