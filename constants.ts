
import { Project, Experience, Service, Testimonial } from './types';

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    outcome: string;
    percentage: number;
  }[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: 'discovery' | 'research' | 'design' | 'build' | 'iterate' | 'deliver';
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface Publication {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  chapters: string[];
}

export interface DetailedProject extends Project {
  problem: string;
  strategy: string;
  process: string[];
  tools: string[];
  results: { label: string; value: string }[];
  learnings: string;
  quote?: { text: string; author: string };
}

export const PERSONAL_INFO = {
  name: "S.AKASH",
  role: "Senior Product Designer & Creative Developer",
  bio: "I bridge the gap between complex engineering and intuitive user experience. With a decade of experience at the intersection of design and code, I build digital products that aren't just beautiful—they work flawlessly and drive measurable business growth.",
  positioning: "A decade of experience building for the world's most ambitious companies. I don't just push pixels; I solve business problems through systems-thinking and technical precision.",
  email: "hello@s-akash.design",
  socials: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};

export const METRICS: Metric[] = [
  {
    label: "Experience",
    value: "10+",
    description: "Years engineering high-performance digital products for global industry leaders."
  },
  {
    label: "Projects",
    value: "50+",
    description: "Successful end-to-end deliveries across Fintech, SaaS, and Operating Systems."
  },
  {
    label: "Revenue Impact",
    value: "$2B+",
    description: "Annual transaction volume processed through architected payment infrastructures."
  },
  {
    label: "Satisfaction",
    value: "98%",
    description: "Client retention and satisfaction rate based on post-delivery performance audits."
  }
];

export const FEATURED_BOOK: Publication = {
  title: "The Art of Interface",
  subtitle: "Engineering trust through invisible design.",
  description: "A comprehensive guide on how to build digital products that users instinctively trust. This book covers the intersection of behavioral psychology, technical performance, and high-end visual aesthetics.",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
  link: "#",
  chapters: [
    "Cognitive Load & Performance",
    "The Psychology of Motion",
    "Systems Thinking for Scale",
    "Accessibility as a Feature"
  ]
};

export const TECH_STACK: TechItem[] = [
  {
    name: "Figma",
    category: "Design",
    description: "The core of my design workflow. Used for high-fidelity UI design, component systems, and real-time collaboration.",
    icon: "figma"
  },
  {
    name: "React / Next.js",
    category: "Frontend",
    description: "My primary framework for building fast, SEO-friendly, and highly interactive web applications.",
    icon: "react"
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Ensuring type safety and maintainable code architecture for enterprise-level applications.",
    icon: "typescript"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Enabling rapid UI development with a utility-first approach while maintaining strict design consistency.",
    icon: "tailwind"
  },
  {
    name: "Framer Motion",
    category: "Animation",
    description: "Creating world-class interaction design and smooth transitions that enhance the user experience.",
    icon: "framer"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Architecting reliable, relational data structures for scalable backend systems.",
    icon: "database"
  },
  {
    name: "Vercel / AWS",
    category: "Infrastructure",
    description: "Deploying and scaling applications with global edge performance and 99.9% uptime.",
    icon: "cloud"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Building robust APIs and server-side logic to power modern digital products.",
    icon: "node"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery",
    description: "We start by uncovering the 'why'. I dive deep into your business goals, stakeholders, and market positioning to ensure we're solving the right problem.",
    icon: "discovery"
  },
  {
    id: "02",
    title: "Research",
    description: "Data-driven insights over assumptions. I analyze user behavior, perform competitive audits, and identify the friction points that matter most.",
    icon: "research"
  },
  {
    id: "03",
    title: "Design",
    description: "Translating strategy into pixels. High-fidelity prototypes that balance aesthetic elegance with rigorous usability standards and accessibility.",
    icon: "design"
  },
  {
    id: "04",
    title: "Build",
    description: "Engineering with precision. I develop using modern, performant stacks (React/Next.js) to ensure your product is fast, secure, and ready to scale.",
    icon: "build"
  },
  {
    id: "05",
    title: "Iterate",
    description: "Refining through feedback. We test the solution with real users, gathering qualitative and quantitative data to polish every interaction until it's perfect.",
    icon: "iterate"
  },
  {
    id: "06",
    title: "Deliver",
    description: "Smooth deployment and beyond. I manage the transition from staging to production, providing documentation and ongoing support to ensure long-term success.",
    icon: "deliver"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Design",
    skills: [
      { name: "Conversion UX", outcome: "Optimizing user flows to reduce drop-off and increase conversion rates by up to 25%.", percentage: 95 },
      { name: "Visual Systems", outcome: "Building scalable design languages that maintain brand consistency across all platforms.", percentage: 98 },
      { name: "Interaction Design", outcome: "Reducing cognitive load through intuitive motion and feedback loops.", percentage: 92 }
    ]
  },
  {
    title: "Development",
    skills: [
      { name: "Performant Apps", outcome: "Engineering sub-second load times to improve SEO and user retention.", percentage: 94 },
      { name: "Accessibility (a11y)", outcome: "Ensuring products are usable by everyone, reaching a 20% larger audience.", percentage: 90 },
      { name: "Scalable Architecture", outcome: "Writing clean, modular code that scales from MVP to millions of users.", percentage: 96 }
    ]
  },
  {
    title: "Strategy",
    skills: [
      { name: "Product Discovery", outcome: "Identifying high-value features through user research and data-driven insights.", percentage: 88 },
      { name: "GTM Strategy", outcome: "Aligning design and development with business goals for successful market entry.", percentage: 85 },
      { name: "Growth Engineering", outcome: "Implementing A/B testing frameworks to systematically improve key metrics.", percentage: 82 }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Modern Stack", outcome: "Leveraging React, TypeScript, and Tailwind for rapid, reliable delivery.", percentage: 97 },
      { name: "Collaborative Design", outcome: "Using Figma and Framer to bridge the gap between design and production.", percentage: 99 },
      { name: "AI Integration", outcome: "Implementing LLMs and GenAI to create intelligent, next-gen user experiences.", percentage: 89 }
    ]
  }
];

export const CLIENTS = [
  { name: "ChatGPT", logo: "https://cdn.simpleicons.org/openai/74aa7c" },
  { name: "Claude", logo: "https://cdn.simpleicons.org/anthropic/d97757" },
  { name: "Gemini", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Perplexity", logo: "https://cdn.simpleicons.org/perplexity/202221" },
  { name: "Midjourney", logo: "https://cdn.simpleicons.org/midjourney/000000" },
  { name: "Runway", logo: "https://cdn.simpleicons.org/runway/000000" },
  { name: "Synthesia", logo: "https://cdn.simpleicons.org/synthesia/000000" },
  { name: "ElevenLabs", logo: "https://cdn.simpleicons.org/elevenlabs/000000" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/ff4f00" }
];

export const PROJECTS: DetailedProject[] = [
  {
    id: "1",
    title: "Linear Redesign Concept",
    category: "Product Design",
    description: "Reimagining velocity-based project management with a keyboard-first navigation system that improved task speed by 40%.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    tags: ["UI/UX", "System Design"],
    link: "#",
    problem: "Power users found existing project management tools cluttered and slow. The cognitive load of navigating via mouse was causing friction in high-velocity dev teams.",
    strategy: "Focus on a 'Command Palette First' architecture. We eliminated 60% of visible UI elements, moving them behind context-aware keyboard shortcuts.",
    process: ["User Research", "Wireframing", "Interaction Design", "Prototyping", "A/B Testing"],
    tools: ["Figma", "Framer", "React", "TypeScript"],
    results: [
      { label: "Task Speed Increase", value: "+42%" },
      { label: "User Satisfaction", value: "98%" },
      { label: "Onboarding Time", value: "-15m" }
    ],
    learnings: "Minimalism isn't just about removing things; it's about prioritizing intent. Performance is a feature, not a technical requirement.",
    quote: { text: "The fastest interface I've ever used. It feels like it reads my mind.", author: "Head of Engineering, Linear" }
  },
  {
    id: "2",
    title: "AI Work Flow",
    category: "Automation",
    description: "Work flows which can automate your works in less than half of the original cost and half of the time.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
    tags: ["n8n", "AI Automation", "LLM"],
    link: "#",
    problem: "Manual repetitive tasks were draining company resources, leading to high operational costs and human error in mission-critical data processing pipelines.",
    strategy: "Architected a multi-agent AI system using n8n and LangChain to orchestrate complex business logic, reducing manual data entry and validation by 90%.",
    process: ["Logic Mapping", "Agent Orchestration", "API Integration", "Performance Tuning"],
    tools: ["n8n", "OpenAI", "LangChain", "Node.js"],
    results: [
      { label: "Cost Reduction", value: "50%+" },
      { label: "Time Saved", value: "60%+" },
      { label: "Error Rate", value: "-95%" }
    ],
    learnings: "Automation isn't just about speed; it's about consistency. By offloading the 'robotic' work to actual robots, humans can focus on high-value creative strategy.",
    quote: { text: "The n8n workflows built here transformed our operations. We're moving 2x faster with half the overhead.", author: "COO, Automation Systems" }
  },
  {
    id: "3",
    title: "Nebula OS",
    category: "Operating Systems",
    description: "A spatial computing interface for the next generation of desktop computing, focusing on intuitive window management.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    tags: ["R&D", "Visual Design"],
    link: "#",
    problem: "Desktop operating systems haven't evolved fundamentally in 30 years. Current metaphors fail to handle the density of modern web-based workflows.",
    strategy: "Developed 'Gravity Windows'—a spatial management system where windows intelligently cluster based on project context.",
    process: ["Conceptual Art", "Prototyping", "User Testing", "Visual Refinement"],
    tools: ["SwiftUI", "Metal", "Figma", "After Effects"],
    results: [
      { label: "Context Switching", value: "-30%" },
      { label: "Desktop Organization", value: "+55%" },
      { label: "Visual Fidelity", value: "8K Ready" }
    ],
    learnings: "Spatial awareness is a powerful tool for cognitive organization. We should design for the mind's eye, not just the physical eye.",
    quote: { text: "This is what the future of work looks like. Completely immersive.", author: "Lead Designer, Nebula" }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Stripe",
    role: "Senior Product Designer",
    period: "2021 — Present",
    description: "Leading design initiatives for Stripe Tax and global billing infrastructure. Scaling design systems used by millions of developers."
  },
  {
    id: "e2",
    company: "Apple",
    role: "UX Design Lead",
    period: "2018 — 2021",
    description: "Headed the core interaction design team for iOS System Settings and accessibility features."
  },
  {
    id: "e3",
    company: "Freelance",
    role: "Creative Developer",
    period: "2015 — 2018",
    description: "Collaborated with high-growth startups to build MVPs and unique brand experiences."
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Product Strategy",
    description: "Translating complex business requirements into elegant, user-centric product roadmaps.",
    icon: "strategy"
  },
  {
    id: "s2",
    title: "Interface Design",
    description: "Crafting pixel-perfect, high-fidelity interfaces with a focus on typography and motion.",
    icon: "design"
  },
  {
    id: "s3",
    title: "Creative Coding",
    description: "Building fast, accessible, and responsive web applications using modern stacks.",
    icon: "coding"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    content: "Akash has an uncanny ability to turn complex technical requirements into beautiful, intuitive interfaces. He's one of the few designers who truly understands code.",
    author: "Sarah Chen",
    role: "Head of Design",
    company: "Linear",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: "t2",
    content: "Working with Akash was a game-changer for our product launch. His attention to detail and sense of rhythm in motion design is world-class.",
    author: "Marcus Aurelius",
    role: "Founder",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: "t3",
    content: "Rarely do you find someone who balances high-end aesthetics with extreme performance. Akash delivered a product that looks like Apple but runs like Google.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "Nebula OS",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];
