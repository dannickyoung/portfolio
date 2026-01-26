import type { CVData } from '../types/cv.types';

/**
 * Static CV Data for Dannick Young
 * This is the single source of truth for all CV content
 */
export const CV_DATA: CVData = {
  personal: {
    name: "Dannick Young",
    title: "Product Design · Design Systems · Design Strategies",
    location: "Singapore",
    email: "dannickyoung@outlook.com",
    linkedin: "linkedin.com/in/dannickyoung",
    portfolio: "website placeholder",
  },
  tagline: "Editorial / Vol. 01",
  summary: "I design apps. I make them pretty & easy to use. I use AI tools like Cursor for faster development, with better quality, and fewer handoff issues.",
  focus: ["AI products", "Design systems", "Research-to-UI", "Mobile-first", "Web3 interfaces", "Design strategies", "User experience", "Design-to-code", "AI-assisted design", "Built to scale"],
  experience: [
    {
      id: "exp-1",
      dateRange: "06/2025 - Present",
      title: "Lead Product Designer",
      organization: "ChronoAI (previously Aelf)",
      category: "AI Software",
      description: "I build AI products from ideation to production to launch. Built a design system with reusable components and proper storage structure using Cursor and AI tools, reducing design-to-dev handoff time by 60%. Created the entire vibecoded structure for product launches, enabling faster iteration. Work closely with marketing on user acquisition and retention campaigns that drive growth. Run QA across existing AI products and constantly improve the user experience. Conduct user surveys to gather feedback, then create design strategies based on what users need. Built a user feedback collection system with AI insights so we can identify pain points faster and fix them quickly.",
    },
    {
      id: "exp-2",
      dateRange: "02/2025 - 06/2025",
      title: "Senior Product Designer",
      organization: "Aelf",
      category: "Web3 Blockchain",
      description: "I designed a Web3 mining dashboard. Simplified the wallet connection flow from 5 steps to 2. Built two microsites for staking and rewards that work on mobile. Conducted 20+ user interviews, then redesigned the dashboard layout based on their feedback.",
    },
    {
      id: "exp-3",
      dateRange: "06/2024 - 02/2025",
      title: "Lead Product Designer",
      organization: "VICI Studio",
      category: "Design Agency",
      description: "I created reusable design systems with 30+ components for 4 startup clients, enabling 2× faster MVP delivery. Designed and launched 6 responsive websites and 2 mobile apps from concept to production. Established a research process: user interviews → synthesis → feature prioritization that all clients now use. Specialized in helping early-stage startups go from idea to launch.",
    },
    {
      id: "exp-4",
      dateRange: "11/2023 - 06/2024",
      title: "Product Designer (Hybrid)",
      organization: "BTCC",
      category: "Web3 Blockchain",
      description: "I redesigned the crypto trading signup flow. Reduced form fields from 8 to 4, increasing completion rate by 28%. Designed 3 trading apps for iOS and Android. Created 15+ landing pages with A/B testing. Used Hotjar heatmaps to identify drop-off points, then redesigned those sections.",
    },
    {
      id: "exp-5",
      dateRange: "11/2021 - 11/2023",
      title: "Junior Art Director",
      organization: "Ogilvy",
      category: "Advertising",
      description: "I created 50+ campaign visuals across 8 client brands. Pitched social media campaign concepts directly to clients. Produced animated GIFs and videos for Instagram and Facebook that increased engagement by 30%. Wrote design system documentation for 3 major accounts.",
    },
  ],
    skills: [
    { 
      label: "Product", 
      skills: "UI/UX · Design Systems · Prototyping · QA · Product Strategy · Vibecoding" 
    },
    { 
      label: "Research", 
      skills: "Interviews · Usability Testing · Synthesis · User Surveys · Feedback Systems" 
    },
    { 
      label: "Tools", 
      skills: "Figma · Framer · Adobe Suite · Cursor · AI-Assisted Design · Design-to-Code" 
    },
  ],
  languages: ["English", "Mandarin", "Korean"],
  education: {
    degree: "BA Design & Media",
    institution: "University of Central Lancashire",
    year: 2021,
    abbreviation: "UCLAN",
  },
  footer: {
    copyright: "Dannick Young",
    openTo: ["Product Design", "UI/UX", "Design Systems"],
  },
};
