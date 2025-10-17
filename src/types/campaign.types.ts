export type CampaignStatus = "draft" | "in_progress" | "completed" | "archived";

export type Campaign = {
  id: string;
  name: string;
  status: CampaignStatus;
  description?: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
};

export type CampaignBasics = {
  name: string;
  description: string;
  brandName?: string;
  productName?: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
};

export type AudiencePersona = {
  demographics: {
    ageRange: string;
    gender: string;
    location: string;
    income: string;
  };
  psychographics: {
    interests: string[];
    values: string[];
    lifestyle: string;
  };
  behaviors: {
    purchasePatterns: string[];
    mediaConsumption: string[];
    brandInteractions: string[];
  };
};

export type Audience = {
  id: string;
  name: string;
  description: string;
  size?: number;
  persona?: AudiencePersona;
};

export type StrategicObjective = {
  id: string;
  title: string;
  description: string;
  kpis: string[];
  priority: "high" | "medium" | "low";
};

export type CampaignStrategy = {
  approach: string;
  channels: string[];
  timeline: string;
  budget: number;
};

export type CampaignConcept = {
  id: string;
  title: string;
  description: string;
  visualElements: string[];
  messaging: string;
};

export type CreateCampaignDto = Omit<
  Campaign,
  "id" | "createdAt" | "updatedAt" | "createdBy"
>;

export type UpdateCampaignDto = Partial<CreateCampaignDto>;
