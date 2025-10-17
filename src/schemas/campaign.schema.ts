import { z } from "zod";

export const campaignStatusSchema = z.enum([
  "draft",
  "in_progress",
  "completed",
  "archived",
]);

export const campaignBasicsSchema = z.object({
  name: z
    .string()
    .min(3, "Campaign name must be at least 3 characters")
    .max(100),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500),
  brandName: z.string().optional(),
  productName: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  budget: z.number().positive("Budget must be positive").optional(),
});

export const audiencePersonaSchema = z.object({
  demographics: z.object({
    ageRange: z.string().min(1, "Age range is required"),
    gender: z.string().min(1, "Gender is required"),
    location: z.string().min(1, "Location is required"),
    income: z.string().min(1, "Income is required"),
  }),
  psychographics: z.object({
    interests: z.array(z.string()).min(1, "At least one interest is required"),
    values: z.array(z.string()).min(1, "At least one value is required"),
    lifestyle: z.string().min(1, "Lifestyle is required"),
  }),
  behaviors: z.object({
    purchasePatterns: z.array(z.string()),
    mediaConsumption: z.array(z.string()),
    brandInteractions: z.array(z.string()),
  }),
});

export const audienceSchema = z.object({
  name: z.string().min(2, "Audience name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  size: z.number().positive().optional(),
  persona: audiencePersonaSchema.optional(),
});

export const strategicObjectiveSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  kpis: z.array(z.string()).min(1, "At least one KPI is required"),
  priority: z.enum(["high", "medium", "low"]),
});

export const campaignStrategySchema = z.object({
  approach: z.string().min(10, "Approach must be at least 10 characters"),
  channels: z.array(z.string()).min(1, "At least one channel is required"),
  timeline: z.string().min(1, "Timeline is required"),
  budget: z.number().positive("Budget must be positive"),
});

export const campaignConceptSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  visualElements: z.array(z.string()),
  messaging: z.string().min(10, "Messaging must be at least 10 characters"),
});

export const createCampaignSchema = z.object({
  name: z.string().min(3, "Campaign name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: campaignStatusSchema.default("draft"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  budget: z.number().positive().optional(),
});

export const updateCampaignSchema = createCampaignSchema.partial();

export type CampaignBasicsInput = z.infer<typeof campaignBasicsSchema>;
export type AudiencePersonaInput = z.infer<typeof audiencePersonaSchema>;
export type AudienceInput = z.infer<typeof audienceSchema>;
export type StrategicObjectiveInput = z.infer<typeof strategicObjectiveSchema>;
export type CampaignStrategyInput = z.infer<typeof campaignStrategySchema>;
export type CampaignConceptInput = z.infer<typeof campaignConceptSchema>;
export type CreateCampaignInput = z.infer<typeof createCampaignSchema>;
export type UpdateCampaignInput = z.infer<typeof updateCampaignSchema>;
