import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";

export function Eyebrow({ children, light = false }) {
  return <div className={light ? "eyebrow eyebrow-light" : "eyebrow"}><span className="eyebrow-dash" /> {children}</div>;
}
export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
      <div className="page-hero-graphic" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}
export function SectionHead({ eyebrow, title, description, center = false }) {
  return <div className={center ? "section-head align-center" : "section-head"}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export function PrimaryLink({ href, children, dark = false, external = false }) {
  const cn = dark ? "button button-dark" : "button button-primary";
  return external ? <a href={href} className={cn} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17}/></a> : <Link href={href} className={cn}>{children}<ArrowRight size={17}/></Link>;
}
export function TextLink({ href, children, external = false }) {
  return external ? <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} /></a> : <Link className="text-link" href={href}>{children}<ArrowRight size={17} /></Link>;
}
export function CheckItem({ children }) {
  return <li className="check-item"><span><Check size={16} /></span>{children}</li>;
}
export function CTA({ eyebrow = "Let's talk", title = "Ready for a clearer way forward?", description = "Tell us where your business is today and what you want to improve. We'll help identify the right next step." }) {
  return <section className="cta-section"><div className="container cta-inner"><div><Eyebrow light>{eyebrow}</Eyebrow><h2>{title}</h2><p>{description}</p></div><PrimaryLink href="/contact">Start a conversation</PrimaryLink></div></section>;
}
export function ServiceCard({ item }) {
  return <Link className="service-card" href={"/services/" + item.slug}><div className="service-card-top"><span className="service-number">{item.number} / SERVICE</span><span className="circle-arrow"><ArrowUpRight size={20} /></span></div><div><h3>{item.label}</h3><p>{item.summary}</p></div><span className="service-card-bottom">Explore service <ChevronRight size={17}/></span></Link>;
}
