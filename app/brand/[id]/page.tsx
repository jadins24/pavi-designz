'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CLIENTS_DATA } from '@/lib/clients';
import Logo from '@/components/Logo';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Monitor, 
  Video, 
  AlertCircle,
  Menu,
  X,
  ChevronRight 
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface PortfolioAsset {
  title: string;
  specs: string;
  url: string;
  description: string;
}

const PORTFOLIO_ASSETS: Record<string, PortfolioAsset[]> = {
  "john-saw-mill": [
    {
      title: "Premium Teak Logs Stack",
      specs: "A-Grade Burma Teak Wood Logs Yard",
      url: "https://picsum.photos/seed/woodlogs/800/600",
      description: "Direct teak and country log imports stacked in the Tirunelveli yard for immediate scale inspection."
    },
    {
      title: "Wood Grain & Core Finish",
      specs: "Moisture Tested • Seasoned Finish",
      url: "https://picsum.photos/seed/teakwood/800/600",
      description: "High-contrast grain consistency suitable for luxury interior door and carving works."
    },
    {
      title: "Traditional Entry Door Design",
      specs: "3ft 6\" x 7ft • Modern Carved Frame",
      url: "https://picsum.photos/seed/woodenhouse/800/600",
      description: "Finished high-solid teak wood custom main door delivered to site."
    },
    {
      title: "Sawmill Heavy Crane Yard",
      specs: "Log Lift Mechanics • Processing Stage",
      url: "https://picsum.photos/seed/carpentry/800/600",
      description: "Precision cutting floor with professional grade hydraulic band-saw guides."
    }
  ],
  "antony-metals": [
    {
      title: "Fe 550D Reinforced Rebar",
      specs: "8mm - 32mm Steel Core Grades",
      url: "https://picsum.photos/seed/ironrebar/800/600",
      description: "High-tension rust-resistant concrete foundation reinforcement rods ready for dispatch."
    },
    {
      title: "Structural H-Beams Stock",
      specs: "ASTM Standard Architectural Channels",
      url: "https://picsum.photos/seed/steelbeams/800/600",
      description: "Heavy-duty steel beams supporting multi-story structural warehouse layouts."
    },
    {
      title: "Authorized JSW & Tata Depot",
      specs: "Bypass Yard Stock Delivery",
      url: "https://picsum.photos/seed/industrialfactory/800/600",
      description: "High capacity storage facilities managing over 500 tons of daily stock circulation."
    },
    {
      title: "MS Structural Pipes & Angles",
      specs: "Hollow Sections • Galvanized Finish",
      url: "https://picsum.photos/seed/metalpipes/800/600",
      description: "Corrosion resistant pipes customized for industrial roof frames and heavy trusses."
    }
  ],
  "royaloak": [
    {
      title: "Royal American Double Bed",
      specs: "Solid Oak Timber Frame • King Size",
      url: "https://picsum.photos/seed/luxurynightstand/800/600",
      description: "Imported luxury suite double bed styled with genuine mahogany panels and comfortable layout."
    },
    {
      title: "Premium Leather Recliner",
      specs: "Ergonomic Multi-Angle Backrest",
      url: "https://picsum.photos/seed/leatherarmchair/800/600",
      description: "Deep plush comfort lounge furniture matching corporate rest-zone suites."
    },
    {
      title: "Luxury Glass Dining Suit",
      specs: "6-Seater Tempered Glass Plan",
      url: "https://picsum.photos/seed/dininglayout/800/600",
      description: "Gilded leg profiles with plush premium upholstered seating sets."
    },
    {
      title: "Minimalist High-Gloss Wardrobe",
      specs: "3-Door Slide Drawer System",
      url: "https://picsum.photos/seed/sleekwardrobe/800/600",
      description: "Intelligent wardrobe partition system displaying modern space optimization."
    }
  ],
  "livspace-partners": [
    {
      title: "Emerald Green Modular Kitchen",
      specs: "L-Shape Layout • Soft-Close Hinges",
      url: "https://picsum.photos/seed/greendamask/800/600",
      description: "Stain-free contemporary green drawer fronts featuring luxury gold handles."
    },
    {
      title: "Smart Pull-Out Pantry Shelves",
      specs: "Stainless Multi-Tier Wire Baskets",
      url: "https://picsum.photos/seed/modernshelves/800/600",
      description: "Maximize corner space efficiency with German mechanical slide racks."
    },
    {
      title: "Bespoke Master Walk-In Closet",
      specs: "Tempered Glass Profiles • LED Gills",
      url: "https://picsum.photos/seed/builtincloset/800/600",
      description: "Walk-in layout structure custom styled with internal lighting strips and velvet organizers."
    },
    {
      title: "Pristine Italian Marble Countertop",
      specs: "Seamless Cut • Double Ovolo Edge",
      url: "https://picsum.photos/seed/marblestructure/800/600",
      description: "Scratch-resistant polished marble surface framing premium cooking stove installations."
    }
  ],
  "msm-real-estate": [
    {
      title: "Exclusive Palayamkottai Villa",
      specs: "3 BHK Structure • 1800 Sq.Ft Site",
      url: "https://picsum.photos/seed/villaexterior/800/600",
      description: "Newly constructed luxury architectural villa near the bypass road entrance with gated parking."
    },
    {
      title: "DTCP Approved Gated Plots",
      specs: "Ready-To-Build Layout Grid Map",
      url: "https://picsum.photos/seed/blueprintgrid/800/600",
      description: "Cleared layout ready with underground water connections and wide asphalt lane paths."
    },
    {
      title: "Cozy Main Hall Interior",
      specs: "False Ceiling • Warm Ambient LED Gills",
      url: "https://picsum.photos/seed/cozyliving/800/600",
      description: "Architectural detail tour of the inner modular storage unit and spacious foyer layout."
    },
    {
      title: "Scenic Gated Colony Roadway",
      specs: "Integrated Drainage • Compound Walls",
      url: "https://picsum.photos/seed/highwayexit/800/600",
      description: "Secure, highly developed residential enclave connected directly to the major national highway bypass."
    }
  ],
  "aaradhyahomes": [
    {
      title: "Precision Blueprints & CAD Plan",
      specs: "1:100 Metric Scale Layout Detail",
      url: "https://picsum.photos/seed/architectblueprint/800/600",
      description: "Pristine technical drawings detailing the electrical and load-bearing framing structures."
    },
    {
      title: "Sleek House 3D Model Rendering",
      specs: "Architectural Exterior Mock Design",
      url: "https://picsum.photos/seed/modernvilla3d/800/600",
      description: "Modern minimalist layout render highlighting concrete texture pairings and glass rails."
    },
    {
      title: "Isometric False Ceiling Joists",
      specs: "Interior Detail Structural Blueprint",
      url: "https://picsum.photos/seed/woodenroofjoints/800/600",
      description: "Wooden and metal grid outline supporting dynamic acoustic wood panel layouts."
    },
    {
      title: "Designer Hand Sketch Concept",
      specs: "Initial Isometric Elevation Idea",
      url: "https://picsum.photos/seed/architectsketch/800/600",
      description: "Conceptual napkin-drawing detailing natural lighting paths and breeze-vent layout."
    }
  ],
  "john-tower": [
    {
      title: "Celebration Hall Banquet Setup",
      specs: "800+ Guest Capacity Banquet Hall",
      url: "https://picsum.photos/seed/goldbanquethall/800/600",
      description: "Bright brass accents and golden uplighting setting up a grand celebratory South-Indian hall."
    },
    {
      title: "John Tower Apartments Facade",
      specs: "Commercial G+4 Premium Building",
      url: "https://picsum.photos/seed/luxurybuildingfacade/800/600",
      description: "Prudently planned contemporary flat blocks situated near key local shopping hubs."
    },
    {
      title: "Elegant Reception Lounge Desk",
      specs: "Granite Top • Warm Metallic Accents",
      url: "https://picsum.photos/seed/brasslobby/800/600",
      description: "Premium counter lobby inviting walk-in venue booking consult conversations."
    },
    {
      title: "Heavy Car Parking Yard Layout",
      specs: "Pre-Allocated 50+ Car Bays Grid",
      url: "https://picsum.photos/seed/parkingcourt/800/600",
      description: "Interlock-paved concrete roads ensuring smooth entry of heavy multi-utility vehicles."
    }
  ],
  "prominance-upvc": [
    {
      title: "Sliding Profile Glazing Window",
      specs: "Weatherproof Double Seals • Multi-Chamber",
      url: "https://picsum.photos/seed/slidingwindow/800/600",
      description: "Sleek uPVC window sliding action providing 40dB premium acoustic noise cancellation."
    },
    {
      title: "UPVC Joint Chamber Cross Section",
      specs: "Multi-Chaired Moisture Barriers",
      url: "https://picsum.photos/seed/profilestructure/800/600",
      description: "Internal reinforcement steel core preventing frame warping details during heavy heat cycles."
    },
    {
      title: "Master Suite Premium Glazing",
      specs: "UV Filter Panes • Rain Resistant",
      url: "https://picsum.photos/seed/bedroomglazing/800/600",
      description: "Beautifully styled master window frame installed beautifully over high elevation views."
    },
    {
      title: "Storm Chamber Water Pressure Test",
      specs: "Heavy Monsoon Moisture Test",
      url: "https://picsum.photos/seed/stormwater/800/600",
      description: "Zero leak profile calibration maintaining sealed interiors during mock typhoon winds."
    }
  ],
  "wedding-invitation-media": [
    {
      title: "Traditional South Indian Garland Highlight",
      specs: "High-Energy Reels Highlight Capture",
      url: "https://picsum.photos/seed/southindianwedding/800/600",
      description: "Beautiful high-retention vertical highlights capturing cinematic South Indian wedding garland events."
    },
    {
      title: "Ambient Sunset Stage Mandap Decor",
      specs: "Warm Floral Uplighting Arrangement",
      url: "https://picsum.photos/seed/roseweddinghall/800/600",
      description: "Lush rose-twilight background setting designed elegantly for traditional ceremony backdrop."
    },
    {
      title: "Traditional Invite Card Design",
      specs: "Premium Gold foil Digital Layout",
      url: "https://picsum.photos/seed/foliageinvite/800/600",
      description: "Stunning paperless invitation file detailing venue, directions, and ceremony timestamps."
    },
    {
      title: "Live Nadaswaram Instrumental Capture",
      specs: "Synchronized High Fidelity Audio Cut",
      url: "https://picsum.photos/seed/musicalinstrument/800/600",
      description: "High frame rate footage syncing close-up movements of premium local traditional woodwinds."
    }
  ]
};

