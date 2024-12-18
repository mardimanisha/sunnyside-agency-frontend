import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Features />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}
