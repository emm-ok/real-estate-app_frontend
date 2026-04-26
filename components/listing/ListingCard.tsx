"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Listing } from "@/types";
import image from "@/public/assets/real-estate-img3.jpg"

export default function ListingCard({ listing }: { listing: Listing }) {
  if(!listing) return null;
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
          {listing.listingType === "FOR_RENT" ? "for rent" : listing.listingType === "FOR_SALE" ? "for sale" : ""}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">
          {listing.title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1" />
          {listing.country}
        </div>

        <p className="text-xl font-bold text-primary">
          ${listing.price ? listing.price.toLocaleString() : "N/A"}
        </p>

        <div className="flex justify-between text-sm text-gray-600 pt-2">
          <span>{listing.bedrooms} Beds</span>
          <span>{listing.bathrooms} Baths</span>
        </div>
      </div>
    </div>
  );
}
