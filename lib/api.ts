import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const apiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Something went wrong";

    throw new Error(message);
  }

  throw new Error("Unexpected error occured");
};
