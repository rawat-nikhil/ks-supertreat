import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import MiddleHero from "@/components/MiddleHero";
import Gallery from "@/components/Gallery";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <Testimonials />
      <MiddleHero />
      <Gallery />
      <InfoSection />
      <Footer />
    </main>
  );
}
