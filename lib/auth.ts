import { api, apiError } from "./api";

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/register", data);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};

export const logout = async() => {
    try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error) {
    apiError(error);
  }
}


export const getCurrentUser = async() => {
    try {
    const res = await api.get("/user");
    return res.data;
  } catch (error) {
    apiError(error);
  }
}