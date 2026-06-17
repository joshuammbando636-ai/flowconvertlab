export interface NavLink {
  href: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarColor: string;
  rating: number;
  text: string;
  metric: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  color: string;
  tags: string[];
  views: string;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  desc: string;
  color: string;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
  badge?: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
  color: string;
  badge: string | null;
}
