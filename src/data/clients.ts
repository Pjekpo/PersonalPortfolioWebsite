import nasionAvatar from "../assets/nasion-avatar.webp";
import wolAvatar from "../assets/logo-avatar.webp";

export interface Client {
  name: string;
  /** What the client does, shown under the name */
  about?: string;
  /** What I did for them */
  work: string[];
  /** Optional approved testimonial. Leave out until the client has signed off a quote. */
  quote?: string;
  author?: string;
  role?: string;
  rating?: number;
  /** Optional logo or photo; when absent an initials badge is shown */
  image?: string;
  imageAlt?: string;
}

export const CLIENTS: Client[] = [
  {
    name: "Coach4Improvement",
    about: "Health and Social Care consultancy",
    work: ["Built and maintain the full website", "AI software implementations"],
    quote:
      "Praise helped me ship a full website plus AI software implementations. Clear communication, fast iteration, and the final product exceeded expectations.",
    author: "Nasion",
    role: "Founder, C4Improvement",
    rating: 5,
    image: nasionAvatar,
    imageAlt: "Nasion at workshop",
  },
  {
    name: "WOL Collective",
    about: "Apparel & Culture Brand",
    work: ["Online store", "Brand and creative direction"],
    quote:
      "Captured the brand energy with a clean, punchy build. The visuals land hard, the flow feels premium, and the site tells our story exactly how we wanted.",
    author: "WOL Collective",
    role: "Apparel & Culture Brand",
    rating: 5,
    image: wolAvatar,
    imageAlt: "WOL Collective logo",
  },
  {
    name: "Trunion Marine",
    work: [
      "Built an intranet to run the business",
      "Designed business cards and two logos",
      "Automated junk-email clean-ups",
    ],
  },
  {
    name: "Sunrise Care Limited",
    work: [
      "Designed ID badges for the owner and her whole team",
      "Reviewed her website for potential issues and places she could save money",
    ],
  },
  {
    name: "Safe Gulf Alliance Limited",
    work: ["Built an AI bookkeeping tool that automates the bookkeeping work an accountant would normally do"],
  },
];
