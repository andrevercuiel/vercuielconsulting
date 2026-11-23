import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";

export const metadata = {
  metadataBase: new URL("https://www.vercuielconsulting.com"),
  title: {
    default: "Vercuiel Consulting | ERP, Business Automation & Websites",
    template: "%s | Vercuiel Consulting"
  },
  description: "Independent South African business consulting, ERP implementation including Odoo, business process automation, integrations and professional website development.",
  keywords: ["business consultant South Africa", "ERP implementation", "Odoo consultant", "business automation", "website development South Africa", "manufacturing ERP"],
  openGraph: {
    title: "Vercuiel Consulting | Business Systems That Work",
    description: "Independent business consulting, connected ERP systems, automation and websites.",
    type: "website",
    siteName: "Vercuiel Consulting"
  },
  robots: { index: true, follow: true }
};

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vercuiel Business Consulting Services (Pty) Ltd",
  url: "https://www.vercuielconsulting.com",
  email: "info@vercuielconsulting.com",
  telephone: "+27718576700",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 Cathcart Street",
    addressLocality: "Aberdeen",
    addressRegion: "Eastern Cape",
    postalCode: "6270",
    addressCountry: "ZA"
  }
  // Do not add geo coordinates until the exact property pin is verified.
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }} /><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
