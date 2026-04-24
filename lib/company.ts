import { api, apiError } from "./api";

export const getAllCompanies = async () => {
  try {
    const res = await api.get(`/company/all-companies`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getMyCompanies = async () => {
  try {
    const res = await api.get(`/company/`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getCompanyById = async (companyId: string) => {
  try {
    const res = await api.get(`/company/${companyId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateCompany = async (companyId: string) => {
  try {
    const res = await api.patch(`/company/${companyId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getCompanyAgents = async (companyId: string) => {
  try {
    const res = await api.get(`/company/${companyId}/agents`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateCompanyLogo = async (companyId: string) => {
  try {
    const res = await api.post(`/company/${companyId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getCompanyListings = async (companyId: string) => {
  try {
    const res = await api.get(`/company/${companyId}/listings`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateCompanyStatus = async (companyId: string) => {
  try {
    const res = await api.patch(`/company/${companyId}/status`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
