export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ERP Solutions", href: "/services/erp-implementation" },
  { label: "Automation", href: "/services/business-automation" },
  { label: "Websites & Pricing", href: "/websites" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    slug: "business-consulting",
    number: "01",
    label: "Business consulting",
    eyebrow: "Operational clarity",
    title: "Better business decisions begin with better systems.",
    summary: "Practical advice on the workflows, costs, reporting and accountabilities that shape your daily performance.",
    intro: "We combine real business ownership with technology experience to help you make operations more measurable, efficient and manageable. The aim is not more complexity — it is a business that runs with clarity.",
    focus: [
      "Business process reviews and improvement roadmaps",
      "Sales pipeline management, conversion and follow-up discipline",
      "Costing, stock-flow and operational performance reviews",
      "Management dashboards, KPIs and practical reporting",
      "Roles, responsibility, approval processes and accountability",
      "Systems strategy and digital transformation planning"
    ],
    outcomes: [
      "Identify and eliminate recurring operational bottlenecks",
      "Equip managers with reliable information and expectations",
      "Improve control without increasing unnecessary administration"
    ],
    industries: "Growing businesses, manufacturers, distributors, service providers and owner-managed companies.",
    steps: ["Understand", "Improve", "Measure"]
  },
  {
    slug: "erp-implementation",
    number: "02",
    label: "ERP implementation",
    eyebrow: "Connected business systems",
    title: "One integrated view of your business.",
    summary: "ERP evaluation, configuration and implementation, including Odoo and other suitable software platforms.",
    intro: "We help you select and implement systems that reflect how your business actually works. Our approach begins with business processes and a realistic scope, not with buying software. We have substantial practical Odoo experience, while operating as an independent consultant rather than an official Odoo Partner.",
    focus: [
      "ERP readiness review and independent software recommendations",
      "Odoo functional consulting, configuration and implementation",
      "Accounting, sales, CRM, purchasing and inventory workflows",
      "Manufacturing, bills of materials, product variants and production",
      "Project costing, multi-company processes and reporting",
      "Data migration planning, training, testing and phased go-live"
    ],
    outcomes: [
      "Replace duplicated data and disconnected processes",
      "Understand stock, jobs, costs and sales in one operational picture",
      "Introduce systems at a pace your staff can adopt"
    ],
    industries: "Manufacturing, fabrication, wholesale, distribution, retail and multi-function service businesses.",
    steps: ["Assess & select", "Prove the process", "Implement & support"]
  },
  {
    slug: "business-automation",
    number: "03",
    label: "Business automation",
    eyebrow: "Workflows that connect",
    title: "Less repetition. More productive work.",
    summary: "Automated processes and software integrations that help your teams move information without re-entering it.",
    intro: "From the first online enquiry through to orders, invoices and manufacturing, disconnected systems slow businesses down. We map your workflows and deliver pragmatic automations with clear controls and sensible exception handling.",
    focus: [
      "Business process mapping and automation planning",
      "ERP, e-commerce and third-party software integrations",
      "Shopify-to-ERP order, invoicing and production workflows",
      "CRM leads, quoting, reminders and customer follow-ups",
      "Custom forms, customer portals and digital workflows",
      "API integration requirements, testing and technical coordination"
    ],
    outcomes: [
      "Reduce manual entry and prevent avoidable mistakes",
      "Speed up enquiry-to-order and order-to-delivery",
      "Give staff more time for customer and operational work"
    ],
    industries: "Businesses with multiple software systems, web sales channels, high transaction volume or repetitive admin.",
    steps: ["Map the workflow", "Connect systems", "Test & improve"]
  }
];

