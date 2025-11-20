import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Behandlinger from "@/components/Behandlinger";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Behandlinger />
      <About />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
