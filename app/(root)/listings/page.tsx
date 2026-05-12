"use client";

import ListingGrid from "@/components/listing/ListingGrid";
import ListingFilters from "@/components/listing/ListingFilter";
import ListingSkeleton from "@/components/listing/ListingSkeleton";
import { useListing } from "@/hooks/useListing";

export default function ListingsPage() {
 const {fetchListings, listings, loading} = useListing();

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