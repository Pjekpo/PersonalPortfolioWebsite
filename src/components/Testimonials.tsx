import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import naisonPhoto from "../assets/123.jpeg";
import wolLogo from "../assets/logo.png";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  imageAlt: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nasion",
    role: "Founder, C4Improvement",
    quote:
      "Praise helped me ship a full website plus AI software implementations. Clear communication, fast iteration, and the final product exceeded expectations.",
    rating: 5,
    image: naisonPhoto,
    imageAlt: "Nasion at workshop"
  },
  {
    id: 2,
    name: "WOL Collective",
    role: "Apparel & Culture Brand",
    quote:
      "Captured the brand energy with a clean, punchy build. The visuals land hard, the flow feels premium, and the site tells our story exactly how we wanted.",
    rating: 5,
    image: wolLogo,
    imageAlt: "WOL Collective logo"
  }
];

export function Testimonials() {
  return (
    <section id="feedback" className="py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center md:mb-14">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
              <h2>Testimonials</h2>
              <p className="max-w-xl text-gray-300 leading-relaxed">
              Notes from teams I've shipped with recently.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7 shadow-lg flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-white/15 bg-white/10">
                      <ImageWithFallback
                        src={t.image}
                        alt={t.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-gray-300">{t.role}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-300/40 text-emerald-100 text-xs font-medium">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-300"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-lg md:text-xl text-white leading-snug flex-1">
                  {t.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
