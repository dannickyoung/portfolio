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
    slug: "clard",
    title: "Clard",
    category: "AI / Networking SaaS",
    description:
      "My own 0→1 startup: AI business cards that turn every handshake into a ranked follow-up queue. Designed, and V2 built, by me with AI.",
    tone: "dark",
    image: "/projects/CLARD/thumb.png",
    industry: "AI Software / B2B SaaS",
    role: "Co-founder · Lead Product Designer",
    platform: "Web / iOS / Android",
    timeline: "06/2026 - Present",
    about:
      "Clard is an AI networking product. You get an AI-designed digital business card, share it by QR or link, and everyone who engages with it becomes a tracked contact that Clard scores, ranks, and helps you follow up with. Companies roll one branded card out to every employee and see who their team is actually meeting.",
    tags: ["0→1 founder", "ai product design", "design engineering", "design systems"],
    problemStatement:
      "Most relationships die right after the meeting. The card goes in a pocket, the context goes with it, and the CRM never gets updated because nobody types leads in after an event. Digital cards fixed the sharing and nothing else. Our first paying customers, engineering and construction firms, came to stop printing paper cards. The product's job was to make sure that once the card was digital, the follow-up actually happened.",
    thinking:
      "V1 shipped as an analytics product: views, scans, maps, charts. Usage told us people don't open a networking app to admire a chart, they open it between meetings to decide who to message next. So for V2 I reframed the whole product as a follow-up cockpit. The home screen became a queue of real people ranked by AI score, each with one action, and the analytics moved to a secondary tab. Every other decision followed from one question: does this help someone follow up today?",
    leadership:
      "As co-founder I own product and design end to end, and for V2 I also built it. I rebuilt the app myself with Claude Code on React 19, TypeScript, and Tailwind v4, behind a data seam that runs on mock data or the live API with one environment variable, so the design ships as production code, not a Figma handoff. I wrote the product rules the codebase follows (what the AI can and can't claim to do, how pipeline stages work), set up CI, and turned card generation into a reusable AI skill so every card meets one design canon.",
    reflectionProse:
      "The hardest call was honesty over magic. It's tempting to show a Send button and 'auto follow-up', but Clard can't send on your behalf, so the UI drafts the message and you send it yourself, and replies are logged by hand. It's a less impressive demo and a more trustworthy product. What I'd do differently: write the product rules before the first screen. Once those rules existed, the AI-built code stayed consistent. Before them, every screen re-argued what Clard could and couldn't do.",
    problem: [
      "Contacts die in a pocket after the event",
      "CRMs need typing nobody does",
      "V1 led with charts, not next actions",
      "Companies need one card for 200 people",
    ],
    approach:
      "Rebuilt the product around the follow-up: an AI-ranked queue of people as the home screen, drafted messages you send yourself, a pipeline that only moves when you log it, and one locked company card every seat inherits. Calm, dark, instrumented UI with a single accent colour.",
    process: [
      "Watched how V1 was used: quick checks between meetings, not reporting.",
      "Reframed the dashboard as a follow-up cockpit, analytics demoted.",
      "Wrote the product rules first, then built V2 in code with Claude Code.",
      "Designed the org model around how admins roll out cards.",
    ],
    keyDecisions: [
      {
        decision: "A follow-up cockpit, not an analytics dashboard",
        chose: "AI-ranked queue of people + one action each",
        over: "Charts of views and scans",
        explanation:
          "The home screen answers 'who should I message now?'. Views, maps, and engagement charts still exist, but on a secondary tab for the moments someone wants to report, not act.",
      },
      {
        decision: "Draft, never send",
        chose: "AI drafts, user sends, user logs the reply",
        over: "Fake auto follow-ups",
        explanation:
          "Clard has no proxy email or number, so the composer is Copy and Regenerate only, and pipeline stages move only on logged checkpoints. The UI never claims something the product can't do.",
      },
      {
        decision: "Company cards are inherited, not distributed",
        chose: "One locked seed card every seat derives",
        over: "CSV uploads and batch releases",
        explanation:
          "Admins launch one card and every member, pending invite, and future hire gets it automatically. Admins control the logo and which fields people may edit, not the design, so brand stays consistent at 200+ seats.",
        metric: "3 companies, 230 paid seats",
      },
      {
        decision: "Design shipped as code",
        chose: "Production React built with Claude Code",
        over: "Figma files handed to engineering",
        explanation:
          "V2 runs on a swappable data layer plus a live-engagement simulator, so the prototype behaves like a real account and the same code goes live against the real API.",
      },
    ],
    outcomes: [
      "3 companies, 230 paid seats",
      "One rollout reached 187 people across SG/MY/VN",
      "V2 designed and built by me with AI",
      "Shipped on web & the App Store",
    ],
    learnings: [
      "Design the next action, not the report",
      "Honest UI beats a magic demo",
      "Write the rules before the screens",
    ],
    blocks: [
      // Entry: what needs doing today, and the cards that start every conversation
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_1.png" },
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_2.png" },
      // Core follow-up flow: share at the handshake (mobile) → lead lands in the ranked queue
      {
        kind: "double",
        tones: ["dark", "dark"],
        images: ["/projects/CLARD/mobile_1.png", "/projects/CLARD/mobile_2.png"],
      },
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_3.png" },
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_4.png" },
      // AI draft: insight → one-tap draft, copied and ready to send (mobile)
      {
        kind: "double",
        tones: ["dark", "dark"],
        images: ["/projects/CLARD/mobile_3.png", "/projects/CLARD/mobile_4.png"],
      },
      // Company rollout / admin
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_6.png" },
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_7.png" },
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_8.png" },
      // Analytics
      { kind: "single", tone: "dark", image: "/projects/CLARD/img_5.png" },
    ],
  },
  {
    slug: "nyxid",
    title: "NyxID",
    category: "AI / Developer Security",
    description:
      "0→1 credential broker that lets Claude, Cursor, and your own AI agents call APIs without ever holding the keys.",
    tone: "dark",
    image: "/projects/CHRONO_NYXID/thumb.png",
    industry: "AI Infrastructure / Security",
    role: "Lead UI/UX Designer",
    platform: "Web Console / CLI / Mobile",
    timeline: "2026",
    about:
      "NyxID connects Claude, Cursor, Codex, or your own AI agents to public, internal, and localhost APIs with secure access control. Agents proxy every request through NyxID, so credentials never leave your control, and every connection can be approved from your phone.",
    tags: ["ai agent interfaces", "developer tools", "security ux", "design systems"],
    problemStatement:
      "AI agents are only useful once they can touch real systems, and today that means pasting raw API keys into config files and prompts. Every agent ends up holding every secret, with no record of what it called and no way to pull access back. The brief wasn't to design a key vault. It was to make handing access to an agent feel safe and legible, for developers whose default is to just paste the key.",
    thinking:
      "NyxID is a proxy, and a proxy is invisible by design. So the interface's job was to make an invisible layer readable. I organised the whole console around four questions a developer actually asks: which agent is this, what can it reach, where does it route, and who approved it. Agents became first-class identities with their own keys, scopes, and activity, instead of anonymous tokens in a list.",
    leadership:
      "As the lead designer on a 0→1 product, I owned the experience end to end: information architecture, the visual language, and the component system across sign-in, onboarding, the console, and the AI setup flows. A lot of the work was translation, sitting with engineering to decide how concepts like bindings, nodes, and rate limits surface in plain language, so the security model stayed honest without reading like a config file.",
    reflectionProse:
      "The console grew fast, every new capability wanted its own page, and the sidebar felt it. The command palette became the release valve, but I'd group navigation by job (connect, control, audit) much earlier instead of letting it grow one destination at a time. The other tension was depth versus approachability: power users want raw config, newcomers want one button. Pairing a one-click install with a copyable manual config on the same card was the pattern that resolved it, and I'd apply it everywhere from day one.",
    problem: [
      "Agents get raw keys pasted into config",
      "Every agent can reach every service",
      "No record of what an agent called",
      "Security concepts read like infra docs",
    ],
    approach:
      "Treated agents as identities, not tokens: each gets a scoped key, explicit service bindings, and its own activity trail, wrapped in a calm dark console that leads with security posture and keeps raw config one click away.",
    process: [
      "Mapped how developers wire agents to APIs today: pasted keys everywhere.",
      "Framed the console around who, what, where, and who approved.",
      "Designed onboarding to reach the first connected service in one step.",
      "Built the component system, then extended it to setup and org flows.",
    ],
    keyDecisions: [
      {
        decision: "Agents as first-class identities",
        chose: "Per-agent keys, scopes & activity",
        over: "A flat list of API tokens",
        explanation:
          "Each agent gets its own scoped key with visible Read/Write chips, bindings, and a usage trail, so 'what can Cursor touch?' is answered on one card.",
      },
      {
        decision: "Security posture up front",
        chose: "A progress checklist on the dashboard",
        over: "Settings buried in a profile menu",
        explanation:
          "Email, MFA, a connected service, and a scoped key form a visible 4-of-4 posture card, turning hardening into a short checklist instead of a hidden chore.",
      },
      {
        decision: "Approvals off the desktop",
        chose: "Approve from Telegram or mobile",
        over: "Approvals only inside the console",
        explanation:
          "Agents ask for access while you're away from the dashboard, so approvals go where you already are, and the console keeps the history and active grants.",
      },
      {
        decision: "One click, with the config still visible",
        chose: "Deeplink install + copyable manual config",
        over: "Docs-only setup",
        explanation:
          "Install to Cursor or Claude Code in one action, with the exact JSON and CLI command right below for anyone who wants to see what it's doing.",
      },
    ],
    outcomes: [
      "0→1 web console, onboarding & setup flows",
      "Install paths for Claude Code, Cursor & Codex",
      "Approvals via Telegram & mobile app",
      "Org roles from Owner to Viewer",
    ],
    learnings: [
      "Make the invisible layer legible",
      "Security UX is a checklist, not a lecture",
      "Show the config behind the magic button",
    ],
    blocks: [
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_2.png" },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_1.png" },
      {
        kind: "double",
        tones: ["dark", "dark"],
        images: ["/projects/CHRONO_NYXID/img_3.png", "/projects/CHRONO_NYXID/img_3_1.png"],
      },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_4.png" },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_5.png" },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_8.png" },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_6.png" },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_NYXID/img_7.png" },
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
    blocks: [
      { kind: "single", tone: "dark", image: "/projects/CHRONO_GODGPT/img_1.png" },
      { kind: "single", tone: "light", image: "/projects/CHRONO_GODGPT/img_4.png" },
      { kind: "single", tone: "lime", image: "/projects/CHRONO_GODGPT/img_3.png" },
      { kind: "single", tone: "dark", image: "/projects/CHRONO_GODGPT/img_2.png" },
      { kind: "single", tone: "light", image: "/projects/CHRONO_GODGPT/img_5.png" },
    ],
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
      { kind: "single", tone: "dark", image: "/projects/CHRONO_LUMEN/img_5.png" },
      {
        kind: "double",
        tones: ["dark", "light"],
        images: ["/projects/CHRONO_LUMEN/img_3.png", "/projects/CHRONO_LUMEN/img_4.png"],
      },
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
    blocks: [
      { kind: "single", tone: "light", image: "/projects/VICI_DTRAX/img_1.png" },
      { kind: "single", tone: "lime", image: "/projects/VICI_DTRAX/img_3.png" },
      { kind: "single", tone: "dark", image: "/projects/VICI_DTRAX/img_4.png" },
      { kind: "single", tone: "light", image: "/projects/VICI_DTRAX/img_2.png" },
      { kind: "single", tone: "lime", image: "/projects/VICI_DTRAX/img_5.png" },
    ],
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
    blocks: [
      { kind: "single", tone: "dark", image: "/projects/BTCC_JX/img_6.png" },
      { kind: "single", tone: "light", image: "/projects/BTCC_JX/img_1.png" },
      { kind: "single", tone: "lime", image: "/projects/BTCC_JX/img_2.png" },
      { kind: "single", tone: "dark", image: "/projects/BTCC_JX/img_3.png" },
      { kind: "single", tone: "light", image: "/projects/BTCC_JX/img_5.png" },
      { kind: "single", tone: "lime", image: "/projects/BTCC_JX/img_4.png" },
    ],
  },
];

export const works: Work[] = allWorks.filter((w) => !w.archived);

export function getWork(slug: string) {
  return allWorks.find((w) => w.slug === slug);
}
