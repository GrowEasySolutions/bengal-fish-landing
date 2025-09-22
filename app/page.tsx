import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureTiles from "@/components/FeatureTiles";
import PopularDishes from "@/components/PopularDishes";
import LocationsTabs from "@/components/LocationsTabs";
import ReviewCarousel from "@/components/ReviewCarousel";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <FeatureTiles />
      <PopularDishes />
      <LocationsTabs />
      <ReviewCarousel />
      <Gallery />
      <AboutSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}

