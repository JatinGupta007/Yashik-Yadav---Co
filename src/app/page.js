import Footer from "@/components/Footer";

import Popup from "@/components/popup";
import HeroSection from "@/components/HeroSection";
import AboutHome from "@/components/AboutHome";
import ServiceHome from "@/components/ServiceHome";
import GrowthHome from "@/components/GrowthHome";
import PartnerHome from "@/components/PartnerHome";
import RecentWork from "@/components/RecentWork";
import WorkHome from "@/components/WorkHome";
import { Header } from "@/components/Header";

export default function App() {
  return (
    <main className="overflow-y-hidden mx-auto">
      <Header />
      <HeroSection />
      <AboutHome />
      <ServiceHome />
      <GrowthHome />
      <PartnerHome />
      <RecentWork />
      <WorkHome />
      <Popup />
      <Footer />
    </main>
  );
}
