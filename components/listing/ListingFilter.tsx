"use client";

import { FilterOptions, ListingType } from "@/types";
import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  onFilter: (filters: FilterOptions) => void;
}

const type = ["Apratment", "House", "Villa", "Commercial"];
export default function ListingFilters({ onFilter }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    search: searchParams?.get("search") || "",
    type: (searchParams?.get("type") as ListingType) || undefined,
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
  });

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value || undefined }));
  };

  const applyFilters = (updated: FilterOptions) => {
    const params = new URLSearchParams();

    Object.entries(updated).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(key, String(value));
      }
    });

    router.push(`?${params.toString()}`);
    onFilter(updated);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      applyFilters(filters);
    }, 800);

    return () => clearTimeout(timeout);
  }, [filters]);

 return (
  <div className="w-full max-w-5xl mx-auto">
    {/* SEARCH BAR */}
    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-3 mb-4">
      <div className="flex items-center gap-3">
        <input
          placeholder="Search location..."
          value={filters.search || ""}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none rounded-xl px-4 py-2.5 text-sm transition"
        />

        <button
          onClick={() => setOpenFilter(!openFilter)}
          className={`p-2.5 rounded-xl border transition flex items-center justify-center
            ${
              openFilter
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
            }
          `}
        >
          <SlidersHorizontal size={18} />
        </button>
      </div>
    </div>

    {/* FILTER PANEL */}
    <AnimatePresence>
      {openFilter && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TYPE */}
            <select
              value={filters.type || ""}
              onChange={(e) =>
                updateFilter("type", e.target.value as ListingType)
              }
              className="input"
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
            </select>

            {/* BEDROOMS */}
            <select
              value={filters.bedrooms ?? ""}
              onChange={(e) =>
                updateFilter(
                  "bedrooms",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              className="input"
            >
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
            </select>

            {/* BATHROOMS */}
            <select
              value={filters.bathrooms ?? ""}
              onChange={(e) =>
                updateFilter(
                  "bathrooms",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              className="input"
            >
              <option value="">Bathrooms</option>
              <option value="1">1 Bathroom</option>
              <option value="2">2 Bathrooms</option>
            </select>

            {/* MIN PRICE */}
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice ?? ""}
              onChange={(e) =>
                updateFilter(
                  "minPrice",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              className="input"
            />

            {/* MAX PRICE */}
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice ?? ""}
              onChange={(e) =>
                updateFilter(
                  "maxPrice",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
              className="input"
            />

            {/* CLEAR BUTTON */}
            <button
              onClick={() => {
                setFilters({});
              }}
              className="h-[42px] rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 transition text-sm"
            >
              Clear Filters
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
}
