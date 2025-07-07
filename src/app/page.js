import { Navbar } from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Popup from "@/components/popup";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Popup />
      <About />
      <Services />
      <Work />
      <Footer />
    </main>
  );
}
