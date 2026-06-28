import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedCard from "./AnimatedCard";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "thanshifk.aids2023@dscet.ac.in"
    );

    setMessage("📋 Email copied to clipboard!");
  };

  const copyPhone = async () => {
    await navigator.clipboard.writeText(
      "+919746557362"
    );

    setMessage("📋 Phone number copied to clipboard!");
  };

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_5phbxqw",
        "template_u6k3i0y",
        form.current,
        "OpRyPlI824Bih4A6t"
      );

      setMessage("✅ Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      setMessage(
        "❌ Failed to send message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section id="contact">

      <AnimatedCard
        delay={1.1}
        className="p-5 sm:p-6 lg:p-8"
      >

        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Email */}

          <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
                <FaEnvelope />
              </div>

              <div className="min-w-0">

                <h3 className="text-lg sm:text-xl font-semibold">
                  Email
                </h3>

                <p className="text-slate-400 break-all">
                  thanshifk.aids2023@dscet.ac.in
                </p>

              </div>

            </div>

            <button
              onClick={copyEmail}
              className="mt-5 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
            >
              Copy Email
            </button>

          </div>

          {/* Phone */}

          <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center text-2xl flex-shrink-0">
                <FaPhone />
              </div>

              <div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  Phone
                </h3>

                <p className="text-slate-400">
                  +91 97465 57362
                </p>

              </div>

            </div>

            <button
              onClick={copyPhone}
              className="mt-5 w-full sm:w-auto bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl transition"
            >
              Copy Number
            </button>

          </div>

          {/* Location */}

          <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center text-2xl flex-shrink-0">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  Location
                </h3>

                <p className="text-slate-400">
                  Chennai, Tamil Nadu, India
                </p>

              </div>

            </div>

          </div>

          {/* Resume */}

          <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
                <FaDownload />
              </div>

              <div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  Resume
                </h3>

                <p className="text-slate-400">
                  Download my latest CV
                </p>

              </div>

            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center mt-5 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Social Links */}

        <div className="mt-10">

          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-5">
            Connect with Me
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <a
              href="https://github.com/thanshifk"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-3 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl transition"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/thanshifk"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-3 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl transition"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>

            <a
              href="#contact-form"
              className="flex justify-center items-center gap-3 bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl transition"
            >
              <FaEnvelope className="text-2xl" />
              Email
            </a>

          </div>

        </div>
                {/* Contact Form */}

        <div id="contact-form" className="mt-12">

          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">
            Send Me a Message
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-4 outline-none transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-4 outline-none transition"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Write your message..."
              required
              className="w-full bg-slate-800 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-4 outline-none resize-none transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 disabled:scale-100 disabled:opacity-70 px-8 py-4 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />

                    <path
                      fill="currentColor"
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />

                  </svg>

                  Sending...

                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}

            </button>

            {message && (

              <div
                className={`rounded-xl p-4 font-medium transition-all duration-300 ${
                  message.startsWith("❌")
                    ? "bg-red-500/20 text-red-400 border border-red-500"
                    : "bg-green-500/20 text-green-400 border border-green-500"
                }`}
              >
                {message}
              </div>

            )}

          </form>

        </div>

        {/* Footer */}

        <div className="mt-12 border-t border-slate-700 pt-8 text-center">

          <p className="text-slate-400 text-sm sm:text-base">
            © 2026 Thanshif K
          </p>

          <p className="text-slate-500 mt-3 text-sm leading-6">
            Built with React, TypeScript, Tailwind CSS &
            Framer Motion
          </p>

        </div>

      </AnimatedCard>

    </section>
  );
}