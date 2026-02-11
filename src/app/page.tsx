import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
