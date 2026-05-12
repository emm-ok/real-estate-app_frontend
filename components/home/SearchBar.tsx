import ListingFilters from "../listing/ListingFilter";
import { useListing } from "@/hooks/useListing";


// const PropertyOptions = ["Apartment", "Land", "Villa"];
// const PriceOptions = ["1k - 2k", "3k - 4k", "4k - 5k"];
// const BedorBathOptions = ["1", "2", "3", "4"];
const SearchBar = () => {
  const { fetchListings } = useListing();
  return (
    <div className="w-[80%]">
      <ListingFilters onFilter={fetchListings} />
    </div>
  );
};

export default SearchBar;
