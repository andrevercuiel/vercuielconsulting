import { ArrowUpRight, CheckCircle2, Globe2, LayoutTemplate, MousePointerClick } from "lucide-react";
import { packages } from "@/lib/content";
import { CTA, PageHero, SectionHead, PrimaryLink, CheckItem, TextLink } from "@/components/Elements";

export const metadata = {
  title: "Website Development & Pricing",
  description: "Professional website packages in South Africa: one-page websites R1,000, multi-page websites R3,000 and interactive websites from R5,000, with social media links."
};

export default function WebsitesPage() {
  return <><PageHero eyebrow="Website development & pricing" title={<>Professional websites. <em>Clear pricing.</em></>} description="We build modern websites that are easy to navigate, work on mobile and connect customers to your business. Choose a one-page presence, a complete multi-page website or an interactive digital experience."><PrimaryLink href="/contact">Request a website</PrimaryLink></PageHero>
    <section className="section">
      <div className="container"><SectionHead eyebrow="Website packages" title="Choose the right fit for your business." description="All three options can link visitors to your social media profiles. We agree the content, functionality and delivery scope before work begins."/>
      <div className="pricing-grid">
        {packages.map((pkg,i)=><article className={pkg.highlighted ? "pricing-card featured" : "pricing-card"} key={pkg.name}>
          {pkg.highlighted && <div className="price-ribbon">Popular choice</div>}
          <div className="price-top"><span className="pricing-index">0{i+1} / PACKAGE</span><h3>{pkg.name}</h3><p>{pkg.line}</p><div className="price-value">{pkg.price}</div><span className="pricing-context">{i === 2 ? "Starting price · scope dependent" : "Base package price"}</span></div>
          <div className="pricing-body"><div className="pricing-ideal">{pkg.ideal}</div><ul className="check-list">{pkg.details.map(d=><CheckItem key={d}>{d}</CheckItem>)}</ul><p className="pricing-note">{pkg.note}</p></div>
          <div className="pricing-bottom"><PrimaryLink href="/contact">Enquire about this package</PrimaryLink></div>
        </article>)}
      </div>
      <p className="pricing-disclaimer">Prices are in South African rand. Domain registration, hosting, paid third-party subscriptions and extra custom functionality are discussed and quoted separately where applicable. The agreed scope determines what is included.</p>
      </div>
    </section>
    <section className="section section-sand"><div className="container split-feature">
      <div><SectionHead eyebrow="Why a professional site matters" title="A website should actively support your business." description="Your site needs more than a homepage. It should help people find the right information and make it easy to contact, book or enquire."/></div>
      <div className="value-stacks"><div><span><LayoutTemplate size={25}/></span><div><h3>Clear website structure</h3><p>Services, about, portfolio and contact pages when your business needs them.</p></div></div><div><span><Globe2 size={25}/></span><div><h3>Social media connectivity</h3><p>Make it easy for customers to move between your website and social channels.</p></div></div><div><span><MousePointerClick size={25}/></span><div><h3>Useful interactions</h3><p>Enquiries and more advanced functions can be added to suit an agreed project scope.</p></div></div></div>
    </div></section>
    <section className="section"><div className="container"><SectionHead eyebrow="Examples" title="More than just a page on the internet." description="Explore real websites and a community platform."/><div className="examples-bar"><a href="https://townhub.co.za" target="_blank" rel="noopener noreferrer">TownHub <ArrowUpRight size={18}/></a><a href="https://n9karooretreat.odoo.com" target="_blank" rel="noopener noreferrer">N9 Karoo Retreat <ArrowUpRight size={18}/></a><a href="https://aberdeenselfcatering.odoo.com" target="_blank" rel="noopener noreferrer">Aberdeen Self Catering <ArrowUpRight size={18}/></a><a href="https://newdesigns.co.za" target="_blank" rel="noopener noreferrer">New Designs <ArrowUpRight size={18}/></a></div></div></section>
    <CTA eyebrow="Let's build" title="Ready for your new website?" description="Tell us about your business, the pages you need and whether customers should be able to interact with your site."/></>;
}
