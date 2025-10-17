import { apiClient } from "@/api/client";
import { API_ENDPOINTS } from "@/api/endpoints";
import type {
  Campaign,
  CreateCampaignDto,
  UpdateCampaignDto,
} from "@/types/campaign.types";
import type {
  ApiResponse,
  PaginatedResponse,
  ListParams,
} from "@/types/api.types";

export const campaignService = {
  getAll: async (params?: ListParams) => {
    const response = await apiClient.get<PaginatedResponse<Campaign>>(
      API_ENDPOINTS.CAMPAIGNS.BASE,
      { params }
    );
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get<ApiResponse<Campaign>>(
      API_ENDPOINTS.CAMPAIGNS.BY_ID(id)
    );
    return response.data.data;
  },

  create: async (data: CreateCampaignDto) => {
    const response = await apiClient.post<ApiResponse<Campaign>>(
      API_ENDPOINTS.CAMPAIGNS.BASE,
      data
    );
    return response.data.data;
  },

  update: async (id: string, data: UpdateCampaignDto) => {
    const response = await apiClient.patch<ApiResponse<Campaign>>(
      API_ENDPOINTS.CAMPAIGNS.BY_ID(id),
      data
    );
    return response.data.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete<ApiResponse<void>>(
      API_ENDPOINTS.CAMPAIGNS.BY_ID(id)
    );
    return response.data;
  },

  archive: async (id: string) => {
    const response = await apiClient.post<ApiResponse<Campaign>>(
      API_ENDPOINTS.CAMPAIGNS.ARCHIVE(id)
    );
    return response.data.data;
  },

  duplicate: async (id: string) => {
    const response = await apiClient.post<ApiResponse<Campaign>>(
      API_ENDPOINTS.CAMPAIGNS.DUPLICATE(id)
    );
    return response.data.data;
  },

  share: async (id: string, recipients: string[]) => {
    const response = await apiClient.post<ApiResponse<void>>(
      API_ENDPOINTS.CAMPAIGNS.SHARE(id),
      { recipients }
    );
    return response.data;
  },
};

export default campaignService;
