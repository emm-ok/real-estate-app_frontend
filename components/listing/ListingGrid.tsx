import { Listing } from "@/types";
import ListingCard from "./ListingCard";

export default function ListingGrid({ listings }: { listings?: Listing[] }) {
  if (!Array.isArray(listings)) {
    return (
      <div className="text-center py-20 text-gray-500">
        Something went wrong please try again
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No listings found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
