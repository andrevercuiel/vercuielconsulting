import { Phone, Mail, Linkedin, ArrowUpRight, MapPin, ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "@/components/Elements";
export const metadata={title:"Contact Vercuiel Consulting",description:"Contact Vercuiel Consulting for business consulting, ERP implementations, automation and website development in South Africa."};
export default function ContactPage(){
return <><PageHero eyebrow="Contact us" title={<>Let's talk about <em>your business.</em></>} description="Whether you want a new website, an ERP system or better business processes, share your goals and we'll discuss the most sensible starting point."/>
  <section className="section"><div className="container contact-grid">
    <div><SectionHead eyebrow="Get in touch" title="Start with a conversation." description="We work with South African businesses remotely and on a project basis. Tell us what you want to achieve, the systems you use and the challenges you would like to solve."/>
      <div className="contact-direct">
        <a href="mailto:info@vercuielconsulting.com?subject=Business%20enquiry"><span className="contact-icon"><Mail size={22}/></span><span><small>Email</small><strong>info@vercuielconsulting.com</strong></span><ArrowUpRight size={19}/></a>
        <a href="tel:+27718576700"><span className="contact-icon"><Phone size={22}/></span><span><small>Phone</small><strong>+27 71 857 6700</strong></span><ArrowUpRight size={19}/></a>
        <a href="https://www.linkedin.com/company/vercuielconsulting/" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Linkedin size={22}/></span><span><small>LinkedIn</small><strong>Vercuiel Consulting</strong></span><ArrowUpRight size={19}/></a>
        <div><span className="contact-icon"><MapPin size={22}/></span><span><small>Based in</small><strong>Aberdeen, Eastern Cape, South Africa</strong></span></div>
      </div>
    </div>
    <div className="contact-panel"><span className="form-eyebrow">HOW TO GET STARTED</span><h2>What do you need help with?</h2><p>Prepare a short overview of your business and the project you have in mind. A first discussion can establish the scope and next step.</p>
      <div className="contact-options"><div><span>01</span><div><h3>Business consulting</h3><p>Operations, sales, costs and management information</p></div></div><div><span>02</span><div><h3>ERP or automation</h3><p>Existing systems, integration and improvement goals</p></div></div><div><span>03</span><div><h3>New website</h3><p>Your package, pages, social profiles and desired functions</p></div></div></div>
      <a className="button button-primary contact-action" href="mailto:info@vercuielconsulting.com?subject=Vercuiel%20Consulting%20Enquiry">Email about your project <ArrowRight size={18}/></a><p className="contact-fine">Email us directly for your enquiry. We do not collect information through this website page.</p>
    </div>
  </div></section></>;
}
