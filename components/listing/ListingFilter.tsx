"use client";

import { ListingType } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  onFilter: (filters: any) => void;
}

export default function ListingFilters({ onFilter }: Props) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<ListingType | string>("");
  const [bedrooms, setBedrooms] = useState<number | "">("");
  const [bathrooms, setBathrooms] = useState<number | "">("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const router = useRouter();
  const params = new URLSearchParams();
  // const handleApply = () => {
  //   onFilter({ page: 2, search, type, bedrooms, bathrooms, minPrice, maxPrice });
  // };

  const handleApply = () => {
    if(search) params.set("search", search);
    if(type) params.set("type", type);
    if(bedrooms) params.set("bedrooms", String(bedrooms));
    if(bathrooms) params.set("bathrooms", String(bathrooms));
    if(minPrice) params.set("minPrice", String(minPrice));
    if(maxPrice) params.set("maxPrice", String(maxPrice));

    router.push(`?${params.toString()}`);
    onFilter(params);
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
      <form 
        onSubmit={handleApply}
        className="grid gap-4 md:grid-cols-4">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Property Type */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial</option>
        </select>
        {/* Bedrooms */}
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : "")}
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Any Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : "")}
          className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Any Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <input 
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : "" )}
        placeholder="Min Price"
        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
         />
          <input
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "" )}
        placeholder="Max Price"
        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
         />

        {/* Button */}
        <button
          type="submit"
          className="bg-primary text-white rounded-xl px-4 py-2 hover:bg-primary/90 transition"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}