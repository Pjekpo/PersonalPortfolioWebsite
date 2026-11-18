// Graphic design work. Images are optimised copies in src/assets/optimised/ (wol/ and fun/) (originals are kept untouched
// in src/assets/branding and src/assets/FreelancePersonalProjects; `source` points at each original).
// To regenerate the copies, resize the originals to webp with the same file names.

const wolUrls = import.meta.glob("../assets/optimised/wol/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const funUrls = import.meta.glob("../assets/optimised/fun/*.webp", {
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

export interface OtherDesign {
  slug: string;
  source: string;
  title: string;
  alt: string;
  width: number;
  height: number;
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

/** Other design work (freelance and personal), shown in the "fun fact" pop-up gallery. */
export const OTHER_DESIGNS: OtherDesign[] = [
  {
    "slug": "artboard-1-1",
    "source": "FreelancePersonalProjects/Freelance/Artboard 1 (1).png",
    "title": "Union flag photo collage",
    "alt": "Green-toned photo collage set behind a Union flag pattern",
    "width": 900,
    "height": 506
  },
  {
    "slug": "artboard-1",
    "source": "FreelancePersonalProjects/Freelance/Artboard 1.png",
    "title": "3-Minute Business Competition poster",
    "alt": "Poster for a UCLan Entrepreneurial Society 3-minute business pitch competition",
    "width": 720,
    "height": 900
  },
  {
    "slug": "codev",
    "source": "FreelancePersonalProjects/Freelance/Codev.png",
    "title": "Code Vestimantaire logo",
    "alt": "Code Vestimantaire logo with a crowned CV monogram on navy",
    "width": 600,
    "height": 600
  },
  {
    "slug": "penguin1",
    "source": "FreelancePersonalProjects/Freelance/PENGUIN1.png",
    "title": "Festive penguin mascot",
    "alt": "Cartoon penguin mascot wearing a Santa hat",
    "width": 900,
    "height": 900
  },
  {
    "slug": "quan-logo2",
    "source": "FreelancePersonalProjects/Freelance/Quan_Logo2.png",
    "title": "DJ Quan logo",
    "alt": "DJ Quan logo with headphones and a crown",
    "width": 900,
    "height": 714
  },
  {
    "slug": "quizgologo",
    "source": "FreelancePersonalProjects/Freelance/QuizGologo.jpg",
    "title": "Quiz-Go logo",
    "alt": "Quiz-Go logo in yellow lettering over a cartoon globe",
    "width": 900,
    "height": 683
  },
  {
    "slug": "codevglobe",
    "source": "FreelancePersonalProjects/Freelance/codevglobe.png",
    "title": "Code Vestimantaire globe mark",
    "alt": "Hand-drawn globe with Code Vestimantaire lettering",
    "width": 600,
    "height": 600
  },
  {
    "slug": "penguin2",
    "source": "FreelancePersonalProjects/Freelance/penguin2.png",
    "title": "Penguin mascot",
    "alt": "Smiling cartoon penguin mascot waving",
    "width": 900,
    "height": 900
  },
  {
    "slug": "img-6909",
    "source": "FreelancePersonalProjects/Personal/IMG_6909.gif",
    "title": "Animated photo edit",
    "alt": "Animated edit of a person sitting on a wall in front of flowers",
    "width": 560,
    "height": 478
  },
  {
    "slug": "praisevstheworldfinished",
    "source": "FreelancePersonalProjects/Personal/Praisevstheworldfinished.png",
    "title": "\"Praise vs the world\" illustration",
    "alt": "Illustrated portrait set against a starry space background",
    "width": 900,
    "height": 900
  },
  {
    "slug": "bigben",
    "source": "FreelancePersonalProjects/Personal/bigben.png",
    "title": "Big Ben illustration",
    "alt": "Flat illustration of Big Ben",
    "width": 500,
    "height": 500
  },
  {
    "slug": "goblin",
    "source": "FreelancePersonalProjects/Personal/goblin.png",
    "title": "Goblin character",
    "alt": "Green cartoon goblin face",
    "width": 900,
    "height": 900
  },
  {
    "slug": "img1",
    "source": "FreelancePersonalProjects/Personal/img1.png",
    "title": "\"Don't blend in\" poster",
    "alt": "Street photo poster with the words \"Don't blend in\"",
    "width": 900,
    "height": 900
  },
  {
    "slug": "img2",
    "source": "FreelancePersonalProjects/Personal/img2.png",
    "title": "\"Don't be afraid\" poster",
    "alt": "Street photo poster with the words \"Don't be afraid\"",
    "width": 900,
    "height": 894
  },
  {
    "slug": "merlion",
    "source": "FreelancePersonalProjects/Personal/merlion.png",
    "title": "Merlion illustration",
    "alt": "Small line illustration of the Merlion",
    "width": 596,
    "height": 842
  },
  {
    "slug": "moon",
    "source": "FreelancePersonalProjects/Personal/moon.png",
    "title": "Moon illustration",
    "alt": "Cartoon illustration of the moon",
    "width": 500,
    "height": 596
  },
  {
    "slug": "pizza",
    "source": "FreelancePersonalProjects/Personal/pizza.png",
    "title": "Leaning Tower of Pisa illustration",
    "alt": "Flat illustration of the Leaning Tower of Pisa",
    "width": 500,
    "height": 500
  },
  {
    "slug": "wii-edit",
    "source": "FreelancePersonalProjects/Personal/wii edit.png",
    "title": "Wii remote photo edit",
    "alt": "Photo edit of a person leaping by a marina with a Wii remote and game menu overlay",
    "width": 675,
    "height": 900
  }
];

export const wolThumb = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-thumb.webp`];
export const wolFull = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-full.webp`];
export const otherDesignUrl = (slug: string) => funUrls[`../assets/optimised/fun/${slug}.webp`];
/** Still first frames for animated images (used when the visitor prefers reduced motion). */
export const wolThumbStatic = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-thumb-static.webp`];
export const wolFullStatic = (slug: string) => wolUrls[`../assets/optimised/wol/${slug}-full-static.webp`];
export const otherDesignStaticUrl = (slug: string) => funUrls[`../assets/optimised/fun/${slug}-static.webp`];
