export interface Project {
  id: number;
  name: string;
  company: string;
  industry: string;
  role: string;
  platform: string;
  outcome: string;
  image: string; // Main/hero image
  images?: string[]; // Additional images for gallery
  tags: string[];
  overview: {
    what: string;
    role: string;
    timeline: string;
  };
  problem: string[];
  approach: string;
  keyDecisions: Array<{
    decision: string;
    explanation: string;
  }>;
  learnings: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'GodGPT, Spiritual & Wellness LLM',
    company: 'ChronoAI',
    industry: 'AI Software',
    role: 'Lead Product Designer',
    platform: 'Web / AI / LLM',
    outcome: 'An AI companion that offers genuine emotional guidance and spiritual wellness support, designed to understand and resonate with your unique frequency rather than simply agreeing with you',
    image: '/projects/CHRONO_GODGPT/img_1.png',
    images: [
      '/projects/CHRONO_GODGPT/img_1.png',
      '/projects/CHRONO_GODGPT/img_2.png',
      '/projects/CHRONO_GODGPT/img_3.png',
      '/projects/CHRONO_GODGPT/img_4.png',
      '/projects/CHRONO_GODGPT/img_5.png',
      '/projects/CHRONO_GODGPT/img_6.png',
    ],
    tags: ['web design', 'ai/llm', 'chat interface', 'ui/ux'],
    overview: {
      what: 'GodGPT is a spiritual and wellness LLM built to provide authentic emotional support and guidance. Unlike typical AI assistants that simply agree with users, GodGPT is designed to tune into each user\'s emotional frequency and offer thoughtful, resonant responses that facilitate genuine healing and personal growth. The interface creates a safe, trustworthy space for meaningful conversations about spirituality, wellness, and emotional well-being.',
      role: 'Lead Product Designer',
      timeline: '06/2025 - Present',
    },
    problem: [
      'Existing LLMs act as yes-men, providing generic responses without emotional depth',
      'Lack of AI that truly understands and resonates with users\' emotional frequency',
      'Need for spiritual and wellness guidance that offers genuine emotional resolutions',
      'Chat interface needed to feel safe, trustworthy, and meaningful for sensitive conversations',
    ],
    approach: 'Designed an LLM that prioritizes emotional resonance over agreement. Created an interface that allows the AI to tune into users\' frequency and provide thoughtful, emotionally-aware responses. Built a chat experience that feels personal, authentic, and supportive without being a yes-man. Used calming visual design and conversational patterns that support deep, meaningful interactions.',
    keyDecisions: [
      {
        decision: 'Emotional resonance over agreement',
        explanation: 'Designed the LLM to focus on understanding and responding to users\' emotional frequency rather than simply agreeing with them.',
      },
      {
        decision: 'Authentic conversational patterns',
        explanation: 'Created chat interface that enables genuine emotional resolutions and thoughtful responses, not generic affirmations.',
      },
      {
        decision: 'Frequency-aligned interactions',
        explanation: 'Built system that tunes into users\' emotional state and provides responses that truly resonate with their needs.',
      },
    ],
    learnings: [
      'Emotional intelligence in AI requires careful design of both interface and interaction patterns',
      'Users value authentic, thoughtful responses over agreement in spiritual and wellness contexts',
      'Designing for emotional resonance requires understanding the nuanced needs of users seeking guidance',
    ],
  },
  {
    id: 2,
    name: 'Lumen, Wellness & Personal Growth Mobile App',
    company: 'ChronoAI',
    industry: 'AI Software',
    role: 'Lead Product Designer',
    platform: 'Mobile / iOS / Android / Wellness',
    outcome: 'Mobile wellness app that helps users set intentions, turn them into affirmations, and call out to the universe what they want in their life',
    image: '/projects/CHRONO_LUMEN/img_1.png',
    images: [
      '/projects/CHRONO_LUMEN/img_1.png',
      '/projects/CHRONO_LUMEN/img_2.png',
      '/projects/CHRONO_LUMEN/img_3.png',
      '/projects/CHRONO_LUMEN/img_4.png',
      '/projects/CHRONO_LUMEN/img_5.png',
    ],
    tags: ['mobile application', 'wellness', 'ui motion', 'design system'],
    overview: {
      what: 'Mobile wellness app that combines alignment checks, friend compatibility, personal goals, and AI-powered affirmations to help users manifest their intentions',
      role: 'Lead Product Designer',
      timeline: '06/2025 - Present',
    },
    problem: [
      'Wellness apps often feel clinical and unengaging',
      'Users struggle to maintain consistent wellness habits and intentions',
      'Lack of tools to transform intentions into actionable affirmations',
      'Need for social connection and compatibility features in wellness journey',
    ],
    approach: 'Designed a unique wellness app where users set their intentions, and AI transforms them into affirmations for personal wellness and growth. Created primary features: Alignment for personal wellness insights, Friend Compatibility for social connection, and Personal Goals for tracking and alignment. Built supporting features including AI Conversations and Energetic Profile. Designed an intuitive interface that makes manifesting intentions feel accessible and empowering.',
    keyDecisions: [
      {
        decision: 'Intention-to-affirmation AI system',
        explanation: 'Created AI-powered feature that transforms user intentions into personalized affirmations, helping users call out to the universe what they want.',
      },
      {
        decision: 'Social wellness features',
        explanation: 'Added Friend Compatibility feature to create community and social connection within the wellness journey.',
      },
      {
        decision: 'Energetic profile system',
        explanation: 'Designed personal patterns feature using birth chart data (not called astrology) as an upgrade feature for deeper insights.',
      },
    ],
    learnings: [
      'Combining AI with spiritual wellness concepts creates unique value propositions',
      'Social features enhance engagement in personal growth apps',
      'Transforming abstract intentions into concrete affirmations helps users manifest goals',
    ],
  },
  {
    id: 3,
    name: 'Aelf MineAI AI-driven Crypto Mining dApp',
    company: 'Aelf',
    industry: 'Web3 Blockchain',
    role: 'Senior Product Designer',
    platform: 'Web / Mobile / dApp',
    outcome: 'AI-powered crypto mining dApp that makes on-chain mining simple, engaging, and accessible for new users',
    image: '/projects/AELF_MINEAI/img_1.png',
    images: [
      '/projects/AELF_MINEAI/img_1.png',
      '/projects/AELF_MINEAI/img_2.png',
      '/projects/AELF_MINEAI/img_3.png',
      '/projects/AELF_MINEAI/img_4.png',
      '/projects/AELF_MINEAI/img_5.png',
      '/projects/AELF_MINEAI/img_6.png',
    ],
    tags: ['web3 experience design', 'ui/ux design', 'ai-enhanced interface design', 'design systems'],
    overview: {
      what: 'Design an AI-powered crypto mining dApp that makes on-chain mining simple, engaging, and accessible for new users',
      role: 'Senior Product Designer',
      timeline: '02/2025 - 06/2025',
    },
    problem: [
      'Users are overwhelmed by complex interfaces',
      'Lack of guidance for new users',
      'No incentive to stay engaged',
      'Current platforms are technical, hardware-heavy, and lack AI features or user-friendly design',
    ],
    approach: 'MineAI uses AI to simplify mining, have automation, guide users, and create a gamified experience with an intuitive interface on all devices and web3 community-driven progression.',
    keyDecisions: [
      {
        decision: 'AI-powered simplification',
        explanation: 'Leveraged AI to automate complex mining processes and guide users through the experience.',
      },
      {
        decision: 'Gamified experience',
        explanation: 'Created engaging game mechanics with community-driven progression to incentivize user retention.',
      },
      {
        decision: 'Intuitive multi-device interface',
        explanation: 'Designed user-friendly interface that works seamlessly across all devices, making mining accessible to new users.',
      },
    ],
    learnings: [
      'AI can dramatically simplify complex Web3 processes for mainstream users',
      'Gamification and community features are essential for user engagement in dApps',
      'Intuitive interfaces are crucial for onboarding new users to Web3',
    ],
  },
  {
    id: 4,
    name: 'RiDM Website & Branding',
    company: 'VICI Studio',
    industry: 'Design Agency',
    role: 'Lead Product Designer',
    platform: 'Web / Branding',
    outcome: 'Website that effectively showcases RiDM\'s brilliant chip architecture with clean, user-friendly design focused on storytelling',
    image: '/projects/VICI_RiDM/img_1.png',
    images: [
      '/projects/VICI_RiDM/img_1.png',
      '/projects/VICI_RiDM/img_2.png',
      '/projects/VICI_RiDM/img_3.png',
      '/projects/VICI_RiDM/img_4.png',
      '/projects/VICI_RiDM/img_5.png',
    ],
    tags: ['ui design', 'information architecture', 'design system', 'ux research'],
    overview: {
      what: 'Website design for RiDM that effectively showcases their brilliant chip architecture',
      role: 'Lead Product Designer',
      timeline: '06/2024 - 02/2025',
    },
    problem: [
      'Overly technical content that might alienate non-specialist stakeholders',
      'Difficulty conveying complex innovations in an engaging and digestible manner',
      'Lack of clear differentiation in the market',
      'Competitors\' websites suffered from outdated UI, poor responsiveness, and overwhelming technical content',
    ],
    approach: 'Developed a website with a clean, user-friendly design focused on storytelling. Created intuitive sections to explain complex technology through visuals, concise text, and interactive features. The user journey highlights RiDM\'s unique selling points, ensuring their innovation stood out while appealing to both technical and business audiences.',
    keyDecisions: [
      {
        decision: 'Storytelling-focused design',
        explanation: 'Used narrative structure to make complex chip architecture accessible to both technical and business audiences.',
      },
      {
        decision: 'Visual-first approach',
        explanation: 'Created intuitive sections with visuals, concise text, and interactive features to explain complex technology.',
      },
      {
        decision: 'Clear differentiation strategy',
        explanation: 'Designed user journey that highlights RiDM\'s unique selling points, ensuring their innovation stood out in the market.',
      },
    ],
    learnings: [
      'Storytelling makes complex technical content accessible to diverse audiences',
      'Visual explanations are crucial for conveying innovation in digestible ways',
      'Clean, modern UI differentiates products in markets with outdated competitors',
    ],
  },
  {
    id: 5,
    name: 'D\'TRAX Website',
    company: 'VICI Studio',
    industry: 'Design Agency',
    role: 'Lead Product Designer',
    platform: 'Web / Responsive',
    outcome: 'Redesigned website showcasing D\'trax expertise in commercial interior design with improved usability and modern aesthetic',
    image: '/projects/VICI_DTRAX/img_1.png',
    images: [
      '/projects/VICI_DTRAX/img_1.png',
      '/projects/VICI_DTRAX/img_2.png',
      '/projects/VICI_DTRAX/img_3.png',
      '/projects/VICI_DTRAX/img_4.png',
      '/projects/VICI_DTRAX/img_5.png',
    ],
    tags: ['web design', 'ui design', 'design system', 'content design'],
    overview: {
      what: 'Redesigned the existing website to showcase D\'trax expertise in commercial interior design and improve usability',
      role: 'Lead Product Designer',
      timeline: '06/2024 - 02/2025',
    },
    problem: [
      'Outdated design that failed to captivate potential clients',
      'Poor content organisation made it difficult to navigate',
      'Lack of engaging storytelling to showcase expertise',
      'Competitors\' sites lacked modern UI elements, intuitive navigation, and effective project showcases',
    ],
    approach: 'Implemented a bento grid design system for intuitive content grouping, allowing users to easily navigate and explore D\'trax\'s services and portfolio. Revamped the visual design to create a modern, clean, and professional aesthetic that aligns with their brand. Enhanced storytelling through visually engaging case studies and clear CTAs, positioning D\'trax as a leader in commercial interior design.',
    keyDecisions: [
      {
        decision: 'Bento grid design system',
        explanation: 'Implemented intuitive content grouping that allows users to easily navigate and explore services and portfolio.',
      },
      {
        decision: 'Modern visual design',
        explanation: 'Revamped the aesthetic to create a clean, professional look that aligns with the brand and stands out from competitors.',
      },
      {
        decision: 'Enhanced storytelling',
        explanation: 'Created visually engaging case studies and clear CTAs to position D\'trax as a leader in commercial interior design.',
      },
    ],
    learnings: [
      'Bento grid layouts are effective for organizing diverse content types',
      'Modern UI elements and intuitive navigation differentiate brands in competitive markets',
      'Engaging storytelling through case studies is crucial for showcasing expertise',
    ],
  },
  {
    id: 6,
    name: 'JX Exchange Mobile App',
    company: 'BTCC',
    industry: 'Web3 Blockchain',
    role: 'Product Designer',
    platform: 'Mobile / iOS / Android',
    outcome: 'Designed a crypto trading app that pierces through the saturated Chinese market with approachable UI and community-driven insights',
    image: '/projects/BTCC_JX/img_1.png', // Main image - Profile/Account screen
    images: [
      '/projects/BTCC_JX/img_1.png', // Profile/Account screen
      '/projects/BTCC_JX/img_2.png', // Logo - 金兴贵金属
      '/projects/BTCC_JX/img_3.png', // Home screen with market data
      '/projects/BTCC_JX/img_4.png', // Community section
      '/projects/BTCC_JX/img_5.png', // Email binding benefits screen
    ],
    tags: ['mobile application', 'design system', 'ui motion', 'wireframes / user flow'],
    overview: {
      what: 'Crypto and trading mobile app designed to stand out in the saturated Chinese market with approachable interface and community support',
      role: 'Product Designer (Hybrid)',
      timeline: '11/2023 - 06/2024',
    },
    problem: [
      'Users are thrown into trading without any knowledge or community support',
      'Content is overwhelming and difficult to navigate',
      'App UI can be intimidating and not the easiest to navigate around',
      'Current market does not offer market insights and credible sources to keep up with latest trends',
    ],
    approach: 'Designed an approachable interface with calming colors and clear content dividers. Created a self-sustaining ecosystem of shared knowledge with reliable market news updates. Simplified navigation to make trading accessible to beginners. Built community features to support users throughout their trading journey.',
    keyDecisions: [
      {
        decision: 'Approachable interface with calming colors',
        explanation: 'Used calming color palette and clear visual hierarchy to make the app less intimidating for new users.',
      },
      {
        decision: 'Easy navigation with clear dividers',
        explanation: 'Organized content with clear dividers and intuitive navigation patterns to reduce cognitive load.',
      },
      {
        decision: 'Community-driven knowledge ecosystem',
        explanation: 'Built features that provide reliable market news and enable users to share knowledge, creating a supportive community.',
      },
      {
        decision: 'Progressive disclosure for trading',
        explanation: 'Designed a layered interface that reveals complexity gradually, making trading accessible to beginners.',
      },
    ],
    learnings: [
      'Approachable design is crucial for breaking into saturated markets',
      'Community support can significantly improve user confidence in complex financial products',
      'Clear content organization reduces overwhelm and improves user retention',
      'Calming visual design can make intimidating financial interfaces more accessible',
    ],
  },
];

