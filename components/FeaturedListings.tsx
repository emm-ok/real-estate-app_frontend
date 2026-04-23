// components/FeaturedProperties.jsx
import ListingCard from "@/components/ListingCard";
import image1 from "../public/assets/real-estate-img3.jpg"
import image2 from "../public/assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg"

const properties = [
  {
    id: 1,
    image: image1,
    price: "$850,000",
    location: "Austin, TX",
    beds: 4,
    baths: 3,
    size: "2450",
  },
  {
    id: 2,
    image: image2,
    price: "$2,800/mo",
    location: "Seattle, WA",
    beds: 3,
    baths: 2,
    size: "1600",
  },
];

const FeaturedListings = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <ListingCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;