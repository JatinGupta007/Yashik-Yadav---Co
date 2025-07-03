import { Navbar } from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Popup from "@/components/popup";



const homeLinks = {
  link_1: "Home",
  link_2: "Contact us",
  link_3: "Services",
  link_4: "Work",
};



export default function App() {
  return (
    <main>
      <Navbar navLinks={homeLinks} />
      <Home />
      <Popup />
      <About />
      <Services />
      <Work />
      <Footer />
    </main>
  );
}
