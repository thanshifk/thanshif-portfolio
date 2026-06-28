import { motion } from "framer-motion";

type Props = {
  suggestions: string[];
  onSelect: (question: string) => void;
};

export default function SuggestionChips({
  suggestions,
  onSelect,
}: Props) {
  return (
    <div className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">

      <div className="p-4">

        <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">
          Quick Questions
        </p>

        <div className="flex flex-wrap gap-2">

          {suggestions.map((item, index) => (

            <motion.button
              key={item}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => onSelect(item)}
              className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-cyan-500/30
                bg-slate-800
                px-4
                py-2
                text-sm
                text-slate-200
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/15
                hover:text-white
              "
            >
              <span className="relative z-10">
                {item}
              </span>

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

            </motion.button>

          ))}

        </div>

      </div>

    </div>
  );
}