const getPortfolioAssets = (clientId: string): PortfolioAsset[] => {
  return PORTFOLIO_ASSETS[clientId] || [
    {
      title: "Executive Corporate Deliverables",
      specs: "High-Gloss Layout Portfolio Specs",
      url: `https://picsum.photos/seed/${clientId}-prod-1/800/600`,
      description: "Branded corporate identity items designed beautifully to maintain consistent trade presence."
    },
    {
      title: "Premium Print Brand Collateral",
      specs: "300 DPI Vector High Resolution",
      url: `https://picsum.photos/seed/${clientId}-prod-2/800/600`,
      description: "High fidelity advertising flyers customized for premium offline local circulation formats."
    },
    {
      title: "Regional Showroom Highway Flex",
      specs: "Matte Fine-Art Print Banner",
      url: `https://picsum.photos/seed/${clientId}-prod-3/800/600`,
      description: "Grand format billboard advertisement placed at the bypass route to capture immediate crowd traffic."
    },
    {
      title: "Special Campaign Creative Kit",
      specs: "Dynamic Mobile Layout Templates",
      url: `https://picsum.photos/seed/${clientId}-prod-4/800/600`,
      description: "Highly optimized vertical screen layout formats crafted for rapid social feeds circulation."
    }
  ];
};



export default function BrandDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const client = id ? CLIENTS_DATA.find(item => item.id === id) || null : null;
  const portfolioAssets = client ? getPortfolioAssets(client.id) : [];
  
  // Custom interactive mockups tab selector
  const [selectedMockupIdx, setSelectedMockupIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!client) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="h-12 w-12 text-acc mb-4 animate-bounce" />
        <h1 className="font-serif text-3xl font-light text-text-dark mb-2">Project Profile Not Found</h1>
        <p className="font-body text-text-muted text-sm max-w-sm mb-8 leading-relaxed">
          The trade brand profile you are searching for might have been archived or moved to another grid category.
        </p>
        <Link 
          href="/" 
          className="font-sans text-xs font-bold tracking-widest text-white bg-acc hover:bg-acc-hover px-8 py-4 uppercase transition-all duration-300"
        >
          Return to Trade Grid
        </Link>
      </div>
    );
  }

  // Mockup Renderer - programmatically rendering incredible mockups based on brand ID to prove design skill!
  const renderInteractiveMockupPreview = () => {
    switch (client.id) {
      case "john-saw-mill":
        return (
          <div className="space-y-6">
            {/* Interactive Tab Headers */}
            <div className="flex gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
              {["Visiting Card", "Logistics Flyer", "Grand Highway Banner"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMockupIdx(i)}
                  className={`text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase px-4 py-2 transition-all ${
                    selectedMockupIdx === i ? 'bg-acc text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#1A1917] border border-neutral-800 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {selectedMockupIdx === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-sm aspect-[1.75/1] bg-[#451a03] border-4 border-[#D97706]/40 p-4 sm:p-6 text-white shadow-2xl relative select-none rounded"
                  >
                    <div className="absolute right-4 top-4 font-serif text-amber-500 italic text-[11px]">Est. 1988</div>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="font-sans font-extrabold tracking-wider text-[#FCD34D] text-sm uppercase">John Saw Mill</div>
                        <div className="text-[9px] tracking-widest text-amber-200/60 uppercase mt-0.5">Teak and country logs importers</div>
                      </div>
                      <div className="border-t border-amber-800/60 pt-2 flex justify-between items-end">
                        <div>
                          <p className="text-[10px] font-semibold">Tvl Main Road, Tenkasi Path</p>
                          <p className="text-[8px] text-amber-300/60">Tirunelveli, Tamil Nadu</p>
                        </div>
                        <div className="text-right text-[9px] text-amber-400 font-bold">93427 98750</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedMockupIdx === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-[80%] aspect-[0.70/1] bg-white text-text-dark border-2 border-brand-border-md p-4 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between"
                  >
                    <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] p-2 text-left mb-2">
                       <div className="font-serif italic text-xs text-[#D97706]">Weekly Direct Import</div>
                    </div>
                    <div className="text-center space-y-2 flex-grow">
                      <h4 className="font-serif font-semibold text-lg sm:text-2xl tracking-tight leading-none text-[#451a03]">BURMA TEAK WOODS</h4>
                      <p className="text-[9px] font-body text-text-muted leading-relaxed">Best grades suitable for grand villa doors, traditional dining tables, and robust indoor structural frames.</p>
                      <div className="my-2 bg-neutral-100 py-1.5 px-3 flex justify-between text-[8px] font-sans font-bold uppercase tracking-wider">
                        <span>Lorry Load delivery</span>
                        <span className="text-[#D97706]">30% Off Seasonal</span>
                      </div>
                    </div>
                    <div className="border-t border-neutral-100 pt-2 text-center text-[9px] font-bold tracking-widest text-[#D97706] uppercase">
                      Contact: John Saw Mill Pvt Ltd &bull; 93427 98750
                    </div>
                  </motion.div>
                )}

                {selectedMockupIdx === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-24 sm:h-32 bg-[#D97706] border-4 border-amber-900 p-2 sm:p-4 text-white hover:brightness-105 transition-all flex items-center justify-between"
                  >
                    <div className="text-left space-y-1">
                      <div className="font-sans font-extrabold text-sm sm:text-2xl uppercase tracking-wider">JOHN SAW MILL PVT LTD</div>
                      <div className="text-[9px] sm:text-xs tracking-widest text-amber-100 uppercase font-semibold">Burmese & Country Wood Logs | Tenkasi Road Entrance</div>
                    </div>
                    <div className="bg-amber-950 px-3 py-2 sm:px-6 sm:py-3 text-center rounded">
                      <div className="text-[10px] sm:text-sm font-extrabold text-white">BULK OFFERS</div>
                      <div className="text-[8px] sm:text-[10px] tracking-wider text-amber-200">Call Now</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case "antony-metals":
        return (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
              {["Premium Card", "Structural Highway Flex"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMockupIdx(i)}
                  className={`text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase px-4 py-2 transition-all ${
                    selectedMockupIdx === i ? 'bg-acc text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#1A1917] border border-neutral-800 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {selectedMockupIdx === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-sm aspect-[1.75/1] bg-[#111827] border-t-4 border-b-4 border-[#4B5563] p-4 sm:p-6 text-white shadow-2xl relative select-none rounded"
                  >
                    <div className="absolute right-4 top-4 font-sans text-neutral-500 font-bold text-[9px] tracking-wider uppercase">STEEL GRADES: FE 550D</div>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="font-sans font-black tracking-widest text-white text-md uppercase">ANTONY METALS</div>
                        <div className="text-[9px] tracking-widest text-neutral-400 uppercase mt-1">Structural Beams, Angles, and reinforce rods</div>
                      </div>
                      <div className="pt-2 flex justify-between items-end border-t border-neutral-800">
                        <div>
                          <p className="text-[9px] font-medium text-neutral-300">Tirunelveli Bypass Yards</p>
                          <p className="text-[7.5px] text-neutral-500">Authorized Regional Dealer</p>
                        </div>
                        <div className="text-right text-[10px] text-[#EE0000] font-black">9.3.4.2.7.9.8.7.5.0</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedMockupIdx === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full p-4 sm:p-6 bg-white border-2 border-neutral-300 text-text-dark flex items-center justify-between gap-4"
                  >
                    <div className="text-left space-y-1 flex-grow">
                      <span className="text-[8px] bg-[#EE0000] text-white font-sans font-black tracking-widest uppercase px-2 py-0.5">AUTHORISED DISTRIBUTOR</span>
                      <h4 className="font-sans font-black text-lg sm:text-2xl text-[#111827] uppercase leading-none">ANTONY METALS</h4>
                      <p className="text-[9px] font-body text-text-muted">Direct dispatch of iron reinforcement rods, foundation pipes, and MS channels to project construction yards.</p>
                    </div>
                    <div className="text-center bg-neutral-900 text-white p-3 rotate-1 shrink-0">
                      <div className="text-[12px] font-black tracking-widest">FE 550D</div>
                      <div className="text-[7px] tracking-wide text-neutral-400 uppercase mt-0.5">Tata &amp; JSW Dealer</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case "royaloak":
        return (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
              {["Wedding Sale Poster", "Instagram Story Discount Template"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMockupIdx(i)}
                  className={`text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase px-4 py-2 transition-all ${
                    selectedMockupIdx === i ? 'bg-acc text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#1A1917] border border-neutral-800 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {selectedMockupIdx === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-[85%] aspect-[0.72/1] bg-white text-text-dark border-4 border-[#DC2626] p-4 flex flex-col justify-between shadow-2xl relative"
                  >
                    <div className="bg-[#DC2626] text-white text-center py-1 text-[10px] tracking-widest uppercase font-black">
                      ROYALOAK SPECIAL WEDDING COMBO
                    </div>
                    <div className="my-auto text-center space-y-2">
                      <div className="font-serif italic text-sm text-[#7f1d1d]">Elegant Luxury Furniture Sets</div>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#DC2626] leading-none">7 PECS BRIDAL BUNDLE</h4>
                      <p className="text-[8.5px] font-body text-text-muted leading-relaxed">Includes wooden double cot, premium orthopaedic spring mattress, 3-door sleek wardrobe, and glass dressing stand.</p>
                      <div className="bg-neutral-100 py-1 flex items-center justify-around font-sans font-bold text-[#DC2626] text-[10px]">
                        <span>REGIONAL DISCOUNT OUTLET</span>
                        <span className="bg-[#DC2626] text-white px-2 py-0.5 font-black">SAVE 45%</span>
                      </div>
                    </div>
                    <div className="border-t border-neutral-100 pt-2 text-center text-[8.5px] font-sans text-neutral-400 uppercase tracking-widest text-center w-full">
                      Tvl Main Road &bull; Walk-in Showroom Dealer
                    </div>
                  </motion.div>
                )}

                {selectedMockupIdx === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-xs aspect-[9/16] bg-neutral-950 text-white border-2 border-[#DC2626] p-4 flex flex-col justify-between relative shadow-2xl"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                      <div className="text-[8px] font-black text-[#DC2626] tracking-widest uppercase">ROYALOAK FURNITURE</div>
                      <div className="text-[7.5px] text-neutral-400">@royaloak_tvl</div>
                    </div>
                    <div className="text-center space-y-3 my-auto">
                      <div className="h-20 w-full bg-neutral-900 rounded border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                        <span className="text-[9px] text-neutral-500 font-sans tracking-wide">AESTHETIC BED MOCKUP IMAGE</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm font-semibold tracking-wide text-[#FECACA]">American Timber Edition</h4>
                        <p className="text-[7px] text-neutral-400 leading-normal px-2">Imported genuine teak double bed design now displayed at our bypass showroom road.</p>
                      </div>
                      <div className="bg-[#DC2626]/25 border border-[#DC2626] py-1.5 px-3 rounded text-[9px] text-[#FECACA] uppercase font-bold tracking-widest">
                        Swipe Up For Catalogue
                      </div>
                    </div>
                    <div className="text-center text-[7.5px] text-neutral-500 uppercase">
                      Contact Partner Outlets: 93427 98750
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case "msm-real-estate":
        return (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
              {["Viral Reels Subtitle Overlay", "Walkthrough Card Layout"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMockupIdx(i)}
                  className={`text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase px-4 py-2 transition-all ${
                    selectedMockupIdx === i ? 'bg-acc text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#1A1917] border border-neutral-800 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {selectedMockupIdx === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-xs aspect-[9/16] bg-neutral-950 text-white border border-neutral-800 p-4 flex flex-col justify-between relative shadow-2xl rounded-lg"
                  >
                    <div className="absolute top-2 left-2 flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 bg-[#2563EB] rounded-full animate-ping" />
                      <span className="text-[7px] font-sans text-neutral-400">LEAD CAPTURE ENGINE ACTIVE</span>
                    </div>

                    <div className="my-auto space-y-3 pt-6">
                      <div className="relative h-28 w-full bg-neutral-900 border border-neutral-800 flex flex-col justify-center items-center rounded overflow-hidden">
                        <div className="absolute left-2 bottom-2 text-[7px] font-mono text-neutral-400">00:15 / 00:30 secs</div>
                        <Video className="h-6 w-6 text-neutral-700 mb-1" />
                        <span className="text-[7px] text-neutral-500 font-sans">CINEMATIC HOUSE TOUR PLAYBACK</span>
                      </div>

                      <div className="text-center space-y-1">
                        <div className="text-[10px] bg-[#EE0000] text-white px-2 py-0.5 inline-block font-sans font-black uppercase tracking-wider skew-x-2">
                          HOUSE FOR SALE IN PALAYAMKOTTAI
                        </div>
                        <div className="font-sans font-black text-sm tracking-wide text-neutral-100 block">
                          3 BHK • 1800 SQ.FT • DTCP APPROVED
                        </div>
                        <div className="text-[9px] text-[#93C5FD] font-semibold">Just 2 Mins From National Highway Bypass</div>
                      </div>
                    </div>

                    <div className="bg-[#2563EB] text-center text-[9px] font-sans tracking-widest text-[#93C5FD] py-2 uppercase font-bold hover:bg-blue-700 cursor-pointer">
                      Send Enquiry On WhatsApp
                    </div>
                  </motion.div>
                )}

                {selectedMockupIdx === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-sm aspect-[1.75/1] bg-white border border-neutral-300 p-4 sm:p-6 text-text-dark shadow-2xl flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-sans font-black text-[#2563EB] text-base uppercase">MsM Real Estate</div>
                        <div className="text-[8px] text-text-light uppercase tracking-wider">Premium Housing Layout Promoters</div>
                      </div>
                      <span className="text-[7px] border border-neutral-300 rounded px-1.5 py-0.5 font-bold uppercase tracking-wider text-[#2563EB]">DTCP APPROVED</span>
                    </div>
                    <p className="text-[9px] text-text-muted font-body leading-relaxed my-2">Promoting verified residential plots, premium concrete villas and gated layouts in Tirunelveli &amp; Chennai suburbs.</p>
                    <div className="border-t border-neutral-100 pt-2 flex items-center justify-between">
                      <span className="text-[9px] font-bold text-text-dark font-sans uppercase">Let&apos;s build homes</span>
                      <span className="text-[10px] text-[#2563EB] font-black font-sans">93427 98750</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case "wedding-invitation-media":
        return (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
              {["Motion Invite Layout", "Bridal Reels Highlights Wrapper"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMockupIdx(i)}
                  className={`text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase px-4 py-2 transition-all ${
                    selectedMockupIdx === i ? 'bg-acc text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#1A1917] border border-neutral-800 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {selectedMockupIdx === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-xs aspect-[9/16] bg-[#500724] text-white border border-[#EC4899] p-4 flex flex-col justify-between relative shadow-2xl rounded"
                  >
                    <div className="text-center font-serif text-[10px] tracking-widest text-[#FCE7F3] uppercase pt-2">
                      மங்களகரமான திருமண அழைப்பிதழ்
                    </div>

                    <div className="text-center space-y-3 my-auto">
                      <div className="text-[#EC4899] font-serif italic text-base leading-none">Wedding Invitation</div>
                      <h4 className="font-serif text-lg sm:text-2xl font-semibold tracking-wide text-amber-300">ARUN &bull; SHALINI</h4>
                      <p className="text-[8px] text-[#FCE7F3]/70 font-body leading-loose">
                        நாட்கள்: ஜூன் 14, 2026<br /> இடம்: லாரன்ஸ் திருமண மஹால், பாளையங்கோட்டை.<br />
                        உறவினர்கள் சூழ தங்களை அன்புடன் அழைக்கிறோம்!
                      </p>
                    </div>

                    <div className="border-t border-[#EC4899]/30 pt-2 text-center">
                      <span className="text-[7.5px] tracking-wider text-[#FCE7F3] uppercase block">Click below for google map location</span>
                    </div>
                  </motion.div>
                )}

                {selectedMockupIdx === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-xs aspect-[9/16] bg-[#1A1917] text-white p-4 flex flex-col justify-between relative border border-neutral-800 shadow-2xl"
                  >
                    <div className="text-[8px] font-sans text-neutral-400 uppercase tracking-widest">Bridal Entry Reels Edit</div>
                    <div className="h-44 w-full bg-[#500724]/20 border border-[#EC4899]/20 flex flex-col items-center justify-center rounded relative">
                      <Video className="h-8 w-8 text-[#EC4899] animate-pulse" />
                      <div className="text-[8px] tracking-wider text-[#FCE7F3] mt-2">Nadaswaram Rhythmic Sync Edit</div>
                    </div>
                    <div className="text-center space-y-1">
                      <div className="text-[9px] font-sans tracking-wide text-[#EC4899] uppercase font-bold">Pavidesignz Cinematics</div>
                      <p className="text-[7.5px] text-neutral-400">Capturing local South-Indian wedding stories in pristine 60FPS vertical clips.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      default:
        // Fallback or dynamic list for the rest of trade profiles
        return (
          <div className="space-y-6">
            <div className="text-center pb-3 border-b border-neutral-800">
              <h4 className="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase">
                Brand Artifacts & Deliverables Specs
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-4 max-h-[350px] overflow-y-auto pr-1">
              {client.deliverableSpecs && client.deliverableSpecs.length > 0 ? (
                client.deliverableSpecs.map((spec, i) => (
                  <div key={i} className="bg-neutral-900 border border-neutral-850 p-5 rounded hover:border-acc/30 transition-all flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">{spec.name}</span>
                      </div>
                      <p className="font-body text-[13px] text-neutral-400 mt-1 leading-relaxed">
                        {spec.purpose}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-850/60 font-sans text-[10px] font-semibold text-acc uppercase tracking-widest">
                      Specs: <span className="text-neutral-300 font-bold">{spec.specs}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-xs text-neutral-500 py-6">
                  Design specifications loaded on terminal files.
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-dark text-white selection:bg-acc selection:text-white pb-24">
      
      {/* ── COMMON HEADER NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 h-[74px] bg-white/90 backdrop-blur-md border-b border-brand-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo with exact SVG paths provided from mockup */}
          <Link href="/" className="flex items-center gap-1 group" aria-label="Pavidesignz Logo Home">
            <Logo className="h-10 w-auto text-text-dark group-hover:opacity-90 transition-opacity" />
            <span className="font-sans font-bold text-lg tracking-wider text-text-dark ml-2 uppercase">
              Pavi<span className="text-acc">Designz</span>
            </span>
          </Link>

          {/* Nav middle links for Desktop clients */}
          <div className="hidden lg:flex items-center gap-10">
            {['about', 'services', 'clients', 'contact'].map((sectionId) => (
              <Link 
                key={sectionId} 
                href={`/#${sectionId}`} 
                className="font-sans text-[12px] font-semibold tracking-widest text-text-muted hover:text-acc transition-colors uppercase"
              >
                {sectionId}
              </Link>
            ))}
          </div>

          {/* Action button pairing */}
          <div className="hidden lg:block">
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center font-sans text-[12px] font-bold tracking-widest text-white bg-acc hover:bg-acc-hover px-6 py-3.5 transition-all duration-300 uppercase product-cta"
            >
              Let&apos;s work together <ChevronRight className="h-4.5 w-4.5 ml-1" />
            </Link>
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
                <Link 
                  key={sectionId} 
                  href={`/#${sectionId}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-semibold tracking-widest text-text-muted hover:text-acc transition-colors uppercase border-b border-neutral-100 pb-3"
                >
                  {sectionId}
                </Link>
              ))}
              <Link 
                href="/#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center font-sans font-bold tracking-wider text-white bg-acc hover:bg-acc-hover py-4 transition-colors uppercase mt-2 inline-block"
              >
                Let&apos;s work together →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── IMMERSIVE DYNAMIC BRAND HERO ── */}
      <section 
        className="relative pt-[74px] border-b border-neutral-900 overflow-hidden"
        style={{ background: client.bannerImage }}
      >
        {/* Rich dark layout backing */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-black/10 mix-blend-multiply pointer-events-none" />
        
        {/* Technical crosshair accents */}
        <div className="absolute left-[5%] top-1/3 w-12 h-[1px] bg-white/20 pointer-events-none" />
        <div className="absolute left-[5%] top-1/3 w-[1px] h-12 bg-white/20 -translate-y-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-32 relative z-10 space-y-6">
          <span 
            className="font-sans text-[9px] font-extrabold tracking-widest px-3.5 py-1.5 uppercase inline-block border rounded-sm"
            style={{ 
              color: client.textColor, 
              borderColor: `${client.textColor}30`, 
              backgroundColor: `${client.accentColor}25` 
            }}
          >
            DISCIPLINE: {client.industry}
          </span>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white uppercase leading-none max-w-4xl">
            {client.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-300 font-sans uppercase tracking-[0.15em] pt-2">
            <span>Corporate partner:</span>
            <span className="font-bold text-white uppercase" style={{ color: client.textColor }}>
              {client.company}
            </span>
          </div>
        </div>
      </section>

      {/* ── BRAND DELIVERABLE VISUALIZATION SHOWCASE ── */}
      <section className="bg-bg-dark relative py-12 md:py-20 px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2 pb-6 border-b border-neutral-900">
            <span className="font-sans text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
              DELIVERED GRAPHIC TEMPLATE
            </span>
            <h2 className="font-serif text-2xl font-light text-neutral-200 uppercase tracking-tight">
              Design Artifact Draft
            </h2>
          </div>

          <div className="bg-[#0E0D0B] border border-neutral-900 rounded-md overflow-hidden shadow-2xl p-4 sm:p-10 relative">
            <div className="absolute -left-12 -top-12 w-24 h-24 rounded-full pointer-events-none opacity-5 blur-3xl" style={{ backgroundColor: client.accentColor }} />
            {renderInteractiveMockupPreview()}
          </div>
        </div>
      </section>

      {/* ── ACTUAL COMPLETED DESIGN PORTFOLIO GRID ── */}
      <section className="bg-[#0c0b09] relative py-16 md:py-24 px-6 md:px-12 z-10 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span 
              className="font-sans text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 border rounded-full"
              style={{ 
                color: client.textColor,
                borderColor: `${client.textColor}25`,
                backgroundColor: `${client.accentColor}10`
              }}
            >
              TRADE DESIGN PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-white uppercase tracking-tight leading-none pt-2">
              Design Assets Gallery
            </h2>
            <p className="font-sans text-xs text-neutral-400 tracking-wider uppercase">
              Actual layout renders and completed physical collateral deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {portfolioAssets.map((asset, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0E0D0B] border border-neutral-900 hover:border-neutral-800 rounded-lg overflow-hidden flex flex-col group transition-all duration-300"
                id={`portfolio-asset-${index}`}
              >
                {/* Image Container with high-fidelity visual aspects */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <Image 
                    src={asset.url}
                    alt={asset.title}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                    priority={index < 2}
                  />
                  {/* Visual design overlay with technical coordinate labels */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-5 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
                      COMPLETED TRADE DELIVERABLE
                    </span>
                    <span className="font-mono text-[9px] text-acc tracking-widest uppercase" style={{ color: client.textColor }}>
                      300 DPI ARTIFACT
                    </span>
                  </div>
                </div>

                {/* Info and Specifications Block */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-lg md:text-xl font-medium text-neutral-100 uppercase tracking-tight">
                        {asset.title}
                      </h3>
                      <span className="font-mono text-[9px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-sm uppercase tracking-widest shrink-0">
                        SPEC 0{index + 1}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: client.textColor }}>
                      {asset.specs}
                    </div>
                    <p className="font-body text-sm text-text-muted leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                  
                  <div className="pt-5 border-t border-neutral-900 flex justify-between items-center text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    <span>FORMAT: CMYK VECTOR / PHOTO</span>
                    <span className="font-bold underline" style={{ color: client.textColor }}>
                      ACTIVE FILE
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
