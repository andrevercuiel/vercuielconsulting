import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/content";
import { CTA, PageHero, SectionHead, TextLink } from "@/components/Elements";
export const metadata = { title: "Industries We Serve", description: "Practical ERP, business automation and website consulting for South African manufacturers, distributors, professional firms and local organisations." };
export default function IndustriesPage() {
  return <><PageHero eyebrow="Industries" title={<>Industry knowledge. <em>Practical solutions.</em></>} description="Different businesses have different workflows. We bring systems expertise together with real operational understanding, adapting the approach to the way your industry works."/ >
  <section className="section"><div className="container"><SectionHead eyebrow="Who we help" title="Built around the realities of your operation."/><div className="industry-grid">{industries.map((item,i)=><div className="industry-card" key={item.label}><span className="industry-number">0{i+1}</span><h3>{item.label}</h3><p>{item.summary}</p><TextLink href="/contact">Discuss your business</TextLink></div>)}</div></div></section><CTA title="Is your industry not listed?" description="The most important thing is understanding your process. Tell us how your business works and what you need to improve."/></>;
}
