
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section (Simplified) */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
             <img src="https://picsum.photos/seed/portrait/600/600" alt="Lumina" className="relative rounded-3xl w-full aspect-square object-cover border border-slate-800" />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center text-white p-4 shadow-xl">
                <span className="text-3xl font-bold">6+</span>
                <span className="text-xs text-indigo-100 font-mono text-center">Years Experience</span>
             </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Bridging Human Creativity & <br /> <span className="text-indigo-400">Machine Intelligence.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a digital architect who thrives at the intersection of aesthetic design and complex engineering. With a strong background in computer science and a passion for UI/UX, I help companies build products that aren't just functional, but memorable.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h4 className="text-indigo-400 font-bold mb-1">Architecture</h4>
                <p className="text-sm text-slate-500">Scalable system design and cloud deployments.</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h4 className="text-indigo-400 font-bold mb-1">Development</h4>
                <p className="text-sm text-slate-500">Robust frontend & backend implementation.</p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white">Lumina<span className="text-indigo-500">.</span></div>
          <p className="text-slate-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} Lumina. All rights reserved. Built with Gemini AI.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm font-mono">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <ChatBot />
    </div>
  );
};

export default App;

