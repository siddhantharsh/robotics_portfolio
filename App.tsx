import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Activity, ExternalLink, Mail, ArrowLeft } from 'lucide-react';
import { USER_INFO, ASSIGNMENTS } from './constants';
import { Assignment } from './types';
import FaultyTerminal from './FaultyTerminal';
// Helper to handle video embedding
const getEmbedUrl = (url: string) => {
  if (!url) return '';
  let videoId = '';
  if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1].split('?')[0];
  } else if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }

  if (!videoId) return url;

  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    showinfo: '0',
    origin: typeof window !== 'undefined' ? window.location.origin : ''
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
};

// Custom Dark Veil Component (ReactBits-inspired)
const DarkVeil: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
    {/* SVG Noise Texture Overlay */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay z-10 pointer-events-none">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>

    {/* Animated Dark Greyish Gradients */}
    <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700/10 via-zinc-900/5 to-transparent blur-[120px] veil-blob-1 mix-blend-screen"></div>
    <div className="absolute bottom-[-30%] right-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-600/10 via-zinc-800/5 to-transparent blur-[140px] veil-blob-2 mix-blend-screen"></div>
    <div className="absolute top-[20%] left-[20%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/5 via-zinc-900/10 to-transparent blur-[100px] veil-blob-3 mix-blend-screen"></div>
  </div>
);

