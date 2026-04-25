import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import image1 from "@/public/assets/elite-prop-hmlP-v0vJ5o-unsplash.jpg"
import image2 from "@/public/assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg"
import image3 from "@/public/assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg"
import image4 from "@/public/assets/lotus-design-n-print-wRzBarqn3hs-unsplash.jpg"
import image5 from "@/public/assets/real-estate-img3.jpg"
import image6 from "@/public/assets/vlad-kutepov-AjIRkHlJdTs-unsplash.jpg"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const listings = [
  {
    id: 1,
    image: image1,
    price: 850000,
    country: "Luton, England",
    title: "Brenton Hux",
    address: "Austin, TX",
    bedrooms: 4,
    listingType: "for rent",
    bathrooms: 3,
  },
  {
    id: 2,
    image: image2,
    price: 2800,
    country: "Luton, England",
    title: "Luxemborg House",
    address: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2,
    listingType: "for sale",
  },
  {
    id: 3,
    image: image3,
    price: 850000,
    country: "Luton, England",
    title: "Trenton Triag",
    address: "Austin, TX",
    bedrooms: 4,
    listingType: "for rent",
    bathrooms: 3,
  },
  {
    id: 4,
    image: image4,
    price: 2800,
    country: "Luton, England",
    title: "Wixtell Taram",
    address: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2,
    listingType: "for sale",
  },
  {
    id: 5,
    image: image5,
    price: 850000,
    country: "Luton, England",
    title: "Genger Genos",
    address: "Austin, TX",
    bedrooms: 4,
    listingType: "for rent",
    bathrooms: 3,
  },
  {
    id: 6,
    image: image6,
    price: 2800,
    country: "Luton, England",
    title: "Restion juin",
    address: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2,
    listingType: "for sale",
  },
];