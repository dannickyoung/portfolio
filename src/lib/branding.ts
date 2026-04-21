import type { Work } from "./works";

export type BrandingGroup = "branding" | "web3";
type BrandingWork = Work & { group: BrandingGroup };

export const brandingWorks: BrandingWork[] = [
  {
    group: "branding",
    slug: "lumen-branding",
    title: "Lumen",
    category: "Wellness Branding",
    description:
      "Brand identity for a wellness app that translates intention into affirmation, a soft, luminous system built around ritual and clarity.",
    tone: "light",
    image: "/branding/lumen/3.1.png",
    industry: "Wellness / Mobile",
    role: "Lead Brand Designer",
    platform: "Brand Identity / Mobile",
    timeline: "06/2025 - Present",
    about:
      "Built the Lumen brand from the ground up: wordmark, symbol, color story, and type system. The identity had to feel calm and ceremonial, but still modern enough to live inside a fast, gesture-driven mobile app.",
    tags: ["brand identity", "logo design", "type system", "color system"],
    problem: [
      "Wellness brands skew either clinical (pharma blues) or mystical (heavy ornament), neither fit a tactile manifestation app.",
      "The identity needed to read as a ritual, not a product, without losing digital legibility.",
      "Brand elements had to flex across tiny app glyphs and large marketing surfaces.",
    ],
    approach:
      "Built a luminous, restrained system: a soft mark inspired by dawn light, a calm neutral palette with a single accent, and a type pairing that feels spoken rather than shouted. Every element was tested at icon size first, then scaled up.",
    keyDecisions: [
      {
        decision: "Light as the core metaphor",
        explanation:
          "The mark, color ramps, and motion all reference light breaking through, tying every brand touchpoint back to the product's promise.",
      },
      {
        decision: "Icon-first design",
        explanation:
          "Every brand element was designed at 24px first to make sure it survived the trip from billboard down to app glyph.",
      },
    ],
    learnings: [
      "Wellness brands earn trust through restraint, not through spiritual ornament.",
      "Designing the smallest touchpoint first forces the whole system to stay simple.",
    ],
    blocks: [
      { kind: "single", tone: "light", image: "/branding/lumen/7.png" },
      { kind: "single", tone: "dark", image: "/branding/lumen/8.png" },
      {
        kind: "double",
        tones: ["light", "dark"],
        images: ["/branding/lumen/3.1.png", "/branding/lumen/31.png"],
      },
      { kind: "single", tone: "lime", image: "/branding/lumen/9.png" },
      { kind: "single", tone: "light", image: "/branding/lumen/10.png" },
      { kind: "single", tone: "dark", image: "/branding/lumen/11.png" },
    ],
  },
  {
    group: "branding",
    slug: "gobrainly-branding",
    title: "GoBrainly",
    category: "Edutech Branding",
    description:
      "Brand identity for an edutech startup making learning feel playful, the system had to read smart without being stiff, and fun without being childish.",
    tone: "lime",
    image: "/branding/gobrainly/28.png",
    industry: "Education",
    role: "Lead Brand Designer",
    platform: "Brand Identity / Web / Mobile",
    timeline: "2024",
    about:
      "GoBrainly is an edutech startup building AI-assisted learning tools for students and self-learners. The brand system needed to carry an energetic, smart-kid-in-the-room personality across app UI, marketing, and classroom materials, without tipping into kidware.",
    tags: ["brand identity", "logo design", "edutech", "brand system"],
    problem: [
      "Edutech visuals default to either cartoonish primary colors or generic corporate blue, neither fit a modern AI-assisted product.",
      "The brand had to scale from an app icon to a school assembly backdrop.",
      "Needed a voice that felt smart without feeling exclusive.",
    ],
    approach:
      "Designed a punchy wordmark, a custom brain symbol, and an energetic palette anchored by a fresh lime accent. Paired with a confident geometric typeface, the system reads young, capable, and a little cheeky.",
    keyDecisions: [
      {
        decision: "Lime as the hero color",
        explanation:
          "Breaks the blue monopoly in edutech and signals freshness, energy, and a non-institutional personality.",
      },
      {
        decision: "Geometric, confident type",
        explanation:
          "Balances the playful mark with structure, so the brand still reads credible when it needs to (parent-facing, investor-facing).",
      },
      {
        decision: "Custom symbol, not stock",
        explanation:
          "A proprietary brain mark gives the product ownable asset value and survives across tiny app icons and hero headers.",
      },
    ],
    learnings: [
      "Edutech brands live or die on the balance between playful and credible, you need both audiences on day one.",
      "Color is the fastest way to differentiate in a saturated category.",
    ],
    blocks: [
      { kind: "single", tone: "lime", image: "/branding/gobrainly/25.png" },
      { kind: "single", tone: "dark", image: "/branding/gobrainly/26.png" },
      {
        kind: "double",
        tones: ["lime", "light"],
        images: ["/branding/gobrainly/3.1.png", "/branding/gobrainly/30.png"],
      },
      { kind: "single", tone: "light", image: "/branding/gobrainly/27.png" },
      { kind: "single", tone: "dark", image: "/branding/gobrainly/28.png" },
      { kind: "single", tone: "lime", image: "/branding/gobrainly/29.png" },
    ],
  },
  {
    group: "branding",
    slug: "soulgarden-branding",
    title: "SoulGarden",
    category: "Girlypop Branding",
    description:
      "Girlypop brand identity for a manifestation app, pop, fresh, and unapologetically feminine. Designed for the girls who actually believe.",
    tone: "light",
    image: "/branding/soulgarden/3.1.png",
    industry: "Wellness / Mobile",
    role: "Lead Brand Designer",
    platform: "Brand Identity / Mobile",
    timeline: "06/2025 - Present",
    about:
      "SoulGarden's brand is built for the girlypop generation, the ones who romanticize their morning routine, read about affirmations on TikTok, and post hyper-pop aesthetics to their IG stories. Think Zara Larsson energy: candy-pop gradients, confident sans-serifs, glossy stickers, and a voice that sounds like a best friend hyping you up, not a yoga instructor whispering at you.",
    tags: ["brand identity", "girlypop", "pop aesthetic", "gen-z branding"],
    problem: [
      "Manifestation apps default to either beige minimalism or mystical new-age visuals, neither speaks to Gen-Z girls.",
      "The category is crowded with look-alike 'calm' brands that blend into one pastel blur.",
      "The brand needed to feel shareable, screenshot-worthy, and instantly recognizable on a crowded For You feed.",
    ],
    approach:
      "Leaned all the way into girlypop: juicy gradients, chunky display type, glossy 3D elements, and a color story that pops against any home-screen wallpaper. Every surface is designed to be screenshotted, reposted, and made into a sticker.",
    keyDecisions: [
      {
        decision: "Pop, not pastel",
        explanation:
          "Killed the wellness-beige trope in favor of saturated candy tones, brand confidence you can feel from across the app store.",
      },
      {
        decision: "Sticker-first design system",
        explanation:
          "Designed every brand asset to survive being ripped out of context and dropped onto an IG story, shareability baked in from the wordmark up.",
      },
      {
        decision: "Friend-hype voice, not guru voice",
        explanation:
          "Copy system reads like a group chat with your most manifesting friend, not a meditation teacher. Softer brands lose Gen-Z in the first tap.",
      },
    ],
    learnings: [
      "Girlypop isn't a palette, it's a posture. The voice has to hype, not soothe.",
      "Shareability is a brand strategy, if it can't live as a screenshot, it doesn't live on Gen-Z phones.",
    ],
    blocks: [
      { kind: "single", tone: "light", image: "/branding/soulgarden/13.png" },
      { kind: "single", tone: "lime", image: "/branding/soulgarden/14.png" },
      {
        kind: "double",
        tones: ["light", "dark"],
        images: ["/branding/soulgarden/3.1.png", "/branding/soulgarden/18.png"],
      },
      { kind: "single", tone: "dark", image: "/branding/soulgarden/15.png" },
      { kind: "single", tone: "light", image: "/branding/soulgarden/16.png" },
      { kind: "single", tone: "lime", image: "/branding/soulgarden/17.png" },
    ],
  },
  {
    group: "web3",
    slug: "aelf-branding",
    title: "aelf",
    category: "Layer 1 Blockchain Branding",
    description:
      "Brand identity for a high-performance, AI-forward Layer 1 blockchain, technical credibility meets approachable visual language for developers and ecosystem partners.",
    tone: "dark",
    image: "/branding/aelf/6.png",
    industry: "Web3 / Blockchain Infrastructure",
    role: "Senior Brand Designer",
    platform: "Brand Identity / Web",
    timeline: "2025",
    about:
      "aelf is a high-performance, cloud-native Layer 1 blockchain with parallel smart contract execution and a MainChain / multi-dAppChains architecture. The brand had to signal enterprise-grade infrastructure for serious builders while staying legible to newcomers entering the ecosystem through AI and consumer dApps.",
    tags: ["brand identity", "web3", "layer 1", "ecosystem branding"],
    problem: [
      "Layer 1 brands default to either sterile enterprise-blue or hype-driven crypto-neon, neither communicates credible engineering and accessible onboarding at the same time.",
      "The brand had to work across a technical docs site, investor decks, and consumer-facing ecosystem dApps without feeling fractured.",
      "Needed to signal 'AI-native' without lapsing into generic AI visuals.",
    ],
    approach:
      "Built a precise, geometric system anchored by a deep neutral palette and a high-contrast accent. Paired a confident mono-inspired typeface with engineered motion, every brand touchpoint reads as a working system, not marketing decoration.",
    keyDecisions: [
      {
        decision: "Infrastructure-grade precision",
        explanation:
          "Every brand element, grid, mark, motion, is built on measurable rules. Signals 'this team ships.'",
      },
      {
        decision: "One accent, used surgically",
        explanation:
          "A single high-saturation accent does all the work, kept the system calm enough for technical content while staying ownable.",
      },
      {
        decision: "Ecosystem-ready flex",
        explanation:
          "Designed tokens and templates so partner dApps can adopt the system without losing their own identity, the brand scales with the network.",
      },
    ],
    learnings: [
      "Infrastructure brands earn trust through restraint, not decoration.",
      "A single accent, used with discipline, is more ownable than a full palette.",
    ],
    blocks: [
      { kind: "single", tone: "dark", image: "/branding/aelf/1.png" },
      {
        kind: "double",
        tones: ["dark", "light"],
        images: ["/branding/aelf/2.png", "/branding/aelf/2.1.png"],
      },
      { kind: "single", tone: "light", image: "/branding/aelf/3.png" },
      { kind: "single", tone: "lime", image: "/branding/aelf/4.png" },
      { kind: "single", tone: "dark", image: "/branding/aelf/5.png" },
      { kind: "single", tone: "light", image: "/branding/aelf/6.png" },
    ],
  },
  {
    group: "web3",
    slug: "portkey-branding",
    title: "Portkey",
    category: "Wallet Branding",
    description:
      "Brand identity for an account-abstraction crypto wallet built to onboard Web2 users into Web3, simple, secure, and free of seed-phrase friction.",
    tone: "light",
    image: "/branding/portkey/5.png",
    industry: "Web3 / Wallets",
    role: "Senior Brand Designer",
    platform: "Brand Identity / Mobile / Extension",
    timeline: "2024 - 2025",
    about:
      "Portkey is the first AA wallet designed for the Web2-to-Web3 migration, login with email, phone, or social, recover through guardians, and move across aelf, Ethereum, and EVM chains without ever touching a seed phrase. The brand had to feel as frictionless as the product: welcoming to first-time users, credible to crypto natives.",
    tags: ["brand identity", "web3", "wallet", "mainstream onboarding"],
    problem: [
      "Wallet brands overwhelmingly talk to crypto natives, seed-phrase culture, dark UI, inside-jokes, alienating the next billion users.",
      "The brand needed to read 'bank-level trust' and 'consumer app warmth' at the same time.",
      "Had to stretch across a mobile app icon, a browser extension, and a partner-developer SDK without losing recognition.",
    ],
    approach:
      "Designed a warm, consumer-first system: rounded mark, friendly sans-serif, approachable color story, paired with rigorous UI patterns that still signal security and credibility. The tagline 'simple, secure, free' drove every decision.",
    keyDecisions: [
      {
        decision: "Consumer-app warmth over crypto-native aesthetics",
        explanation:
          "Rejected the dark-mode-only wallet default, Portkey looks like an app your mom would actually download.",
      },
      {
        decision: "Trust through clarity, not jargon",
        explanation:
          "Every brand touchpoint explains the product in plain language. Credibility comes from being understandable, not technical.",
      },
      {
        decision: "Cross-surface consistency",
        explanation:
          "The same brand system carries across mobile, extension, and partner SDKs, one recognizable mark wherever Web3 starts.",
      },
    ],
    learnings: [
      "Mainstream crypto brands win by looking like consumer apps, not like wallets.",
      "Security and warmth aren't opposites, disciplined clarity delivers both.",
    ],
    blocks: [
      { kind: "single", tone: "light", image: "/branding/portkey/1.png" },
      {
        kind: "double",
        tones: ["dark", "light"],
        images: ["/branding/portkey/2.png", "/branding/portkey/2.1.png"],
      },
      { kind: "single", tone: "lime", image: "/branding/portkey/3.png" },
      { kind: "single", tone: "dark", image: "/branding/portkey/4.png" },
      { kind: "single", tone: "light", image: "/branding/portkey/5.png" },
      { kind: "single", tone: "lime", image: "/branding/portkey/6.png" },
    ],
  },
  {
    group: "web3",
    slug: "mineai-branding",
    title: "MineAI",
    category: "Web3 Branding",
    description:
      "Brand identity for an AI-powered crypto mining dApp, built to feel approachable, gamified, and unmistakably on-chain.",
    tone: "lime",
    image: "/branding/mineai/3.1.png",
    industry: "Web3 / Blockchain",
    role: "Senior Brand Designer",
    platform: "Brand Identity / dApp",
    timeline: "02/2025 - 06/2025",
    about:
      "Designed MineAI's identity to pull mainstream users into a space usually reserved for technical crypto natives. The brand had to feel intuitive and arcade-like, while still reading as a legitimate Web3 product.",
    tags: ["brand identity", "web3", "logo design", "iconography"],
    problem: [
      "Crypto mining brands lean either dark and technical, or hype-driven and meme-heavy.",
      "MineAI needed to onboard mainstream users, so the brand couldn't gatekeep.",
      "The mark had to survive inside dApp UI, chain explorers, and marketing banners.",
    ],
    approach:
      "Built an identity around a playful core symbol, warm gradients, and arcade-inspired motion. Paired it with a precise geometric typeface so the system still felt technical when it needed to.",
    keyDecisions: [
      {
        decision: "Warm, not dark",
        explanation:
          "Broke the default Web3 dark-mode-and-neon trope, mainstream users read warm gradients as safer and more inviting.",
      },
      {
        decision: "Arcade-inspired motion",
        explanation:
          "Brand animations borrow from game UI, making progression and rewards feel native to the product.",
      },
    ],
    learnings: [
      "Web3 brands win new users by looking less like Web3.",
      "Motion is part of a brand system, not an afterthought, especially for dApps.",
    ],
    blocks: [
      { kind: "single", tone: "lime", image: "/branding/mineai/19.png" },
      { kind: "single", tone: "dark", image: "/branding/mineai/20.png" },
      {
        kind: "double",
        tones: ["lime", "dark"],
        images: ["/branding/mineai/3.1.png", "/branding/mineai/24.png"],
      },
      { kind: "single", tone: "light", image: "/branding/mineai/21.png" },
      { kind: "single", tone: "dark", image: "/branding/mineai/22.png" },
      { kind: "single", tone: "lime", image: "/branding/mineai/23.png" },
    ],
  },
];

export function getBrandingWork(slug: string) {
  return brandingWorks.find((w) => w.slug === slug);
}
