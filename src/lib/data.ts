// Central content store. Swap placeholder copy for real data as it becomes available —
// components read from here, so this is the only file most future edits need to touch.

export const profile = {
  name: "Aryan Arora",
  handle: "@aryanaroras",
  tagline: "Silent in the Network. Autonomous in the Air.",
  taglineLines: ["Silent in the Network.", "Autonomous in the Air."],
  email: "aryanarora.contact@gmail.com",
  instagram: "https://instagram.com/aryanaroras",
  tags: [
    "FPV · Cinewhoop",
    "Long Range",
    "AI · ML",
    "Neural Systems",
    "Zero Footprint",
    "Stealth Ops",
    "Autonomous Link",
    "Aerial Ops",
  ],
  statusBar: [
    { label: "stealth", value: "online" },
    { label: "ai core", value: "active" },
    { label: "threat", value: "null" },
    { label: "build", value: "v.24" },
  ],
};

export const navLinks = [
  { label: "Systems", href: "#skills" },
  { label: "Operations", href: "#projects" },
  { label: "Crafted Dreams", href: "#crafted-dreams" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export type SkillTile = {
  title: string;
  description: string;
  span?: "col-span-2" | "row-span-2" | "col-span-2 row-span-2";
  category: "security" | "dev" | "ai" | "aerial";
};

export const skills: SkillTile[] = [
  {
    title: "VAPT",
    description:
      "Vulnerability assessment & penetration testing across web apps, APIs, and internal networks — recon, exploitation, and reporting that a client can actually act on.",
    span: "col-span-2 row-span-2",
    category: "security",
  },
  {
    title: "MERN Stack",
    description: "MongoDB, Express, React, Node — end to end, production-shaped.",
    category: "dev",
  },
  {
    title: "Network Security",
    description: "Traffic analysis, hardening, zero-trust routing.",
    category: "security",
  },
  {
    title: "AI / ML",
    description: "Model training, inference pipelines, applied neural systems.",
    span: "col-span-2",
    category: "ai",
  },
  {
    title: "Autonomous Flight",
    description: "FPV cinewhoop & long-range builds, tuned for stability and reach.",
    category: "aerial",
  },
  {
    title: "Burp Suite / Recon Tooling",
    description: "Proxy, repeater, decoder — daily driver toolkit for offensive testing.",
    category: "security",
  },
  {
    title: "Computer Vision",
    description: "Object tracking and stabilization for aerial footage in real time.",
    span: "col-span-2",
    category: "ai",
  },
  {
    title: "REST & Realtime APIs",
    description: "Node/Express services, WebSocket telemetry streams.",
    category: "dev",
  },
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  status: "operational" | "in field" | "archived";
};

export const projects: Project[] = [
  {
    title: "Ghost Mesh",
    summary: "Encrypted telemetry relay for long-range FPV links.",
    description:
      "A low-latency relay layer for FPV telemetry that keeps a link alive well past line-of-sight, with encrypted handshakes and automatic failover between radio and cellular uplink.",
    tags: ["FPV", "Long Range", "Node.js", "Encryption"],
    status: "in field",
  },
  {
    title: "NullPoint",
    summary: "Internal VAPT toolkit for repeatable engagement workflows.",
    description:
      "A recon-to-report pipeline that wraps common offensive tooling into one workflow — target scoping, automated enumeration, and a report generator that turns raw findings into client-ready deliverables.",
    tags: ["VAPT", "Python", "Automation", "Security"],
    status: "operational",
  },
  {
    title: "Cinewhoop Vision",
    summary: "Real-time subject tracking for stabilized aerial footage.",
    description:
      "An onboard-assisted computer vision layer that locks onto a subject mid-flight and feeds correction data back into the flight controller loop for smoother, more intentional cinematic passes.",
    tags: ["Computer Vision", "AI/ML", "FPV", "Python"],
    status: "in field",
  },
  {
    title: "Threat // Null",
    summary: "MERN dashboard for live network anomaly monitoring.",
    description:
      "A MongoDB/Express/React/Node dashboard that ingests network traffic in real time, flags anomalies against a baseline, and surfaces them before they become incidents.",
    tags: ["MERN", "MongoDB", "React", "Security"],
    status: "operational",
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  size?: "tall" | "normal";
};

export const blogPosts: BlogPost[] = [
  {
    title: "Ghost in the Mesh: Auditing Zero-Trust Drone Telemetry Links",
    excerpt:
      "What actually happens when you point a packet analyzer at your own FPV uplink — and what it takes to close the gaps you find.",
    tag: "Network Security",
    readTime: "9 min",
    size: "tall",
  },
  {
    title: "Cinewhoop at 120km/h: Stabilizing Neural Object Tracking Mid-Flight",
    excerpt:
      "Feeding computer-vision correction data back into a flight controller loop without introducing lag that shows up on camera.",
    tag: "Computer Vision",
    readTime: "6 min",
  },
  {
    title: "Scaling MERN Under Load: Lessons From a 50k-Node Ingestion Pipeline",
    excerpt:
      "Where MongoDB indexes stop saving you, where Express middleware becomes the bottleneck, and what finally fixed it.",
    tag: "MERN",
    readTime: "8 min",
  },
  {
    title: "Red Team Diaries: Breaking My Own Auth Layer Before Someone Else Does",
    excerpt:
      "A walkthrough of stress-testing a session/auth flow with the same toolkit used on client engagements.",
    tag: "VAPT",
    readTime: "7 min",
    size: "tall",
  },
  {
    title: "Long Range, Low Footprint: Building a Link That Doesn't Announce Itself",
    excerpt:
      "Notes on keeping an aerial link both far-reaching and quiet on spectrum analysis.",
    tag: "FPV",
    readTime: "5 min",
  },
];

export const craftedDreams = {
  name: "Crafted Dreams",
  tagline: "Where technical precision meets artistic craft.",
  description:
    "A venture built on the same discipline as the engineering side of things — just pointed at a different canvas. Crafted Dreams is where careful, deliberate work becomes something you can hold.",
  cta: "Explore the craft",
};
