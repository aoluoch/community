export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type Stat = {
  id: number;
  value: string;
  label: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Milestone = {
  id: number;
  year: string;
  title: string;
  description: string;
};

export type Program = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  status: "Ongoing" | "New" | "Coming Soon";
};

export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  readTime: string;
  featured: boolean;
  image: string;
};

export type Partner = {
  id: number;
  name: string;
  logo: string;
};

export type DonationTier = {
  id: number;
  amount: number;
  title: string;
  description: string;
  perks: string[];
};