import { useEffect } from 'react';
import { projects } from '../data';

const SEO = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rohit Chand",
      "jobTitle": "Full-Stack Developer",
      "url": "https://rohitchand.dev",
      "email": "rohitchand.work@gmail.com",
      "telephone": "+91-9958896911",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Information Technology, Sonepat",
        "sameAs": "https://iiitsonepat.ac.in"
      },
      "knowsAbout": [
        "Full-Stack Development",
        "MERN Stack",
        "React.js",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Web Development",
        "Software Engineering",
        "Frontend Development",
        "Backend Development",
        "Database Management",
        "UI/UX Design"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "CodeFeast"
      },
      "sameAs": [
        "https://github.com/rohitchand",
        "https://linkedin.com/in/rohitchand"
      ],
      "description": "Full-stack developer specializing in MERN stack, React, Next.js, and modern web technologies. Building scalable applications with 50+ projects completed."
    };

    const portfolioData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Rohit Chand Portfolio",
      "description": "Portfolio showcasing full-stack development projects, skills, and experience",
      "creator": {
        "@type": "Person",
        "name": "Rohit Chand"
      },
      "about": {
        "@type": "Thing",
        "name": "Web Development Portfolio"
      }
    };

    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Rohit Chand Portfolio",
      "url": "https://rohitchand.dev",
      "author": {
        "@type": "Person",
        "name": "Rohit Chand"
      },
      "description": "Full-stack developer portfolio showcasing projects, skills, and experience"
    };

    const projectItems = projects.map(project => ({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": project.name,
      "description": project.description,
      "url": project.link,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }));

    const scripts = [
      { data: structuredData, id: 'person-schema' },
      { data: portfolioData, id: 'portfolio-schema' },
      { data: websiteData, id: 'website-schema' },
      ...projectItems.map((item, idx) => ({ data: item, id: `project-schema-${idx}` }))
    ];

    scripts.forEach(({ data, id }) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });

    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default SEO;
