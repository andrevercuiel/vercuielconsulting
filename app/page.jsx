import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveUpRight, Workflow, Globe2, Blocks, Compass, ChartNoAxesCombined } from "lucide-react";
import { services, projects, credentials } from "@/lib/content";
import { CTA, Eyebrow, SectionHead, ServiceCard, PrimaryLink, TextLink } from "@/components/Elements";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <Eyebrow light>Independent business & technology consulting</Eyebrow>
            <h1>Make your business <em>work better.</em></h1>
            <p className="hero-lead">Practical consulting, integrated ERP systems, smart automation and professional websites — built around the way your business really works.</p>
            <div className="hero-actions">
              <PrimaryLink href="/services">Explore our services</PrimaryLink>
              <Link className="button button-outline" href="/contact">Discuss your business <ArrowUpRight size={17}/></Link>
            </div>
            <div className="hero-support"><span className="tiny-dot"/> South African business experience since 1988 <span className="hero-support-divider"/> Independent software advice</div>
          </div>
          <div className="hero-visual" aria-label="Business functions connected in one intelligent system">
            <div className="visual-top"><span className="visual-kicker">BUSINESS CONNECTED</span><span className="visual-status"><i/> Systems in sync</span></div>
            <div className="visual-center"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-core"><span className="visual-core-icon"><Blocks size={30}/></span><strong>One clearer<br/>business picture</strong></div>
              <div className="visual-tile tile-sales"><ChartNoAxesCombined size={18}/><span>Sales & CRM</span></div>
              <div className="visual-tile tile-erp"><Blocks size={18}/><span>ERP & Operations</span></div>
              <div className="visual-tile tile-web"><Globe2 size={18}/><span>Web & Portals</span></div>
              <div className="visual-tile tile-auto"><Workflow size={18}/><span>Automation</span></div>
            </div>
            <div className="visual-bottom"><span>Clarity</span><span>Control</span><span>Growth</span></div>
          </div>
        </div>
      </section>

      <div className="cred-strip"><div className="container cred-strip-inner">
        {credentials.map((item) => <div className="cred-item" key={item.figure}><strong>{item.figure}</strong><div><span>{item.title}</span><small>{item.description}</small></div></div>)}
      </div></div>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we do" title="Business understanding first. Technology second." description="From one troublesome process to a complete systems overhaul, we work where business operations and technology meet."/>
          <div className="service-grid">
            {services.map((item) => <ServiceCard item={item} key={item.slug}/>)}
            <Link className="service-card service-card-highlight" href="/websites">
              <div className="service-card-top"><span className="service-number">04 / SERVICE</span><span className="circle-arrow"><MoveUpRight size={20}/></span></div>
              <div><h3>Websites & digital platforms</h3><p>Modern multi-page websites, connected enquiries, customer experiences and practical digital tools.</p></div>
              <span className="service-card-bottom">Packages from R1,000 <ArrowRight size={17}/></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container split-feature">
          <div className="split-feature-left"><Eyebrow>Why Vercuiel Consulting</Eyebrow><h2>Built on experience of actually running a business.</h2><p>Since 1988, business operations, administration and accounting have been part of our work. Since 2010, integrated ERP systems have helped us bring sales, manufacturing, inventory, accounting and reporting together.</p><TextLink href="/about">More about our approach</TextLink></div>
          <div className="approach-list">
            <div><span className="approach-icon"><Compass size={23}/></span><div><h3>Independent recommendations</h3><p>We recommend systems for your needs, not because we're tied to a single software vendor.</p></div></div>
            <div><span className="approach-icon"><Workflow size={23}/></span><div><h3>End-to-end thinking</h3><p>Consider the complete path from lead to fulfilment, invoicing and management insight.</p></div></div>
            <div><span className="approach-icon"><Globe2 size={23}/></span><div><h3>Digital presence that works</h3><p>Turn your website into a useful part of your sales and operations rather than just an online brochure.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="between-heading"><SectionHead eyebrow="Selected work" title="Real businesses. Real-world projects." description="A sample of the websites and platforms we work on."/><TextLink href="/work">Explore our work</TextLink></div>
          <div className="project-grid home-projects">{projects.slice(0,3).map((project, index) => <a className="project-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.name}><span className="project-index">0{index + 1}</span><span className="project-card-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><span className="project-visit">View live project <ArrowUpRight size={17}/></span></a>)}</div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container website-teaser"><div><Eyebrow>Website packages</Eyebrow><h2>A professional website at a straightforward starting price.</h2><p>Choose a one-page starter, a professional multi-page business website or a Business Plus site with an agreed interactive feature. Custom systems are quoted separately.</p><TextLink href="/websites">See website packages & pricing</TextLink></div><div className="price-teaser"><span>Website packages from</span><strong>R1,000</strong><p>One-page · Multi-page · Interactive</p></div></div>
      </section>
      <CTA/>
    </>
  );
}
