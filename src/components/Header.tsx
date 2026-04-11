import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import picture from "../assets/propic.jpeg";

export function Header() {
  return (
    <motion.header
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-28 md:pt-32"
    >
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm bg-white/5 p-2">
              <ImageWithFallback
                src={picture}
                alt="Praise Ekpo"
                className="w-full h-full object-cover rounded-full scale-80"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 text-center md:text-left max-w-2xl"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/5 mb-4">
              <p className="text-gray-300">Hi, my name is Praise Ekpo</p>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Software Developer & Designer
            </h1>
            <p className="text-gray-300 max-w-2xl mb-4">
              BSc Computer Science graduate building AI automation, production-ready web applications, and software that solve real business problems.
            </p>
            <p className="text-gray-300 max-w-2xl mb-4">
              I work across the full stack with a strong focus on clean UI, fast iteration, and pragmatic engineering, using tools like Python, TypeScript, React, Node.js, Git, and CI/CD workflows to ship reliably. Available for <span className="text-white font-semibold">internships, junior roles, and freelance contracts</span>.
            </p>
            <p className="text-gray-400 max-w-2xl mb-8 text-sm">
              Alongside my technical work, I co-founded <a href="https://thewolcollective.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 underline">The WOL Collective</a>, where I lead the brand, website, and creative direction, and I also launched Ekpo AI Solutions to help local businesses adopt practical AI workflows - generating over £1,000 in revenue in its first month.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-500/30 hover:translate-y-[-1px] transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Divider and Skills column (desktop) */}
          <div className="hidden lg:flex items-stretch gap-10">
            <div className="w-px bg-white/30 rounded-full" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="min-w-[280px] max-w-sm"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
                <p className="text-sm text-gray-300 mb-3">Core Skills</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI Automation",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Python",
                    "Tailwind CSS",
                    "Vite",
                    "REST APIs",
                    "Three.js",
                    "Figma",
                    "Git",
                    "HTML / CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-200 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