const Navigation: React.FC<{ onNavigate: (hash: string) => void, currentPath: string }> = ({ onNavigate, currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#/" onClick={() => onNavigate('#/')} className="flex flex-col">
          <span className="font-bold text-lg tracking-tighter uppercase">{USER_INFO.name}</span>
          <span className="text-[10px] mono-font text-zinc-500 uppercase">{USER_INFO.id} • {USER_INFO.institution}</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#/" onClick={() => onNavigate('#/')} className="hover:text-white transition-colors">Home</a>
          <a href="#/assignments" onClick={() => {
            onNavigate('#/');
            setTimeout(() => document.getElementById('assignments')?.scrollIntoView({ behavior: 'smooth' }), 100);
          }} className="hover:text-white transition-colors">Assignments</a>
        </div>

        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-zinc-900 p-6 flex flex-col space-y-6 animate-in slide-in-from-top">
          <a href="#/" onClick={() => { onNavigate('#/'); setIsMenuOpen(false); }} className="text-xl font-bold uppercase tracking-widest">Home</a>
          <a href="#/" onClick={() => { onNavigate('#/'); setIsMenuOpen(false); setTimeout(() => document.getElementById('assignments')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-xl font-bold uppercase tracking-widest">Assignments</a>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black pt-24 pb-12 px-6 border-t border-zinc-900 relative z-20">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
          Contact & Credentials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="p-8 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors">
            <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Name</span>
            <span className="text-sm font-bold uppercase">{USER_INFO.name}</span>
          </div>
          <div className="p-8 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors">
            <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Registration No.</span>
            <span className="text-sm font-bold uppercase mono-font">{USER_INFO.id}</span>
          </div>
          <div className="p-8 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors">
            <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Institution</span>
            <span className="text-sm font-bold uppercase">{USER_INFO.institution}</span>
          </div>
          <div className="p-8 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors group">
            <span className="block text-[10px] uppercase text-zinc-600 mb-2 tracking-widest">Mail ID</span>
            <a href={`mailto:${USER_INFO.email}`} className="text-sm font-bold flex items-center gap-2 group-hover:text-white transition-colors">
              <Mail size={14} className="text-zinc-500" /> {USER_INFO.email}
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-sm font-bold uppercase tracking-tighter">Robotics & Automation Records</span>
        <span className="text-[10px] uppercase text-zinc-600 tracking-widest">
          © {new Date().getFullYear()} {USER_INFO.name} • Academic Repository.
        </span>
      </div>
    </div>
  </footer>
);

const HomePage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [isNetworkLoaded, setIsNetworkLoaded] = useState(false);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setIsNetworkLoaded(true);
    }, 800); // Quick initialization sequence

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900 bg-black">

        {/* Loading Overlay scoped to Hero Section */}
        <div
          className={`absolute inset-0 z-50 bg-black flex flex-col items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isNetworkLoaded ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
            }`}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-[1px] bg-zinc-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-white w-full h-full animate-load-line origin-left"></div>
            </div>
            <span className="text-[10px] mono-font text-zinc-500 uppercase tracking-[0.3em] animate-pulse">
              Initializing Interface...
            </span>
          </div>
        </div>

        {/* Interactive Faulty Terminal System */}
        <div className={`absolute inset-0 w-full h-full z-0 overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${isNetworkLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.5}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0.1}
              tint="#c0bfbc"
              mouseReact
              mouseStrength={0.5}
              pageLoadAnimation
              brightness={0.6}
            />
          </div>
        </div>

        {/* Gradient overlays to ensure text remains legible over the 3D model */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/40 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* Content wrapper with pointer-events-none so user can interact with the 3D scene behind the text */}
        <div className="relative z-10 text-center px-6 pointer-events-none flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] uppercase tracking-widest mb-8 text-zinc-300 backdrop-blur-sm pointer-events-auto">
            <Activity size={12} className="text-white animate-pulse" />
            <span>Operational Systems Engineering</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-6 drop-shadow-2xl">
            Robotics<br />
            <span className="text-zinc-400">& Automation</span>
          </h1>
          <p className="max-w-lg mx-auto text-zinc-300 text-sm md:text-base leading-relaxed mb-12 uppercase tracking-wide drop-shadow-md">
            Digital Engineering Portfolio • {USER_INFO.name} • {USER_INFO.institution}
          </p>
          <button
            onClick={() => document.getElementById('assignments')?.scrollIntoView({ behavior: 'smooth' })}
            className="pointer-events-auto px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
          >
            Explore Work <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-40 bg-zinc-950 px-6 border-b border-zinc-900 relative z-20">
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

      {/* Assignments Grid with Dark Veil Background */}
      <section id="assignments" className="py-24 md:py-40 px-6 relative overflow-hidden">
        <DarkVeil />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-20">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-zinc-500"></span> 02. Coursework
              </h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Assignment Records
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ASSIGNMENTS.map((assignment) => (
              <a
                key={assignment.id}
                href={`#/assignment/${assignment.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(`#/assignment/${assignment.id}`); }}
                className="group relative bg-zinc-950/60 backdrop-blur-sm border border-zinc-800/80 p-8 text-left hover:bg-zinc-900/80 hover:border-zinc-500 transition-all duration-500 overflow-hidden block shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                  <ArrowUpRight size={24} className="text-zinc-400" />
                </div>
                <span className="block text-[10px] mono-font text-zinc-500 mb-6 uppercase tracking-widest">{assignment.date}</span>
                <h4 className="text-xl font-bold uppercase mb-4 leading-tight group-hover:text-white transition-colors">{assignment.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">{assignment.shortDescription}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-100">
                  Open Assignment <ChevronRight size={14} />
                </div>
              </a>
            ))}
            <div className="flex flex-col items-center justify-center p-8 border border-zinc-900/50 border-dashed rounded-sm bg-zinc-950/30 backdrop-blur-sm">
              <span className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-2 italic">Awaiting Next Module</span>
              <div className="w-12 h-[1px] bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const AssignmentPage: React.FC<{ id: string, onNavigate: (path: string) => void }> = ({ id, onNavigate }) => {
  const assignment = ASSIGNMENTS.find(a => a.id === id);

  if (!assignment) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center relative overflow-hidden">
        <DarkVeil />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold uppercase mb-8">Assignment Not Found</h1>
          <button onClick={() => onNavigate('#/')} className="text-sm font-bold underline">Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <DarkVeil />

      <div className="max-w-4xl mx-auto relative z-10 bg-black/40 p-8 md:p-12 rounded-2xl backdrop-blur-md border border-zinc-900/50 shadow-2xl">
        <button
          onClick={() => onNavigate('#/')}
          className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white mb-12 transition-colors bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </button>

        <span className="text-[10px] mono-font text-zinc-500 uppercase mb-4 block tracking-widest">{assignment.date}</span>
        <h1 className="text-3xl md:text-5xl font-black uppercase mb-12 leading-[1.1]">{assignment.title}</h1>

        {assignment.videoUrl ? (
          <div className="space-y-4 mb-16">
            <div className="aspect-video w-full bg-zinc-950 border border-zinc-800 overflow-hidden relative shadow-2xl rounded-lg">
              <iframe
                className="w-full h-full"
                src={getEmbedUrl(assignment.videoUrl)}
                title={assignment.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Technical Video Reference</span>
              <a
                href={assignment.videoUrl.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
              >
                External Link <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ) : assignment.pdfUrl ? (
          <div className="space-y-4 mb-16">
            <div className="w-full aspect-[1/1.4] bg-zinc-950 border border-zinc-800 overflow-hidden relative shadow-2xl rounded-lg md:aspect-[1/1.2]">
              <iframe
                src={`${assignment.pdfUrl}#view=FitH`}
                className="w-full h-full rounded-lg"
                title={assignment.title}
              ></iframe>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Embedded PDF Documentation</span>
              <a
                href={assignment.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
              >
                Open PDF <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ) : (
          <div className="w-full h-48 bg-zinc-950/50 flex items-center justify-center text-zinc-600 uppercase text-xs tracking-widest mb-16 border border-zinc-800/50 rounded-lg italic shadow-inner">
            Visual Documentation Pending
          </div>
        )}

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-xs uppercase tracking-widest font-black text-white bg-zinc-800/80 px-4 py-1.5 rounded-sm">
              Technical Analysis
            </h3>
            <div className="flex-grow h-[1px] bg-zinc-800"></div>
          </div>
          <div className="text-zinc-300 leading-relaxed space-y-6 text-base md:text-lg whitespace-pre-line font-light">
            {assignment.inference}
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-zinc-800/50 flex justify-between items-center">
          <button
            onClick={() => onNavigate('#/')}
            className="px-10 py-4 border border-zinc-700 hover:border-white hover:bg-white hover:text-black text-zinc-300 text-xs font-bold uppercase tracking-widest transition-all rounded-sm"
          >
            Return Home
          </button>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">SRMIST • {USER_INFO.name}</span>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => setPath(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderContent = () => {
    if (path.startsWith('#/assignment/')) {
      const id = path.split('#/assignment/')[1];
      return <AssignmentPage id={id} onNavigate={navigate} />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
      <Navigation onNavigate={navigate} currentPath={path} />
      {/* Wrapper for CSS Page Transition */}
      <div key={path} className="page-transition">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;