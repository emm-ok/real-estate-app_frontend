// import { getAllListings } from "@/lib/listing";
// import { Listing } from "@/types";
// import React, { createContext, useEffect, useState } from "react";

// interface ListingContextType {
//   listings: Listing[];
// }

// const ListingContext = createContext<ListingContextType | null>(null);

// export const ListingProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [listings, setListings] = useState<Listing[] | null>([]);
// //   const [listing, setListing] = useState<Listing | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fectchListings = async () => {
//     try {
//       const data = await getAllListings();
//       setListings(data);
//       console.log("All Listings", data);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fectchListings();
//   }, []);

//   return (
//     <ListingContext.Provider value={{ listings, listing }}>
//       {children}
//     </ListingContext.Provider>
//   );
// };
