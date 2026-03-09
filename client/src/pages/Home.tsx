/*
  DESIGN: "New England Craftsman" — Warm Organic Naturalism
  Home page: Single-page layout with all sections.
  Sections: Navbar → Hero → About → Services → Portfolio → Contact → Footer
*/
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
