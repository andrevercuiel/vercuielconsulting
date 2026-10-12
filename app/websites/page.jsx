import { ArrowUpRight, Globe2, LayoutTemplate, MousePointerClick } from "lucide-react";
import { packages } from "@/lib/content";
import { CTA, PageHero, SectionHead, PrimaryLink, CheckItem } from "@/components/Elements";

export const metadata = {
  title: "Website Development & Pricing",
  description: "Affordable South African website design: Starter one-page website R1,000, Business website up to five pages R3,000 and Business Plus website from R5,000. Hosting quoted separately."
};

const questions = [
  {
    question: "Are domain registration and hosting included?",
    answer: "No. Domain registration, website hosting, renewals and ongoing maintenance are separate from the once-off design price. We can help you choose the appropriate hosting option and provide a quotation before you commit."
  },
  {
    question: "Will my website automatically post to Facebook or Instagram?",
    answer: "All packages can include clickable links to your social media profiles. Automatic publishing, social media advertising and integrations with social media platforms are different services and are quoted separately."
  },
  {
    question: "What do you mean by a revision round?",
    answer: "A revision round is one consolidated set of changes to the design and content already agreed for your project. New pages, a change of project scope or additional functionality are quoted separately."
  },
  {
    question: "What do I need to provide?",
    answer: "You provide your business information, logo, text, photographs and social media profile links. We can discuss copywriting, photography or additional content work separately if you need assistance."
  },
  {
    question: "What is included in the interactive website price?",
    answer: "The Business Plus website starts at R5,000 and includes one straightforward interactive feature chosen and agreed during scoping. Bespoke customer portals, complex searchable databases, online payments, ERP integration and custom automations require a separate quotation."
  },
  {
    question: "Does basic SEO guarantee that I will appear first on Google?",
    answer: "No. Basic SEO covers the technical foundations such as meaningful page titles and descriptions, mobile usability and basic search visibility settings. Rankings, ongoing search marketing and paid advertising are separate services."
  }
];

export default function WebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Website development & pricing"
        title={<>Professional websites. <em>Clear pricing.</em></>}
        description="A quality website should be affordable, easy to use and suited to your business. Start with a one-page website, grow into a five-page business site or add agreed interactive features."
      >
        <PrimaryLink href="/contact">Request a website</PrimaryLink>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Website packages"
            title="Choose the right fit for your business."
            description="Three clear starting prices, with deliverables and revision rounds defined from the beginning. Each package can link visitors to your social media profiles."
          />
          <div className="pricing-grid">
            {packages.map((pkg, i) => (
              <article className={pkg.highlighted ? "pricing-card featured" : "pricing-card"} key={pkg.name}>
                {pkg.highlighted && <div className="price-ribbon">Popular choice</div>}
                <div className="price-top">
                  <span className="pricing-index">0{i + 1} / PACKAGE</span>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.line}</p>
                  <div className="price-value">{pkg.price}</div>
                  <span className="pricing-context">{i === 2 ? "Starting price · scope dependent" : "Once-off website design · agreed scope"}</span>
                </div>
                <div className="pricing-body">
                  <div className="pricing-ideal">{pkg.ideal}</div>
                  <ul className="check-list">
                    {pkg.details.map((detail) => <CheckItem key={detail}>{detail}</CheckItem>)}
                  </ul>
                  <p className="pricing-note">{pkg.note}</p>
                </div>
                <div className="pricing-bottom">
                  <PrimaryLink href="/contact">Enquire about this package</PrimaryLink>
                </div>
              </article>
            ))}
          </div>
          <p className="pricing-disclaimer">
            Prices shown are in South African rand and reflect the website development fee for the stated scope.
            Domain registration, hosting, renewals, maintenance, third-party subscriptions, content creation,
            extra pages and custom functionality are excluded unless expressly included in your written quotation.
          </p>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container split-feature">
          <div>
            <SectionHead
              eyebrow="A website that works for you"
              title="More than just an online brochure."
              description="Help people find your business, understand your services and take the next step — by phone, WhatsApp, a contact form or the social channels your business actually uses."
            />
          </div>
          <div className="value-stacks">
            <div>
              <span><LayoutTemplate size={25}/></span>
              <div><h3>Structured, mobile-friendly pages</h3><p>Practical layouts that fit your business and work on phones, tablets and desktops.</p></div>
            </div>
            <div>
              <span><Globe2 size={25}/></span>
              <div><h3>Social media profile links</h3><p>Connect your website to your existing social channels. Automatic publishing is offered separately.</p></div>
            </div>
            <div>
              <span><MousePointerClick size={25}/></span>
              <div><h3>Useful interactions</h3><p>Choose a simple feature for Business Plus, or request a custom quotation for advanced platforms and integrations.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Common questions"
            title="Know exactly what you are paying for."
            description="Clear project scope protects your budget and helps us deliver the website you need."
          />
          <div className="pricing-faq">
            {questions.map(({ question, answer }) => (
              <details key={question} className="pricing-faq-item">
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead
            eyebrow="Examples"
            title="Websites and platforms with a purpose."
            description="Explore examples of accommodation websites, professional services and a community platform."
          />
          <div className="examples-bar">
            <a href="https://townhub.co.za" target="_blank" rel="noopener noreferrer">TownHub <ArrowUpRight size={18}/></a>
            <a href="https://n9karooretreat.odoo.com" target="_blank" rel="noopener noreferrer">N9 Karoo Retreat <ArrowUpRight size={18}/></a>
            <a href="https://aberdeenselfcatering.odoo.com" target="_blank" rel="noopener noreferrer">Aberdeen Self Catering <ArrowUpRight size={18}/></a>
            <a href="https://newdesigns.co.za" target="_blank" rel="noopener noreferrer">New Designs <ArrowUpRight size={18}/></a>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Let's build"
        title="Ready for your new website?"
        description="Tell us about your business, the pages you need and any interactive features you have in mind. We'll confirm the scope and cost before work begins."
      />
    </>
  );
}
