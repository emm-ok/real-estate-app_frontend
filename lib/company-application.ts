import { CompanyDocumentType } from "@/types";
import { api, apiError } from "./api";

const baseUrl = `/company-application`;
export const getCompanyApplications = async () => {
  try {
    const res = await api.get(`${baseUrl}/all-applications`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getCompanyApplicationById = async (applicationId: string) => {
    try {
    const res = await api.get(`${baseUrl}/${applicationId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const verifyApplicationDocument = async (docId: string) => {
    try {
    const res = await api.patch(`${baseUrl}/doc/${docId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const approveCompanyApplication = async (applicationId: string) => {
    try {
    const res = await api.patch(`${baseUrl}/${applicationId}/approve`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const rejectCompanyApplication = async (applicationId: string) => {
    try {
    const res = await api.patch(`${baseUrl}/${applicationId}/reject`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};

export const createCompanyApplication = async () => {
    try {
    const res = await api.post(`${baseUrl}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getMyCompanyApplication = async () => {
    try {
    const res = await api.get(`${baseUrl}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateCompanyApplication = async () => {
    try {
    const res = await api.put(`${baseUrl}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const uploadCompanyDocument = async (type: CompanyDocumentType) => {
    try {
    const res = await api.post(`${baseUrl}/doc/${type}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteCompanyDocument = async (type: CompanyDocumentType) => {
    try {
    const res = await api.delete(`${baseUrl}/doc/${type}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteCompanyApplication = async () => {
    try {
    const res = await api.delete(`${baseUrl}/delete`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const submitCompanyApplication = async () => {
    try {
    const res = await api.post(`${baseUrl}/submit`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
