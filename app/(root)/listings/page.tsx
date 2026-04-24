"use client";

import { useEffect, useState } from "react";
import ListingGrid from "@/components/listing/ListingGrid";
import ListingFilters from "@/components/listing/ListingFilter";
import ListingSkeleton from "@/components/listing/ListingSkeleton";
import { getAllListings } from "@/lib/listing";
import { Listing } from "@/types";

export interface FilterOptions {
  page?: number;
  limit?: number;
  search?: string;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async (params: FilterOptions = {}) => {
    setLoading(true);

    try {
      const data = await getAllListings(params);
      setListings(data);
      console.log("Listings", data);
    } catch (error) {
      console.error(error);
    } finally {   
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ListingFilters onFilter={fetchListings} />

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <ListingSkeleton key={i} />
          ))}
        </div>
      ) : (
        <ListingGrid listings={listings} />
      )}
    </div>
  );
}