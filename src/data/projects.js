export const projects = [
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation Platform",
    shortDescription: "Custom WhatsApp Business automation with AI-powered conversational flows.",
    fullDescription: "WhatsMojo is a first-to-market WhatsApp Business automation platform in Germany, purpose-built for e-commerce brands. The platform enables merchants to automate customer conversations at scale, recover abandoned carts through timely reminders, and drive repeat purchases with personalized messaging flows. It integrates seamlessly with Shopify and Klaviyo, turning WhatsApp into a high-converting sales channel.",
    challenge: "E-commerce brands were struggling to scale their customer communication on WhatsApp without hiring additional support staff. Manual responses were taking hours daily, cart abandonment rates were high, and there was no way to leverage WhatsApp's 98% open rate for marketing automation in the German market.",
    solution: "Developed WhatsMojo — a complete WhatsApp Business API platform with a visual flow builder, automated cart recovery sequences, and AI-powered conversation handling. The system integrates directly with Shopify for real-time order data and Klaviyo for unified customer profiles. Features include broadcast campaigns, interactive product catalogs, and automated support responses.",
    results: [
      "€2M+ revenue generated",
      "2x returning customer rate",
      "85% reduction in support time",
      "First-to-market in Germany"
    ],
    tags: ["WhatsApp API", "Node.js", "Klaviyo", "AI"],
    category: "Custom Software",
    url: "https://whatsmojo.com",
    isOwnProject: true,
    images: {
      thumbnail: "/images/projects/whatsapp-chat.png",
      hero: "/images/projects/whatsapp-dashboard.png",
      gallery: [
        "/images/projects/whatsapp-chat.png",
        "/images/projects/whatsapp-dashboard.png",
        "/images/projects/whatsapp-flow.png"
      ]
    },
    size: "wide",
    year: "2024"
  },
  {
    slug: "time-tracking-system",
    title: "Time Tracking System",
    shortDescription: "Complete employee management with automated payroll integration.",
    fullDescription: "A comprehensive time tracking and workforce management system built for an agency with 50+ employees across multiple locations. The platform handles everything from clock-in/out via mobile and desktop, project-based time allocation, task management, to automated timesheet approval workflows. Real-time dashboards give managers instant visibility into team productivity, billable hours, and project profitability.",
    challenge: "The agency was drowning in spreadsheets — tracking hours for 50+ employees across dozens of client projects was error-prone and time-consuming. Payroll took days to process, disputes were common, and project managers had no real-time visibility into whether projects were on budget. The existing off-the-shelf solutions couldn't handle their complex billing rules and approval workflows.",
    solution: "Built a custom time tracking platform with React and Node.js that mirrors their actual workflow. Employees clock in via a mobile app with GPS verification or through the web dashboard. Time entries are automatically categorized by project and task, flow through customizable approval chains, and sync directly with their payroll provider via API. Added detailed analytics for project profitability, employee utilization, and overtime tracking.",
    results: [
      "15 hrs/week saved",
      "100% team adoption",
      "Zero payroll errors",
      "Real-time project insights"
    ],
    tags: ["React", "PostgreSQL", "Node.js", "Mobile"],
    category: "Internal Tools",
    client: "CAPULET GmbH",
    clientUrl: "https://capulet.de",
    images: {
      thumbnail: "/images/projects/timetracking-dashboard.png",
      hero: "/images/projects/timetracking-reports.png",
      gallery: [
        "/images/projects/timetracking-dashboard.png",
        "/images/projects/timetracking-reports.png",
        "/images/projects/timetracking-tasks.png"
      ]
    },
    size: "wide",
    year: "2023"
  },
  {
    slug: "headless-shopify",
    title: "Headless Shopify Store",
    shortDescription: "Lightning-fast e-commerce with custom checkout and personalization.",
    fullDescription: "Toothpaste Drops is a sustainable oral care brand that needed a premium e-commerce experience to match their innovative product. We rebuilt their entire Shopify store as a headless architecture using Next.js, delivering sub-second page loads, smooth animations, and a checkout experience optimized for conversion. The site features a subscription management system, personalized product recommendations, and detailed sustainability storytelling.",
    challenge: "The existing Shopify theme couldn't deliver the premium, fast experience the brand needed. Page loads were slow, mobile performance was poor, and there was no way to implement the custom subscription flow and interactive product configurator the brand envisioned. Conversion rates were suffering, especially on mobile devices.",
    solution: "Built a fully custom headless storefront with Next.js deployed on Vercel's edge network. Implemented Shopify's Storefront API with GraphQL for real-time inventory and pricing, added a custom subscription system with flexible delivery schedules, and created an interactive product quiz that recommends the perfect oral care routine. The site uses advanced image optimization and predictive prefetching for instant page transitions.",
    results: [
      "50% faster page loads",
      "25% conversion increase",
      "40% lower bounce rate",
      "Seamless mobile experience"
    ],
    tags: ["Next.js", "Shopify API", "GraphQL", "Vercel"],
    category: "E-commerce",
    url: "https://toothpastedrops.com",
    isOwnProject: true,
    images: {
      thumbnail: "/images/projects/shopify-hero.png",
      hero: "/images/projects/shopify-product.png",
      gallery: [
        "/images/projects/shopify-hero.png",
        "/images/projects/shopify-product.png",
        "/images/projects/shopify-sustainability.png"
      ]
    },
    size: "wide",
    year: "2024"
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation Suite",
    shortDescription: "Automated campaign management with custom attribution and optimization.",
    fullDescription: "A comprehensive marketing automation platform built for performance marketers managing high-volume Facebook ad campaigns. The system consolidates campaign management, automated comment moderation, rule-based optimization, and cross-account analytics into a single dashboard. It handles €100k+ daily ad spend across multiple ad accounts, with features for automated bid adjustments, creative performance tracking, and real-time profitability reporting.",
    challenge: "The marketing team was managing dozens of Facebook ad campaigns across multiple ad accounts, spending hours daily on repetitive tasks: moderating comments, adjusting bids, killing underperforming ads, and compiling reports in spreadsheets. Facebook's native tools couldn't provide the cross-account visibility or automation rules they needed. Comment sections were being overrun with spam and negative comments that hurt ad performance.",
    solution: "Built a centralized command center that connects to the Facebook Marketing API for unified campaign management. Implemented automated comment moderation with keyword filtering and auto-responses to common questions. Added a powerful rule engine that automatically pauses ads based on CPA thresholds, scales winners, and sends Slack alerts. The analytics dashboard provides real-time P&L across all campaigns with custom attribution windows and creative-level performance breakdowns.",
    results: [
      "€100k+ daily spend managed",
      "30% improvement in ROAS",
      "Automated bid optimization",
      "Real-time cross-channel analytics"
    ],
    tags: ["Meta API", "Python", "Analytics", "Automation"],
    category: "AdTech",
    isOwnProject: true,
    images: {
      thumbnail: "/images/projects/marketing-automation-dashboard.png",
      hero: "/images/projects/marketing-automation-dashboard.png",
      gallery: [
        "/images/projects/marketing-automation-dashboard.png",
        "/images/projects/marketing-automation-analytics.png",
        "/images/projects/marketing-automation-autoresponse.png"
      ]
    },
    size: "tall",
    year: "2023"
  },
  {
    slug: "blitz-landing-page",
    title: "Lead Generation Landing Page",
    shortDescription: "High-converting landing page for Partnership Ads campaigns.",
    fullDescription: "A comprehensive lead generation landing page for Blitz Growth, a performance marketing agency specializing in Partnership Ads that outperform standard Meta benchmarks by 2-3x. The page is designed to convert cold ad traffic into booked calls, featuring video testimonials, client results, a detailed FAQ section, and multiple strategically placed CTAs throughout the user journey.",
    challenge: "Blitz Growth needed a high-converting landing page for their Meta ad campaigns promoting Partnership Ads services. The page needed to educate prospects on a relatively new advertising approach, build trust quickly, and drive calendar bookings — all while handling high-volume paid traffic with excellent page speed.",
    solution: "Built a content-rich landing page with React, TypeScript, and Vite for blazing-fast performance. Implemented smooth scroll animations with Framer Motion, embedded video testimonials for social proof, and added UTM parameter tracking that automatically appends to all Calendly booking links. The page includes comparison sections, process breakdowns, client results with specific metrics, and an FAQ section to address objections.",
    results: [
      "Optimized for conversions",
      "Video testimonials",
      "UTM tracking integration",
      "Framer Motion animations"
    ],
    tags: ["React", "TypeScript", "Vite", "Framer Motion"],
    category: "Landing Page",
    client: "Blitz Growth",
    clientUrl: "https://blitz-growth.com",
    url: "https://info.blitz-growth.com",
    images: {
      thumbnail: "/images/projects/blitz-landing-hero.png",
      hero: "/images/projects/blitz-landing-hero.png",
      gallery: [
        "/images/projects/blitz-landing-hero.png",
        "/images/projects/blitz-landing-form.png",
        "/images/projects/blitz-landing-features.png"
      ]
    },
    size: "standard",
    year: "2024"
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
