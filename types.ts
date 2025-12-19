export interface Project {
  id: string;
  title: string;
  description: string;
  completion: number;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'tool' | 'framework';
  description?: string;
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