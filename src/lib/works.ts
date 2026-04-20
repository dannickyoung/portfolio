export type TileTone = "dark" | "light" | "lime";

export type MediaBlock =
  | { kind: "single"; tone: TileTone; image?: string }
  | { kind: "double"; tones: [TileTone, TileTone]; images?: [string, string] }
  | { kind: "video"; tone: TileTone; image?: string };

export type Work = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tone: TileTone;
  image: string;
  thumbScale?: number;
  industry: string;
  role: string;
  platform: string;
  about: string;
  timeline: string;
  tags: string[];
  problem: string[];
  approach: string;
  keyDecisions: Array<{ decision: string; explanation: string }>;
  learnings: string[];
  blocks: MediaBlock[];
  archived?: boolean;
};

function singles(base: string, count: number, startTone: TileTone = "dark"): MediaBlock[] {
  const tones: TileTone[] = ["dark", "light", "lime"];
  const order = tones
    .slice(tones.indexOf(startTone))
    .concat(tones.slice(0, tones.indexOf(startTone)));
  return Array.from({ length: count }, (_, i) => ({
    kind: "single" as const,
    tone: order[i % order.length],
    image: `${base}/img_${i + 1}.png`,
  }));
}

export const allWorks: Work[] = [
  {
    slug: "clard",
    title: "Clard",
    category: "AI / Networking",
    description:
      "AI-powered digital business card platform that turns every handshake into a tracked, CRM-synced lead with real-time intent analytics.",
    tone: "lime",
    image: "/projects/CLARD/img_1.png",
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Web / Mobile",
    timeline: "06/2025 - Present",
    about:
      "Clard is an AI-first networking platform that replaces static business cards with generative, analytics-rich digital ones. Create in seconds, share anywhere, and know exactly who's interested, with intent signals syncing directly to Salesforce, HubSpot, and Sheets.",
    tags: ["web design", "ai-assisted design", "design system", "analytics ui"],
    problem: [
      "Physical business cards die the moment they enter a stranger's pocket, no follow-up, no visibility.",
      "Manually typing leads into a CRM is the biggest bottleneck between an event and a deal.",
      "Non-designers can't produce branded cards that actually look good.",
      "Teams and events have no way to deploy consistent, trackable cards at scale.",
    ],
    approach:
      "Designed a single system that scales from one card to an entire org: AI generates the card, real-time analytics track intent, and native CRM integrations close the loop. Built personal, team, and event product surfaces on a shared design system.",
    keyDecisions: [
      {
        decision: "AI-first card creation",
        explanation:
          "Removed the design barrier, a name, role, and industry become a production-ready card with picked layouts, typography, and brand colors in under 7 seconds.",
      },
      {
        decision: "Intent-driven analytics",
        explanation:
          "Surfaced view duration, click behavior, and engagement scoring over raw view counts, so users see who actually matters and what to do next.",
      },
      {
        decision: "CRM as the retention lever",
        explanation:
          "Piped intent signals straight into Salesforce, HubSpot, and Sheets, making Clard the first touch of the sales pipeline, not a standalone utility.",
      },
      {
        decision: "Multi-surface architecture",
        explanation:
          "One design system powering personal, team, and event products, shared primitives, different permission and billing models.",
      },
    ],
    learnings: [
      "Intent signals and follow-up prompts drive stickiness far more than view counts.",
      "AI generation is a wedge for non-designers, it only works if the output is defensibly good on the first try.",
      "Multi-surface SaaS needs aggressive component reuse; the design system is the product.",
    ],
    blocks: [
      { kind: "single", tone: "lime", image: "/projects/CLARD/img_1.png" },
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_2.png" },
      {
        kind: "double",
        tones: ["dark", "light"],
        images: ["/projects/CLARD/img_3.png", "/projects/CLARD/img_4.png"],
      },
      { kind: "single", tone: "light", image: "/projects/CLARD/img_5.png" },
      { kind: "single", tone: "lime", image: "/projects/CLARD/img_6.png" },
    ],
  },
  {
    slug: "chrono-godgpt",
    title: "GodGPT",
    category: "AI / LLM",
    description:
      "An AI companion that offers genuine emotional guidance and spiritual wellness support, tuning into each user's unique frequency.",
    tone: "dark",
    image: "/projects/CHRONO_GODGPT/img_1.png",
    thumbScale: 1.9,
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Web / AI / LLM",
    timeline: "06/2025 - Present",
    about:
      "GodGPT is a spiritual and wellness LLM built to provide authentic emotional support and guidance. Unlike typical AI assistants that simply agree with users, GodGPT is designed to tune into each user's emotional frequency and offer thoughtful, resonant responses that facilitate genuine healing and personal growth.",
    tags: ["web design", "ai/llm", "chat interface", "ui/ux"],
    problem: [
      "Existing LLMs act as yes-men, providing generic responses without emotional depth",
      "Lack of AI that truly understands and resonates with users' emotional frequency",
      "Need for spiritual and wellness guidance that offers genuine emotional resolutions",
      "Chat interface needed to feel safe, trustworthy, and meaningful for sensitive conversations",
    ],
    approach:
      "Designed an LLM that prioritizes emotional resonance over agreement. Created an interface that allows the AI to tune into users' frequency and provide thoughtful, emotionally-aware responses.",
    keyDecisions: [
      {
        decision: "Emotional resonance over agreement",
        explanation:
          "Designed the LLM to focus on understanding and responding to users' emotional frequency rather than simply agreeing with them.",
      },
      {
        decision: "Authentic conversational patterns",
        explanation:
          "Created chat interface that enables genuine emotional resolutions and thoughtful responses, not generic affirmations.",
      },
      {
        decision: "Frequency-aligned interactions",
        explanation:
          "Built system that tunes into users' emotional state and provides responses that truly resonate with their needs.",
      },
    ],
    learnings: [
      "Emotional intelligence in AI requires careful design of both interface and interaction patterns",
      "Users value authentic, thoughtful responses over agreement in spiritual and wellness contexts",
      "Designing for emotional resonance requires understanding the nuanced needs of users seeking guidance",
    ],
    blocks: singles("/projects/CHRONO_GODGPT", 5, "dark"),
  },
  {
    slug: "soulgarden",
    title: "SoulGarden",
    category: "Wellness Mobile App",
    description:
      "Manifestation app that turns affirmations into unique AI-generated plants that grow through 2-minute daily rituals, wellness as play, not work.",
    tone: "light",
    image: "/projects/SOULGARDEN/img_1.png",
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Mobile / iOS / Android",
    timeline: "06/2025 - Present",
    about:
      "SoulGarden translates a user's intention into a one-of-a-kind AI-generated plant that they water daily with personalized affirmations. Plants evolve across four growth stages (seed, sprout, growing, bloom) and live in a collectible encyclopedia. A quick, tactile break from doom-scrolling built for ADHD minds and busy schedules.",
    tags: ["mobile application", "wellness", "ai-generated content", "ui motion"],
    problem: [
      "Vision boards and journals sit static after day one, no feedback loop, no momentum.",
      "Long-form meditation and journaling lose ADHD users in the first week.",
      "Manifestation apps feel like homework rather than something you want to open.",
      "Users need a short, visual ritual that competes with social feeds for attention.",
    ],
    approach:
      "Designed a 2-minute daily loop with tactile interaction at the center, hold-to-manifest as the primary gesture. Paired AI-generated affirmations and unique plant visuals so every user's garden, and every ritual, feels one-of-one.",
    keyDecisions: [
      {
        decision: "Intention → plant as the core metaphor",
        explanation:
          "Converted abstract affirmations into living, evolving objects users feel accountable to, a pet mechanic for wellness.",
      },
      {
        decision: "Hold-to-Manifest as the primary gesture",
        explanation:
          "Replaced text entry with a single sustained touch, low cognitive load, high ritual weight, works one-handed on a break.",
      },
      {
        decision: "Four-stage plant evolution",
        explanation:
          "Seed → sprout → growing → bloom gives users a visible progress curve tied directly to daily consistency.",
      },
      {
        decision: "Collectible encyclopedia",
        explanation:
          "Every manifestation becomes a unique, saveable plant, driving return visits through collection mechanics, not streak shame.",
      },
    ],
    learnings: [
      "Shorter rituals retain better than deeper ones, 2 minutes beats 20 for daily consistency.",
      "Uniqueness (AI-generated plants) converts passive practice into personal investment.",
      "Tactile gestures outperform text entry for emotional-state apps, the body carries the ritual.",
    ],
    blocks: [
      { kind: "single", tone: "light", image: "/projects/SOULGARDEN/img_1.png" },
      { kind: "single", tone: "lime", image: "/projects/SOULGARDEN/img_2.png" },
      {
        kind: "double",
        tones: ["dark", "light"],
        images: ["/projects/SOULGARDEN/img_3.png", "/projects/SOULGARDEN/img_4.png"],
      },
      { kind: "single", tone: "dark", image: "/projects/SOULGARDEN/img_5.png" },
      { kind: "single", tone: "light", image: "/projects/SOULGARDEN/img_6.png" },
    ],
  },
  {
    slug: "chrono-lumen",
    title: "Lumen",
    category: "Wellness Mobile App",
    description:
      "Mobile wellness app that helps users set intentions, turn them into affirmations, and call out to the universe what they want in life.",
    tone: "light",
    image: "/projects/CHRONO_LUMEN/img_1.png",
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Mobile / iOS / Android",
    timeline: "06/2025 - Present",
    about:
      "Mobile wellness app that combines alignment checks, friend compatibility, personal goals, and AI-powered affirmations to help users manifest their intentions.",
    tags: ["mobile application", "wellness", "ui motion", "design system"],
    problem: [
      "Wellness apps often feel clinical and unengaging",
      "Users struggle to maintain consistent wellness habits and intentions",
      "Lack of tools to transform intentions into actionable affirmations",
      "Need for social connection and compatibility features in wellness journey",
    ],
    approach:
      "Designed a unique wellness app where users set intentions, and AI transforms them into affirmations for personal wellness and growth.",
    keyDecisions: [
      {
        decision: "Intention-to-affirmation AI system",
        explanation:
          "Created AI-powered feature that transforms user intentions into personalized affirmations.",
      },
      {
        decision: "Social wellness features",
        explanation:
          "Added Friend Compatibility feature to create community and social connection within the wellness journey.",
      },
      {
        decision: "Energetic profile system",
        explanation:
          "Designed personal patterns feature using birth chart data as an upgrade feature for deeper insights.",
      },
    ],
    learnings: [
      "Combining AI with spiritual wellness concepts creates unique value propositions",
      "Social features enhance engagement in personal growth apps",
      "Transforming abstract intentions into concrete affirmations helps users manifest goals",
    ],
    blocks: [
      { kind: "single", tone: "light", image: "/projects/CHRONO_LUMEN/img_1.png" },
      { kind: "single", tone: "lime", image: "/projects/CHRONO_LUMEN/img_2.png" },
      {
        kind: "double",
        tones: ["dark", "light"],
        images: ["/projects/CHRONO_LUMEN/img_3.png", "/projects/CHRONO_LUMEN/img_4.png"],
      },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_LUMEN/img_5.png" },
      { kind: "single", tone: "light", image: "/projects/CHRONO_LUMEN/img_6.png" },
      { kind: "single", tone: "lime", image: "/projects/CHRONO_LUMEN/img_7.png" },
    ],
  },
  {
    slug: "aelf-mineai",
    title: "Aelf MineAI",
    category: "AI / Web3 dApp",
    description:
      "AI-powered crypto mining dApp that makes on-chain mining simple, engaging, and accessible for new users.",
    tone: "lime",
    image: "/projects/AELF_MINEAI/img_1.png",
    industry: "Web3 Blockchain",
    role: "Senior Product Designer",
    platform: "Web / Mobile / dApp",
    timeline: "02/2025 - 06/2025",
    about:
      "MineAI uses AI to simplify mining, automate processes, guide users, and create a gamified experience with an intuitive interface on all devices and Web3 community-driven progression.",
    tags: [
      "web3 experience design",
      "ui/ux design",
      "ai-enhanced interface design",
      "design systems",
    ],
    problem: [
      "Users are overwhelmed by complex interfaces",
      "Lack of guidance for new users",
      "No incentive to stay engaged",
      "Current platforms are technical, hardware-heavy, and lack AI features or user-friendly design",
    ],
    approach:
      "Leveraged AI to automate complex mining processes, gamified the experience with community-driven progression, and built an intuitive multi-device interface.",
    keyDecisions: [
      {
        decision: "AI-powered simplification",
        explanation:
          "Leveraged AI to automate complex mining processes and guide users through the experience.",
      },
      {
        decision: "Gamified experience",
        explanation:
          "Created engaging game mechanics with community-driven progression to incentivize user retention.",
      },
      {
        decision: "Intuitive multi-device interface",
        explanation:
          "Designed user-friendly interface that works seamlessly across all devices.",
      },
    ],
    learnings: [
      "AI can dramatically simplify complex Web3 processes for mainstream users",
      "Gamification and community features are essential for user engagement in dApps",
      "Intuitive interfaces are crucial for onboarding new users to Web3",
    ],
    blocks: singles("/projects/AELF_MINEAI", 6, "lime"),
  },
  {
    slug: "vici-ridm",
    archived: true,
    title: "RiDM",
    category: "Website & Branding",
    description:
      "Website that effectively showcases RiDM's brilliant chip architecture with clean, user-friendly design focused on storytelling.",
    tone: "dark",
    image: "/projects/VICI_RiDM/img_1.png",
    industry: "Design Agency",
    role: "Lead Product Designer",
    platform: "Web / Branding",
    timeline: "06/2024 - 02/2025",
    about:
      "Developed a website with a clean, user-friendly design focused on storytelling. Created intuitive sections to explain complex technology through visuals, concise text, and interactive features.",
    tags: ["ui design", "information architecture", "design system", "ux research"],
    problem: [
      "Overly technical content that might alienate non-specialist stakeholders",
      "Difficulty conveying complex innovations in an engaging and digestible manner",
      "Lack of clear differentiation in the market",
      "Competitors' websites suffered from outdated UI, poor responsiveness, and overwhelming technical content",
    ],
    approach:
      "Used narrative structure to make complex chip architecture accessible to both technical and business audiences through a visual-first approach.",
    keyDecisions: [
      {
        decision: "Storytelling-focused design",
        explanation:
          "Used narrative structure to make complex chip architecture accessible to both technical and business audiences.",
      },
      {
        decision: "Visual-first approach",
        explanation:
          "Created intuitive sections with visuals, concise text, and interactive features.",
      },
      {
        decision: "Clear differentiation strategy",
        explanation:
          "Designed user journey that highlights RiDM's unique selling points.",
      },
    ],
    learnings: [
      "Storytelling makes complex technical content accessible to diverse audiences",
      "Visual explanations are crucial for conveying innovation in digestible ways",
      "Clean, modern UI differentiates products in markets with outdated competitors",
    ],
    blocks: singles("/projects/VICI_RiDM", 5, "dark"),
  },
  {
    slug: "vici-dtrax",
    archived: true,
    title: "D'TRAX",
    category: "Website Redesign",
    description:
      "Redesigned website showcasing D'trax expertise in commercial interior design with improved usability and modern aesthetic.",
    tone: "light",
    image: "/projects/VICI_DTRAX/img_1.png",
    industry: "Design Agency",
    role: "Lead Product Designer",
    platform: "Web / Responsive",
    timeline: "06/2024 - 02/2025",
    about:
      "Implemented a bento grid design system for intuitive content grouping, allowing users to easily navigate and explore D'trax's services and portfolio.",
    tags: ["web design", "ui design", "design system", "content design"],
    problem: [
      "Outdated design that failed to captivate potential clients",
      "Poor content organisation made it difficult to navigate",
      "Lack of engaging storytelling to showcase expertise",
      "Competitors' sites lacked modern UI elements, intuitive navigation, and effective project showcases",
    ],
    approach:
      "Revamped the visual design to create a modern, clean, and professional aesthetic, with bento grid content grouping and engaging case studies.",
    keyDecisions: [
      {
        decision: "Bento grid design system",
        explanation:
          "Implemented intuitive content grouping that allows users to easily navigate and explore services and portfolio.",
      },
      {
        decision: "Modern visual design",
        explanation:
          "Revamped the aesthetic to create a clean, professional look that aligns with the brand.",
      },
      {
        decision: "Enhanced storytelling",
        explanation:
          "Created visually engaging case studies and clear CTAs to position D'trax as a leader in commercial interior design.",
      },
    ],
    learnings: [
      "Bento grid layouts are effective for organizing diverse content types",
      "Modern UI elements and intuitive navigation differentiate brands in competitive markets",
      "Engaging storytelling through case studies is crucial for showcasing expertise",
    ],
    blocks: singles("/projects/VICI_DTRAX", 5, "light"),
  },
  {
    slug: "btcc-jx",
    title: "JX Exchange",
    category: "Mobile Trading App",
    description:
      "Crypto trading app that pierces through the saturated Chinese market with approachable UI and community-driven insights.",
    tone: "dark",
    image: "/projects/BTCC_JX/img_1.png",
    industry: "Web3 Blockchain",
    role: "Product Designer",
    platform: "Mobile / iOS / Android",
    timeline: "11/2023 - 06/2024",
    about:
      "Designed an approachable interface with calming colors and clear content dividers. Created a self-sustaining ecosystem of shared knowledge with reliable market news updates.",
    tags: [
      "mobile application",
      "design system",
      "ui motion",
      "wireframes / user flow",
    ],
    problem: [
      "Users are thrown into trading without any knowledge or community support",
      "Content is overwhelming and difficult to navigate",
      "App UI can be intimidating and not the easiest to navigate around",
      "Current market does not offer market insights and credible sources",
    ],
    approach:
      "Designed an approachable interface with calming colors, simplified navigation, and a community-driven knowledge ecosystem to support users throughout their trading journey.",
    keyDecisions: [
      {
        decision: "Approachable interface with calming colors",
        explanation:
          "Used calming color palette and clear visual hierarchy to make the app less intimidating for new users.",
      },
      {
        decision: "Easy navigation with clear dividers",
        explanation:
          "Organized content with clear dividers and intuitive navigation patterns to reduce cognitive load.",
      },
      {
        decision: "Community-driven knowledge ecosystem",
        explanation:
          "Built features that provide reliable market news and enable users to share knowledge.",
      },
      {
        decision: "Progressive disclosure for trading",
        explanation:
          "Designed a layered interface that reveals complexity gradually.",
      },
    ],
    learnings: [
      "Approachable design is crucial for breaking into saturated markets",
      "Community support can significantly improve user confidence in complex financial products",
      "Clear content organization reduces overwhelm and improves user retention",
      "Calming visual design can make intimidating financial interfaces more accessible",
    ],
    blocks: singles("/projects/BTCC_JX", 6, "dark"),
  },
];

export const works: Work[] = allWorks.filter((w) => !w.archived);

export function getWork(slug: string) {
  return allWorks.find((w) => w.slug === slug);
}
