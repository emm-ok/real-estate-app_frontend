"use client"
// components/Hero.jsx
import SearchBar from "@/components/home/SearchBar";
import image from "@/public/assets/elite-prop-hmlP-v0vJ5o-unsplash.jpg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 min-h-screen">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: .5 }}
          className="w-full h-full"
        >
          <div className="relative max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
            {/* <div className="absolute inset-0 bg-black/30" /> */}
            <div className="z-10">
              <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
              <p className="text-gray-600 mb-6">
                Discover the perfect place to live with our wide range of
                properties.
              </p>

              <Link href="/listings" className="bg-blue-600 text-white px-6 py-3 rounded-md">
                Explore Properties
              </Link>
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
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col justify-center gap-10 items-center w-full px-8 h-screen">
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
