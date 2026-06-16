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
  problemStatement?: string;
  thinking?: string;
  leadership?: string;
  reflectionProse?: string;
  problem: string[];
  approach: string;
  process?: string[];
  keyDecisions: Array<{
    decision: string;
    explanation: string;
    chose?: string;
    over?: string;
    metric?: string;
  }>;
  outcomes?: string[];
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
      "AA crypto wallet that onboards Web2 users to Web3, no seed phrases, just email or social login.",
    tone: "dark",
    image: "/projects/PORTKEY/1.png",
    industry: "Web3 Blockchain",
    role: "Lead Product Designer",
    platform: "Mobile / Browser Extension",
    timeline: "2024 - 2025",
    about:
      "Portkey is the first AA wallet on aelf, built to migrate users from Web2 to Web3. Sign up with email or social, recover through trusted guardians, move assets across aelf, Ethereum, and EVM, no seed phrase anywhere. Ships on iOS, Android, Chrome, and as an SDK for partner dApps.",
    tags: ["wallet design", "account abstraction", "web3 onboarding", "design system"],
    problemStatement:
      "The wallet was where aelf's growth plan leaked. Portkey is aelf's AA wallet, and the strategy depended on Web2 users self-custodying, but every one of them hit a seed phrase in the first minute and left. The brief wasn't to design a wallet. It was to make self-custody feel like a normal sign-up, without dropping its security or alienating crypto-native users.",
    thinking:
      "Account abstraction gave me social recovery, a primitive most wallets lack. So I inverted the usual priority. Instead of teaching people to guard a key they'll lose, I designed around the moment they fear most, losing access, and made guardian recovery the centerpiece. Email login and plain-language signing followed from there.",
    leadership:
      "Leading with Web2 login meant betting against crypto convention, which wasn't the default instinct on the team. I made the case that crypto-native users weren't the growth audience, so the wallet should optimise for the people who bounce, not the people already comfortable. I also owned the design system that kept mobile, the extension, and the partner SDK on one set of primitives, so a user who meets Portkey inside a partner dApp lands in the same flow everywhere.",
    reflectionProse:
      "Recovery is where mainstream trust is won, so next time I'd push guardian education even earlier, before the user has anything to lose, so the safety net is felt from the first screen. The hardest ongoing tension was keeping three surfaces consistent as each shipped on its own timeline; a shared component library helped, but I'd lock those primitives down sooner.",
    problem: [
      "Seed phrases lose 99% of users",
      "Crypto-native UI scares newcomers",
      "Recovery is all-or-nothing",
      "Three surfaces, one UX to hold",
    ],
    approach:
      "Led with Web2 patterns the AA architecture made safe, email login, guided recovery, plain-English permissions, in rounded, approachable forms so it reads as a consumer app, not a terminal.",
    process: [
      "Audited where mainstream wallets lose users: the seed-phrase screen.",
      "Designed to what AA + DID allowed, not to crypto convention.",
      "Prototyped recovery first, the most anxious moment.",
      "Built shared primitives, proven in the partner SDK shell.",
    ],
    keyDecisions: [
      {
        decision: "Web2 login as the front door",
        chose: "Email & social by default",
        over: "Seed-phrase-first onboarding",
        explanation:
          "Email and social became the default; seed-phrase import moved behind an advanced toggle, out of the first 60 seconds.",
        metric: "Sign-up completion: ~35% → ~70%",
      },
      {
        decision: "Guardians as a designed surface",
        chose: "A guided recovery flow",
        over: "Recovery buried in settings",
        explanation:
          "Made recovery visible, who's approving and why, turning the most anxious moment in wallet UX into a reassuring one.",
      },
      {
        decision: "Plain-language transactions",
        chose: "Human-readable summaries",
        over: "Raw hex and jargon",
        explanation:
          "Swapped hex and network jargon for plain summaries; power users can still expand the raw payload.",
      },
      {
        decision: "One system, every surface",
        chose: "Shared primitives",
        over: "Bespoke UI per platform",
        explanation:
          "The SDK ships the same login, recovery, and signing screens as the app, so the wallet is recognizable everywhere.",
      },
    ],
    outcomes: [
      "Shipped on iOS, Android & Chrome",
      "Embeddable partner SDK",
      "Recovery reframed as a guided flow",
      "One cross-surface design system",
    ],
    learnings: [
      "Recovery wins trust, not signup",
      "Plain copy is a security feature",
      "Partner SDKs are a brand surface",
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
      "0→1 AFK mining dApp where AI agents mine for you while you're away, stake to upgrade, swap strategies to compete.",
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
    problemStatement:
      "Onboarding was killing the funnel before players reached the game. MineAI is a 0→1 AFK mining dApp, but Hotjar showed two of every five users dropping during onboarding, and four of ten test users said the setup was too hard. The five-step native-wallet flow was the wall.",
    thinking:
      "Most arrivals were crypto-native and already ran MetaMask or Phantom. So the fix wasn't a smoother native-wallet setup. It was to drop it: integrate the wallets they already had, two steps instead of five. With the funnel fixed, the real problem became retention. I framed mining as a roster of agents to run, not a yield number to watch.",
    leadership:
      "Dropping the native wallet meant getting leadership, including the CEO, to agree not to ship our own. It was a long meeting with real pushback. I won it on the data and the user: GameFi players arrive crypto-savvy and already hold wallets, so a native one only added friction. Past that call, I set the creative direction, built and ran the design system, mentored the other designers, and shaped early acquisition campaigns.",
    reflectionProse:
      "The hardest part was the early complexity. New players still had to get assets like ETH or USDT before they could play, so we leaned on third-party transfer and swap integrations to smooth that over. Getting people to understand the game in the first few minutes was the other risk; we solved it with a guided tutorial and tooltips along the way. Next time I'd design that first-run comprehension up front, not late.",
    problem: [
      "Native-wallet onboarding ran 5 steps",
      "2 of 5 users dropped before the product",
      "Mining locks out anyone without hardware",
      "An APY number isn't a reason to return",
    ],
    approach:
      "Met crypto-native players where they already were, then designed a strategy game on a real on-chain economy: AI agents are your roster, stake is the resource, strategies are the moves, one system scaled to web, mobile, and dApp.",
    process: [
      "Traced the onboarding funnel and found the drop: native-wallet setup.",
      "Checked the audience, most arrivals already ran MetaMask or Phantom.",
      "Cut signup to connect-an-existing-wallet, 5 steps down to 2.",
      "Then built the loop: agents as the hook, economy second.",
    ],
    keyDecisions: [
      {
        decision: "Onboard through wallets players already own",
        chose: "Integrate MetaMask & Phantom",
        over: "The chain's native wallet",
        explanation:
          "The target players were already crypto-native, most had MetaMask or Phantom set up. Leaning on what the market already had cut onboarding from five steps to two and made integration simpler, instead of forcing a fresh native-wallet setup most users didn't need.",
        metric: "Onboarding drop-off: 2 in 5 → 1 in 5",
      },
      {
        decision: "Agents as your roster",
        chose: "Collectible agents with stats",
        over: "A yield dashboard",
        explanation:
          "Mining became collecting and deploying agents, each with stats and an upgrade path, not watching a number tick up.",
      },
      {
        decision: "Strategy over passive yield",
        chose: "Active decisions",
        over: "Set-and-forget mining",
        explanation:
          "Players choose how agents work, when to compound, when to cash out, the harder build, but decisions are the daily loop.",
      },
      {
        decision: "One surface, every shell",
        chose: "Shared game state",
        over: "Device-specific apps",
        explanation:
          "Start on web, continue mid-strategy on a phone, the game state, not the device, is the product.",
      },
    ],
    outcomes: [
      "Onboarding cut from 5 steps to 2",
      "Drop-off halved: 2 in 5 → 1 in 5",
      "0→1 AFK mining dApp",
      "One system across web, mobile & dApp",
    ],
    learnings: [
      "Leverage what the market already adopted",
      "Fix the funnel before the features",
      "Decisions retain better than yield",
    ],
    blocks: singles("/projects/AELF_MINEAI", 6, "lime"),
  },
  {
    slug: "chrono-godgpt",
    title: "GodGPT",
    category: "AI / LLM",
    description:
      "AI companion for emotional guidance, tunes into each user's frequency instead of just agreeing.",
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
    problemStatement:
      "An AI that always agrees with you is the one that abandons you. That's the trap GodGPT had to avoid: it's an emotional-support LLM, and mainstream assistants are trained to please, so they validate and never resolve. It needed a voice that could hold a hard conversation and move someone forward, and earn enough trust for them to open up.",
    thinking:
      "I designed against the easy behavior. The product is built around the conversations that matter, grief, doubt, spiralling, not the happy path. The interface does as much work as the model: paced slow, given space, nothing like a productivity tool, so it reads as a place to reflect. Trust here is earned on the hardest moments, so I designed those first.",
    leadership:
      "Designing an AI to not simply agree runs against every engagement instinct, and that was the argument I had to win. The easy path boosts the numbers that look good in a demo, so I pushed the team to treat resonance, not agreement, as the actual product, even where it meant the AI says the harder thing. I set the voice and the interaction principles the whole experience was built on.",
    reflectionProse:
      "A product that gives emotional guidance carries real responsibility, so the thing I'd invest in earlier is the guardrails: clear boundaries for when the AI should step back and point someone to a human. The voice was right, but safety has to be designed with the same care as the tone, not bolted on after.",
    problem: [
      "LLMs validate, never resolve",
      "Productivity UI is the wrong frame",
      "Seekers need movement, not agreement",
      "Trust has to be earned to disclose",
    ],
    approach:
      "Started from the failure mode, an AI that agrees abandons you, and built the voice and interface to resonate, not placate: a calm, unhurried surface that reads as a space to reflect, not a tool to query.",
    process: [
      "Named the anti-pattern: validation without movement.",
      "Set the emotional tone, pacing, space, soft contrast, before features.",
      "Designed for the hardest states: grief, doubt, spiralling.",
    ],
    keyDecisions: [
      {
        decision: "Resonance over agreement",
        chose: "Responses that move you forward",
        over: "Affirmations that keep you comfortable",
        explanation:
          "Tuned the voice to attune and gently move users forward, accepting that the easier behavior, just agreeing, is the one that fails them.",
        metric: "Avg. session length: ~3× a generic assistant",
      },
      {
        decision: "A reflective surface",
        chose: "Calm, space-led chat",
        over: "A standard assistant layout",
        explanation:
          "Dropped the productivity-tool frame; the interface is quiet and paced so it reads as a space to sit with something.",
      },
      {
        decision: "Design the hardest moments",
        chose: "Built for grief and doubt",
        over: "The easy, happy path",
        explanation:
          "Anchored the design on the vulnerable conversations, so it holds up exactly when a user needs it most.",
      },
    ],
    outcomes: [
      "A distinct voice: resonance over agreement",
      "A surface calmer than a standard assistant",
      "Patterns built for the hardest moments",
    ],
    learnings: [
      "The agreeable answer is the abandoning one",
      "Tone does as much work as words",
      "Earn trust on the hardest conversations",
    ],
    blocks: singles("/projects/CHRONO_GODGPT", 5, "dark"),
  },
  {
    slug: "soulgarden",
    title: "SoulGarden",
    category: "AI / Manifestation App",
    description:
      "0→1 AI manifestation app that grows your affirmations into unique plants through 2-minute daily rituals.",
    tone: "light",
    image: "/projects/SOULGARDEN/img_1.png",
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Mobile / iOS / Android",
    timeline: "06/2025 - Present",
    about:
      "SoulGarden turns a user's intention into a unique AI-generated plant they water daily with personalised affirmations. Plants grow through four stages and live in a collectible encyclopedia, a tactile break from doom-scrolling, built for ADHD minds.",
    tags: ["mobile application", "wellness", "ai-generated content", "ui motion"],
    problemStatement:
      "Manifestation apps die by day three. SoulGarden is one, and the reason is structural: writing an intention takes one tap and gives nothing back, so no effort goes in, no investment builds, and people quit. Against an infinite social feed, it needed a daily ritual that felt earned, not a form to fill in.",
    thinking:
      "The insight: effort is the feature, not friction to remove. So I replaced the tap with hold-to-manifest. You press and hold while the intention takes root, and the plant grows only because you put in the work. That makes the exchange physical, effort in, growth out, and turns a passive input into a ritual people feel accountable to.",
    leadership:
      "Adding friction to the core action is a hard thing to argue for. The instinct on any product team is to cut taps, so I had to make the case that the effort was the point, not a cost, and protect the hold gesture through reviews that wanted to simplify it away. I set the creative direction for the garden, the plant evolution, and the AI-generated visual system that makes every user's garden one of one.",
    reflectionProse:
      "The gesture was the right bet, but I underestimated how much teaching it would take; some first-time users tapped and saw nothing happen. Next time I'd make the very first manifest a guided moment, so the hold is learned before it has to carry the ritual. I'd also pressure-test the AI plant generation for consistency earlier, since uniqueness only lands when every result still feels crafted.",
    problem: [
      "Vision boards go static after day one",
      "Journaling loses ADHD users fast",
      "Manifestation apps feel like homework",
      "The real rival is the social feed",
    ],
    approach:
      "Built a 2-minute daily loop around one tactile gesture, hold-to-manifest, with AI-generated affirmations and a unique plant for every user, so the ritual is fast, personal, and one-of-one.",
    process: [
      "Treated the social feed as the competitor, won on attention.",
      "Cut the loop to its smallest unit: two minutes.",
      "Prototyped hold-to-manifest against typed entry.",
      "Tuned growth and collection to pull users back, no streak guilt.",
    ],
    keyDecisions: [
      {
        decision: "Intention → plant",
        chose: "A living object you tend",
        over: "A static vision board",
        explanation:
          "Affirmations became evolving plants, a pet mechanic that does retention work a saved-intentions list never could.",
      },
      {
        decision: "Hold-to-Manifest",
        chose: "One sustained touch",
        over: "Typed journaling",
        explanation:
          "Low cognitive load, high ritual weight, one-handed, less expressive than text, but far more likely to happen daily.",
        metric: "Day-7 retention: ~18% → ~40%",
      },
      {
        decision: "Four-stage growth",
        chose: "Visible progress",
        over: "An invisible XP score",
        explanation:
          "Seed → sprout → growing → bloom gives an at-a-glance curve tied directly to showing up.",
      },
      {
        decision: "Collectible encyclopedia",
        chose: "Collection as the hook",
        over: "Streaks and loss aversion",
        explanation:
          "Each manifestation is a unique, saveable plant, users return to grow the collection, not from streak fear.",
      },
    ],
    outcomes: [
      "0→1, a 2-minute daily ritual",
      "Tactile gesture over journaling",
      "Collection-driven return loop",
    ],
    learnings: [
      "Shorter rituals retain better",
      "Uniqueness drives personal investment",
      "The body carries the ritual",
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
      "0→1 AI wellness app that turns intentions into personal affirmations, daily ritual over journaling.",
    tone: "light",
    image: "/projects/CHRONO_LUMEN/img_1.png",
    industry: "AI Software",
    role: "Lead Product Designer",
    platform: "Mobile / iOS / Android",
    timeline: "06/2025 - Present",
    about:
      "Mobile wellness app that combines alignment checks, friend compatibility, personal goals, and AI-powered affirmations to help users manifest their intentions.",
    tags: ["mobile application", "wellness", "ui motion", "design system"],
    problemStatement:
      "Lumen's problem was too much, not too little. It packs intentions, AI affirmations, alignment checks, friend compatibility, and an energetic profile into one app, and they looked so alike they blurred together until the whole thing felt repetitive. The real problem was hierarchy: making each surface earn its place and read as distinct.",
    thinking:
      "I treated hierarchy as the core problem, not a finishing pass. Each feature got one job and a deliberate weight. The daily ritual leads; social and astrology sit below it as optional depth, never competing for the same attention. The discipline was restraint, giving similar content different rhythm so the eye always knows what matters most.",
    leadership:
      "The pressure was to give every feature equal billing, and I pushed the other way. I argued for subordinating most of the app so the daily ritual could lead, which meant telling stakeholders that feature parity was hurting the product, not helping it. I owned the design system and the hierarchy rules that kept new features from flattening everything back out.",
    reflectionProse:
      "Restraint is easy to lose as features pile up, so the thing I'd build in earlier is a hierarchy rule set the team could design against without me in the room. I'd also validate the structure with real users sooner; hierarchy that reads clearly to the designer can still confuse someone opening the app for the first time.",
    problem: [
      "Wellness apps feel clinical",
      "Intentions go stale by day three",
      "No bridge from wish to affirmation",
      "Solo growth doesn't stick",
    ],
    approach:
      "Built one daily ritual, set an intention, let AI shape it into an affirmation, then layered compatibility and an energetic profile as reasons to return, all in a warm tone, not a clinical one.",
    process: [
      "Made the core loop stand on its own before anything else.",
      "Set a warm tone against the clinical category norm.",
      "Layered social and birth-chart features as optional depth.",
    ],
    keyDecisions: [
      {
        decision: "Intention → affirmation AI",
        chose: "AI bridges wish to words",
        over: "A blank journal to fill",
        explanation:
          "The AI does the hard leap from a fuzzy intention to language that lands, no blank page, no vague prompt.",
        metric: "Activation (first affirmation): ~85%",
      },
      {
        decision: "Social wellness",
        chose: "Friend compatibility",
        over: "A solo journey",
        explanation:
          "Added shared ritual as a return hook, the extra surface is worth it because social retains better than solo.",
      },
      {
        decision: "Energetic profile",
        chose: "Optional depth",
        over: "A required onboarding step",
        explanation:
          "Birth-chart insight is additive, not mandatory, the core ritual stays light and the depth rewards who wants it.",
      },
    ],
    outcomes: [
      "0→1 around one daily ritual",
      "Warm tone vs. a clinical category",
      "Optional depth without bloat",
    ],
    learnings: [
      "The core loop comes first",
      "AI must remove real friction",
      "Tone is a feature: warm beats clinical",
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
      "Website that explains a complex chip architecture through visual storytelling, not spec sheets.",
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
      "Bento-grid website for a commercial interior design studio, storytelling over spec dump.",
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
      "Mobile trading app that breaks into the crowded Chinese crypto market with calmer UI and community insights.",
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
