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
    name: "Dashboard",
    id: "dashboard",
  },
  {
    name: "Website",
    id: "website",
  },
  {
    name: "Clone",
    id: "clone",
  },
];

export const projects = [
  {
    name: "LinkSaver",
    image: p1,
    tags: ["website"],
    link: "https://linksaver.in",
  },
  {
    name: "Cognize",
    image: p2,
    tags: [ "website"],
    link: "https://cognize.live/",
  },
  {
    name: "Picstone",
    image: p3,
    tags: ["website"],
    link: "https://picstone-generative-ai.vercel.app/",
  },{
    name: "CustomCV",
    image: p4,
    tags: ["website"],
    link: "https://customcv.vercel.app/",
  },
  {
    name: "Pixisphere",
    image: p6,
    tags: ["website"],
    link: "https://pixisphere-drab.vercel.app/",
  },
  
  {
    name: "Gemini-Clone",
    image: p5,
    tags: ["website", "clone"],
    link: "https://gemini-clone-vert-ten.vercel.app/",
  },
];

export const achievements = [
  {
    id: 1,
    year: 50,
    description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
  },
  {
    id: 2,
    year: 6,
    description: "MONTHS OF<br />EXPERIENCE <br /> ",
  },
  {
    id: 3,
    year: 15,
    description: "TECHNOLOGIES",
  },
  {
    id: 4,
    year: 10,
    description: "COMMUNITY<br />POSTS",
  },
];
