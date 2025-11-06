import { motion } from "motion/react";
import { Storefront } from "./Storefront";
import { ModeToggle } from "./ModeToggle";

type Mode = "portfolio" | "storefront";

export function StorefrontPage({
  mode,
  onModeChange,
}: {
  mode: Mode;
  onModeChange: (m: Mode) => void;
}) {
  return (
    <div className="relative">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 md:pt-40 pb-8"
      >
        <div className="container mx-auto px-6 text-center">
          {/* Centered mode toggle */}
          <div className="flex justify-center mb-6 mt-2 md:mt-4">
            <ModeToggle mode={mode} onChange={onModeChange} />
          </div>
          <h1 className="mb-4 text-2xl md:text-3xl font-semibold">
            You probably clicked the link in bio — here it is
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my curated storefronts below.
          </p>
        </div>
      </motion.section>

      <Storefront />
    </div>
  );
}
