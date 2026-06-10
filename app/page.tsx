'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '@/components/Logo';

import { 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ExternalLink, 
  Award, 
  Users, 
  Layers, 
  Briefcase, 
  Check, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  MessageSquare,
  ArrowUpRight,
  Menu,
  X,
  FileCode,
  Video,
  MousePointerClick,
  Monitor,
  Heart
} from 'lucide-react';
import Image from 'next/image';

const CLIENTS_DATA = [
  { 
    name: "John Saw Mill", 
    company: "John Saw Mill Pvt Ltd",
    industry: "Door & Timber", 
    category: "timber-metals",
    deliverables: ["Visiting Card", "Mega Banner", "Print Notice", "Logistics Flyer"],
    accentColor: "#D97706",
    details: "Primary brand materials and offline promotion templates customized for the leading timber manufacturing and sawmill yard in Tirunelveli."
  },
  { 
    name: "Antony Metals", 
    company: "Antony Metals",
    industry: "Metal & Steel", 
    category: "timber-metals",
    deliverables: ["Premium Visiting Card", "Outdoor Banner", "Invoice Book Cover"],
    accentColor: "#4B5563",
    details: "Bold industrial signage, rust-proof corporate banners and functional cards matching their robust architectural products."
  },
  { 
    name: "Royaloak", 
    company: "Royaloak Furniture",
    industry: "Furniture Shop", 
    category: "furniture-interiors",
    deliverables: ["Showroom Banner", "Social Media Graphics", "Discount Creatives"],
    accentColor: "#DC2626",
    details: "Dynamic design collateral and local advertisement materials aligned with Royaloak's global high-end style furniture campaigns."
  },
  { 
    name: "Livspace Partners", 
    company: "Livspace Interiors",
    industry: "Modular Kitchen & Interior", 
    category: "furniture-interiors",
    deliverables: ["Walk-in Banner", "Instagram Stories", "Interactive Catalog Grid"],
    accentColor: "#10B981",
    details: "Polished interior design pamphlets and premium social media graphics representing modular kitchen installation showcases."
  },
  { 
    name: "MsM Real Estate", 
    company: "MsM Real Estate Chennai & Tvl",
    industry: "Real Estate", 
    category: "real-estate",
    deliverables: ["Brand Logo", "Video Tour Editing", "Promotional Reels"],
    accentColor: "#2563EB",
    details: "High-retention property tour edits, typographic logos, and viral real-estate reels that generated local direct buyer leads."
  },
  { 
    name: "Aaradhyahomes", 
    company: "Aaradhya Homes Planner",
    industry: "Real Estate & Architecture", 
    category: "real-estate",
    deliverables: ["Architect Logo", "Executive Visiting Card", "Exhibition Banner"],
    accentColor: "#7C3AED",
    details: "Sleek and modern architectural brand elements showcasing luxury residential layouts and premium construction plans."
  },
  { 
    name: "John Tower", 
    company: "John Tower Apartments",
    industry: "Apartments & Party Hall", 
    category: "commercial",
    deliverables: ["Event Visiting Card", "Inauguration Banner", "Location Maps"],
    accentColor: "#F59E0B",
    details: "Elegant venue banners and contact maps created for premium apartment suites and commercial celebration spaces."
  },
  { 
    name: "Prominance UPVC", 
    company: "Prominance Window Systems",
    industry: "UPVC Windows & Doors", 
    category: "commercial",
    deliverables: ["Dealer Visiting Card", "Marketing Banner", "Spec Notice"],
    accentColor: "#059669",
    details: "Highly structured technical detail sheets, premium dealer cards, and promotional materials for weather-resistant windows."
  },
  { 
    name: "Wedding Invitation Media", 
    company: "Freelance Creative",
    industry: "Wedding Media", 
    category: "media",
    deliverables: ["Motion Wedding Invitation", "High-Energy Reels Edit", "Cinematic Cut"],
    accentColor: "#EC4899",
    details: "Vibrant traditional and modern motion invitations optimized for WhatsApp sharing and high-quality cinematic wedding clips as reels."
  }
];

const SERVICES_DATA = [
  {
    num: "01",
    title: "Graphic Design",
    desc: "Posters, banners, local notices, professional visiting cards, and print-ready creatives built to look incredibly sharp both on screens and paper grids.",
    tags: ["Event Posters", "Banners", "Visiting Cards", "Flyers & Notices"],
    icon: Layouts
  },
  {
    num: "02",
    title: "Social Media Creatives",
    desc: "Aesthetic Instagram posts, stories, promotion grids, and highlight covers tailored specifically to capture viewer attention within fractions of a second.",
    tags: ["Feed Posts", "Interactive Stories", "Promotion Grids"],
    icon: Sparkles
  },
  {
    num: "03",
    title: "Video Editing & Reels",
    desc: "Promotional product reels, event walkthroughs, corporate profiles, and wedding invitation videos edited with pristine sound styling, captions, and transitions.",
    tags: ["Insta Reels", "Event Highlights", "Invitation Videos"],
    icon: Video
  },
  {
    num: "04",
    title: "Brand Identity Layouts",
    desc: "Modern vector logos, custom cohesive color profiles, vector typography bundles, and complete visual guidelines to give your brand structured credibility.",
    tags: ["Logo Layouts", "Branding Assets", "Palette Selection"],
    icon: Award
  },
  {
    num: "05",
    title: "Social Media Handling",
    desc: "Targeted content planning, custom local search copywriting, caption engineering, and systematic scheduling to maintain highly consistent audience engagement.",
    tags: ["Posting Schedules", "Caption Copy", "Growth Strategy"],
    icon: MousePointerClick
  }
];

