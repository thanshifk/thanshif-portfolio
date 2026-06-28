import { useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resize = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      140
    )}px`;
  };

  return (
    <div className="border-t border-slate-700 bg-slate-900/95 backdrop-blur-xl p-4">

      <div className="flex items-end gap-3">

        {/* Text Area */}

        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          placeholder="Ask me anything about Thanshif..."
          onChange={(e) => {
            onChange(e.target.value);
            resize();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          className="
            flex-1
            resize-none
            rounded-2xl
            border
            border-slate-700
            bg-slate-800
            px-5
            py-3
            text-white
            placeholder:text-slate-500
            outline-none
            transition
            focus:border-cyan-500
            max-h-36
            overflow-y-auto
          "
        />

        {/* Voice Button (Future Feature) */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
            w-12
            h-12
            rounded-2xl
            bg-slate-800
            border
            border-slate-700
            hover:border-cyan-500
            hover:bg-slate-700
            transition
            flex
            items-center
            justify-center
          "
          title="Voice input (Coming Soon)"
        >
          <FaMicrophone />
        </motion.button>

        {/* Send Button */}

        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onSend}
          className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            shadow-lg
            shadow-cyan-500/30
            flex
            items-center
            justify-center
          "
        >
          <FaPaperPlane />
        </motion.button>

      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        Powered by Google Gemini 2.5 Flash
      </p>

    </div>
  );
}