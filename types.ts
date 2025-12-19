export interface Project {
  id: string;
  title: string;
  description: string;
  completion: number; // 0-100
  tags: string[];
  link?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'language' | 'tool' | 'framework';
  description?: string; // Details shown in popup
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}