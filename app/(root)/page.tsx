import FeaturedListings from "@/components/FeaturedListings";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import WhyChoose from "@/components/WhyChoose";

const RootPage = async () => {
  return (
    <main className="w-full relative min-h-screen">
      <Hero />
      <FeaturedListings />
      <WhyChoose />
      <Newsletter />
    </main>
  );
};

export default RootPage;
