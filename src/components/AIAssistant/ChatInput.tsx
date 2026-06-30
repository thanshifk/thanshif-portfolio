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

  const handleSend = () => {
    if (!value.trim()) return;

    onSend();

    if (textareaRef.current) {
      textareaRef.current.style.height = "44px";
      textareaRef.current.blur();
    }
  };

  return (
    <div className="border-t border-slate-700 bg-slate-900/95 backdrop-blur-xl p-4 pb-[calc(env(safe-area-inset-bottom)+16px)]">

      <div className="flex items-end gap-3">

        {/* Text Input */}

        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          placeholder="Ask me anything about Thanshif..."
          enterKeyHint="send"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => {
            onChange(e.target.value);
            resize();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
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
            text-base
            text-white
            placeholder:text-slate-500
            outline-none
            focus:border-cyan-500
            transition
            max-h-36
            overflow-y-auto
          "
        />

        {/* Voice Button */}

        <motion.button
          type="button"
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
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          onPointerUp={(e) => {
            e.preventDefault();
            handleSend();
          }}
          disabled={!value.trim()}
          className={`
            w-12
            h-12
            rounded-2xl
            text-white
            flex
            items-center
            justify-center
            transition-all
            duration-200
            ${
              value.trim()
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/30 active:scale-95"
                : "bg-slate-700 opacity-50 cursor-not-allowed"
            }
          `}
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