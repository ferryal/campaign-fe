import { apiClient } from "@/api/client";
import { API_ENDPOINTS } from "@/api/endpoints";
import type { Audience } from "@/types/campaign.types";
import type {
  ApiResponse,
  PaginatedResponse,
  ListParams,
} from "@/types/api.types";

export const audienceService = {
  getAll: async (params?: ListParams) => {
    const response = await apiClient.get<PaginatedResponse<Audience>>(
      API_ENDPOINTS.AUDIENCES.BASE,
      { params }
    );
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get<ApiResponse<Audience>>(
      API_ENDPOINTS.AUDIENCES.BY_ID(id)
    );
    return response.data.data;
  },

  create: async (data: Omit<Audience, "id">) => {
    const response = await apiClient.post<ApiResponse<Audience>>(
      API_ENDPOINTS.AUDIENCES.BASE,
      data
    );
    return response.data.data;
  },

  update: async (id: string, data: Partial<Omit<Audience, "id">>) => {
    const response = await apiClient.patch<ApiResponse<Audience>>(
      API_ENDPOINTS.AUDIENCES.BY_ID(id),
      data
    );
    return response.data.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete<ApiResponse<void>>(
      API_ENDPOINTS.AUDIENCES.BY_ID(id)
    );
    return response.data;
  },

  getPersonas: async () => {
    const response = await apiClient.get<ApiResponse<Audience[]>>(
      API_ENDPOINTS.AUDIENCES.PERSONAS
    );
    return response.data.data;
  },
};

export default audienceService;
