// Generated from projects.json (keep this order). Images live in src/assets/projects/.
export type ProjectLinkKind = "live" | "repo" | "private" | "note";

export interface ProjectLink {
  kind: ProjectLinkKind;
  label: string;
  url?: string;
}

export interface ProjectImage {
  kind: "tool" | "code";
  /** File name inside src/assets/projects/ */
  file: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

/** own = my own tool or brand; client = built for a client; uni = university work */
export type ProjectKind = "own" | "client" | "uni";

export interface Project {
  /** Also the demo video name: src/assets/videos/<slug>.mp4 */
  slug: string;
  title: string;
  period: string;
  kind: ProjectKind;
  summary: string;
  features: string[];
  howIUseIt: string;
  tech: string[];
  links: ProjectLink[];
  images: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    "slug": "achieve-praise",
    "title": "Achieve Praise: Personal AI Operating Assistant",
    "period": "2026, in development",
    "kind": "own",
    "summary": "Installable progressive web app that runs my whole day: a clock-face Day Cycle of time-blocked tasks, habits, gym and diet, job hunt and outreach, income against goals, bills and budget. A voice AI coach can read and update the board.",
    "features": [
      "Cross-device sync that merges changes from different devices",
      "voice coach with the OpenAI key kept server-side behind a Supabase Edge Function",
      "scheduled push notifications via a queue, cron job and Edge Function",
      "automatic rescheduling of overdue tasks into the next free slot",
      "Instagram follow tracker built on a Postgres function",
      ".ics calendar import and export."
    ],
    "howIUseIt": "Daily as my central hub: weekly planning in time blocks, ticking off my Day Cycle, tracking job applications and income, and getting phone notifications for what to do next.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript (PWA with service worker)",
      "Supabase (Postgres with row-level security, Auth, Edge Functions in TypeScript/Deno, pg_cron)",
      "OpenAI API (gpt-4o-mini, Whisper speech-to-text, text-to-speech)",
      "Web Push",
      "Vercel",
      "GitHub"
    ],
    "links": [
      {
        "kind": "live",
        "label": "Live app",
        "url": "https://achieve-praise.vercel.app"
      },
      {
        "kind": "private",
        "label": "Private repository"
      },
      {
        "kind": "note",
        "label": "Built with AI-assisted development"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "achieve-praise-tool.jpg",
        "title": "Achieve Praise: Today view",
        "description": "Day Cycle clock, calendar, sleep and gym tiles and today's tasks in one board. Shown with demo data.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "achieve-praise-code.jpg",
        "title": "Achieve Praise: voice coach backend",
        "description": "Supabase Edge Function (TypeScript/Deno) that keeps the OpenAI key server-side and proxies the voice AI coach.",
        "width": 1400,
        "height": 1254
      }
    ]
  },
  {
    "slug": "wol-store",
    "title": "WOL Collective Online Store",
    "period": "2026, own brand, live",
    "kind": "own",
    "summary": "E-commerce site for WOL Collective, the clothing brand and community I co-founded. Customers add items to a basket and pay through Stripe-hosted checkout, then receive a confirmation email.",
    "features": [
      "Stock per size calculated from completed Stripe sessions",
      "waitlist that creates Stripe customers with a capped discount coupon",
      "order confirmation emails sent from a signed Stripe webhook through Resend",
      "multi-currency prices with a currency picker",
      "SEO (sitemap, robots, schema.org product data) and policy pages."
    ],
    "howIUseIt": "To run the brand's product drops, take payments and manage the waitlist and customer emails.",
    "tech": [
      "Next.js 14 (App Router)",
      "React 18",
      "JavaScript",
      "Stripe (Checkout, Customers, Coupons, webhooks)",
      "Resend",
      "Vercel (hosting, Analytics, Speed Insights)",
      "exchange-rate APIs",
      "GitHub"
    ],
    "links": [
      {
        "kind": "live",
        "label": "thewolcollective.com",
        "url": "https://thewolcollective.com"
      },
      {
        "kind": "private",
        "label": "Private repository"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "wol-store-tool.jpg",
        "title": "WOL Collective store: product page",
        "description": "Product page with size selection and add to cart, with checkout handled by Stripe.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "wol-store-code.jpg",
        "title": "WOL Collective store: Stripe webhook",
        "description": "Next.js API route that verifies Stripe webhook signatures and prepares order confirmation emails.",
        "width": 1400,
        "height": 1177
      }
    ]
  },
  {
    "slug": "coach4improvement",
    "title": "Coach4Improvement Website",
    "period": "Oct 2025 to present, client, live",
    "kind": "client",
    "summary": "Marketing and booking website for a Health and Social Care consultancy, covering CQC support, audits and safeguarding services, with user accounts, consultation booking and free printable care-audit tools.",
    "features": [
      "Multi-page site (Home, About, Services, Resources, Contact, legal pages)",
      "Supabase login with magic link and password",
      "booking page that saves bookings to Supabase and updates available slots in real time",
      "printable care plan audit and post-fall monitoring tools",
      "sitemap and robots.txt for SEO",
      "automatic deployment on every push."
    ],
    "howIUseIt": "Built and maintain it for a paying monthly client (55 commits, all mine).",
    "tech": [
      "React 18",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (Auth, database, realtime)",
      "Formspree",
      "GitHub Actions",
      "GitHub Pages"
    ],
    "links": [
      {
        "kind": "live",
        "label": "coach4improvement.co.uk",
        "url": "https://coach4improvement.co.uk"
      },
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/Coach4Improvement"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "coach4improvement-tool.jpg",
        "title": "Coach4Improvement: home page",
        "description": "Home page of the live client website for a Health and Social Care consultancy.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "coach4improvement-code.jpg",
        "title": "Coach4Improvement: real-time booking",
        "description": "React/TypeScript booking page that subscribes to Supabase realtime updates so available slots stay current.",
        "width": 1332,
        "height": 1400
      }
    ]
  },
  {
    "slug": "destorah",
    "title": "Destorah Foods Website",
    "period": "client, in progress",
    "kind": "client",
    "summary": "Online storefront for Destorah Foods, a seller of authentic African food products (palm oil, dried shrimp, fufu, cassava). Products load from an external backend API, with a product grid, category tabs, product pages and checkout.",
    "features": [
      "Product grid with category filtering and loading skeletons",
      "product pages with reviews and star ratings",
      "social share buttons",
      "browser-stored cart and checkout page",
      "Prisma data models for products, categories, users and orders."
    ],
    "howIUseIt": "Took over the existing codebase from the previous developers and am now continuing the build for the client.",
    "tech": [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Axios",
      "Prisma",
      "PostgreSQL",
      "GitHub"
    ],
    "links": [
      {
        "kind": "private",
        "label": "Private repository"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "destorah-tool.jpg",
        "title": "Destorah Foods: product storefront",
        "description": "Storefront with product grid and category tabs. Shown with sample product data.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "destorah-code.jpg",
        "title": "Destorah Foods: product grid component",
        "description": "Next.js/TypeScript product grid component that renders a responsive grid of product cards.",
        "width": 1400,
        "height": 988
      }
    ]
  },
  {
    "slug": "leadgen",
    "title": "B2B Lead Generation Tool",
    "period": "Apr to May 2026",
    "kind": "own",
    "summary": "Full-stack web app that scrapes Google Maps for local businesses by search term and location, then cleans and qualifies the results to find businesses that need a website.",
    "features": [
      "Classifies each listed website as a social media page, free hosted site or directory listing and records why the business needs a site",
      "follows redirects to check for a real standalone domain",
      "de-duplicates leads and drops ones with no phone number or with a proper website",
      "CSV export, print view and call notes per lead",
      "rate limiting with API keys kept on the server."
    ],
    "howIUseIt": "To find prospects for Ekpo Software Solutions and to run a lead generation campaign for a client.",
    "tech": [
      "Node.js",
      "Express",
      "Apify (Google Maps scraper)",
      "REST API",
      "HTML",
      "CSS",
      "JavaScript",
      "Render",
      "Git"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/lead-generation-tool"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "leadgen-tool.jpg",
        "title": "Lead Generation Tool: qualified leads",
        "description": "Search results flagging local businesses with no website or only a social page. Shown with sample results.",
        "width": 1400,
        "height": 814
      },
      {
        "kind": "code",
        "file": "leadgen-code.jpg",
        "title": "Lead Generation Tool: website classifier",
        "description": "Node.js function that classifies each business's listed website as social media, free hosted site, directory or a real domain.",
        "width": 1144,
        "height": 1400
      }
    ]
  },
  {
    "slug": "vinted-ai",
    "title": "Vinted AI Listing Assistant",
    "period": "Apr 2026",
    "kind": "own",
    "summary": "Takes a photo of a clothing item and uses OpenAI's vision model to write a ready-to-paste Vinted listing: title, category, brand, colour, condition, flaws, keywords and description. Works from the command line or a browser upload page.",
    "features": [
      "Prompt rules make the model answer 'Unknown' rather than invent details",
      "accepts uploaded images or image URLs",
      "upload security (API token, CORS and trusted-host limits, per-IP rate limits, size limits, EXIF stripping, duplicate removal)",
      "about 20 pytest tests."
    ],
    "howIUseIt": "To speed up writing listings for my second-hand clothing shop on Vinted.",
    "tech": [
      "Python",
      "FastAPI",
      "Uvicorn",
      "Typer (CLI)",
      "OpenAI API (vision, gpt-4o-mini)",
      "Pydantic",
      "Pillow",
      "PyYAML",
      "pytest"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/Vinted-Listing-assistant"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "vinted-ai-tool.jpg",
        "title": "Vinted AI Listing Assistant: generated listing",
        "description": "Upload page showing a listing generated from a photo. Shown with a sample item.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "vinted-ai-code.jpg",
        "title": "Vinted AI Listing Assistant: prompt builder",
        "description": "Python prompt builder that tells the vision model to use only visible evidence and write Unknown otherwise.",
        "width": 1400,
        "height": 1392
      }
    ]
  },
  {
    "slug": "t212",
    "title": "Trading 212 AI Trading Assistant",
    "period": "Mar 2026, demo only",
    "kind": "own",
    "summary": "Chat server where I ask questions in plain English and an OpenAI model calls Trading 212 and market-data APIs to check the account, analyse stocks and place trades on a demo (paper trading) account. Built on top of Trading 212's open-source agent-skills repo.",
    "features": [
      "8 AI tools (balance, positions, open orders, earnings calendar, penny-stock scan, ticker analysis, market order, cancel order)",
      "trades only run when a message starts with CONFIRM:",
      "safety lock that refuses to start unless set to the demo account",
      "optional login, rate limits and market-data caching",
      "written security audit."
    ],
    "howIUseIt": "Portfolio project for learning AI agents with function calling; run against a demo account only.",
    "tech": [
      "Node.js",
      "Express",
      "OpenAI API (function calling)",
      "Trading 212 API",
      "Alpha Vantage API",
      "Twelve Data API",
      "dotenv"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/T212-trading-bot"
      },
      {
        "kind": "note",
        "label": "My work is the t212-assistant folder"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "t212-tool.jpg",
        "title": "Trading 212 AI Assistant: chat",
        "description": "Chat interface where questions in plain English are answered via AI tool calls. Demo account, sample conversation.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "t212-code.jpg",
        "title": "Trading 212 AI Assistant: tool definitions",
        "description": "OpenAI function-calling tool definitions for balance, positions, orders and earnings calendar.",
        "width": 1400,
        "height": 1310
      }
    ]
  },
  {
    "slug": "portfolio",
    "title": "Personal Portfolio Website",
    "period": "Oct 2025 to present, live",
    "kind": "own",
    "summary": "My personal portfolio, redesigned in November 2026 with a dark, grid-based tech look, showing every project with screenshots, code snapshots and demo videos, plus my clients and design work.",
    "features": [
      "Every project with its interface screenshot, code snapshot and a demo video slot",
      "Client section with testimonials and the work I did for each client",
      "WOL Collective design gallery and a fun-fact pop-up of my other graphic design work",
      "Accessible: keyboard navigation, focus states and reduced-motion support",
      "Automatic build and deploy to GitHub Pages on every push"
    ],
    "howIUseIt": "As the link in my bio and on applications to show my work to employers and clients.",
    "tech": [
      "React 18",
      "TypeScript",
      "Vite",
      "CSS",
      "IBM Plex fonts via Fontsource",
      "GitHub Actions",
      "GitHub Pages"
    ],
    "links": [
      {
        "kind": "live",
        "label": "Live site",
        "url": "https://pjekpo.github.io/PersonalPortfolioWebsite/"
      },
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/PersonalPortfolioWebsite"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "portfolio-tool.jpg",
        "title": "Portfolio: home",
        "description": "Hero section of the redesigned portfolio, with my profile card and skills.",
        "width": 1600,
        "height": 1000
      },
      {
        "kind": "code",
        "file": "portfolio-code.jpg",
        "title": "Portfolio: project entry component",
        "description": "React/TypeScript component that renders each project entry with its screenshots and demo video slot.",
        "width": 1400,
        "height": 1525
      }
    ]
  },
  {
    "slug": "cv-plugin",
    "title": "CV and Cover Letter Drafter: Claude AI Plugin",
    "period": "2026",
    "kind": "own",
    "summary": "My own Claude plugin that reads my CV template and my master experience document, analyses a job description and drafts a tailored CV and cover letter.",
    "features": [
      "draft-cv and draft-cover-letter commands",
      "update-experience command to log new work",
      "matches job description keywords throughout",
      "leaves technical projects out of non-technical roles",
      "never invents experience",
      "automatic logic and grammar check that fixes issues before I see the draft."
    ],
    "howIUseIt": "Every day for my job search, aiming at 20 tailored applications a day.",
    "tech": [
      "Claude plugins (commands and skills written in Markdown)",
      "prompt engineering",
      "Word (.docx) templates"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Kept locally in my CV template folder"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "cv-plugin-tool.jpg",
        "title": "CV Drafter: generated CV",
        "description": "A CV produced by my plugin from a job description and my master experience document.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "cv-plugin-code.jpg",
        "title": "CV Drafter: fact checker",
        "description": "Python check that flags any date or figure in a draft CV that is not in the master experience document.",
        "width": 1400,
        "height": 1070
      }
    ]
  },
  {
    "slug": "week-pipeline",
    "title": "Week and Pipeline Dashboard",
    "period": "Aug 2026",
    "kind": "own",
    "summary": "Personal dashboard that merges the next seven days across my five Google Calendars (Personal, Work, Connecteam shifts, Fitness, Tech and Content) with clash detection, plus a job and income pipeline built from live Gmail threads.",
    "features": [
      "Clash detection across calendars",
      "lists applications awaiting a reply, open shift offers and inbox items that need action",
      "refreshed automatically each weekday morning by a scheduled task."
    ],
    "howIUseIt": "To see my week and what needs chasing at a glance each morning.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "Claude (AI-assisted build and scheduled tasks)",
      "Google Calendar and Gmail integrations"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Desktop Claude artifact"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "week-pipeline-tool.jpg",
        "title": "Week and Pipeline: dashboard",
        "description": "Seven-day view across calendars with clash detection, plus the job and income pipeline. Shown with demo data.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "week-pipeline-code.jpg",
        "title": "Week and Pipeline: styles",
        "description": "Dashboard layout and component styles.",
        "width": 1400,
        "height": 1225
      }
    ]
  },
  {
    "slug": "sponsor-tracker",
    "title": "Sponsor Job Hunt Tracker",
    "period": "Nov 2026",
    "kind": "own",
    "summary": "Tracker of 40 UK licensed visa sponsors checked on Indeed for graduate, early-career and intern roles, with apply links.",
    "features": [
      "Live counters for sponsors with roles, roles found and roles applied",
      "filters (best matches, has roles, check careers site)",
      "applied ticks saved between visits",
      "careers-site search links for companies with no listed roles",
      "light and dark theme."
    ],
    "howIUseIt": "To target and track applications to employers that can sponsor a visa.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "Claude (AI-assisted build)",
      "Indeed search"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Claude artifact"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "sponsor-tracker-tool.jpg",
        "title": "Sponsor Job Hunt: tracker",
        "description": "Tracker of UK licensed visa sponsors with roles found, filters and applied counters.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "sponsor-tracker-code.jpg",
        "title": "Sponsor Job Hunt: tracker logic",
        "description": "JavaScript that renders companies and roles, saves applied ticks to localStorage and updates the counters.",
        "width": 1400,
        "height": 1121
      }
    ]
  },
  {
    "slug": "relist-kit",
    "title": "Vinted Listing Extractor and Relist Kit",
    "period": "Oct 2026",
    "kind": "own",
    "summary": "Workflow that extracts all my live Vinted listings (titles, prices, sizes, brands, conditions, descriptions and photos) and turns them into upload-ready files for other selling platforms, plus a relist page with one-click copy buttons.",
    "features": [
      "Collects every listing from my Vinted profile in the browser and parses each item's structured data, spacing requests to stay within Vinted's rate limits",
      "downloads all 85 photos and converts them from WebP to JPG",
      "builds a Word summary and a photo folder per listing",
      "fills Depop's bulk-listing template as an upload-ready CSV",
      "eBay listing drafts",
      "relist page with copy buttons, search and CSV export."
    ],
    "howIUseIt": "To relist my 22 Vinted items on Depop and eBay without retyping every listing.",
    "tech": [
      "Browser automation (JavaScript)",
      "Python",
      "Pillow",
      "docx-js",
      "openpyxl",
      "CSV",
      "HTML",
      "CSS",
      "JavaScript",
      "Clipboard API",
      "Claude (AI-assisted build)"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Claude artifact and local files"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "relist-kit-tool.jpg",
        "title": "Vinted Relist Kit: listings",
        "description": "All live listings with one-click copy buttons for relisting on other platforms. Photos shown as placeholders.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "relist-kit-code.jpg",
        "title": "Vinted Relist Kit: copy and CSV export",
        "description": "JavaScript for copying listing fields and exporting every item as CSV.",
        "width": 1400,
        "height": 774
      }
    ]
  },
  {
    "slug": "ekpo-family",
    "title": "The Ekpo Family Photo Website",
    "period": "Oct 2026",
    "kind": "own",
    "summary": "Photo gallery website of my family's Summer 2026 studio photo session, with 20 photos in four chapters.",
    "features": [
      "Full-width hero and sticky chapter menu",
      "masonry photo walls",
      "full-screen viewer with keyboard arrows and swipe on mobile",
      "accessibility (focus handling, alt text) and reduced-motion support."
    ],
    "howIUseIt": "To share the family photos with my family.",
    "tech": [
      "HTML",
      "CSS (masonry layout)",
      "JavaScript",
      "responsive images",
      "Claude (AI-assisted build)"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Claude artifact"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "ekpo-family-tool.jpg",
        "title": "The Ekpo Family: gallery",
        "description": "Gallery layout with hero and chapter menu. Photos replaced with placeholders for privacy.",
        "width": 1054,
        "height": 1400
      },
      {
        "kind": "code",
        "file": "ekpo-family-code.jpg",
        "title": "The Ekpo Family: photo viewer",
        "description": "JavaScript full-screen viewer with keyboard arrows, Escape to close and swipe on mobile.",
        "width": 1400,
        "height": 1203
      }
    ]
  },
  {
    "slug": "insta-tracker",
    "title": "Instagram Follow Tracker",
    "period": "Aug to Nov 2026",
    "kind": "own",
    "summary": "Compares the accounts I follow with the accounts that follow me to show who does not follow back, and tracks follower and following changes over time.",
    "features": [
      "Parses and de-duplicates usernames from Instagram's HTML exports and calculates set differences",
      "now stores follow snapshots in a database through Achieve Praise."
    ],
    "howIUseIt": "To manage my Instagram accounts (praisejekpo and akadaa.k) as I grow my tech and AI content.",
    "tech": [
      "Python (regex parsing of Instagram data exports)",
      "later rebuilt inside Achieve Praise with Supabase (Postgres function) and JavaScript"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Part of Achieve Praise"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "insta-tracker-tool.jpg",
        "title": "Instagram Follow Tracker: view",
        "description": "Follower and following changes between checks. Shown with demo usernames.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "insta-tracker-code.jpg",
        "title": "Instagram Follow Tracker: database function",
        "description": "Supabase Postgres function that stores each follower check, compares it with the last one and queues a notification.",
        "width": 1400,
        "height": 1280
      }
    ]
  },
  {
    "slug": "prospects",
    "title": "Prospects Tracker",
    "period": "Jun 2026",
    "kind": "own",
    "summary": "Interactive table for tracking sales prospects through three direct-sales pipeline stages (PIQUE, STP and 3WC) with notes.",
    "features": [
      "Inline-editable names and notes",
      "checkbox stage tracking",
      "add and remove rows",
      "live stats bar against a 100-prospect target."
    ],
    "howIUseIt": "Used to manage a direct sales prospect list.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "Claude (AI-assisted build)"
    ],
    "links": [
      {
        "kind": "note",
        "label": "Claude artifact"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "prospects-tool.jpg",
        "title": "Prospects Tracker: table",
        "description": "Prospect table with PIQUE, STP and 3WC stages and a live stats bar. Shown with demo names.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "prospects-code.jpg",
        "title": "Prospects Tracker: render logic",
        "description": "JavaScript that renders rows, toggles stages and updates the stats.",
        "width": 1400,
        "height": 1172
      }
    ]
  },
  {
    "slug": "qa-docker",
    "title": "Q&A Quiz App with Docker",
    "period": "Mar to Apr 2025, university coursework",
    "kind": "uni",
    "summary": "Quiz web app split into two Node.js microservices that share one MySQL database: one serves a random multiple-choice question from a chosen category, the other lets users submit new questions.",
    "features": [
      "REST endpoints (categories, random question, submit)",
      "database schema with a foreign key from questions to categories, plus seed data",
      "parameterised queries",
      "API docs at /docs",
      "each service in its own container, all run with Docker Compose."
    ],
    "howIUseIt": "Built for a UCLan Computer Science module to learn containerised microservices.",
    "tech": [
      "Node.js",
      "Express",
      "MySQL (mysql2)",
      "Docker",
      "Docker Compose",
      "Swagger / OpenAPI 3.0",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/Q-A-app-using-docker"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "qa-docker-tool.jpg",
        "title": "Q&A Quiz App: question view",
        "description": "Question service front end showing a random question for a chosen category. Shown with sample questions.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "qa-docker-code.jpg",
        "title": "Q&A Quiz App: REST API",
        "description": "Express routes serving categories and random questions from MySQL, run in Docker containers.",
        "width": 1201,
        "height": 1400
      }
    ]
  },
  {
    "slug": "instarecipe",
    "title": "InstaRecipe Mobile App",
    "period": "Feb to Apr 2025, university coursework",
    "kind": "uni",
    "summary": "Mobile app for finding recipes. Users sign up or log in with Firebase email and password, then search recipes by name to see ingredients, directions and an image.",
    "features": [
      "Sign-up with email verification and detailed Firebase error handling",
      "login, register, home and privacy policy screens with scene navigation",
      "case-insensitive recipe search with image loading from a dataset of about 196 recipes."
    ],
    "howIUseIt": "Built solo for a UCLan Computer Science module.",
    "tech": [
      "Unity 6",
      "C#",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "TextMeshPro",
      "UnityWebRequest"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/InstaRecipe"
      },
      {
        "kind": "note",
        "label": "Full app on the UI-Setup branch"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "instarecipe-tool.jpg",
        "title": "InstaRecipe: screen artwork",
        "description": "Background artwork designed for the Unity mobile recipe app's screens.",
        "width": 1400,
        "height": 875
      },
      {
        "kind": "code",
        "file": "instarecipe-code.jpg",
        "title": "InstaRecipe: Firebase sign-up",
        "description": "C# sign-up flow using Firebase Authentication with email verification.",
        "width": 1400,
        "height": 1177
      }
    ]
  },
  {
    "slug": "ar-companion",
    "title": "AR Companion App",
    "period": "Feb 2024 to Mar 2024, UCLan team project",
    "kind": "uni",
    "summary": "Team project in which we used Convai AI avatars to build a virtual chat buddy that helps neurodivergent students build confidence in conversation.",
    "features": [],
    "howIUseIt": "",
    "tech": [
      "Unity",
      "C#",
      "Convai AI SDK",
      "Ready Player Me",
      "AR Foundation",
      "Agile"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "GitHub repository",
        "url": "https://github.com/Pjekpo/Chatbuddies-V2"
      }
    ],
    "images": [
      {
        "kind": "tool",
        "file": "ar-menu.jpg",
        "title": "AR Companion: home menu",
        "description": "Main menu of the Chat Buddy app: meet your buddy, about and exit.",
        "width": 446,
        "height": 1000
      },
      {
        "kind": "tool",
        "file": "ar-avatar.jpg",
        "title": "AR Companion: AR conversation",
        "description": "The AR page where the avatar appears and talks with the user, with a hold-to-talk microphone button.",
        "width": 446,
        "height": 988
      }
    ]
  }
];
