import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <HowItWorks />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
