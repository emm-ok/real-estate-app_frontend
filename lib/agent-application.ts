import { AgentDocumentType } from "@/types";
import { api, apiError } from "./api";

const baseUrl = `/agent-application`;
export const getAllApplications = async () => {
  try {
    const res = await api.get(`${baseUrl}/all-applications`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getApplicationById = async (applicationId: string) => {
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
export const approveAgentApplication = async (applicationId: string) => {
    try {
    const res = await api.patch(`${baseUrl}/${applicationId}/approve`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const rejectAgentApplication = async (applicationId: string) => {
    try {
    const res = await api.patch(`${baseUrl}/${applicationId}/reject`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};

export const createAgentApplication = async () => {
    try {
    const res = await api.post(`${baseUrl}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getMyAgentApplication = async () => {
    try {
    const res = await api.get(`${baseUrl}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateAgentApplication = async (payload: {
  step: number,
  professional?: any,
}) => {
    try {
    const res = await api.put(`${baseUrl}`, payload);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const uploadAgentDocument = async (type: AgentDocumentType) => {
    try {
    const res = await api.post(`${baseUrl}/doc/${type}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteAgentDocument = async (type: AgentDocumentType) => {
    try {
    const res = await api.delete(`${baseUrl}/doc/${type}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const deleteAgentApplication = async () => {
    try {
    const res = await api.delete(`${baseUrl}/delete`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const submitAgentApplication = async () => {
    try {
    const res = await api.post(`${baseUrl}/submit`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
