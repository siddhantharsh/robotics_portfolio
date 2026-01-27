import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Activity, ExternalLink } from 'lucide-react';
import { USER_INFO, ASSIGNMENTS } from './constants';
import { Assignment } from './types';

const App: React.FC = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    const base = url.replace('youtube.com', 'youtube-nocookie.com');
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      showinfo: '0',
      origin: typeof window !== 'undefined' ? window.location.origin : ''
    });
    return `${base}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tighter uppercase">{USER_INFO.name}</span>
            <span className="text-[10px] mono-font text-zinc-500 uppercase">{USER_INFO.id} • {USER_INFO.institution}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#assignments" 
              onClick={(e) => scrollToSection(e, 'assignments')}
              className="hover:text-white transition-colors"
            >
              Assignments
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center space-y-8 text-2xl uppercase tracking-widest font-bold animate-in fade-in zoom-in">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#assignments" onClick={(e) => scrollToSection(e, 'assignments')}>Assignments</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 circuit-bg opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] uppercase tracking-widest mb-8 text-zinc-400">
            <Activity size={12} className="text-white animate-pulse" />
            <span>Operational Systems Engineering</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
            Robotics<br/>
            <span className="text-zinc-600">& Automation</span>
          </h1>
          <p className="max-w-lg mx-auto text-zinc-400 text-sm md:text-base leading-relaxed mb-12 uppercase tracking-wide">
            Digital Engineering Portfolio • {USER_INFO.name} • {USER_INFO.institution}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#assignments" 
              onClick={(e) => scrollToSection(e, 'assignments')}
              className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              View Coursework <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Decorative corner lines */}
        <div className="absolute top-40 left-10 md:left-20 w-32 h-[1px] bg-zinc-800"></div>
        <div className="absolute top-40 left-10 md:left-20 w-[1px] h-32 bg-zinc-800"></div>
        <div className="absolute bottom-10 right-10 md:right-20 w-32 h-[1px] bg-zinc-800"></div>
        <div className="absolute bottom-10 right-10 md:right-20 w-[1px] h-32 bg-zinc-800"></div>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 md:py-40 bg-zinc-950 px-6 border-b border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-zinc-500"></span> 01. About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Academic Progress & Technical Records
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-zinc-300 leading-relaxed font-light">
              {USER_INFO.about}
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-[10px] uppercase text-zinc-500 mb-1">Status</span>
                <span className="text-sm font-medium">B.Tech 3rd Year</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-zinc-500 mb-1">Focus</span>
                <span className="text-sm font-medium">Industrial Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignments Grid */}
      <section id="assignments" className="py-24 md:py-40 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-zinc-500"></span> 02. Assignments
              </h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Assignment Records
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {ASSIGNMENTS.map((assignment) => (
              <button 
                key={assignment.id}
                onClick={() => setSelectedAssignment(assignment)}
                className="group relative bg-zinc-900/40 border border-zinc-800 p-8 text-left hover:bg-zinc-900 hover:border-zinc-500 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                  <ArrowUpRight size={24} className="text-zinc-400" />
                </div>
                <span className="block text-[10px] mono-font text-zinc-500 mb-6 uppercase tracking-widest">{assignment.date}</span>
                <h4 className="text-2xl font-bold uppercase mb-4 leading-tight group-hover:text-white transition-colors">{assignment.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">{assignment.shortDescription}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-100">
                  View Technical Inference <ChevronRight size={14} />
                </div>
              </button>
            ))}
            
            <div className="flex flex-col items-center justify-center p-8 border border-zinc-900 border-dashed rounded-sm bg-zinc-950/50">
              <span className="text-zinc-600 text-xs uppercase tracking-widest mb-2 italic">Awaiting Next Module</span>
              <div className="w-12 h-[1px] bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment Detail Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-8 md:p-12 shadow-2xl">
            <button 
              onClick={() => setSelectedAssignment(null)}
              className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <span className="text-[10px] mono-font text-zinc-500 uppercase mb-4 block tracking-widest">{selectedAssignment.date}</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 pr-12">{selectedAssignment.title}</h2>
            
            {selectedAssignment.videoUrl ? (
              <div className="space-y-4 mb-10">
                <div className="aspect-video w-full bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
                  <iframe 
                    className="w-full h-full"
                    src={getEmbedUrl(selectedAssignment.videoUrl)}
                    title={selectedAssignment.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-end">
                   <a 
                    href={selectedAssignment.videoUrl.replace('/embed/', '/watch?v=')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
                  >
                    Open in YouTube <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-full h-48 bg-zinc-900/50 flex items-center justify-center text-zinc-600 uppercase text-xs tracking-widest mb-10 border border-zinc-800 italic">
                Video analysis pending
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-500 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-zinc-700"></span> Technical Inference
              </h3>
              <div className="text-zinc-300 leading-relaxed space-y-4 text-sm md:text-base whitespace-pre-line">
                {selectedAssignment.inference}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-900">
              <button 
                onClick={() => setSelectedAssignment(null)}
                className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black pt-24 pb-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
              Student Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-zinc-950 border border-zinc-900">
                <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Name</span>
                <span className="text-sm font-bold uppercase">{USER_INFO.name}</span>
              </div>
              <div className="p-6 bg-zinc-950 border border-zinc-900">
                <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Registration ID</span>
                <span className="text-sm font-bold uppercase">{USER_INFO.id}</span>
              </div>
              <div className="p-6 bg-zinc-950 border border-zinc-900">
                <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Institution</span>
                <span className="text-sm font-bold uppercase">{USER_INFO.institution}</span>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase tracking-tighter">Robotics & Automation Records</span>
            </div>
            <span className="text-[10px] uppercase text-zinc-600 tracking-widest">
              © {new Date().getFullYear()} Internal Academic Portfolio.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;