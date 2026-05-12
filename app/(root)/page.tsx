// import FeaturedListings from "@/components/listing/FeaturedListings";
import Hero from "@/components/home/Hero";
import Listing from "@/components/home/Listing";
import Newsletter from "@/components/home/Newsletter";
import WhyChoose from "@/components/home/WhyChoose";

const RootPage = async () => {
  return (
    <main className="w-full relative min-h-screen">
      <Hero />
      <Listing />
      <WhyChoose />
      <Newsletter />
    </main>
  );
};

export default RootPage;
