export const queryKeys = {
  campaigns: {
    all: ["campaigns"] as const,
    lists: () => [...queryKeys.campaigns.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.campaigns.lists(), filters] as const,
    details: () => [...queryKeys.campaigns.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.campaigns.details(), id] as const,
  },

  audiences: {
    all: ["audiences"] as const,
    lists: () => [...queryKeys.audiences.all, "list"] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.audiences.lists(), filters] as const,
    details: () => [...queryKeys.audiences.all, "detail"] as const,
    detail: (id: string) => [...queryKeys.audiences.details(), id] as const,
    personas: () => [...queryKeys.audiences.all, "personas"] as const,
  },
} as const;

export default queryKeys;
