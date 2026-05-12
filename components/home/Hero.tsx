"use client";

import SearchBar from "@/components/home/SearchBar";
import image from "@/public/assets/real-estate-img3.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Luxury real estate property"
          fill
          priority
          className="object-cover"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col justify-center min-h-screen py-24">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium tracking-wide text-white/80">
                  Trusted properties across 12+ countries
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  Discover Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Perfect Property
                  </span>
                </h1>

                <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-300">
                  Explore premium real estate listings for sale and rent —
                  designed to help you find luxury homes, apartments, and
                  investment properties with ease.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button className="px-8 py-4 text-sm font-semibold text-black transition-all duration-300 bg-white rounded-2xl hover:bg-gray-200 hover:scale-[1.02]">
                  Explore Properties
                </button>

                <button className="px-8 py-4 text-sm font-semibold text-white transition-all duration-300 border border-white/15 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10">
                  List Your Property
                </button>
              </div>
            </motion.div>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-20"
            >
              <div className="w-full max-w-6xl p-4 sm:p-6 border border-white/10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl">
                <SearchBar />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { value: "12+", label: "Countries" },
                { value: "25K+", label: "Properties Listed" },
                { value: "18K+", label: "Happy Clients" },
                { value: "98%", label: "Customer Satisfaction" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;