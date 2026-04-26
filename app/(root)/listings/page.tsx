"use client";

import { useEffect, useState } from "react";
import ListingGrid from "@/components/listing/ListingGrid";
import ListingFilters from "@/components/listing/ListingFilter";
import ListingSkeleton from "@/components/listing/ListingSkeleton";
import { getAllListings } from "@/lib/listing";
import { Listing, ListingType } from "@/types";
import { useSearchParams } from "next/navigation";

export interface FilterOptions {
  page?: number;
  limit?: number;
  search?: string
  type?: ListingType;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const fetchListings = async (params: FilterOptions) => {
    setLoading(true);

    try {
      const data = await getAllListings(params);
      setListings(Array.isArray(data) ? data : []);
      console.log("Listings", data);
    } finally {   
      setLoading(false);
    }
  };

  useEffect(() => {
    const filters: FilterOptions = {
      search: searchParams?.get("search") || undefined,
      type: (searchParams?.get("type") || undefined) as ListingType | undefined,
      bedrooms: searchParams?.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
      bathrooms: searchParams?.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
      minPrice: searchParams?.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
      maxPrice: searchParams?.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    };
    fetchListings(filters);
  }, [searchParams]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      <ListingFilters onFilter={fetchListings} />

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
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