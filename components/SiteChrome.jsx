"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Vercuiel Consulting home">
          <Image src="/vercuiel-logo.png" alt="Vercuiel Consulting gold logo" width={46} height={46} style={{ display: "block", flexShrink: 0, borderRadius: 6 }} />
          <span className="brand-name">VERCUIEL<span>CONSULTING</span></span>
        </Link>
        <button type="button" className="mobile-menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href || (item.href === "/services" && pathname?.startsWith("/services/")) ? "nav-link active" : "nav-link"}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="nav-cta">Let's talk <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="brand brand-footer"><Image src="/vercuiel-logo.png" alt="Vercuiel Consulting gold logo" width={46} height={46} style={{ display: "block", flexShrink: 0, borderRadius: 6 }} /><span className="brand-name">VERCUIEL<span>CONSULTING</span></span></Link>
          <p>Independent business consulting, ERP implementation, automation and professional website development.</p>
          <p className="footer-location">Based in South Africa · Working with businesses nationwide</p>
        </div>
        <div className="footer-links"><h3>Explore</h3><Link href="/services">Services</Link><Link href="/websites">Websites & Pricing</Link><Link href="/work">Selected Work</Link><Link href="/industries">Industries</Link></div>
        <div className="footer-links"><h3>Consulting</h3><Link href="/services/business-consulting">Business Consulting</Link><Link href="/services/erp-implementation">ERP Solutions</Link><Link href="/services/business-automation">Automation</Link><Link href="/about">Our Story</Link></div>
        <div className="footer-links"><h3>Connect</h3><Link href="/contact">Contact us</Link><a href="https://www.linkedin.com/company/vercuielconsulting/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://townhub.co.za" target="_blank" rel="noopener noreferrer">TownHub</a></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Vercuiel Business Consulting Services (Pty) Ltd. All rights reserved.</span>
        <span>Independent software consultancy · Not an official Odoo partner</span>
      </div>
    </footer>
  );
}
