import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import React from "react";
export default function HealthcareDigitalMarketingPage(){
  return (
    <section>
      <Navbar />
      <Popup />

      <div className="space-y-8 px-28 py-12">
        <h1 className="text-[160px] mango text-center uppercase leading-34">
          Architects & Interior Designers
        </h1>
        {/* Item 1 */}
        <div className="border-b border-[#ff9140] pb-8">
          <h3 className="text-3xl font-bold mb-5">
            Trusted by Top Doctors, Clinics & Hospitals in Jaipur
          </h3>
          <p>
            We specialize in digital marketing for doctors, clinics, and
            hospitals — helping them rank locally, generate appointment
            bookings, and build lasting trust with patients.
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-b border-[#ff9140] pb-8">
          <h3 className="text-2xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Google Business Profile SEO & reviews</li>
            <li>Medical treatment content + procedure videos</li>
            <li>AAppointment automation (CRM + WhatsApp)</li>
            <li>Doctor personal branding (video, search, reels)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

