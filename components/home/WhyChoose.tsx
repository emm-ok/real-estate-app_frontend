"use client"

import { useListing } from "@/hooks/useListing";
import ListingCard from "../listing/ListingCard";

// components/WhyChoose.jsx
const WhyChoose = () => {
  const {listings} = useListing();
  const features = [
    { title: "Wide Range of Listings" },
    { title: "Trusted Agents" },
    { title: "Safe & Secure" },
    { title: "Best Deals" },
  ];

  return (
    <section className="bg-gray-100 p-16 mx-auto w-full">
      {/* <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 mb-20 xl:grid-cols-4">
        {listings.slice(0, 6).map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div> */}
      <h2 className="text-center text-2xl font-bold mb-10">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 grid-cols-2 p-4 gap-6 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
            <p className="font-semibold">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;