import type { StepItem } from "@/components/ui/stepper";
import type { TargetAudience } from "@/routes/campaign/components/target-audience-selector";
import type { AudiencePersona } from "@/routes/campaign/components/audience-detail-modal";
import { FileText, Target, Lightbulb, Rocket } from "lucide-react";

export const steps: StepItem[] = [
  {
    id: "brief",
    label: "Brief",
    icon: FileText,
    subSteps: [
      "Campaign Basics",
      "Market Intelligence",
      "Strategic Objectives",
    ],
  },
  { id: "strategy", label: "Strategy", icon: Target },
  { id: "concept", label: "Concept", icon: Lightbulb },
  { id: "execution", label: "Execution", icon: Rocket },
];

export const defaultAudiences: TargetAudience[] = [
  { id: "solo-living", name: "Solo Living" },
  { id: "enterpreneur", name: "Enterpreneur" },
  { id: "designer", name: "Designer" },
  { id: "developer", name: "Developer" },
  { id: "marketer", name: "Marketer" },
];

export const soloLivingPersona: AudiencePersona = {
  name: "Marly Queen",
  quote: "I thrive on connecting with people and staying ahead of new ideas.",
  gender: "Female",
  age: 34,
  location: "Urban city",
  relationshipStatus: "Single",
  title: "Marketing Manager",
  education: "Bachelor's Degree in Marketing",
  demographic:
    "Age: 34, Gender: Female, Marital status: Single, Occupation: Marketing Manager, Location: Urban city",
  lifestyles:
    "Enjoys attending networking events, often socializes with colleagues after work, invests in personal growth workshops, and keeps up with marketing trends.",
  behavioral:
    "Frequently engages with digital marketing platforms, actively experiments with new campaign tools, and is quick to adopt innovative marketing strategies.",
  psychographicAttitudinal:
    "Believes in the power of creativity and collaboration, values strong professional connections, confident in adapting to change, and open to AI tools that enhance (not replace) human creativity.",
  personaPrompt:
    "A 34-year-old extroverted woman living in the city, working as a marketing manager. Independent, outgoing, and enjoys socializing.",
  goals: [
    "Expand her professional network",
    "Stay updated with the latest marketing trends",
    "Achieve career growth and leadership roles",
    "Stay updated with the latest marketing trends",
  ],
  motivations: [
    "Growing her career and achieving recognition in her field",
    "Building strong professional and social connections",
    "Staying ahead of marketing trends and innovations",
    "Personal development and self-improvement",
  ],
};
