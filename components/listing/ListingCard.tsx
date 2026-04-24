"use client";

// // components/ListingCard.jsx
// const ListingCard = ({ property }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm overflow-hidden">
//       <Image
//         src={property.image}
//         width={500}
//         height={500}
//         alt="image1"
//         className="h-48 w-full object-cover"
//       />

//       <div className="p-4">
//         <h3 className="font-semibold text-lg">{property.price}</h3>
//         <p className="text-gray-600 text-sm">{property.location}</p>

//         <div className="flex gap-4 text-sm text-gray-500 mt-2">
//           <span>{property.beds} Beds</span>
//           <span>{property.baths} Baths</span>
//           <span>{property.size} sqft</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingCard;




import Image from "next/image";
import { MapPin } from "lucide-react";
import { Listing } from "@/types";

export default function ListingCard({ listing }: { listing: Listing }) {
  if(!listing) return null;
  return (
    <div className="group bg-white rounded-2xl shadow-sm border hover:shadow-lg transition overflow-hidden">
      
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        {/* <Image
          src={}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        /> */}
        <div className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
          For Sale
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">
          {listing.title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1" />
          {listing.country}
        </div>

        <p className="text-xl font-bold text-primary">
          ${listing.price.toLocaleString()}
        </p>

        <div className="flex justify-between text-sm text-gray-600 pt-2">
          <span>{listing.bedrooms} Beds</span>
          <span>{listing.bathrooms} Baths</span>
        </div>
      </div>
    </div>
  );
}
