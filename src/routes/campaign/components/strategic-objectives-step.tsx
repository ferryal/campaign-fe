import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function StrategicObjectivesStep() {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Strategic Objectives</h2>
        <p className="text-muted-foreground">
          Define clear goals and success metrics for this campaign
        </p>
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Campaign Objectives
        </Label>
        <Textarea
          placeholder="Enter campaign objectives..."
          defaultValue="Increase brand awareness among mid-to-large enterprises, generate 10,000 qualified leads within 6 months, achieve 15% conversion rate from leads to demos, and establish TechNova as the leading AI-powered workflow automation solution."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Key Performance Indicators
        </Label>
        <Textarea
          placeholder="Enter KPIs..."
          defaultValue="Lead generation volume, conversion rate from lead to demo, demo to trial conversion, customer acquisition cost (CAC), return on ad spend (ROAS), brand awareness metrics (social media mentions, website traffic)."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Budget & Timeline
        </Label>
        <Textarea
          placeholder="Enter budget and timeline..."
          defaultValue="Total budget: $500,000. Timeline: 6 months (January - June 2025). Budget allocation: 40% digital advertising, 30% content marketing, 20% events and webinars, 10% tools and analytics."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>
    </div>
  );
}
