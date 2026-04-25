import { api, apiError } from "./api";

export const getAgentStatus = async () => {
  try {
    const res = await api.get(`agent/stats`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getAllAgents = async () => {
  try {
    const res = await api.get(`agent/all-agents`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const getAgent = async (agentId: string) => {
  try {
    const res = await api.get(`agent/${agentId}`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
export const updateAgentStatus = async (agentId: string) => {
  try {
    const res = await api.patch(`agent/${agentId}/status`);
    return res.data;
  } catch (error) {
    apiError(error);
  }
};
