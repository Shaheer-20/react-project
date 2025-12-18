
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neural Vision Dashboard',
    description: 'An AI-powered real-time analytics dashboard built with React and Gemini API for visual intelligence.',
    tags: ['React', 'TypeScript', 'Gemini AI', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/vision/800/600',
    link: '#',
    category: 'ai'
  },
  {
    id: '2',
    title: 'Quantum Ledger',
    description: 'A high-performance blockchain explorer with 3D visualizations and real-time transaction tracking.',
    tags: ['Next.js', 'Three.js', 'Solidity', 'D3.js'],
    imageUrl: 'https://picsum.photos/seed/ledger/800/600',
    link: '#',
    category: 'web'
  },
  {
    id: '3',
    title: 'EcoFlow Mobile',
    description: 'A sustainable logistics management app helping companies reduce their carbon footprint.',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/eco/800/600',
    link: '#',
    category: 'mobile'
  },
  {
    id: '4',
    title: 'Nexus Chat Engine',
    description: 'A scalable real-time communication platform supporting multi-modal AI interactions.',
    tags: ['Socket.io', 'Express', 'Redis', 'React'],
    imageUrl: 'https://picsum.photos/seed/nexus/800/600',
    link: '#',
    category: 'web'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'frontend' },
  { name: 'Node.js', level: 85, icon: '🟢', category: 'backend' },
  { name: 'Gemini API', level: 92, icon: '✨', category: 'ai' },
  { name: 'Three.js', level: 75, icon: '📐', category: 'frontend' },
  { name: 'PostgreSQL', level: 80, icon: '🐘', category: 'backend' },
  { name: 'Tailwind CSS', level: 98, icon: '🎨', category: 'frontend' },
  { name: 'Docker', level: 70, icon: '🐳', category: 'tools' }
];

export const SYSTEM_PROMPT = `
You are Lumina, the AI representation of a world-class Senior Full Stack Engineer.
Your expertise includes React, TypeScript, Tailwind CSS, and the Gemini API.
You are helpful, professional, and slightly witty.
Answer questions about Lumina's portfolio, skills (React, TS, Node, AI), and work history.
Lumina has 6 years of experience, loves building beautiful UIs, and believes AI is the future of development.
Keep responses concise and engaging.
`;
