import { motion } from "motion/react";
import { ExternalLink, Star, Tag } from "lucide-react";

type StoreItem = {
  id: number;
  title: string;
  description?: string;
  tags?: string[];
  url: string;
  highlight?: boolean;
};

// Edit this list with your affiliate items/links
const items: StoreItem[] = [
  {
    id: 2,
    title: "Reviewed Tech",
    description: "Tech I’ve reviewed and recommend.",
    tags: ["tech", "affiliate"],
    url: "#",
    highlight: true
  },
  {
    id: 3,
    title: "Design Resources",
    description: "Fonts, mockups, and UI kits I recommend.",
    tags: ["design"],
    url: "https://praiseekpo.gumroad.com/"
  }
];

export function Storefront() {
  return (
    <section id="storefront" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Shop My Picks
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Bold, curated links to the tools and gear I use and recommend. Some links are affiliate links — thanks for supporting my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md ${
                item.highlight
                  ? "bg-gradient-to-br from-purple-600/30 to-blue-600/30"
                  : "bg-white/5"
              } p-6 md:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

              <div className="relative flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                {item.highlight && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                    <Star className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              {item.description && (
                <p className="relative text-gray-300 mb-6">
                  {item.description}
                </p>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs"
                    >
                      <Tag className="w-3 h-3" /> {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-black font-medium bg-gradient-to-r from-white to-gray-200 group-hover:from-gray-100 group-hover:to-white transition-colors">
                  Shop Now
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Disclosure: I may earn a commission on qualifying purchases. There’s no extra cost to you.
        </p>
      </div>
    </section>
  );
}
