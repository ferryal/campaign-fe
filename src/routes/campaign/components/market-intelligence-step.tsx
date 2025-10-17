import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TargetAudienceSelector } from "../components/target-audience-selector";
import type { TargetAudience } from "../components/target-audience-selector";

interface MarketIntelligenceStepProps {
  audiences: TargetAudience[];
  selectedAudiences: string[];
  onAudienceSelect: (audienceId: string) => void;
  onAudienceEdit: (audienceId: string) => void;
  onCreateNewAudience: () => void;
}

export function MarketIntelligenceStep({
  audiences,
  selectedAudiences,
  onAudienceSelect,
  onAudienceEdit,
  onCreateNewAudience,
}: MarketIntelligenceStepProps) {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Market Intelligence</h2>
        <p className="text-muted-foreground">
          Provide key insights on the market, competitors, audience, and past
          campaigns to guide strategy
        </p>
      </div>

      {/* Market & Product Background */}
      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Market & Product Background
        </Label>
        <Textarea
          placeholder="Enter market and product background..."
          defaultValue="TechNova operates in the growing SaaS automation market, valued at $20B with an annual growth rate of 12%. Customers perceive workflow automation as essential for scaling operations but cite integration complexity as a challenge. Opportunities exist in mid-sized enterprises adopting digital transformation, while prevailing trend..."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      {/* Competitors */}
      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Competitors
        </Label>
        <Textarea
          placeholder="Enter competitor information..."
          defaultValue="Direct competitors include Zapier and Integromat in local markets, while UiPath and Microsoft Power Automate dominate globally. Competitors are strong in ecosystem integrations and brand awareness, but many lack AI-powered predictive insights and user-friendly onboarding."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      {/* Target Audience */}
      <div className="relative">
        <Label className="absolute left-3 top-1 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Target Audience
        </Label>
        <TargetAudienceSelector
          audiences={audiences}
          selectedAudiences={selectedAudiences}
          onSelect={onAudienceSelect}
          onEdit={onAudienceEdit}
          onCreateNew={onCreateNewAudience}
          className="h-[60px] resize-none bg-muted text-foreground pt-10 px-3 items-start"
        />
      </div>

      {/* Previous Campaigns & Learnings */}
      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Previous Campaigns & Learnings
        </Label>
        <Textarea
          placeholder="Enter previous campaigns and learnings..."
          defaultValue="The 2024 campaign generated 5,000 qualified leads with a 12% conversion rate. What worked: product demo webinars and targeted LinkedIn ads. What didn't: generic email outreach with low engagement. Key lesson: personalized campaigns and industry-focused messaging significantly outperform broad targeting."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>
    </div>
  );
}
