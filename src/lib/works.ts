export type TileTone = "dark" | "light" | "lime";

export type MediaBlock =
  | { kind: "single"; tone: TileTone; image?: string }
  | { kind: "double"; tones: [TileTone, TileTone]; images?: [string, string] }
  | { kind: "video"; tone: TileTone; image?: string; noSound?: boolean; background?: string };

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
    slug: "portkey-wallet",
    title: "Portkey Wallet",
    category: "Web3 / AA Wallet",
    description:
      "Account-abstraction crypto wallet that onboards Web2 users into Web3, no seed phrases, no jargon, just email or social login and guardian-based recovery.",
    tone: "dark",
    image: "/projects/PORTKEY/1.png",
    industry: "Web3 Blockchain",
    role: "Lead Product Designer",
    platform: "Mobile / Browser Extension",
    timeline: "2024 - 2025",
    about:
      "Portkey is the first AA wallet on aelf, built to migrate users from Web2 to Web3. Sign up with email or social, recover through trusted guardians, move assets across aelf, Ethereum, and EVM, no seed phrase anywhere. Ships on iOS, Android, Chrome, and as an SDK for partner dApps.",
    tags: ["wallet design", "account abstraction", "web3 onboarding", "design system"],
    problem: [
      "Seed phrases lose 99% of Web2 users at the first step, the category's biggest funnel leak.",
      "Wallet UIs default to crypto-native conventions, gas, hex, network switching, that scare off mainstream audiences.",
      "Lost-key recovery is binary in most wallets: keep your phrase or lose your assets forever.",
      "Same product had to ship across mobile, browser extension, and a partner SDK without fragmenting the UX.",
    ],
    approach:
      "Designed the wallet around the social-recovery and DID guarantees of the AA architecture, so the UI could lead with familiar Web2 patterns: email login, friendly recovery, plain-English permissions. Kept a dark-mode-first surface, the screens users see most, but softened it with rounded forms, pill CTAs, and large legible numerics so the product reads as a consumer app, not a terminal. Built a shared design system across mobile, extension, and SDK so a user signing up in a partner game lands in the same flow as the standalone app.",
    keyDecisions: [
      {
        decision: "Web2 login as the front door",
        explanation:
          "Made email, phone, and social login the primary path. Seed-phrase import stays available, but it lives behind an advanced toggle, not in the user's first 60 seconds.",
      },
      {
        decision: "Consumer-app warmth inside a dark surface",
        explanation:
          "Kept the dark-mode-first canvas crypto users expect, but softened it with rounded modules, pill CTAs, and a single friendly blue accent. The screens stay calm; the actions feel approachable.",
      },
      {
        decision: "Guardians as a designed surface",
        explanation:
          "Treated guardian setup and approval as a first-class flow, not a settings-page afterthought. Recovery requests show who is approving, when, and why, turning the most anxious moment in wallet UX into a reassuring one.",
      },
      {
        decision: "Plain-language transaction screens",
        explanation:
          "Replaced raw hex and network jargon with summarized actions, you are sending X to Y on aelf, gas covered. Power-users can still expand to the raw payload.",
      },
      {
        decision: "One system across mobile, extension, and SDK",
        explanation:
          "Built shared primitives so the partner SDK ships the same login, recovery, and signing screens as the standalone app. Users who first meet Portkey inside a game recognize it everywhere.",
      },
    ],
    learnings: [
      "Mainstream wallet UX is won at the recovery flow, not the signup flow, users will only relax once they trust they can come back.",
      "Plain-language transaction copy is a security feature: clearer screens lead to fewer mis-signed approvals.",
      "Partner SDKs are a brand surface, the more dApps embed the same flow, the more recognizable the wallet becomes.",
    ],
    blocks: [
      { kind: "single", tone: "dark", image: "/projects/PORTKEY/1.png" },
      { kind: "single", tone: "dark", image: "/projects/PORTKEY/2.png" },
      {
        kind: "double",
        tones: ["dark", "dark"],
        images: ["/projects/PORTKEY/3.png", "/projects/PORTKEY/3.1.png"],
      },
      { kind: "single", tone: "lime", image: "/projects/PORTKEY/4.png" },
      { kind: "single", tone: "dark", image: "/projects/PORTKEY/5.png" },
    ],
  },
  {
    slug: "aelf-mineai",
    title: "Aelf MineAI",
    category: "AI / GameFi / Web3 dApp",
    description:
      "GameFi-style AFK mining dApp where AI agents keep mining for players while they're away, then players return to stake, upgrade, and swap strategies, real Web3 mining economy wrapped in an interactive game loop.",
    tone: "lime",
    image: "/projects/AELF_MINEAI/img_1.png",
    industry: "Web3 Blockchain",
    role: "Senior Product Designer",
    platform: "Web / Mobile / dApp",
    timeline: "02/2025 - 06/2025",
    about:
      "MineAI turns crypto mining into an AFK strategy game. AI agents mine on the player's behalf while they're away; players come back to stake, upgrade them, and swap strategies, every action settling on-chain. A category usually reserved for hardware-heavy operators, reframed as something you actually open.",
    tags: [
      "web3 experience design",
      "gamefi ui/ux",
      "ai agent interfaces",
      "design systems",
    ],
    problem: [
      "Crypto mining excludes anyone without specialised hardware or technical knowledge, the category locks out 99% of would-be users.",
      "Existing mining dApps treat the chain as infrastructure, not as something a player would open daily, no loop, no reason to return.",
      "Staking, agents, and rewards usually live in separate jargon-heavy screens, the strategy never feels like a game.",
      "Mainstream users need a moment-to-moment reason to engage, not just an APY number on a dashboard.",
    ],
    approach:
      "Designed the product as a strategy game sitting on a real on-chain mining economy. AI agents are the player's roster, staking is the resource they manage, and strategies are the moves they pick. Built a single gamified surface that keeps the chain mechanics visible without making them the whole experience, and scaled it to web, mobile, and dApp shells from one design system.",
    keyDecisions: [
      {
        decision: "AI agents as the player's roster",
        explanation:
          "Framed mining as collecting and deploying agents instead of running rigs. Each agent has stats, a specialty, and a visible upgrade path, gives players something to care about beyond yield numbers.",
      },
      {
        decision: "Staking as resource management",
        explanation:
          "Treated stake as the in-game resource that powers up agents, not as a separate finance product. Players spend, recover, and reallocate stake the same way they would in-game currency, the DeFi mechanic stays, the framing changes.",
      },
      {
        decision: "Strategies over passive yield",
        explanation:
          "Built a strategy layer on top of the mining loop, players pick how their agents allocate work, when to compound, when to cash out. Replaces the passive set-and-forget mining UX with something worth opening daily.",
      },
      {
        decision: "One gamified surface across web, mobile, and dApp",
        explanation:
          "Single design system carries the same agents, stakes, and strategy screens across every shell. New players can start on web and continue mid-strategy from a phone, the game state, not the device, is the product.",
      },
    ],
    learnings: [
      "GameFi works when the on-chain mechanics are the gameplay, not a layer underneath it, surface the economy, don't hide it.",
      "Strategy choices retain players far better than passive yield numbers, decisions are the loop.",
      "Mainstream users will engage with mining if it's framed as a roster of characters they own, not a stack of hardware they operate.",
    ],
    blocks: singles("/projects/AELF_MINEAI", 6, "lime"),
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
      "GodGPT is a spiritual and wellness LLM built for authentic emotional support. Unlike AI assistants that just agree, GodGPT tunes into each user's emotional frequency and offers resonant responses that move them toward healing, not validation.",
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
    category: "AI / Manifestation App",
    description:
      "Manifestation app that turns affirmations into unique AI-generated plants that grow through 2-minute daily rituals, wellness as play, not work.",
    tone: "light",
    image: "/projects/SOULGARDEN/img_1.png",
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Mobile / iOS / Android",
    timeline: "06/2025 - Present",
    about:
      "SoulGarden turns a user's intention into a unique AI-generated plant they water daily with personalised affirmations. Plants grow through four stages and live in a collectible encyclopedia, a tactile break from doom-scrolling, built for ADHD minds.",
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
    category: "AI / Wellness App",
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
    archived: true,
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
