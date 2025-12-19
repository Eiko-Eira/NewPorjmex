import { Project, Skill, PricingPlan } from './types';

export const SHOW_QUOTES = false; 

export const CONTACT_EMAIL = "bdhdbssh53@gmail.com";

export const SKILLS: Skill[] = [
  { 
    name: 'JavaScript', 
    level: 5, 
    category: 'language',
    description: "The fundamental scripting language of the web, enabling dynamic content and interactive user experiences. I utilize modern ES6+ syntax to build responsive front-end interfaces, manage complex state logic within web applications, and create seamless, event-driven interactions. It serves as the backbone for my work with frameworks like React and environments like Node.js."
  },
  { 
    name: 'Java', 
    level: 5, 
    category: 'language',
    description: "A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. I leverage Java for robust backend systems, Android app development, and large-scale enterprise solutions where strict typing and performance are paramount. It allows for building scalable, maintainable, and secure applications."
  },
  { 
    name: 'Python', 
    level: 5, 
    category: 'language',
    description: "A powerful, high-level programming language known for its readability and versatility. My expertise includes using Python for backend development with frameworks like Django or Flask, automating repetitive tasks through scripting, and performing complex data analysis. It is my go-to tool for rapid prototyping and solving algorithmic problems efficiently."
  },
  { 
    name: 'Node.js', 
    level: 5, 
    category: 'framework',
    description: "A runtime environment that executes JavaScript code outside a web browser, allowing for server-side development. I use Node.js to build fast, scalable network applications and RESTful APIs. Its non-blocking, event-driven architecture makes it ideal for real-time data-intensive applications that run across distributed devices."
  },
  { 
    name: 'HTML', 
    level: 4, 
    category: 'language',
    description: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. I craft semantic, accessible, and SEO-friendly HTML structures that serve as the solid foundation for all my web projects, ensuring that content is logically organized and universally accessible across different devices and screen readers."
  },
  { 
    name: 'CSS', 
    level: 4, 
    category: 'language',
    description: "Cascading Style Sheets used for describing the presentation of a document written in HTML. I specialize in modern CSS techniques, including Flexbox, Grid, and complex animations, to create visually stunning and responsive designs. I also utilize preprocessors and frameworks like Tailwind CSS to streamline styling workflows and ensure design consistency."
  },
  { 
    name: 'Luau', 
    level: 4, 
    category: 'language',
    description: "A derivative of Lua 5.1, specifically optimized for the Roblox platform. I have extensive experience using Luau to script complex game mechanics, manage server-client replication, and create immersive interactive experiences within Roblox. It allows me to bring game concepts to life with high performance and reliability."
  },
  { 
    name: 'C#', 
    level: 4, 
    category: 'language',
    description: "A modern, object-oriented programming language developed by Microsoft. It is a primary tool in my arsenal for game development using the Unity engine, as well as for building Windows desktop applications. C# provides a balance of high performance and developer productivity, making it excellent for simulation and interactive media."
  },
  { 
    name: 'C++', 
    level: 4, 
    category: 'language',
    description: "A high-performance programming language that provides a high level of control over system resources and memory. I use C++ for systems programming, developing game engines, and performance-critical applications where efficiency is non-negotiable. It deepens my understanding of how software interacts with hardware."
  },
  { 
    name: 'React', 
    level: 3, 
    category: 'framework',
    description: "A JavaScript library for building user interfaces based on components. I use React to build single-page applications that offer a smooth, app-like user experience. By creating reusable UI components and managing application state effectively, I can develop complex front-end interfaces that are easy to maintain and scale."
  },
  { 
    name: 'TypeScript', 
    level: 3, 
    category: 'language',
    description: "A strict syntactical superset of JavaScript that adds optional static typing. I adopt TypeScript in larger projects to catch errors early during development, improve code readability, and enhance tooling support. It ensures that my codebases remain robust and maintainable as they grow in complexity."
  },
];

export const CURRENT_PROJECTS: Project[] = [];

export const COMPLETED_PROJECTS: Project[] = [
  {
    id: '3',
    title: 'UI for Anthropic',
    description: 'A UI change for Anthropic for a small update.',
    completion: 100,
    tags: ['UI/UX', 'Frontend', 'Design'],
    link: 'https://www.anthropic.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg'
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
      'Easy to read code'
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
  PROJECTS: "Projects im currently working on, if any",
  LANGUAGES: "Proficiency levels in various syntax and frameworks.",
  COMPLETED: "Successfully deployed and operational units.",
  PRICES: "Standard Rates for my services",
  RATE: "Feedback helps optimize future performance."
};