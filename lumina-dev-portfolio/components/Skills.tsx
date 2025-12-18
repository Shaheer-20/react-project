
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" class="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Tech Stack</h2>
          <div className="h-1.5 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My versatile toolkit allows me to build robust, scalable, and visually stunning applications from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name} 
              className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-indigo-500/50 transition-all hover:bg-slate-800 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">{skill.icon}</span>
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-700 text-slate-300 rounded">
                  {skill.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
