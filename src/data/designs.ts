// Graphic design work. Images are optimised copies in src/assets/optimised/ (originals are kept untouched
// in src/assets/branding and src/assets/FreelancePersonalProjects; `source` points at each original).
// To regenerate the copies, resize the originals to webp with the same file names.

const wolUrls = import.meta.glob("../assets/optimised/wol/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const decorUrls = import.meta.glob("../assets/optimised/decor/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export interface WolDesign {
  slug: string;
  source: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  /** Show on a dark backing (for white artwork) */
  dark?: boolean;
}

export interface DecorItem {
  slug: string;
  source: string;
  width: number;
  height: number;
  /** "sticker" = transparent cut-out, "photo" = rectangular print taped down */
  kind: "sticker" | "photo";
}

/** The WOL Collective gallery, in display order. */
export const WOL_DESIGNS: WolDesign[] = [
  {
    "slug": "img-5492",
    "source": "FreelancePersonalProjects/Personal/IMG_5492.png",
    "title": "WRKNONLVN tee",
    "alt": "Model wearing a cream WRKNONLVN T-shirt in a colourful, textured photo edit",
    "width": 741,
    "height": 659
  },
  {
    "slug": "colorways",
    "source": "branding/Cloth designs/Colorways.png",
    "title": "T-shirt colourways",
    "alt": "Flat T-shirt designs laid out in several colourways",
    "width": 1192,
    "height": 842
  },
  {
    "slug": "mockups",
    "source": "branding/Cloth designs/Mockups.png",
    "title": "Hoodie and trouser mock-ups",
    "alt": "Front and back technical mock-ups of a black hoodie and trousers",
    "width": 1191,
    "height": 842
  },
  {
    "slug": "3dgifmaker54753",
    "source": "branding/Posters/3dgifmaker54753.gif",
    "title": "Spinning WOL logo",
    "dark": true,
    "alt": "Animated 3D WOL logo",
    "width": 421,
    "height": 421
  },
  {
    "slug": "anouncement-cover",
    "source": "branding/Posters/Anouncement cover.png",
    "title": "Announcement cover",
    "alt": "Cream announcement graphic with a faint WOL emblem",
    "width": 1080,
    "height": 1350
  },
  {
    "slug": "artboard-1afterps",
    "source": "branding/Posters/Artboard 1afterps.png",
    "title": "Magazine-style poster",
    "alt": "Collage poster of a model in a WRKNONLVN T-shirt surrounded by photo cut-outs",
    "width": 1440,
    "height": 1800
  },
  {
    "slug": "result-img",
    "source": "branding/Posters/RESULT IMG.png",
    "title": "Night shoot edit",
    "alt": "Figure in white standing on a wet street at night under a street lamp",
    "width": 1350,
    "height": 1800
  },
  {
    "slug": "wol-ad",
    "source": "branding/Posters/WOL ad.png",
    "title": "\"The takeover?\" ad",
    "alt": "Purple and blue WOL advert with repeated WRKNONLVN text and a figure",
    "width": 1800,
    "height": 1440
  },
  {
    "slug": "wol-poster3",
    "source": "branding/Posters/WOL poster3.png",
    "title": "Street poster",
    "alt": "Black and white street photo with the WOL emblem overlaid",
    "width": 1350,
    "height": 1800
  },
  {
    "slug": "aablacklogo",
    "source": "branding/Posters/aablacklogo.png",
    "title": "Emblem, black on white",
    "alt": "The WOL emblem in black on a white background",
    "width": 1350,
    "height": 1080
  },
  {
    "slug": "aawhitelogo",
    "source": "branding/Posters/aawhitelogo.png",
    "title": "Emblem, white on black",
    "alt": "The WOL emblem in white on a black background",
    "width": 1350,
    "height": 1080
  },
  {
    "slug": "bed",
    "source": "branding/Posters/bed.png",
    "title": "\"The WOL Collective\" eye poster",
    "alt": "Blue-toned close-up of an eye with The WOL Collective lettering",
    "width": 656,
    "height": 516
  },
  {
    "slug": "f55a500885af77a3bd4463c1c18d3f7a",
    "source": "branding/Posters/f55a500885af77a3bd4463c1c18d3f7a.png",
    "title": "\"Define thyself\" poster",
    "alt": "WRKNONLVN poster of a figure with motion-blurred people around him",
    "width": 512,
    "height": 640
  },
  {
    "slug": "logo",
    "source": "branding/Posters/logo.png",
    "title": "Emblem over a street shoot",
    "alt": "The WOL emblem above a model sitting on a brick wall",
    "width": 726,
    "height": 903
  },
  {
    "slug": "original",
    "source": "branding/Posters/original.png",
    "title": "In-store shoot",
    "alt": "Model browsing clothing rails under a WOL banner",
    "width": 1350,
    "height": 1800
  },
  {
    "slug": "pster8",
    "source": "branding/Posters/pster8.png",
    "title": "\"Never afraid\" poster",
    "alt": "Red and white WRKNONLVN poster with a vertical title",
    "width": 1080,
    "height": 1350
  }
];

/** Everything else: used as small decorative stickers and prints around the notebook. */
export const DECOR_ITEMS: DecorItem[] = [
  {
    "slug": "artboard-1-1",
    "source": "FreelancePersonalProjects/Freelance/Artboard 1 (1).png",
    "width": 300,
    "height": 169,
    "kind": "photo"
  },
  {
    "slug": "artboard-1",
    "source": "FreelancePersonalProjects/Freelance/Artboard 1.png",
    "width": 240,
    "height": 300,
    "kind": "photo"
  },
  {
    "slug": "codev",
    "source": "FreelancePersonalProjects/Freelance/Codev.png",
    "width": 300,
    "height": 300,
    "kind": "photo"
  },
  {
    "slug": "penguin1",
    "source": "FreelancePersonalProjects/Freelance/PENGUIN1.png",
    "width": 300,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "quan-logo2",
    "source": "FreelancePersonalProjects/Freelance/Quan_Logo2.png",
    "width": 300,
    "height": 238,
    "kind": "sticker"
  },
  {
    "slug": "quizgologo",
    "source": "FreelancePersonalProjects/Freelance/QuizGologo.jpg",
    "width": 300,
    "height": 228,
    "kind": "sticker"
  },
  {
    "slug": "codevglobe",
    "source": "FreelancePersonalProjects/Freelance/codevglobe.png",
    "width": 300,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "penguin2",
    "source": "FreelancePersonalProjects/Freelance/penguin2.png",
    "width": 300,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "img-6909",
    "source": "FreelancePersonalProjects/Personal/IMG_6909.gif",
    "width": 300,
    "height": 256,
    "kind": "photo"
  },
  {
    "slug": "praisevstheworldfinished",
    "source": "FreelancePersonalProjects/Personal/Praisevstheworldfinished.png",
    "width": 300,
    "height": 300,
    "kind": "photo"
  },
  {
    "slug": "bigben",
    "source": "FreelancePersonalProjects/Personal/bigben.png",
    "width": 300,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "goblin",
    "source": "FreelancePersonalProjects/Personal/goblin.png",
    "width": 300,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "img1",
    "source": "FreelancePersonalProjects/Personal/img1.png",
    "width": 300,
    "height": 300,
    "kind": "photo"
  },
  {
    "slug": "img2",
    "source": "FreelancePersonalProjects/Personal/img2.png",
    "width": 300,
    "height": 298,
    "kind": "photo"
  },
  {
    "slug": "merlion",
    "source": "FreelancePersonalProjects/Personal/merlion.png",
    "width": 212,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "moon",
    "source": "FreelancePersonalProjects/Personal/moon.png",
    "width": 252,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "pizza",
    "source": "FreelancePersonalProjects/Personal/pizza.png",
    "width": 300,
    "height": 300,
    "kind": "sticker"
  },
  {
    "slug": "wii-edit",
    "source": "FreelancePersonalProjects/Personal/wii edit.png",
    "width": 225,
    "height": 300,
    "kind": "photo"
  }
];

export const wolThumb = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-thumb.webp`];
export const wolFull = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-full.webp`];
export const decorUrl = (slug: string) => decorUrls[`../assets/optimised/decor/${slug}.webp`];
/** Still first frames for animated images (used when the visitor prefers reduced motion). */
export const wolThumbStatic = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-thumb-static.webp`];
export const wolFullStatic = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-full-static.webp`];
export const decorStaticUrl = (slug: string) => decorUrls[`../assets/optimised/decor/${slug}-static.webp`];
