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

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
