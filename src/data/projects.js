export const projects = [
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation Platform",
    shortDescription: "Custom WhatsApp Business automation with AI-powered conversational flows.",
    fullDescription: "Built a first-to-market WhatsApp Business automation platform in Germany, enabling brands to automate customer conversations, recover abandoned carts, and drive repeat purchases through personalized messaging flows.",
    challenge: "The client needed to scale their customer communication without hiring more support staff. Manual WhatsApp responses were taking hours daily, and cart abandonment was causing significant revenue loss.",
    solution: "Developed a custom automation platform that integrates WhatsApp Business API with their e-commerce stack. Implemented AI-powered conversation flows that handle common queries, send personalized product recommendations, and automatically follow up on abandoned carts.",
    results: [
      "€2M+ revenue generated",
      "2x returning customer rate",
      "85% reduction in support time",
      "First-to-market in Germany"
    ],
    tags: ["WhatsApp API", "Node.js", "Klaviyo", "AI"],
    category: "Custom Software",
    images: {
      thumbnail: null, // Add: "/images/projects/whatsapp-thumb.jpg"
      hero: null, // Add: "/images/projects/whatsapp-hero.jpg"
      gallery: []
    },
    size: "tall",
    year: "2024"
  },
  {
    slug: "time-tracking-system",
    title: "Time Tracking System",
    shortDescription: "Complete employee management with automated payroll integration.",
    fullDescription: "A comprehensive time tracking and employee management system built for a growing team. Features include clock-in/out via mobile, task assignment, project time allocation, and seamless integration with payroll systems.",
    challenge: "The company was using spreadsheets to track employee hours, leading to payroll errors and disputes. Project managers had no visibility into time spent on different clients.",
    solution: "Built a custom web and mobile application for time tracking with real-time dashboards. Integrated directly with their payroll provider API to eliminate manual data entry and reduce errors.",
    results: [
      "15 hrs/week saved",
      "100% team adoption",
      "Zero payroll errors",
      "Real-time project insights"
    ],
    tags: ["React", "PostgreSQL", "Node.js", "Mobile"],
    category: "Internal Tools",
    images: {
      thumbnail: null,
      hero: null,
      gallery: []
    },
    size: "wide",
    year: "2023"
  },
  {
    slug: "headless-shopify",
    title: "Headless Shopify Store",
    shortDescription: "Lightning-fast e-commerce with custom checkout and personalization.",
    fullDescription: "Rebuilt a high-traffic Shopify store as a headless architecture using Next.js. The new platform delivers sub-second page loads, personalized product recommendations, and a streamlined checkout experience.",
    challenge: "The existing Shopify theme was slow and couldn't support the advanced personalization features the brand needed. Mobile conversion rates were suffering due to poor performance.",
    solution: "Migrated to a headless architecture with Next.js on the frontend and Shopify as the backend. Implemented edge caching, image optimization, and a custom recommendation engine based on browsing behavior.",
    results: [
      "50% faster page loads",
      "25% conversion increase",
      "40% lower bounce rate",
      "Seamless mobile experience"
    ],
    tags: ["Next.js", "Shopify API", "GraphQL", "Vercel"],
    category: "E-commerce",
    images: {
      thumbnail: null,
      hero: null,
      gallery: []
    },
    size: "square",
    year: "2024"
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation Suite",
    shortDescription: "Automated campaign management with custom attribution and optimization.",
    fullDescription: "An end-to-end marketing automation platform that manages €100k+ daily ad spend across multiple channels. Features custom attribution modeling, automated bid optimization, and creative testing frameworks.",
    challenge: "Managing large-scale ad campaigns across Meta, Google, and TikTok was consuming the entire marketing team's time. Attribution was broken, and there was no systematic way to test creatives.",
    solution: "Built a centralized platform that connects to all ad platform APIs, implements custom attribution logic, and automates bid adjustments based on performance data. Added a creative testing framework with statistical significance calculations.",
    results: [
      "€100k+ daily spend managed",
      "30% improvement in ROAS",
      "Automated bid optimization",
      "Real-time cross-channel analytics"
    ],
    tags: ["Meta API", "Python", "Analytics", "Automation"],
    category: "AdTech",
    images: {
      thumbnail: null,
      hero: null,
      gallery: []
    },
    size: "tall",
    year: "2023"
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

export function getAllSlugs() {
  return projects.map(p => p.slug);
}

export function getNextProject(currentSlug) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}

export function getPrevProject(currentSlug) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex];
}
