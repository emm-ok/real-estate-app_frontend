import { Search } from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import ListingFilters from "../listing/ListingFilter";
import { useListing } from "@/hooks/useListing";
import ListingGrid from "../listing/ListingGrid";

// components/SearchBar.jsx
const PropertyOptions = ["Apartment", "Land", "Villa"];
const PriceOptions = ["1k - 2k", "3k - 4k", "4k - 5k"];
const BedorBathOptions = ["1", "2", "3", "4"];
const SearchBar = () => {
  const { fetchListings, listings } = useListing();
  return (
    // <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-6 w-full gap-4">
    //   <input
    //     placeholder="Location"
    //     className="border border-gray-300 p-2 rounded md:col-span-2"
    //   />
    //   <div className="md:flex gap-4 md:col-span-3 grid grid-cols-2">
    //     <CustomSelect options={PropertyOptions} type="PropertyType" />
    //     <CustomSelect options={PriceOptions} type="Price" />
    //     <CustomSelect options={BedorBathOptions} type="Beds" />
    //     <CustomSelect options={BedorBathOptions} type="Baths" />
    //   </div>
    //   <button className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded px-4 py-2">
    //     <Search size={12} /> Search
    //   </button>
    // </div>
    <div className="w-[80%]">
    <ListingFilters onFilter={fetchListings} />
    <ListingGrid listings={listings.slice(0, 6)} />
    </div>
  );
};

export default SearchBar;
