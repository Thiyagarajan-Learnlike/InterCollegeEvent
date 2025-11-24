import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Music, 
  Code, 
  Palette, 
  Gamepad2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Camera
} from 'lucide-react';

// --- Configuration & Helpers ---

const EVENTS = [
  {
    title: "Technical",
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    desc: "Coding Hackathons, Paper Presentations, & Tech Quizzes.",
  },
  {
    title: "Cultural",
    icon: <Music className="w-8 h-8 text-purple-400" />,
    desc: "Battle of Bands, Group Dance, and Solo Singing.",
  },
  {
    title: "Literary & Art",
    icon: <Palette className="w-8 h-8 text-pink-400" />,
    desc: "Debate, Creative Writing, Face Painting & Poster Design.",
  },
  {
    title: "Gaming",
    icon: <Gamepad2 className="w-8 h-8 text-green-400" />,
    desc: "Valorant, FIFA, and BGMI Tournaments.",
  }
];

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    label: "Tech World"
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    label: "Cultural Fest"
  },
  {
    src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    label: "Gaming Arena"
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    label: "Artistic Visions"
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    label: "Main Stage"
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    label: "Campus Vibes"
  }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-100 selection:bg-brand-accent selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-xl">G</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">GRD Meet '26</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('events')} className="hover:text-white transition-colors">Events</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button>
            <button 
              onClick={() => scrollToSection('register')}
              className="px-4 py-2 bg-brand-primary hover:bg-indigo-500 text-white rounded-full transition-all"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
           <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-brand-accent font-medium uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Feb 6, 2026
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            IGNITE THE <br /> FUTURE
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto">
            The biggest Intercollege Art & Science Phenomenon in Tamil Nadu.
            Hosted by <span className="text-white font-semibold">G R Damodaran College of Arts and Science</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollToSection('register')} className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full text-lg hover:bg-slate-200 transition-all flex items-center gap-2 group">
              Register Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </button>
            <button onClick={() => scrollToSection('events')} className="px-8 py-4 glass-card text-white font-medium rounded-full text-lg hover:bg-white/10 transition-all">
              Explore Events
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 glass-card rounded-xl">
              <Calendar className="w-6 h-6 text-brand-primary mx-auto mb-2" />
              <div className="text-sm text-slate-400">Date</div>
              <div className="font-bold">Feb 6, 2026</div>
            </div>
            <div className="p-4 glass-card rounded-xl">
              <Clock className="w-6 h-6 text-brand-primary mx-auto mb-2" />
              <div className="text-sm text-slate-400">Time</div>
              <div className="font-bold">10 AM - 5 PM</div>
            </div>
            <div className="p-4 glass-card rounded-xl md:col-span-2">
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-2" />
              <div className="text-sm text-slate-400">Location</div>
              <div className="font-bold">Coimbatore, Tamil Nadu</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">About The Event</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            GRD Intercollege Meet is not just an event; it's a convergence of creativity, intellect, and talent. 
            We invite students from Arts and Science colleges across Tamil Nadu to showcase their skills, 
            compete in high-energy challenges, and network with the best minds in the state. 
            Whether you're a coder, an artist, a gamer, or a performer, the stage is yours.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
               <h2 className="font-display text-4xl font-bold mb-2">Event Categories</h2>
               <p className="text-slate-400">Something for everyone.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS.map((evt, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all group border border-white/5">
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-brand-primary/20 transition-colors">
                  {evt.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{evt.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2 text-brand-accent">
              <Camera className="w-5 h-5" />
              <span className="font-bold tracking-wider text-sm">EVENT HIGHLIGHTS</span>
            </div>
            <h2 className="font-display text-4xl font-bold mb-4">Glimpses of Glory</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A look back at the vibrant energy, competition, and creativity from previous years. 
              Get ready to make new memories in 2026.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden glass-card cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary via-brand-accent to-purple-600"></div>
          
          <h2 className="font-display text-4xl font-bold mb-6">Ready to Participate?</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Secure your spot now. Registration is open for all Arts and Science colleges in Tamil Nadu. 
            Limited slots available for major events.
          </p>
          
          <a 
            href="https://docs.google.com/forms/u/0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark font-bold rounded-full text-lg hover:bg-slate-200 transition-all hover:scale-105"
          >
            Fill Google Form <ExternalLink className="w-5 h-5" />
          </a>
          
          <p className="mt-6 text-sm text-slate-500">
            Registration closes on Feb 4, 2026.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-xl">G</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">GRD Meet '26</span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
             <p>&copy; 2026 G R Damodaran College of Arts and Science.</p>
             <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);