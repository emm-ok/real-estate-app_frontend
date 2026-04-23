import Image from "next/image";

// components/ListingCard.jsx
const ListingCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Image
        src={property.image}
        width={500}
        height={500}
        alt="image1"
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.price}</h3>
        <p className="text-gray-600 text-sm">{property.location}</p>

        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.size} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