export const packages = [
  {
    name: "Starter Website",
    price: "R1,000",
    line: "A professional digital starting point.",
    ideal: "Small businesses that need a clear, affordable online presence.",
    details: [
      "One professionally designed, mobile-friendly page",
      "Business overview, services and contact details",
      "Clickable WhatsApp contact and social media profile links",
      "Clear enquiry call-to-action",
      "One round of revisions"
    ],
    note: "Client supplies the wording, logo and photographs. Domain and hosting are separate.",
    highlighted: false
  },
  {
    name: "Business Website",
    price: "R3,000",
    line: "A complete home for your business online.",
    ideal: "Established businesses with several services or areas of expertise.",
    details: [
      "Up to five separate, professionally designed pages",
      "Mobile-responsive navigation and layouts",
      "Links to relevant social media profiles",
      "Basic SEO setup (page titles, descriptions and search visibility settings)",
      "Contact/enquiry form with an agreed delivery email",
      "Two rounds of revisions"
    ],
    note: "Client supplies business content and images. Additional pages and copywriting are quoted separately.",
    highlighted: true
  },
  {
    name: "Business Plus Website",
    price: "R5,000",
    line: "A more capable business website.",
    ideal: "Businesses that need more than an online brochure.",
    details: [
      "Professional multi-page business website",
      "Mobile-friendly layout, social profile links and basic SEO",
      "Contact and enquiry functionality",
      "One simple interactive feature agreed before development",
      "Examples: enhanced enquiry form, a small searchable listing or embedded booking tool",
      "Two rounds of revisions"
    ],
    note: "From R5,000 for an agreed starter scope. Custom portals, automated social posting, payments, ERP integrations and substantial custom development are quoted separately.",
    highlighted: false
  }
];

export const projects = [
  {
    name: "TownHub South Africa",
    type: "Community platform",
    url: "https://townhub.co.za",
    domain: "townhub.co.za",
    description: "A multi-town digital platform for local businesses, tourism, services, events and community issue reporting.",
    tags: ["Web platform", "Directories", "Community reporting"]
  },
  {
    name: "N9 Karoo Retreat",
    type: "Hospitality website",
    url: "https://n9karooretreat.odoo.com",
    domain: "n9karooretreat.odoo.com",
    description: "A dedicated accommodation website presenting farm stays, a caravan stop and an Aberdeen town cottage.",
    tags: ["Multi-page website", "Hospitality", "Enquiries"]
  },
  {
    name: "Aberdeen Self Catering",
    type: "Accommodation website",
    url: "https://aberdeenselfcatering.odoo.com",
    domain: "aberdeenselfcatering.odoo.com",
    description: "An accommodation-focused website with rooms, amenities and local travel information.",
    tags: ["Odoo Website", "Accommodation", "Local discovery"]
  },
  {
    name: "New Designs",
    type: "Professional practice website",
    url: "https://newdesigns.co.za",
    domain: "newdesigns.co.za",
    description: "An architectural practice website designed around professional credibility, services and project information.",
    tags: ["Professional services", "Multi-page website", "Digital presence"]
  }
];

export const industries = [
  {
    label: "Manufacturing & Fabrication",
    summary: "Complex product variants, BOMs, manufacturing orders, stock movement, job costing and factory information."
  },
  {
    label: "Wholesale & Distribution",
    summary: "Trade account workflows, quotes, pipeline follow-up, stock control, purchasing and fulfilment."
  },
  {
    label: "Retail & E-commerce",
    summary: "Product and customer information, online sales, stock visibility and connected transaction workflows."
  },
  {
    label: "Professional Services",
    summary: "Projects, budgets, fee calculation, reporting, client processes and digital presence."
  },
  {
    label: "Tourism & Hospitality",
    summary: "Accommodation websites, enquiries, guest information, local activities and business systems."
  },
  {
    label: "Communities & Organisations",
    summary: "Directory platforms, portals, issue reporting, local publishing and service information."
  }
];

export const credentials = [
  { figure: "1988", title: "Hands-on business management", description: "Experience in accounting, administration, operational processes and running businesses." },
  { figure: "2010", title: "Working with Odoo", description: "Real-world ERP use and practical operations across interconnected departments." },
  { figure: "10,000+", title: "Complex product variants", description: "Experience designing and managing large manufacturing product structures." }
];
