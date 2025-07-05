import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";


export default function HealthcareDigitalMarketingPage(){
  return (
    <>
      <Navbar />
      <Popup />
      <section className="px-28 py-12">
        <div className="relative">
          <h1 className="text-[160px] mango text-center uppercase leading-34">
            Architects & Interior Designers
          </h1>
        </div>
        <div className="flex">
          <div className="w-1/2 mt-30">
            <h2 className="text-3xl mb-3">Services</h2>
            <ul className="text-lg space-y-1">
              <li>Portfolio Website Design + SEO</li>
              <li>Instagram Growth Strategy + Reels</li>
              <li>Video Walkthroughs of Projects</li>
              <li>Google Business Profile & Maps Ranking</li>
              <li>WhatsApp Chat Automation for Consultation Requests</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl mb-3">
              {" "}
              Build Your Design Brand Online – Reach, Inspire, Convert
            </h2>
            <p className="text-lg">
              We help architecture firms, interior designers, and studios
              showcase their work, rank in local search, and generate
              high-ticket project inquiries.
            </p>
            <div className="mt-36">
              <h2 className="text-3xl mb-3">Targeted Outcomes</h2>
              <ul className="text-lg space-y-1 pl-4">
                <li>Portfolio Website Design + SEO</li>
                <li>Instagram Growth Strategy + Reels</li>
                <li>Video Walkthroughs of Projects</li>
                <li>Google Business Profile & Maps Ranking</li>
                <li>WhatsApp Chat Automation for Consultation Requests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
