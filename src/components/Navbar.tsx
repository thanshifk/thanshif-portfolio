import { useEffect, useRef, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  /* Active section */

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  /* Navbar background */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Prevent page scroll when menu is open */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* Close when clicking outside */

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-xl border-b border-slate-700 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5 sm:px-6">

        {/* Logo */}

        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition">
            TK
          </div>

          <span className="hidden sm:block text-xl font-bold text-white group-hover:text-blue-400 transition">
            Thanshif K
          </span>
        </a>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-7">

          {links.map((link) => (

            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition-colors duration-300 ${
                active === link.id
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-blue-400"
              }`}
            >
              {link.name}

              {active === link.id && (

                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />

              )}

            </a>

          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/20"
          >
            <Download size={18} />
            Resume
          </a>

        </div>

        {/* Mobile Button */}

        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            ref={menuRef}
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700"
          >

            <div className="flex flex-col py-6">

              {links.map((link) => (

                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-white hover:bg-slate-800 transition"
                >
                  {link.name}
                </a>

              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mx-6 mt-4 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}