import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Full Stack",
    id: "fullstack",
  },
  {
    name: "Frontend",
    id: "frontend",
  },
  {
    name: "AI/ML",
    id: "ai",
  },
];

export const projects = [
  {
    name: "LinkSaver",
    image: p1,
    tags: ["fullstack", "website"],
    link: "https://linksaver.in",
    description: "A bookmarking and link organization platform designed to help users efficiently save, categorize, and search links and resources. Supports nested collections, tag-based search, multi-profile organization with drag and drop features & Google OAuth 2 authentication.",
    tech: ["Bun", "React", "Redux", "PostgreSQL", "GoLang", "Docker", "JWT"]
  },
  {
    name: "Cognize",
    image: p2,
    tags: ["fullstack", "website"],
    link: "https://cognize.live/",
    description: "A CRM application for freelancers with lead management, centralized storage, scraper-integrated APIs (<200ms latency), and a drag-and-drop UI for streamlined workflow management.",
    tech: ["Bun.js", "TypeScript", "Next.js", "Zustand", "GoLang", "PostgreSQL", "AWS"]
  },
  {
    name: "Picstone",
    image: p3,
    tags: ["ai", "fullstack", "website"],
    link: "https://picstone-generative-ai.vercel.app/",
    description: "An interactive storytelling platform using image analysis. With 180K+ event registrations, 9K+ users engaged, 80K+ views, and an average engagement time of 4 minutes and 42 seconds. Ranked top 5 in Generative AI hackathon.",
    tech: ["Flask", "React", "MySQL", "Google Auto Tagging"]
  },
  {
    name: "CustomCV",
    image: p4,
    tags: ["ai", "fullstack", "website"],
    link: "https://customcv.vercel.app/",
    description: "An AI-powered tool to create personalized cover letters tailored to each job application. Built with scalable class-based architecture.",
    tech: ["TypeScript", "MongoDB", "Node.js", "Express", "Flask", "AWS", "Framer"]
  },
  {
    name: "Pixisphere",
    image: p6,
    tags: ["frontend", "website"],
    link: "https://pixisphere-drab.vercel.app/",
    description: "A creative image manipulation and visualization platform.",
    tech: ["React", "Next.js", "TailwindCSS"]
  },
  {
    name: "Gemini Clone",
    image: p5,
    tags: ["ai", "frontend", "clone"],
    link: "https://gemini-clone-vert-ten.vercel.app/",
    description: "A functional clone of Google's Gemini AI interface with real-time chat capabilities.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS"]
  },
];

export const achievements = [
  {
    id: 1,
    year: 50,
    description: "PROJECTS<br />COMPLETED",
  },
  {
    id: 2,
    year: 2,
    description: "INTERNSHIPS<br />COMPLETED",
  },
  {
    id: 3,
    year: 35,
    description: "TECHNOLOGIES<br />MASTERED",
  },
  {
    id: 4,
    year: 180,
    description: " EVENT<br />REGISTRATIONS",
  },
];

export const experiences = [
  {
    id: 1,
    company: "CodeFeast",
    role: "Software Developer",
    period: "January 2026 - Current",
    location: "Remote",
    achievements: [
      "Building and maintaining scalable full-stack MERN applications, optimizing database schemas to deliver ~35% performance improvements",
      "Designing and operating RESTful microservices that handle 1,000+ daily user interactions with high reliability",
      "Automating deployments through CI/CD pipelines using Docker and AWS, improving release speed and deployment consistency"
    ]
  },
  {
    id: 2,
    company: "Qrios",
    role: "Frontend Developer",
    period: "September 2025 - December 2025",
    location: "Remote",
    achievements: [
      "Developed scalable, high-performance UIs using Next.js, ensuring responsiveness and fast load times across devices",
      "Implemented UI/UX feedback to improve design consistency, usability, and performance",
      "Collaborated with design team to translate Figma prototypes into pixel-perfect, functional interfaces"
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming & Development",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Vite", "TailwindCSS", "Zustand", "SCSS", "Optimistic Rendering"]
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "REST API", "MongoDB", "PostgreSQL", "MySQL", "SQL", "Prisma"]
  },
  {
    category: "Dev Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "CI/CD"]
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Hourly Rate",
    price: "$12",
    period: "hour",
    description: "Flexible hourly billing for ongoing projects and consultations",
    features: [
      "Pay only for hours worked",
      "Flexible scheduling",
      "Real-time progress updates",
      "Minimum 10 hours",
      "Weekly time reports",
      "Direct communication"
    ],
    featured: false,
    link: "#contact",
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Basic",
    price: "$500",
    period: "project",
    description: "Perfect for small projects and simple websites",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "1 revision round",
      "Email support"
    ],
    featured: false,
    link: "#contact",
    buttonText: "Get Started"
  },
  {
    id: 3,
    name: "Professional",
    price: "$1,500",
    period: "project",
    description: "Ideal for medium-sized projects with advanced features",
    features: [
      "Up to 15 pages",
      "Custom design",
      "Advanced SEO",
      "3 revision rounds",
      "Performance optimization",
      "Database integration",
      "Priority support"
    ],
    featured: true,
    link: "#contact",
    buttonText: "Get Started"
  },
  {
    id: 4,
    name: "Enterprise",
    price: "Custom",
    period: null,
    description: "Tailored solutions for large-scale applications",
    features: [
      "Unlimited pages",
      "Full-stack development",
      "Microservices architecture",
      "Unlimited revisions",
      "24/7 support",
      "CI/CD setup",
      "Cloud deployment",
      "Dedicated project manager"
    ],
    featured: false,
    link: "#contact",
    buttonText: "Contact Us"
  }
];
