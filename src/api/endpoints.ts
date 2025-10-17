export const API_ENDPOINTS = {
  CAMPAIGNS: {
    BASE: "/campaigns",
    BY_ID: (id: string) => `/campaigns/${id}`,
    ARCHIVE: (id: string) => `/campaigns/${id}/archive`,
    DUPLICATE: (id: string) => `/campaigns/${id}/duplicate`,
    SHARE: (id: string) => `/campaigns/${id}/share`,
  },

  AUDIENCES: {
    BASE: "/audiences",
    BY_ID: (id: string) => `/audiences/${id}`,
    PERSONAS: "/audiences/personas",
  },

  UPLOADS: {
    BASE: "/uploads",
    IMAGE: "/uploads/image",
    DOCUMENT: "/uploads/document",
  },
} as const;

export default API_ENDPOINTS;
