import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { CTA, PageHero, SectionHead, CheckItem, TextLink, PrimaryLink } from "@/components/Elements";

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return {};
  return { title: service.label, description: service.summary };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <><PageHero eyebrow={service.eyebrow} title={service.title} description={service.intro}><PrimaryLink href="/contact">Discuss your project</PrimaryLink></PageHero>
    <section className="section"><div className="container detail-two-column"><div><SectionHead eyebrow="What we help with" title="Practical expertise, applied to your business." description={service.summary}/><p className="section-small-note">{service.industries}</p></div><ul className="check-list feature-list">{service.focus.map(item=><CheckItem key={item}>{item}</CheckItem>)}</ul></div></section>
    <section className="section section-sand"><div className="container"><SectionHead eyebrow="Your business outcome" title="What success should look like."/><div className="outcome-grid">{service.outcomes.map((item,i)=><div key={item} className="outcome-card"><span>0{i+1}</span><h3>{item}</h3></div>)}</div></div></section>
    <section className="section"><div className="container"><SectionHead eyebrow="Our approach" title="A clear, phased engagement."/><div className="process-row">{service.steps.map((step,i)=><div className="process-step" key={step}><span className="process-step-number">0{i+1}</span><h3>{step}</h3></div>)}</div>
      <div className="additional-note"><p>We work independently across suitable software products. We have longstanding Odoo expertise and continue to offer Odoo consulting, but Vercuiel Consulting is not an official Odoo Partner.</p><TextLink href="/about">Read more about our experience</TextLink></div>
    </div></section>
    <CTA title="Ready to solve the underlying problem?" description="Share the workflow, challenge or new system you are considering. We can map out a practical way to proceed."/></>;
}
