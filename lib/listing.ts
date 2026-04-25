import { ListingType } from "@/types";
import { api, apiError } from "./api";

export const createListing = async () => {
  try {
    const res = await api.post(`/listing`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getAllListings = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  type?: ListingType;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
}) => {
  try {
    const res = await api.get("/listing/all-listings", {
      params,
    });

    return res.data.listing;
  } catch (error) {
    apiError(error);
    return [];
  }
};
export const getListing = async () => {
  try {
    const res = await api.get(`/listing`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateListing = async (listingId: string) => {
  try {
    const res = await api.put(`/listing/${listingId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const uploadListingMedia = async (listingId: string) => {
  try {
    const res = await api.post(`/listing/${listingId}/media`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteListingMedia = async (
  listingId: string,
  mediaId: string,
) => {
  try {
    const res = await api.delete(`/listing/${listingId}/media/${mediaId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteListingMedias = async (listingId: string) => {
  try {
    const res = await api.delete(`/listing/${listingId}/media`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteListing = async (listingId: string) => {
  try {
    const res = await api.delete(`/listing/${listingId}/delete`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const submitListing = async (listingId: string) => {
  try {
    const res = await api.post(`/listing/${listingId}/submit`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
