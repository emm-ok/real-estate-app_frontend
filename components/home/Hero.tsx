// components/Hero.jsx
import SearchBar from "@/components/home/SearchBar";
import image from "@/public/assets/elite-prop-hmlP-v0vJ5o-unsplash.jpg"
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="relative max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* <div className="absolute inset-0 bg-black/30" /> */}
        <div className="z-10">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the perfect place to live with our wide range of properties.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
            Explore Properties
          </button>
        </div>

        <Image
          src={image}
          width={500}
          height={500}
          alt="house"
          loading="eager"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-full px-8">
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;