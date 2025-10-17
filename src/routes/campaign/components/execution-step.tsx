import { createFileRoute } from "@tanstack/react-router";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ExecutionStep() {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Execution</h2>
        <p className="text-muted-foreground">
          Implementation plan and timeline
        </p>
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Execution Plan
        </Label>
        <Textarea
          placeholder="Execution plan will be generated here..."
          defaultValue="Phase 1 (Month 1-2): Brand awareness campaign launch, content creation, website optimization. Phase 2 (Month 3-4): Lead generation campaigns, webinar series, social media amplification. Phase 3 (Month 5-6): Conversion optimization, retargeting campaigns, customer success stories."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Resource Allocation
        </Label>
        <Textarea
          placeholder="Resource allocation will be generated here..."
          defaultValue="Team structure: Campaign Manager (1), Content Creators (2), Designers (2), Media Buyers (2), Data Analyst (1). External resources: Video production agency, PR agency for thought leadership. Tools: Marketing automation platform, Analytics suite, CRM integration."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/campaign/components/execution-step")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/campaign/components/execution-step"!</div>;
}
