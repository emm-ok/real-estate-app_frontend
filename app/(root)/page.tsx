import FeaturedListings from "@/components/listing/FeaturedListings";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import WhyChoose from "@/components/home/WhyChoose";

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
