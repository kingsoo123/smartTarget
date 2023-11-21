import AboutUs from "@/components/AboutUs";
import Feat from "@/components/Feat";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Slider />
      <AboutUs />
      <Feat />
      <Subscribe />
      <Footer />
    </main>
  );
}