const TESTIMONIALS_DATA = [
  {
    quote: "Pavithraj designed our premium visiting cards and grand scale banners. Not only was the response times incredibly fast, but the absolute visual balance was outstanding. He is our trusted designer across Tirunelveli.",
    author: "Mr. Paul S.",
    role: "Operational Lead",
    biz: "John Saw Mill Pvt Ltd"
  },
  {
    quote: "He transformed our Instagram marketing grid. The Reels edit he provided achieved immediate engagement and helped us land two direct interior renovation contracts. Extremely creative and dependable.",
    author: "Vijay K.",
    role: "Senior Partner",
    biz: "Royaloak Furniture Partner Outlet"
  },
  {
    quote: "For MsM Real Estate, we needed quick cinematic property reels with crisp typography subtitles and bold property specs. Pavidesignz delivered the video file in under 24 hours. Phenomenal talent!",
    author: "M. Saravanan",
    role: "Founder Director",
    biz: "MsM Real Estate Developers"
  }
];

export default function Home() {
  const router = useRouter();

  const getClientIdByClientName = (name: string) => {
    if (name.includes("John Saw")) return "john-saw-mill";
    if (name.includes("Antony Metals")) return "antony-metals";
    if (name.includes("Royaloak")) return "royaloak";
    if (name.includes("Livspace")) return "livspace-partners";
    if (name.includes("MsM Real")) return "msm-real-estate";
    if (name.includes("Aaradhya")) return "aaradhyahomes";
    if (name.includes("John Tower")) return "john-tower";
    if (name.includes("Prominance")) return "prominance-upvc";
    if (name.includes("Wedding")) return "wedding-invitation-media";
    return "";
  };

  // Mobile menu control
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Showcase modal or details drawer control
  const [activeWorkItem, setActiveWorkItem] = useState<typeof CLIENTS_DATA[0] | null>(null);
  
  // Testimonial slider control
  const [activeTestiIndex, setActiveTestiIndex] = useState(0);
  
  // Contact Form controller state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filtered Client Portfolio items
  const filteredClients = CLIENTS_DATA;

  // Auto-slide testimonials every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestiIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        // Reset form after some time
        setFormData({ name: '', phone: '', serviceType: '', details: '' });
        setSubmitSuccess(false);
      }, 7000);
    }, 1500);
  };

  // Pre-configured WhatsApp redirection
  const handleOpenWhatsApp = () => {
    const baseText = `Hi Pavithraj! I saw your portfolio on Pavidesignz. Here is what I need:
- Name: ${formData.name || 'Visitor'}
- Contact: ${formData.phone || ''}
- Needed service: ${formData.serviceType || 'Graphic Design / Video Edit'}
- Message: ${formData.details || 'Let\'s collaborate!'}`;
    const uri = `https://wa.me/919342798750?text=${encodeURIComponent(baseText)}`;
    window.open(uri, '_blank');
  };

  return (
    <div id="top" className="relative min-h-screen bg-white">
      
      {/* ── HEADER NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 h-[74px] bg-white/90 backdrop-blur-md border-b border-brand-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo with exact SVG paths provided from mockup */}
          <a href="#top" className="flex items-center gap-1 group" aria-label="Pavidesignz Logo Home">
            <Logo className="h-10 w-auto text-text-dark group-hover:opacity-90 transition-opacity" />
           
          </a>

          {/* Nav middle links for Desktop clients */}
          <div className="hidden lg:flex items-center gap-10">
            {['about', 'services', 'clients', 'contact'].map((sectionId) => (
              <a 
                key={sectionId} 
                href={`#${sectionId}`} 
                className="font-sans text-[12px] font-semibold tracking-widest text-text-muted hover:text-acc transition-colors uppercase"
              >
                {sectionId}
              </a>
            ))}
          </div>

          {/* Action button pairing */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center font-sans text-[12px] font-bold tracking-widest text-white bg-acc hover:bg-acc-hover px-6 py-3.5 transition-all duration-300 uppercase product-cta"
            >
              Let&apos;s work together <ChevronRight className="h-4.5 w-4.5 ml-1" />
            </a>
          </div>

          {/* Nav Mobile trigger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-text-dark hover:text-acc transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation sidebar overlay drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[74px] left-0 right-0 bg-white border-b border-brand-border z-40 lg:hidden shadow-lg overflow-y-auto max-h-[calc(100vh-74px)]"
          >
            <div className="p-8 flex flex-col gap-6">
              {['about', 'services', 'clients', 'contact'].map((sectionId) => (
                <a 
                  key={sectionId} 
                  href={`#${sectionId}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-semibold tracking-widest text-text-muted hover:text-acc transition-colors uppercase border-b border-neutral-100 pb-3"
                >
                  {sectionId}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center font-sans font-bold tracking-wider text-white bg-acc hover:bg-acc-hover py-4 transition-colors uppercase mt-2 inline-block"
              >
                Let&apos;s work together →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ── HERO HERO SECTION ── */}
      <section id="hero" className="pt-[74px] min-h-screen grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden">
        
        {/* Hero Left Panel Content */}
        <div className="px-6 md:px-16 py-16 md:py-24 flex flex-col justify-center bg-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="font-sans text-[11px] font-semibold tracking-widest text-acc uppercase">
              Graphic Designer • Video Editor • Tamil Nadu
            </span>
            <div className="h-[1px] w-12 bg-acc/60" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[42px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-light leading-[1.05] tracking-tight text-text-dark mb-8"
          >
            I design visuals<br />that make your<br />brand <span className="font-serif italic text-acc font-normal">unforgettable.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base md:text-lg text-text-muted max-w-lg leading-relaxed mb-10"
          >
            Posters, banners, promotional reels, visiting cards, and comprehensive social media layouts — tailor-made for businesses that want a pristine, professional face.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#clients" 
              className="font-sans text-[12px] font-bold tracking-widest text-white bg-acc hover:bg-acc-hover px-8 py-4.5 transition-all duration-300 uppercase inline-block"
            >
              View My Work →
            </a>
            <a 
              href="#contact" 
              className="font-sans text-[12px] font-bold tracking-widest text-text-dark border-2 border-brand-border-lg hover:border-acc hover:text-acc px-8 py-4.5 transition-all duration-300 uppercase inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Hero Right Sleek Slate Dark Panel */}
        <div className="relative bg-bg-dark text-white p-8 md:p-16 flex flex-col justify-between overflow-hidden min-h-[500px] md:min-h-0">
          
          {/* Subtle branding vector background motif */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[85%] h-auto max-h-[85%]" viewBox="0 0 815 492" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 35.2671V315.664H50.4067V195.494H109.215C143.099 195.494 169.703 188.417 189.025 174.264C208.628 159.843 218.429 140.215 218.429 115.38C218.429 90.5452 208.068 71.0509 187.345 56.8977C166.902 42.4773 138.758 35.2671 102.914 35.2671H0ZM149.12 172.661C136.518 182.542 119.296 187.482 97.453 187.482H50.4067V77.3266H97.453C119.296 77.3266 136.518 82.2668 149.12 92.1475C161.722 102.028 168.022 115.514 168.022 132.605C168.022 149.429 161.722 162.781 149.12 172.661ZM258.978 307.252C270.459 316.064 286.001 320.47 305.605 320.47C328.847 320.47 348.45 313.661 364.412 300.041C380.375 286.422 391.154 268.93 396.757 247.567V315.664H463.966V278.411H437.082V192.289C437.082 175.732 433.302 161.312 425.741 149.028C418.18 136.744 407.537 127.397 393.816 120.988C380.375 114.579 364.832 111.375 347.19 111.375C329.826 111.375 313.864 114.579 299.304 120.988C285.022 127.13 273.399 136.21 264.439 148.227C255.757 160.244 250.716 174.664 249.317 191.488H290.483C292.441 177.068 298.322 165.852 308.125 157.84C318.206 149.562 330.947 145.423 346.35 145.423C360.632 145.423 372.533 149.295 382.055 157.039C391.575 164.783 396.337 175.332 396.337 188.684C396.337 195.894 391.995 200.834 383.315 203.505C374.914 206.175 362.732 208.045 346.77 209.113C328.007 210.448 311.205 212.851 296.363 216.323C281.52 219.528 268.64 225.403 257.718 233.948C247.075 242.493 241.756 254.51 241.756 269.999C241.756 285.754 247.495 298.171 258.978 307.252ZM361.472 278.01C350.829 284.152 339.068 287.223 326.187 287.223C314.145 287.223 304.484 284.552 297.203 279.212C290.202 273.872 286.702 265.993 286.702 255.579C286.702 243.562 292.163 234.481 303.084 228.34C314.284 222.199 331.228 218.193 353.911 216.323H355.591C356.431 216.056 357.13 215.923 357.692 215.923C368.051 214.854 376.174 213.653 382.055 212.317C388.214 210.715 393.116 208.312 396.757 205.107L396.337 219.528C396.337 231.545 393.255 242.76 387.095 253.175C380.934 263.322 372.393 271.601 361.472 278.01ZM474.02 115.38L560.971 315.664H621.459L708.831 115.38H663.045L592.896 279.212H590.375L520.646 115.38H474.02ZM749.67 115.38V315.664H793.776V115.38H749.67Z" fill="white" />
            </svg>
          </div>

          {/* Core Stats Overview block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 relative z-10"
          >
            <div>
              <div className="font-serif text-[42px] md:text-[54px] font-light text-white leading-none">8+</div>
              <div className="text-[10px] md:text-[11px] tracking-widest text-[#A09D9A] uppercase mt-1">Managed Brands</div>
            </div>
            <div>
              <div className="font-serif text-[42px] md:text-[54px] font-light text-white leading-none">2+</div>
              <div className="text-[10px] md:text-[11px] tracking-widest text-[#A09D9A] uppercase mt-1">Years Practice</div>
            </div>
            <div>
              <div className="font-serif text-[42px] md:text-[54px] font-light text-white leading-none">5+</div>
              <div className="text-[10px] md:text-[11px] tracking-widest text-[#A09D9A] uppercase mt-1">Key Disciplines</div>
            </div>
          </motion.div>

          {/* Visual statement block quote style */}
          <div className="my-16 lg:my-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 text-acc text-[11px] font-medium tracking-widest uppercase mb-4"
            >
              <div className="h-[1px] w-6 bg-acc" /> PORTFOLIO SPOTLIGHT
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic text-[#F7F6F4] leading-relaxed max-w-md"
            >
              &ldquo;Design that makes your business impossible to ignore.&rdquo;
            </motion.p>
          </div>

          {/* Status Tracker and external linkages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center justify-between pointer-events-auto relative z-10 border-t border-neutral-800 pt-6"
          >
            <a 
              href="https://www.instagram.com/pavidesignz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/ig flex items-center gap-3 text-white"
            >
              <div className="h-2.5 w-2.5 bg-green-500 rounded-full animate-ping" />
              <div className="h-2.5 w-2.5 bg-green-500 rounded-full absolute" />
              <div className="font-sans text-[12px] font-bold tracking-widest text-neutral-400 group-hover/ig:text-white transition-colors uppercase">
                Active: <span className="text-white">@pavidesignz</span>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/pavidesignz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-neutral-800 text-[#EE0000] hover:text-white transition-all duration-300"
              aria-label="Instagram external page"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
          </motion.div>
        </div>
      </section>


      {/* ── TICKER INFINITE SCROLL STRIP ── */}
      <div className="bg-acc text-white overflow-hidden py-4.5 select-none pointer-events-none border-y border-acc flex items-center">
        <div className="whitespace-nowrap flex">
          <div className="animate-ticker-loop flex gap-16 pr-16 items-center">
            {[
              "Graphic Design", "Video Editing", "Social Media Creatives", "Reel Production", 
              "Corporate Banners", "Premium Visiting Cards", "Brand Identity Layouts", "Tamil Nadu",
              "Graphic Design", "Video Editing", "Social Media Creatives", "Reel Production", 
              "Corporate Banners", "Premium Visiting Cards", "Brand Identity Layouts", "Tamil Nadu"
            ].map((text, i) => (
              <span key={i} className="font-sans text-[11px] font-extrabold tracking-[0.2em] text-white uppercase flex items-center gap-6">
                {text} <span className="text-[10px] text-white/50">✦</span>
              </span>
            ))}
          </div>
          <div className="animate-ticker-loop flex gap-16 pr-16 items-center">
            {[
              "Graphic Design", "Video Editing", "Social Media Creatives", "Reel Production", 
              "Corporate Banners", "Premium Visiting Cards", "Brand Identity Layouts", "Tamil Nadu",
              "Graphic Design", "Video Editing", "Social Media Creatives", "Reel Production", 
              "Corporate Banners", "Premium Visiting Cards", "Brand Identity Layouts", "Tamil Nadu"
            ].map((text, i) => (
              <span key={i + 100} className="font-sans text-[11px] font-extrabold tracking-[0.2em] text-white uppercase flex items-center gap-6">
                {text} <span className="text-[10px] text-white/50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* ── ABOUT THE DESIGNER SECTION ── */}
      <section id="about" className="px-6 md:px-16 py-24 md:py-32 bg-white max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-sans text-[11px] font-semibold tracking-widest text-acc uppercase">About Me</span>
          <div className="h-[1px] w-12 bg-acc" />
        </div>
        
        <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[60px] font-light leading-[1.1] text-text-dark tracking-tight mb-16">
          Design built on<br /><span className="font-serif italic text-acc font-normal">passion & practice.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          
          {/* Narrative bio information */}
          <div className="space-y-6 text-[#555250] text-[15px] sm:text-[16px] leading-[1.8] font-body">
            <p className="text-text-dark font-medium text-lg leading-relaxed">
              Hi, I&apos;m Pavithraj — a self-taught graphic designer, video editor, and social media planner based in Tamil Nadu. I build high-contrast, professional visuals that help businesses stand tall amongst competitors.
            </p>
            <p>
              Currently, I drive design and social media handling at <span className="text-text-dark font-semibold">John Saw Mill Pvt Ltd</span>. I am responsible for marketing layouts, digital catalog updates, and social handles across <span className="text-acc font-bold">6 integrated sub-brands</span>: spanning timber, metals, royal oak furniture, livspace kitchen partner systems, building structures, and residential suites.
            </p>
            <p>
              I take pride in crafting highly usable assets, such as print notices, office cards, and promotional Reels that maintain pixel-level clarity whether they live in a client&apos;s WhatsApp broadcast or printed across billboard vinyl.
            </p>
            
            {/* Design Tool belt kit */}
            <div className="pt-8">
              <div className="font-sans text-[10px] font-bold tracking-widest text-[#A09D9A] mb-4 uppercase">
                AESTHETIC ENGINE TOOLS
              </div>
              <div className="flex flex-wrap gap-2.5">
                {["Adobe Photoshop", "Adobe Illustrator", "Figma Layouts", "Canva Pro", "CapCut Studio"].map((tool, idx) => (
                  <span key={idx} className="font-sans text-[11px] font-bold tracking-wider text-acc bg-acc-muted border border-acc/12 px-4 py-2 uppercase">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual statistics grid layout */}
          <div className="space-y-12">
            <blockquote className="font-serif text-2xl sm:text-3xl font-light italic text-text-dark leading-relaxed pl-6 border-l-4 border-acc">
              &ldquo;Design is not just what it looks like. Design is how it establishes instant credibility.&rdquo;
            </blockquote>

            <div className="grid grid-cols-2 gap-px bg-brand-border border border-brand-border">
              <div className="bg-[#F7F6F4] p-8 hover:bg-white transition-colors duration-300">
                <div className="font-serif text-4xl sm:text-5xl text-acc font-light">6</div>
                <div className="text-[10px] text-text-light font-bold tracking-widest uppercase mt-2">Active Brands Handles</div>
              </div>
              <div className="bg-[#F7F6F4] p-8 hover:bg-white transition-colors duration-300">
                <div className="font-serif text-4xl sm:text-5xl text-acc font-light">200+</div>
                <div className="text-[10px] text-text-light font-bold tracking-widest uppercase mt-2">Deliverables Completed</div>
              </div>
              <div className="bg-[#F7F6F4] p-8 hover:bg-white transition-colors duration-300">
                <div className="font-serif text-4xl sm:text-5xl text-acc font-light">BCA</div>
                <div className="text-[10px] text-text-light font-bold tracking-widest uppercase mt-2">Computer Application base</div>
              </div>
              <div className="bg-[#F7F6F4] p-8 hover:bg-white transition-colors duration-300">
                <div className="font-serif text-4xl sm:text-5xl text-acc font-light">TVL</div>
                <div className="text-[10px] text-text-light font-bold tracking-widest uppercase mt-2">Tirunelveli/Tamil Nadu</div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ── CORE SERVICES ARCHITECTURE (DARK BG) ── */}
      <section id="services" className="bg-bg-dark text-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-[#EE0000] uppercase">What I Offer</span>
                <div className="h-[1px] w-12 bg-acc" />
              </div>
              <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[60px] font-light leading-[1.1] tracking-tight text-white mb-0">
                Everything your<br />brand needs to<br /><span className="font-serif italic text-acc font-normal">stand out.</span>
              </h2>
            </div>
            <p className="font-body text-neutral-400 text-base md:text-lg leading-relaxed max-w-lg">
              From a single high-impact visiting card print to full-cycle monthly social media layouts — I formulate the digital visual engine your business needs to establish prestige.
            </p>
          </div>

          {/* Grid architecture structure of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
            {SERVICES_DATA.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#0E0D0B] p-8 md:p-10 relative group hover:bg-neutral-900/60 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
                >
                  <div>
                    {/* Index header */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-serif text-5xl font-extralight text-neutral-800 group-hover:text-acc/30 transition-colors duration-300">
                        {service.num}
                      </span>
                      <IconComp className="h-6 w-6 text-neutral-600 group-hover:text-acc transition-colors duration-300" />
                    </div>
                    {/* Service titles and descriptive labels */}
                    <h3 className="font-sans text-md font-bold text-white uppercase tracking-wider mb-4">
                      {service.title}
                    </h3>
                    <p className="font-body text-neutral-400 text-[13.5px] leading-relaxed mb-8">
                      {service.desc}
                    </p>
                  </div>
                  {/* Visual sub-deliverable pill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-850">
                    {service.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-[10px] text-neutral-500 font-sans tracking-wide border border-neutral-800 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-acc group-hover:w-full transition-all duration-300" />
                </div>
              );
            })}

            {/* Ready Card Quick Callout template */}
            <div className="bg-acc p-8 md:p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 opacity-[0.08] select-none pointer-events-none transition-transform group-hover:scale-110 duration-500">
                <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-5xl font-thin text-white/20 mb-8 block">✦</span>
                <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider mb-4">
                  Have a specific vision?
                </h3>
                <p className="font-body text-white/80 text-[14px] leading-relaxed mb-6">
                  Tell me about your custom timelines, bulk brand brochures, or video files. Receive premium quotes within 24 hours.
                </p>
              </div>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center font-sans text-xs font-bold tracking-widest bg-white text-acc hover:bg-neutral-100 py-4.5 px-6 transition-colors uppercase self-start w-full md:w-auto"
              >
                Get Custom Quote <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ── CLIENT PORTFOLIO GRID SECTION (LIGHT BG) ── */}
      <section id="clients" className="px-6 md:px-16 py-24 md:py-32 bg-[#F7F6F4] border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-[#EE0000] uppercase">Client Work</span>
                <div className="h-[1px] w-12 bg-acc" />
              </div>
              <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[60px] font-light leading-[1.1] tracking-tight text-text-dark mb-0">
                Real brands.<br />Designed to <span className="font-serif italic text-acc font-normal">perform.</span>
              </h2>
            </div>
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed max-w-lg">
              Explore dynamic marketing materials, physical banners, digital cards, promotional videos, and architectural layout assets handled for major local partners.
            </p>
          </div>


          {/* Client visual grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border border border-brand-border mb-px"
          >
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={client.name}
                  onClick={() => router.push(`/brand/${getClientIdByClientName(client.name)}`)}
                  className="bg-white p-8 group hover:bg-[#F0EFEC]/40 transition-all duration-300 cursor-pointer border-b-2 border-transparent hover:border-b-acc flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-[10px] font-bold tracking-wide text-acc uppercase bg-acc-muted px-2.5 py-1">
                        {client.industry}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-neutral-300 group-hover:text-acc transition-colors" />
                    </div>
                    
                    <h3 className="font-serif text-2xl font-light text-text-dark group-hover:text-acc transition-colors uppercase mb-3 text-left">
                      {client.name}
                    </h3>
                    
                    <p className="font-body text-text-muted text-[13px] leading-relaxed mb-6">
                      {client.details}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {client.deliverables.map((del, dIdx) => (
                        <span key={dIdx} className="text-[10px] font-sans tracking-wide text-text-muted border border-brand-border px-2 py-0.5 bg-white">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Social Instagram follow strip link */}
          <div className="bg-white p-6 md:p-8 border border-t-0 border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-acc-muted text-acc border border-acc/12 rounded-full">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-sans text-sm font-bold text-text-dark uppercase tracking-wider">
                  Follow Project Diary on Instagram
                </div>
                <div className="font-body text-xs text-text-light mt-0.5">
                  Live updates of current print drafts, typography selections, and design ideas.
                </div>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/pavidesignz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center font-sans text-xs font-bold tracking-widest text-white bg-acc hover:bg-acc-hover px-6 py-4 transition-colors uppercase w-full md:w-auto"
            >
              @pavidesignz on Instagram <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
            </a>
          </div>

        </div>
      </section>

      
      {/* ── INTERACTIVE WORK STUDY DETAIL MODAL ── */}
      <AnimatePresence>
        {activeWorkItem && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-text-dark max-w-lg w-full p-8 relative shadow-2xl border border-neutral-200"
            >
              <button 
                onClick={() => setActiveWorkItem(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-text-dark transition-colors"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6">
                <span className="font-sans text-[10px] font-bold tracking-widest text-acc uppercase bg-acc-muted px-3 py-1.5">
                  {activeWorkItem.industry}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-text-dark uppercase mt-4 mb-2">
                  {activeWorkItem.name}
                </h3>
                <div className="text-xs text-text-light font-sans uppercase tracking-[0.1em]">
                  Parent Brand: {activeWorkItem.company}
                </div>
              </div>

              <div className="h-[1px] bg-brand-border my-6" />

              <div className="space-y-4">
                <h4 className="font-sans text-xs font-bold tracking-widest text-[#555250] uppercase">
                  Project Objective & Scope
                </h4>
                <p className="font-body text-text-muted text-sm sm:text-[14.5px] leading-relaxed">
                  {activeWorkItem.details}
                </p>
              </div>

              <div className="h-[1px] bg-brand-border my-6" />

              <div className="space-y-3">
                <h4 className="font-sans text-xs font-bold tracking-widest text-[#555250] uppercase">
                  Delivered Materials
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeWorkItem.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 bg-neutral-50 px-3.5 py-1.5 text-xs text-text-muted tracking-wide font-sans border border-brand-border">
                      <Check className="h-3 w-3 text-acc" strokeWidth={3} /> {del}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a 
                  href="#contact" 
                  onClick={() => {
                    setFormData({
                      ...formData,
                      serviceType: activeWorkItem.industry === 'Wedding Media' ? 'Wedding Invitation Video' : 'Social Media Creatives',
                      details: `Looking to create materials similar to the ${activeWorkItem.name} collaboration.`
                    });
                    setActiveWorkItem(null);
                  }}
                  className="w-full text-center inline-flex items-center justify-center font-sans text-xs font-bold tracking-widest text-white bg-acc hover:bg-acc-hover py-4.5 transition-colors uppercase"
                >
                  Request Similar Design Work →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ── CLIENT TESTIMONIALS (DARK SLATE CANVAS) ── */}
      <section id="testimonials" className="bg-bg-dark text-white px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-[11px] font-semibold tracking-widest text-acc uppercase">Client Feedback</span>
            <div className="h-[1px] w-12 bg-acc" />
          </div>

          <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] font-light leading-[1.1] tracking-tight text-white mb-16">
            A trusted creative builder<br />for growing <span className="font-serif italic text-acc font-normal">local trades.</span>
          </h2>

          <div className="relative min-h-[300px] flex flex-col justify-between">
            
            {/* Carousel quotes rendering */}
            <div>
              <span className="font-serif text-7xl font-extralight text-acc leading-none h-12 block select-none pointer-events-none mb-6">
                &ldquo;
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestiIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45 }}
                  className="space-y-6"
                >
                  <p className="font-serif text-[19px] sm:text-[22px] md:text-[25px] font-light italic leading-relaxed text-[#F7F6F4]">
                    {TESTIMONIALS_DATA[activeTestiIndex].quote}
                  </p>
                  
                  <div className="text-left pt-6">
                    <div className="font-sans text-xs font-bold tracking-widest text-acc uppercase">
                      {TESTIMONIALS_DATA[activeTestiIndex].author}
                    </div>
                    <div className="text-[11px] text-[#A09D9A] font-sans uppercase tracking-wider mt-1">
                      {TESTIMONIALS_DATA[activeTestiIndex].role} &bull; {TESTIMONIALS_DATA[activeTestiIndex].biz}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider navigators control */}
            <div className="flex items-center gap-3 mt-12 border-t border-neutral-800 pt-8 justify-between">
              <div className="flex gap-1">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestiIndex(idx)}
                    className={`h-1.5 transition-all duration-300 ${
                      activeTestiIndex === idx ? 'w-8 bg-acc' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Show quote ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTestiIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length)}
                  className="p-3 bg-[#1A1917] border border-neutral-800 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Previous testimony scroll"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => setActiveTestiIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length)}
                  className="p-3 bg-[#1A1917] border border-neutral-800 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Next testimony scroll"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── INTERACTIVE LEAD GENERATION FORM & CONTACT (LIGHT BG) ── */}
      <section id="contact" className="px-6 md:px-16 py-24 md:py-32 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-[11px] font-semibold tracking-widest text-acc uppercase font-extrabold">Contact Booking</span>
            <div className="h-[1px] w-12 bg-acc" />
          </div>

          <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[60px] font-light leading-[1.1] tracking-tight text-text-dark mb-16">
            Let&apos;s start a<br /><span className="font-serif italic text-acc font-normal">project together.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Information & Redirection badges */}
            <div className="space-y-12">
              <p className="font-body text-text-muted text-[15px] sm:text-[16px] leading-relaxed">
                Whether you need elegant offline visiting cards, printed storefront banners, viral promo Instagram reels, or comprehensive design coverage for multiple trade brands — let me know your specifications below.
              </p>

              <div className="space-y-6">
                
                {/* Contact row: Whatsapp / Phone */}
                <div className="flex items-center gap-4">
                  <div className="h-[46px] w-[46px] bg-bg-offset border border-brand-border-md flex items-center justify-center text-acc shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-text-light font-sans font-bold tracking-widest uppercase mb-1">
                      Direct WhatsApp &amp; Call
                    </div>
                    <div className="text-sm font-semibold text-text-dark">
                      +91 93427 98750
                    </div>
                  </div>
                </div>

                {/* Contact row: Email */}
                <div className="flex items-center gap-4">
                  <div className="h-[46px] w-[46px] bg-bg-offset border border-brand-border-md flex items-center justify-center text-acc shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-text-light font-sans font-bold tracking-widest uppercase mb-1">
                      Corporate Correspondence
                    </div>
                    <div className="text-sm font-semibold text-[#0E0D0B]">
                      japavi0105@gmail.com
                    </div>
                  </div>
                </div>

                {/* Contact row: Location */}
                <div className="flex items-center gap-4">
                  <div className="h-[46px] w-[46px] bg-bg-offset border border-brand-border-md flex items-center justify-center text-acc shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-text-light font-sans font-bold tracking-widest uppercase mb-1">
                      Based Out Of
                    </div>
                    <div className="text-sm font-semibold text-text-dark">
                      Tamil Nadu, India
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct redirection key callouts */}
              <div className="bg-[#FFF0F0] border border-acc/12 p-6 space-y-4">
                <h4 className="font-sans text-xs font-bold text-acc tracking-wider uppercase flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Need immediate designs?
                </h4>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  Avoid form queues. Speak to me directly via WhatsApp chat to finalise banner dimensions or delivery schedules instantly.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://wa.me/919342798750?text=Hi%20Pavithraj!%20Saw%20your%20portfolio%20applet%20and%20wanted%20to%20finalise%20some%20design%20materials." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center font-sans text-xs font-bold tracking-widest text-white bg-[#25D366] hover:bg-[#20ba59] px-6 py-3.5 transition-colors uppercase"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>
            </div>

            {/* Form controller wrapper */}
            <div className="bg-bg-offset border border-brand-border p-8 md:p-10">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleFormSubmit}
                    className="space-y-6 text-left"
                  >
                    {/* User Full Name Input */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-bold tracking-widest text-[#555250] uppercase">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Saravanan Paul"
                        className="w-full bg-white border border-brand-border-md text-text-dark font-body text-sm px-4 py-3.5 outline-none focus:border-acc focus:ring-1 focus:ring-acc transition-all"
                      />
                    </div>

                    {/* Phone WhatsApp Number Input */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-bold tracking-widest text-[#555250] uppercase">
                        Phone / WhatsApp Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 93427 98750"
                        className="w-full bg-white border border-brand-border-md text-text-dark font-body text-sm px-4 py-3.5 outline-none focus:border-acc focus:ring-1 focus:ring-acc transition-all"
                      />
                    </div>

                    {/* Selected Service Type selector */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-bold tracking-widest text-[#555250] uppercase">
                        Service Type Needed
                      </label>
                      <select 
                        required
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-white border border-brand-border-md text-text-dark font-body text-sm px-4 py-3.5 outline-none focus:border-acc transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23555250' stroke-width='2' viewBox='0 0 24 24'><path d='M6 9l6 6 6-6'/></svg>")`, backgroundPosition: 'calc(100% - 16px) center', backgroundRepeat: 'no-repeat' }}
                      >
                        <option value="">Select a Discipline</option>
                        <option value="Visiting Cards Design">Visiting Cards Design</option>
                        <option value="Banner / Storefront Poster">Banner / Storefront Poster</option>
                        <option value="Social Media Creatives bundle">Social Media Creatives bundle</option>
                        <option value="Reels & Promotional Video Editing">Reels & Promotional Video Editing</option>
                        <option value="Brand Identity Logo system">Brand Identity Logo system</option>
                        <option value="Complete trade-brand representation">Complete trade-brand representation</option>
                        <option value="Other Customized layouts">Other Customized layouts</option>
                      </select>
                    </div>

                    {/* Project detailed context info */}
                    <div className="space-y-2">
                      <label className="font-sans text-[10px] font-bold tracking-widest text-[#555250] uppercase">
                        Project Brief / Specifications
                      </label>
                      <textarea 
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Briefly describe dimensions, timeline, or required count..."
                        className="w-full bg-white border border-brand-border-md text-text-dark font-body text-sm px-4 py-3.5 outline-none focus:border-acc focus:ring-1 focus:ring-acc transition-all resize-none"
                      />
                    </div>

                    {/* Submit buttons */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center font-sans text-xs font-bold tracking-widest text-white bg-acc hover:bg-acc-hover disabled:bg-neutral-600 disabled:cursor-not-allowed py-4.5 px-6 transition-colors uppercase cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>Verifying Details...</>
                      ) : (
                        <>Send Inquiry &bull; Receive Quote <Send className="h-3.5 w-3.5 ml-2" /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center space-y-6"
                  >
                    <div className="h-16 w-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                      <Check className="h-8 w-8" strokeWidth={2.5} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-sans text-lg font-bold text-text-dark uppercase tracking-wider">
                        Inquiry Registered!
                      </h3>
                      <p className="font-body text-xs text-text-muted leading-relaxed max-w-xs mx-auto">
                        Your project specs have been locked. Pavithraj is notified and will build layout drafts shortly.
                      </p>
                    </div>

                    <div className="p-4.5 bg-white border border-neutral-200">
                      <div className="text-[10px] text-text-light font-sans font-bold tracking-wider uppercase mb-1">
                        Recommended Next Step
                      </div>
                      <p className="text-[11.5px] text-text-muted leading-relaxed mb-4">
                        Speed up communications by sending these parameters to Whatsapp directly now.
                      </p>
                      <button 
                        onClick={handleOpenWhatsApp}
                        className="inline-flex items-center justify-center w-full font-sans text-[11px] font-extrabold tracking-widest text-white bg-[#25D366] hover:bg-[#20ba59] py-3 px-4 uppercase"
                      >
                        Send Specs via WhatsApp <ExternalLink className="h-3 w-3 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>


      {/* ── FOOTER CORE BRAND SEGMENT (DARK BG) ── */}
      <footer className="bg-bg-dark text-white pt-20 pb-12 px-6 md:px-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-neutral-800">
            
            {/* Logo and brief brand footer card */}
            <div className="lg:col-span-2 space-y-6 text-left">
              <a href="#top" className="inline-flex items-center gap-1 group" aria-label="Footer Logo">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-auto fill-current text-white/90" 
                  viewBox="0 0 815 492"
                  style={{ maxHeight: '42px' }}
                >
                  <path d="M54.7783 454.991V336.127H94.4873C107.902 336.127 119.773 338.618 130.101 343.599C140.429 348.467 148.382 355.429 153.962 364.485C159.66 373.428 162.509 383.786 162.509 395.559C162.509 407.219 159.66 417.577 153.962 426.634C148.382 435.577 140.429 442.539 130.101 447.52C119.773 452.501 107.902 454.991 94.4873 454.991H54.7783ZM94.4873 436.482C103.866 436.482 111.997 434.841 118.882 431.558C125.768 428.162 131.05 423.407 134.73 417.294C138.529 411.068 140.429 403.823 140.429 395.559C140.429 387.295 138.529 380.107 134.73 373.994C131.05 367.768 125.768 363.013 118.882 359.73C111.997 356.334 103.866 354.636 94.4873 354.636H76.1464V436.482H94.4873Z" fill="#EE0000" />
                  <path d="M227.242 456.689C218.339 456.689 210.267 454.821 203.025 451.086C195.903 447.237 190.264 442.029 186.109 435.464C181.954 428.785 179.876 421.313 179.876 413.049C179.876 404.446 181.954 396.748 186.109 389.956C190.382 383.164 196.14 377.9 203.381 374.164C210.623 370.315 218.636 368.391 227.42 368.391C236.204 368.391 244.158 370.315 251.28 374.164C258.403 377.9 263.982 383.164 268.019 389.956C272.173 396.635 274.251 404.163 274.251 412.54V413.389M256.622 410.842H198.395C198.633 405.861 200.057 401.389 202.669 397.427C205.281 393.352 208.783 390.182 213.175 387.918" fill="white" fillOpacity="0.6" />
                  <path d="M333.586 457.199C320.646 457.199 309.903 454.369 301.356 448.708C292.927 443.048 288.179 435.011 287.111 424.596H306.52" fill="white" fillOpacity="0.6" />
                </svg>
                <span className="font-sans font-extrabold text-[#F7F6F4] text-md tracking-widest uppercase ml-1 block mt-2">
                  Pavi<span className="text-acc">Designz</span>
                </span>
              </a>
              <p className="font-body text-neutral-400 text-xs sm:text-[13px] leading-relaxed max-w-sm">
                Tamil Nadu-based developer of high-energy promotional Reels editing, physical banners notices, corporate identity layouts, and brand communication layouts.
              </p>
            </div>

            {/* Nav connections column */}
            <div className="text-left">
              <div className="font-sans text-[11px] font-bold tracking-widest text-neutral-500 uppercase mb-6">
                Explore Matrix
              </div>
              <ul className="space-y-3 font-body text-xs text-neutral-400">
                <li>
                  <a href="#about" className="hover:text-acc transition-colors">
                    Professional Brief
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-acc transition-colors">
                    Creative Disciplines
                  </a>
                </li>
                <li>
                  <a href="#clients" className="hover:text-acc transition-colors">
                    Brands Collaboration
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-acc transition-colors">
                    Book Consult
                  </a>
                </li>
              </ul>
            </div>

            {/* Instant contact tags column */}
            <div className="text-left space-y-3.5">
              <div className="font-sans text-[11px] font-bold tracking-widest text-neutral-500 uppercase mb-6">
                Reach Operator
              </div>
              <div className="font-body text-xs text-neutral-400">
                Direct Line: <strong className="text-white">+91 93427 98750</strong>
              </div>
              <div className="font-body text-xs text-neutral-400">
                Inquiries: <strong className="text-white">japavi0105@gmail.com</strong>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.instagram.com/pavidesignz/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold text-acc hover:text-white uppercase transition-colors"
                >
                  @pavidesignz <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-body text-neutral-500 text-xs text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Pavithraj &bull; Pavidesignz. Built with Next.js &amp; Tailwind.
            </div>
            <div className="font-serif italic text-neutral-600 flex items-center gap-1">
              Made with passion for Tamil Nadu trades <Heart className="h-3 w-3 text-acc inline fill-acc" />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

// Subordinate Layout icons or placeholders as custom definitions
function Layouts(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}
