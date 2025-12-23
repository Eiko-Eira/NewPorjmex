import { Project, Skill, PricingPlan } from './types';

export const SHOW_QUOTES = false; 

export const CONTACT_EMAIL = "bdhdbssh53@gmail.com";

export const SKILLS: Skill[] = [
  { 
    name: 'JavaScript', 
    level: 5, 
    category: 'language',
    description: "My daily driver. I use it for everything from interactive front-ends to complex logic. It's the language I'm most comfortable thinking in."
  },
  { 
    name: 'Java', 
    level: 5, 
    category: 'language',
    description: "My go-to for heavy lifting. When performance and strict structure matter, I switch to Java. I've used it for backend systems and Android dev."
  },
  { 
    name: 'Python', 
    level: 5, 
    category: 'language',
    description: "I use Python when I need to build backends fast (Flask/Django) or automate boring tasks. It's clean, readable, and gets the job done."
  },
  { 
    name: 'Node.js', 
    level: 5, 
    category: 'framework',
    description: "Allows me to use my JS skills on the server. I use Node to build fast APIs and real-time apps without context-switching languages."
  },
  { 
    name: 'HTML', 
    level: 4, 
    category: 'language',
    description: "The skeleton of the web. I write clean, semantic markup so search engines and screen readers actually understand what's on the page."
  },
  { 
    name: 'CSS', 
    level: 4, 
    category: 'language',
    description: "I actually enjoy CSS. I use it to make things look expensive—animations, responsive layouts, and modern effects (like this site)."
  },
  { 
    name: 'Luau', 
    level: 4, 
    category: 'language',
    description: "Specific to Roblox development. I use this to script game mechanics and server-side logic for game commissions."
  },
  { 
    name: 'C#', 
    level: 4, 
    category: 'language',
    description: "Mainly for Unity game dev. It's great for object-oriented game structures and building tools."
  },
  { 
    name: 'C++', 
    level: 4, 
    category: 'language',
    description: "For when I need raw control over memory and hardware. It's tough, but essential for understanding how engines work under the hood."
  },
  { 
    name: 'React', 
    level: 3, 
    category: 'framework',
    description: "My component library of choice. It makes building complex UIs (like this portfolio) manageable and modular."
  },
  { 
    name: 'TypeScript', 
    level: 3, 
    category: 'language',
    description: "JavaScript, but with safety rails. I'm using this more and more to catch bugs before they happen, especially on larger team projects."
  },
];

export const CURRENT_PROJECTS: Project[] = [
  {
    id: 'cp-1',
    title: 'Personal Portfolio',
    description: '',
    completion: 98,
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cp-2',
    title: 'pump.fun',
    description: 'Developing tools and UI enhancements for the popular Solana memecoin launchpad.',
    completion: 65,
    tags: ['Web3', 'Solana', 'Rust'],
    link: 'https://pump.fun',
    image: 'https://pbs.twimg.com/profile_images/1745549862146961408/7X2w6k5A_400x400.jpg'
  }
];

export const COMPLETED_PROJECTS: Project[] = [
  {
    id: '3',
    title: 'UI for Anthropic',
    description: '',
    completion: 100,
    tags: ['UI/UX', 'Frontend', 'Design'],
    link: 'https://www.anthropic.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg'
  },
  {
    id: '10',
    title: 'Amazon AWS',
    description: '',
    completion: 100,
    tags: ['Enterprise', 'Cloud', 'Complex UI'],
    link: 'https://aws.amazon.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  {
    id: '12',
    title: 'pump.fun Terminal UI',
    description: '',
    completion: 100,
    tags: ['CLI', 'Rust', 'UI/UX'],
    link: 'https://pump.fun',
    image: 'https://pbs.twimg.com/profile_images/1745549862146961408/7X2w6k5A_400x400.jpg'
  },
  {
    id: '11',
    title: 'Wikipedia',
    description: '',
    completion: 100,
    tags: ['Accessibility', 'Typography', 'Content'],
    link: 'https://wikipedia.org',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg'
  }
];

export const PRICING: PricingPlan[] = [
  {
    title: 'Basic Landing Page',
    price: '$250',
    features: ['One Page', 'Smooth Animations', 'Responsive Design', '1 Week Delivery', '1 Month Bug Support']
  },
  {
    title: 'Full Web App',
    price: 'Contact for Quote',
    features: ['Multi-page', 'Authentication', 'Database Integration', 'Smooth Animations', '3 Months Code Support']
  },
  {
    title: 'Small Projects',
    price: '$25 - $50',
    features: [
      'Game Scripting ($50): Code commission, easy integration, 1 week support',
      'Code Support: Free 1st time, then $25',
      'Fast Responses & Quick Coding',
      'Clean, commented code'
    ]
  },
  {
    title: 'Custom Request',
    price: 'Your Budget',
    features: ['Email me with details', 'I will see if I can help', 'You pick the budget']
  }
];

export const QUOTES = [
  {
    text: "The best developer I've ever worked with. Truly visionary.",
    author: "Jane Doe, CEO of TechCorp"
  },
  {
    text: "Incredible attention to detail and futuristic design sense.",
    author: "John Smith, Lead Designer"
  }
];

export const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeRg2Z5sT1pj7R3oVaR4I--Svq1j79KdLvOmVwX2PRQmzLVHA/viewform?usp=dialog";

export const SECTION_DESCRIPTIONS = {
  PROJECTS: "",
  LANGUAGES: "",
  COMPLETED: "",
  PRICES: "",
  RATE: ""
};