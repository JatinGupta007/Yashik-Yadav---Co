import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Popup from "@/components/popup";

export default function App() {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <Home />
      <Popup />
      <Footer />
    </main>
  );
}
