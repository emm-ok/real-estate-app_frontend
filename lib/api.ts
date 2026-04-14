import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
})