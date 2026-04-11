import React from "react";
import { Home, ListChecks, MapPin, Search } from "lucide-react";

const RootPage = () => {
  return (
    <main className="w-full">
      <section className="relative flex items-center justify-center min-h-screen bg-image bg-fixed">
        {/* <Image
        src="/assets/real-estate-img3.jpg"
        width={300}
        height={300}
        alt="bag image"
        className="object-cover w-full h-full"
      /> */}

        <div className="absolute inset-0 bg-black/60 border"></div>

        <div className="z-20 text-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Find Your Perfect Property
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Buy, rent, or invest in real estate effortlessly.
            </p>
          </div>
          <div className="hidden md:flex gap-2 rounded-xl p-4 mt-4 bg-neutral-800/50">
            <div className="flex items-center gap-2">
              <Search color="white" size={18} />
              <input
                type="text"
                placeholder="Name"
                className="bg-white/70 outline-none rounded p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <MapPin color="white" size={18} />
              <input
                type="text"
                placeholder="Location"
                className="bg-white/70 outline-none rounded p-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <Home color="white" size={18} />
              <input
                type="text"
                placeholder="Listing type"
                className="bg-white/70 outline-none rounded p-2"
              />
            </div>
            <button className="bg-black text-white font-medium flex gap-2 px-4 py-2 rounded-lg">
              <Search color="white" size={14} /> Search
            </button>
          </div>

          <div className="absolute bottom-10 left-10 text-white text-left">
            <h2 className="text-2xl font-semibold mb-2">
              Trusted by 10,000+ Home Buyers
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We help people find verified propertis with transparency pricing
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RootPage;
