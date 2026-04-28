
import { getAllListings } from "@/lib/listing";
import { FilterOptions, Listing, ListingType } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useListing = () => {
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
      bedrooms: searchParams?.get("bedrooms")
        ? Number(searchParams.get("bedrooms"))
        : undefined,
      bathrooms: searchParams?.get("bathrooms")
        ? Number(searchParams.get("bathrooms"))
        : undefined,
      minPrice: searchParams?.get("minPrice")
        ? Number(searchParams.get("minPrice"))
        : undefined,
      maxPrice: searchParams?.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : undefined,
    };
    fetchListings(filters);
  }, [searchParams]);

  return {
    fetchListings,
    listings,
    loading
  };
};
