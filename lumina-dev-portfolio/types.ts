
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  category: 'web' | 'mobile' | 'ai';
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
