import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import WaveSeparator from "./components/WaveSeparator";
import About from "./components/About";
import Services from "./components/Services";
import Promotions from "./components/Promotions";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Image from "next/image";
import FadeIn from "./components/ui/FadeIn";
import BackToTop from "./components/BackToTop";
import StoreLocation from "./components/StoreLocation";
import WhatsAppCta from "./components/WhatsAppCta";
import SectionSeparator from "./components/ui/SectionSeparator";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative">
        {/* Shared Background Image for Hero and Collection */}
        <div className="absolute inset-0 z-0 w-full h-[135vh]">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background Beach"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-white/50"></div>
        </div>

        <FadeIn>
          <Hero />
        </FadeIn>

        <FadeIn delay={0.2}>
          <WaveSeparator />
        </FadeIn>

        <FadeIn delay={0.4}>
          <FeaturedCategories />
        </FadeIn>

        <div className="relative z-30">
          <SectionSeparator variant="curve" fillColor="#fff8e7" />
        </div>

        <About />

        <div className="relative z-30 -mt-24">
          <SectionSeparator variant="wave" fillColor="#fff8e7" flip />
        </div>

        <FadeIn delay={0.6}>
          <Services />
        </FadeIn>

        <div className="relative z-30">
          <SectionSeparator variant="curve" fillColor="#fff8e7" />
        </div>

        <FadeIn delay={0.7}>
          <Promotions />
        </FadeIn>

        <div className="relative z-30">
          <SectionSeparator variant="wave" fillColor="#fff8e7" />
        </div>

        <FadeIn delay={0.8}>
          <Testimonials />
        </FadeIn>

        <div className="relative z-30">
          <SectionSeparator variant="curve" fillColor="#fff8e7" flip />
        </div>

        <FadeIn delay={0.75}>
          <WhatsAppCta />
        </FadeIn>

        <FadeIn delay={0.9}>
          <StoreLocation />
        </FadeIn>



      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
