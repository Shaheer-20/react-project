
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-mono animate-pulse">
            Available for New Challenges
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experiences with Intelligence.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
            I'm a Full Stack Engineer specialized in building exceptional digital interfaces and AI-integrated applications that solve complex problems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-all transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-slate-700 text-white rounded-xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-8 grayscale opacity-50">
             <span className="text-sm font-mono">Expertise in:</span>
             <div className="flex gap-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" className="w-8 h-8" alt="Tailwind" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-6 h-6" alt="Node" />
             </div>
          </div>
        </div>

        <div className="hidden lg:block relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl overflow-hidden aspect-square">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
            
            {/* Visual placeholder for some complex animated element */}
            <div className="flex flex-col h-full items-center justify-center space-y-4">
                <div className="w-48 h-48 rounded-full border-4 border-dashed border-indigo-500/30 animate-[spin_20s_linear_infinite] flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 animate-pulse flex items-center justify-center text-4xl">
                        ✨
                    </div>
                </div>
                <div className="font-mono text-xs text-indigo-400/70 text-center animate-bounce">
                    [ SYSTEM_INITIALIZED: 100% ]
                </div>
                <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className={`h-1 w-8 rounded-full bg-slate-800 relative overflow-hidden`}>
                             <div className="absolute top-0 left-0 h-full bg-indigo-500 animate-[loading_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
