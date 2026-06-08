export const siteContent = {
  meta: {
    title: "Full Stack Developer | Custom Web Applications & API Development",
    description: "One developer who handles your entire stack — from React frontends to Node.js backends. Clean code, clear communication, delivered on time. Get a free quote within 48 hours.",
  },
  
  hero: {
    headline: "Full-stack development without the agency overhead",
    subtext: "One developer who handles your entire stack — from React frontends to Node.js backends. Clean code, clear communication, delivered on time.",
    ctaPrimary: "Get a free quote",
    ctaSecondary: "View recent projects",
    techStack: [
      "React",
      "Vue",
      "Node.js",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Shopify",
      "AWS"
    ]
  },
  
  services: {
    heading: "What I build",
    subtext: "End-to-end solutions for teams that need reliable technical execution",
    items: [
      {
        id: "web-apps",
        icon: "Code2",
        title: "Custom web application development",
        description: "React, Vue, or vanilla JavaScript frontends paired with Node.js, Python, or PHP backends. Built for performance and maintainability.",
        useCase: "For: MVP launches, SaaS products"
      },
      {
        id: "api",
        icon: "Layers",
        title: "API design and integration",
        description: "RESTful services, third-party platform connections, and database architecture that scales with your business.",
        useCase: "For: Platform integrations, mobile app backends"
      },
      {
        id: "ecommerce",
        icon: "ShoppingCart",
        title: "E-commerce solutions",
        description: "Shopify customization, headless commerce builds, and payment gateway integration for seamless checkout experiences.",
        useCase: "For: Online stores, subscription services"
      },
      {
        id: "legacy",
        icon: "RefreshCw",
        title: "Legacy system modernization",
        description: "Migrate outdated codebases to current frameworks without losing functionality or data.",
        useCase: "For: System upgrades, tech debt reduction"
      },
      {
        id: "maintenance",
        icon: "Shield",
        title: "Ongoing maintenance and support",
        description: "Monthly retainers for updates, bug fixes, and performance optimization. Keep your application running smoothly.",
        useCase: "For: Post-launch support, continuous improvement"
      }
    ]
  },
  
  projects: {
    heading: "Recent work",
    subtext: "Real projects, real results",
    items: [
      {
        id: "fintech",
        title: "FinTech Dashboard Rebuild",
        problem: "Legacy jQuery application causing performance issues and blocking new feature development",
        solution: "Rebuilt frontend in React with TypeScript, integrated existing REST APIs, implemented real-time data updates with WebSockets",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
        results: "Page load time reduced by 73%, development velocity increased 3x",
        gradient: "from-slate-100 to-slate-200"
      },
      {
        id: "ecommerce",
        title: "Headless E-commerce Platform",
        problem: "Marketing agency needed custom Shopify storefront with complex product configurator",
        solution: "Built headless frontend with Next.js, connected to Shopify Storefront API, custom cart logic for bundle pricing",
        techStack: ["Next.js", "Shopify API", "Stripe", "Tailwind CSS"],
        results: "Launched in 6 weeks, handling 10K+ monthly transactions",
        gradient: "from-sky-100 to-blue-200"
      },
      {
        id: "healthcare",
        title: "Healthcare Appointment System",
        problem: "Clinic managing bookings through spreadsheets, needed HIPAA-compliant scheduling solution",
        solution: "Custom web app with patient portal, provider calendar sync, automated reminders via Twilio",
        techStack: ["Vue.js", "Python/Django", "PostgreSQL", "Twilio API"],
        results: "No-show rate decreased 45%, admin time saved 12 hours/week",
        gradient: "from-slate-100 to-sky-100"
      }
    ]
  },
  
  process: {
    heading: "How we'll work together",
    subtext: "A clear process from kickoff to deployment",
    steps: [
      {
        number: "01",
        title: "Discovery & scoping",
        description: "We'll discuss your requirements, technical constraints, and success metrics. You'll receive a detailed proposal with timeline and fixed-price quote within 48 hours.",
        duration: "1-3 days"
      },
      {
        number: "02",
        title: "Build & iterate",
        description: "Development in weekly sprints with Friday demos. You'll see working features in staging environment, provide feedback, and approve before moving forward.",
        duration: "2-8 weeks"
      },
      {
        number: "03",
        title: "Testing & refinement",
        description: "Comprehensive QA across devices and browsers, performance optimization, security audit, and final revisions based on your team's testing.",
        duration: "1 week"
      },
      {
        number: "04",
        title: "Launch & handoff",
        description: "Deployment to production, DNS configuration, monitoring setup, and complete documentation. Optional training session for your team.",
        duration: "2-3 days"
      }
    ]
  },
  
  about: {
    heading: "Why freelance instead of an agency",
    narrative: [
      "I've spent 8 years building web applications — 5 at a venture-backed SaaS company, 3 as an independent developer. I've seen how agency overhead slows projects down: account managers who don't code, designers who don't understand technical constraints, and developers who never talk to clients.",
      "Working directly with me means faster decisions, consistent code quality, and someone who actually remembers your project context from week to week. No handoffs, no miscommunication, just clean code delivered on time."
    ],
    expertise: {
      core: {
        title: "Core Technologies",
        items: [
          "Frontend: React, Vue.js, TypeScript, Tailwind CSS",
          "Backend: Node.js, Python/Django, PHP/Laravel",
          "Database: PostgreSQL, MongoDB, MySQL",
          "Infrastructure: AWS, Vercel, DigitalOcean, Docker"
        ]
      },
      specializations: {
        title: "Specializations",
        items: [
          "API design and third-party integrations",
          "E-commerce (Shopify, WooCommerce, custom)",
          "Payment processing (Stripe, PayPal)",
          "Real-time features (WebSockets, Server-Sent Events)"
        ]
      },
      experience: {
        title: "Experience",
        items: [
          "8 years full-stack development",
          "40+ projects delivered",
          "Industries: FinTech, Healthcare, E-commerce, SaaS"
        ]
      }
    }
  },
  
  contact: {
    heading: "Let's discuss your project",
    subtext: "Free consultation and quote within 48 hours",
    form: {
      fields: {
        name: {
          label: "Name",
          placeholder: "Your name",
          required: true
        },
        email: {
          label: "Email",
          placeholder: "you@company.com",
          required: true
        },
        company: {
          label: "Company/Project Name",
          placeholder: "Optional",
          required: false
        },
        details: {
          label: "Project Details",
          placeholder: "Describe what you need built, key features, and any technical requirements...",
          required: true
        },
        timeline: {
          label: "Timeline",
          options: [
            "ASAP (1-2 weeks)",
            "Flexible (1-2 months)",
            "Planning phase (3+ months)"
          ],
          required: true
        },
        budget: {
          label: "Budget Range",
          options: [
            "$5K - $10K",
            "$10K - $25K",
            "$25K - $50K",
            "$50K+"
          ],
          required: true
        }
      },
      submitText: "Send inquiry"
    }
  },
  
  footer: {
    tagline: "Full-stack development without the agency overhead",
    copyright: `© ${new Date().getFullYear()} Full Stack Developer. All rights reserved.`,
    links: [
      { text: "Services", href: "#services" },
      { text: "Projects", href: "#projects" },
      { text: "Process", href: "#process" },
      { text: "About", href: "#about" },
      { text: "Contact", href: "#contact" }
    ]
  }
} as const;

export type SiteContent = typeof siteContent;
