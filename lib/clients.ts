export interface DeliverableSpec {
  name: string;
  specs: string;
  purpose: string;
}

export interface ClientItem {
  id: string;
  name: string;
  company: string;
  industry: string;
  category: string;
  deliverables: string[];
  bannerImage: string; // Dynamic path/color description
  accentColor: string;
  textColor: string;
  details: string;
  tamilCopy: string;
  tamilEnglish: string;
  challengeText: string;
  designStrategy: string;
  metrics: { label: string; value: string }[];
  deliverableSpecs: DeliverableSpec[];
  toolsUsed: string[];
}

export const CLIENTS_DATA: ClientItem[] = [
  {
    id: "john-saw-mill",
    name: "John Saw Mill",
    company: "John Saw Mill Pvt Ltd",
    industry: "Door & Timber",
    category: "timber-metals",
    deliverables: ["Visiting Card", "Mega Banner", "Print Notice", "Logistics Flyer"],
    bannerImage: "linear-gradient(135deg, #78350f, #451a03)",
    accentColor: "#D97706",
    textColor: "#FCD34D",
    details: "Primary offline brand materials and local promotion templates customized for the leading timber processing and sawmill yard in Tirunelveli.",
    tamilCopy: "உயர்தர தேக்கு மற்றும் மர சாமான்கள் தயாரிப்பாளர்கள்.",
    tamilEnglish: "Uyarthara thekku matrum mara saamaangal thayaarippaalargal.",
    challengeText: "The main challenge was establishing solid visual uniformity for a 35-year-old traditional sawmill business. Regional builders needed to immediately trust their timber premium grades (Burmese, teak, country woods). The deliverables had to communicate immense structural strength, literal size specs, and look professional both in small printed pocket cards and massive 20-foot outdoor highway billboard banners.",
    designStrategy: "We utilized rich timber-derived color arrays (amber, rust, wood ash) paired with robust bold sans-serif display type. Graphic grids explicitly showcased timber grain icons and precise measurement scales.",
    metrics: [
      { label: "Highway Billboard Visibility", value: "20+ Feet" },
      { label: "Contractor Cards Distributed", value: "3,500+" },
      { label: "Local Client Lead Growth", value: "40% Increase" }
    ],
    deliverableSpecs: [
      { name: "Executive Dual-Sided Card", specs: "3.5\" x 2.0\" • 350 GSM Matte Laminated", purpose: "Distributed to local interior plan designers and heavy civil engineers." },
      { name: "Highway Logistics Banner", specs: "20ft x 10ft • Weatherproof Star Flex Vinyl", purpose: "Placed outside the national highway yard path for immediate truck transport attention." },
      { name: "A5 Print Notice brochure", specs: "A5 Half-fold • 130 GSM Glossy Flyer Print", purpose: "Local newspaper insertion listing active seasons of Burma teak wood logs imports." }
    ],
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator", "Modern Grid Scale Typography"]
  },
  {
    id: "antony-metals",
    name: "Antony Metals",
    company: "Antony Metals Co",
    industry: "Metal & Steel",
    category: "timber-metals",
    deliverables: ["Premium Visiting Card", "Outdoor Banner", "Invoice Book Cover"],
    bannerImage: "linear-gradient(135deg, #374151, #1f2937)",
    accentColor: "#4B5563",
    textColor: "#9CA3AF",
    details: "Bold industrial signage, rust-proof corporate banners, and functional layout metrics matching their robust structural architectural steel products.",
    tamilCopy: "சிறந்த தரமான இரும்பு மற்றும் எஃகு பொருட்கள்.",
    tamilEnglish: "Sirandha tharamaana irumbu matrum ehgu porutkal.",
    challengeText: "Heavy fabrication and reinforcement materials need absolute technical listing. The design collateral for Antony Metals had to appear robust, architectural, and highly structural without falling into visual clutter. Key details like grade gauges, plate thicknesses, and contact hotlines had to be legible under bright shop floors or dim store warehouses.",
    designStrategy: "We selected a modern, highly legible high-contrast geometric design scheme. Dominant deep charcoal background templates with stark white highlights and sharp layout dividers inspired by reinforcing iron rods.",
    metrics: [
      { label: "Industrial Flex Size", value: "12 x 8 ft" },
      { label: "Trade Invoices Handled", value: "1,200+" },
      { label: "Corporate Tone Match", value: "100% Precise" }
    ],
    deliverableSpecs: [
      { name: "Shop Counter Visiting Card", specs: "3.5\" x 2.0\" • Raised Spot UV Coating", purpose: "Handed over to direct building contractors during bulk procurement conversations." },
      { name: "Heavy Depot Flex Sign", specs: "12ft x 8ft • High-Tension Backlit Vinyl", purpose: "Main trade depot entrance sign visible clearly during hazy nights." },
      { name: "Corporate Invoice Cover template", specs: "A4 Size • 80 GSM Offset Board paper", purpose: "Laminated official ledger matching brand identity patterns." }
    ],
    toolsUsed: ["Adobe Photoshop", "Figma Design Layouts", "Geometric Grids"]
  },
  {
    id: "royaloak",
    name: "Royaloak Partner",
    company: "Royaloak Furniture Partner",
    industry: "Furniture Shop",
    category: "furniture-interiors",
    deliverables: ["Showroom Banner", "Social Media Graphics", "Discount Creatives"],
    bannerImage: "linear-gradient(135deg, #7f1d1d, #450a0a)",
    accentColor: "#DC2626",
    textColor: "#FECACA",
    details: "Dynamic design collateral and local advertisements aligned with Royaloak's global premium-style luxury furniture campaigns.",
    tamilCopy: "இறக்குமதி செய்யப்பட்ட சொகுசு மரச்சாமான்கள்.",
    tamilEnglish: "Irakkupadhika patta sogusu marachaamaangal.",
    challengeText: "Royaloak represents global standard furniture aesthetics (wedding packages, premium dining suites, leather recliners). Designing local store advertisements meant translating global luxury templates into high-conversion Tamil local advertisements. It was essential to balance high-fashion product photos with bold local discounting callouts.",
    designStrategy: "Using high-end red luxury color accents matched to standard corporate guidelines. We implemented crisp grid layouts with spacious margins, keeping product images as hero elements while utilizing premium serif accents.",
    metrics: [
      { label: "Seasonal Campaign Reach", value: "15,000+" },
      { label: "Interactive WhatsApp Reels", value: "24+ Edited" },
      { label: "Store Walk-ins Driven", value: "35% Increase" }
    ],
    deliverableSpecs: [
      { name: "Wedding Package Banner", specs: "15ft x 8ft • Micro-Weave Premium Frontlit", purpose: "Grand roadside showroom gate banner showcasing active wedding combos." },
      { name: "Instagram Stories layout pack", specs: "1080 x 1920 px • Dynamic Motion graphics", purpose: "Weekly social flash updates showing newly arrived imported sofa frames." },
      { name: "WhatsApp Discount flyer", specs: "1080 x 1080 px • High-Contrast Web flyer", purpose: "Direct broadcasts sent to local furniture buying groups." }
    ],
    toolsUsed: ["Adobe Photoshop", "Canva Pro Layouts", "Brand Scale Adaptation"]
  },
  {
    id: "livspace-partners",
    name: "Livspace Partner",
    company: "Livspace Interior Partner",
    industry: "Modular Kitchen & Interior",
    category: "furniture-interiors",
    deliverables: ["Walk-in Banner", "Instagram Stories", "Interactive Catalog Grid"],
    bannerImage: "linear-gradient(135deg, #064e3b, #022c22)",
    accentColor: "#10B981",
    textColor: "#A7F3D0",
    details: "Polished interior design pamphlets and premium social media graphics representing modular kitchen installation showcases.",
    tamilCopy: "நவீன மட்டு சமையலறை மற்றும் உள்துறை வடிவமைப்பு.",
    tamilEnglish: "Naveena mattu samayalarai matrum ulthurai vadivamaippu.",
    challengeText: "Livspace partner outlets target premium homeowners looking for space-optimizing modular kitchen designs, smart closets, and bespoke interior finishes. Promotional creatives had to look pristine, modern, clean, and represent high-end interior designers. Rough or unbalanced design would directly damage the perceived luxury value.",
    designStrategy: "We crafted layouts utilizing fresh emerald and sage green accents, deep black text hierarchies, and clean white structures. Typography was kept extremely minimal to frame the aesthetic interior mockups elegantly.",
    metrics: [
      { label: "Digital Catalog Interactions", value: "1,200/Month" },
      { label: "WhatsApp Catalog Shares", value: "800+ Shares" },
      { label: "Design Consulting Booked", value: "45 Bookings" }
    ],
    deliverableSpecs: [
      { name: "Showroom Walk-in Banner", specs: "8ft x 4ft • Matte Fine-Art Canvas Vinyl", purpose: "Inside consultation lounge banner displaying customized color wood choices." },
      { name: "Aesthetic Design catalog post", specs: "1080 x 1350 px (4:5) Portrait", purpose: "Optimized Instagram grid showing kitchen cabinets configuration before-after." },
      { name: "Kitchen Consultation Flyer", specs: "A5 DL Size • 150 GSM Art card", purpose: "Delivered directly alongside local architectural plan bundles." }
    ],
    toolsUsed: ["Figma Studio Tool", "Adobe Photoshop Suite", "Minimalist Grid Rules"]
  },
  {
    id: "msm-real-estate",
    name: "MsM Real Estate",
    company: "MsM Real Estate Chennai & Tvl",
    industry: "Real Estate",
    category: "real-estate",
    deliverables: ["Brand Logo", "Video Tour Editing", "Promotional Reels"],
    bannerImage: "linear-gradient(135deg, #1e3a8a, #172554)",
    accentColor: "#2563EB",
    textColor: "#93C5FD",
    details: "High-retention property walk-through edits, typographic logos, and viral real-estate reels that generated local direct buyer leads.",
    tamilCopy: "அங்கீகரிக்கப்பட்ட வீட்டு மனைகள் மற்றும் சொத்துக்கள்.",
    tamilEnglish: "Angeegarikkapatta veettu manaigal matrum sothukkal.",
    challengeText: "Real estate buying decision requires instant trust. Property video walkthroughs are often boring or fail to hold viewer interest after 3 seconds. MsM Real Estate required modern, fast-paced video editing for Instagram Reels and YouTube Shorts. The specs (DTCP approval numbers, land square footage, local proximity directions) had to pop out instantly with clean typographic tracking.",
    designStrategy: "We curated dynamic vertical screen motion layouts with bold typography transitions, colorful boundary highlight overlays, and rapid video cuts. Cinematic properties presentation style keeping captions large, clear, and highly visible.",
    metrics: [
      { label: "Video Reels Total Views", value: "48,000+ Views" },
      { label: "Property Lead Messages", value: "340+ Leads" },
      { label: "Video Cut Rate", value: "24hr Turnaround" }
    ],
    deliverableSpecs: [
      { name: "Walkthrough Video Reel", specs: "1080 x 1920 px (9:16) Vertical Video • 60 FPS", purpose: "High-energy property drone and interior tour edited with subtitles." },
      { name: "Real Estate Vector Logo Suite", specs: "Scalable Vector Designs (.SVG, .AI, .PNG)", purpose: "Primary developer brand logo matching trust aesthetics." },
      { name: "DTCP Layout Plan Graphic", specs: "1080 x 1080 px • High-contrast map diagram", purpose: "Shared directly in WhatsApp chats with potential land buyers." }
    ],
    toolsUsed: ["CapCut Studio Pro", "Adobe Illustrator Vector Layouts", "Auditory Timing Systems"]
  },
  {
    id: "aaradhyahomes",
    name: "Aaradhyahomes",
    company: "Aaradhya Homes Planner",
    industry: "Real Estate & Architecture",
    category: "real-estate",
    deliverables: ["Architect Logo", "Executive Visiting Card", "Exhibition Banner"],
    bannerImage: "linear-gradient(135deg, #4c1d95, #2e1065)",
    accentColor: "#7C3AED",
    textColor: "#DDD6FE",
    details: "Sleek and modern architectural brand elements showcasing luxury residential layouts and premium construction plans.",
    tamilCopy: "உங்கள் கனவு இல்லத்தை நிஜமாக்குவோம்.",
    tamilEnglish: "Ungal kanavu illathai nijamakkuvom.",
    challengeText: "Architectural designers demand visual perfection. Aaradhyahomes creates luxury villas, custom plans, and estimates. The visual collateral needed to convey mathematical scale precision, contemporary minimalist styles, and executive level polish suitable for corporate development project submissions.",
    designStrategy: "We engineered an elegant geometric grid monogram branding motif. Deep violet dark patterns accented with elegant vector fine-lines mimicking drafting tools.",
    metrics: [
      { label: "Precision Monogram", value: "Fully Premium" },
      { label: "Architect Card Print Cards", value: "1,000+ Gloss" },
      { label: "Trade Fair Banner Size", value: "12 x 8 ft" }
    ],
    deliverableSpecs: [
      { name: "Aaradhya Architectural Logo", specs: "Vector Isometric Emblem system", purpose: "Primary branding placed on architectural prints, blueprint titles, and letterheads." },
      { name: "Executive Laminated Card", specs: "3.5\" x 2.0\" • 400 GSM Soft-Touch Board", purpose: "Handed over directly to high-budget luxury villa developers." },
      { name: "Consultants Exhibition Flex", specs: "12ft x 8ft • Ultra-Fine Matte Frontlit", purpose: "Trade fair booth back banner showcasing luxury exterior blueprints." }
    ],
    toolsUsed: ["Adobe Illustrator Vector Layouts", "Geometric Grids", "Mockup Framing"]
  },
  {
    id: "john-tower",
    name: "John Tower",
    company: "John Tower Apartments",
    industry: "Apartments & Party Hall",
    category: "commercial",
    deliverables: ["Event Visiting Card", "Inauguration Banner", "Location Maps"],
    bannerImage: "linear-gradient(135deg, #b45309, #78350f)",
    accentColor: "#F59E0B",
    textColor: "#FEF3C7",
    details: "Elegant venue banners and custom contact routes templates created for premium apartment suites and commercial celebration spaces.",
    tamilCopy: "அனைத்து சுப நிகழ்ச்சிகளுக்கும் ஏற்ற திருமண மண்டபம்.",
    tamilEnglish: "Anaithu subha nigalchigalukkum etra thirumana mandapam.",
    challengeText: "John Tower hosts premium rental apartments and celebration banquets. Venue marketing requires eliciting festive emotions while remaining strictly professional with technical location guides and parking details. Visual materials had to look grand, warm, inviting, and be easy to read for senior family decision makers.",
    designStrategy: "We selected a celebratory palette of warm amber gold, brass accents, and deep wood tones. Fonts were elegant and clean serif type blocks combined with clean route maps specifying nearby landmarks.",
    metrics: [
      { label: "Inaugural Event Traffic", value: "2,000+ Guests" },
      { label: "Contact Location Shared", value: "5,000+ Times" },
      { label: "Hall Bookings Driven", value: "50% Growth" }
    ],
    deliverableSpecs: [
      { name: "Golden Banquet Showcase Flex", specs: "16ft x 10ft • Starflex High-Gloss Printing", purpose: "Front road hoarding banner displaying grand interiors of the celebration hall." },
      { name: "Mini Map and Contact Card", specs: "3.5\" x 2.0\" • Rounded-Corner Die-Cut", purpose: "Given to party guests to easily navigate lorry parking yards." },
      { name: "Booking Price leaflet booklet", specs: "A5 Gatefold • 130 GSM Silk Finish", purpose: "Left on local business reception desks for wedding event consults." }
    ],
    toolsUsed: ["Adobe Photoshop Suite", "Figma Maps layout", "Color Palette Balance"]
  },
  {
    id: "prominance-upvc",
    name: "Prominance UPVC",
    company: "Prominance Window Systems Dealer",
    industry: "UPVC Windows & Doors",
    category: "commercial",
    deliverables: ["Dealer Visiting Card", "Marketing Banner", "Spec Notice"],
    bannerImage: "linear-gradient(135deg, #065f46, #064e3b)",
    accentColor: "#059669",
    textColor: "#D1FAE5",
    details: "Highly structured technical detail sheets, premium dealer cards, and promotional materials for weather-resistant windows.",
    tamilCopy: "மழை மற்றும் காற்று புகாத உயர்தர ஜன்னல்கள்.",
    tamilEnglish: "Mazhai matrum kaatru pugaadha uyarthara jannalgal.",
    challengeText: "UPVC systems are highly technical building products offering water-tight sealing, noise-cancellation, and fire resistance. The local dealer portfolio required marketing brochures that combine standard retail visual aesthetics with solid structural specifications, Dealer directories, and exact thickness metrics.",
    designStrategy: "We implemented an engineering-themed layout grid featuring clean outline icons, technical tabular specs, and fresh emerald green brand flags to establish immediate technical competence.",
    metrics: [
      { label: "Specs Fact Sheet size", value: "A4 Tri-Fold" },
      { label: "Local Trade Dealers Reached", value: "250+ Partners" },
      { label: "Dealer Sales Generated", value: "20% Monthly" }
    ],
    deliverableSpecs: [
      { name: "Specs Tri-fold Brochure", specs: "A4 Landscape Tri-Fold • 170 GSM Art-Paper", purpose: "Handed over to prospective residential construction consulting engineers." },
      { name: "Premium Dealer Card", specs: "3.5\" x 2.0\" • Double-Sided Silk Laminated", purpose: "Exclusive cards identifying the certified regional installation distributor." },
      { name: "Dealer Showroom Vinyl Flex", specs: "8ft x 6ft • Heavy Duty Matt Flex", purpose: "Dealer wall banner showing cross-sections of moisture-barrier frame joints." }
    ],
    toolsUsed: ["Adobe Illustrator Vector Layouts", "Blueprint Sheet Systems"]
  },
  {
    id: "wedding-invitation-media",
    name: "Wedding Invitations",
    company: "Freelance Creative",
    industry: "Wedding Media",
    category: "media",
    deliverables: ["Motion Wedding Invitation", "High-Energy Reels Edit", "Cinematic Cut"],
    bannerImage: "linear-gradient(135deg, #831843, #500724)",
    accentColor: "#EC4899",
    textColor: "#FCE7F3",
    details: "Vibrant traditional and modern motion invitations optimized for WhatsApp sharing and high-quality cinematic wedding clips as reels.",
    tamilCopy: "இனிய திருமண அழைப்பிதழ் மற்றும் வீடியோ பதிவுகள்.",
    tamilEnglish: "Iniya thirumana azhaippithazh matrum video padivugal.",
    challengeText: "Traditional wedding videos are often slow and lack cinematic modern appeal for younger couples. Wedding invitation videos must feel celebratory, grand, emotional, and fit perfectly into vertical vertical screen layouts without losing critical text (venue, time, names) behind app interfaces. The challenge lay in high-energy rhythm syncing with traditional woodwind (Nadaswaram) beats and maintaining vivid traditional colors (rose, vermillion, gold).",
    designStrategy: "Using high-energy motion graphic grids featuring gold typography, smooth slide-ins, and rose twilight colors, coupled with rhythmic, frame-by-frame synchronized edits.",
    metrics: [
      { label: "Invitations Shared", value: "10,000+ Chats" },
      { label: "Reels Viral Play rates", value: "65,000+ Plays" },
      { label: "Deliverable Turnaround", value: "48 Hours" }
    ],
    deliverableSpecs: [
      { name: "Motion Wedding Invite", specs: "1080 x 1920 px (9:16) • MP4 Format • High Bitrate", purpose: "Distributed via WhatsApp broadcast for direct, paperless wedding invites." },
      { name: "High-Energy Bridal Cut Reel", specs: "1080 x 1920 px • Synchronized Sound Design", purpose: "Instagram Reel highlight mapping the key bridal entrance events." },
      { name: "Cinematic Highlight Video File", specs: "1080 x 1920 px • Color-Graded cinematic logs", purpose: "Sent to relatives and wedding planners for premium memories storage." }
    ],
    toolsUsed: ["CapCut Studio Pro", "Figma Design Layouts", "Acoustic Tempo Sync"]
  }
];
