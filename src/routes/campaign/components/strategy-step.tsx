import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function StrategyStep() {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Strategy</h2>
        <p className="text-muted-foreground">
          Develop strategic approach and messaging framework
        </p>
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Strategic Approach
        </Label>
        <Textarea
          placeholder="Strategic approach will be generated here..."
          defaultValue="Based on the market intelligence and objectives, we will focus on a multi-channel approach emphasizing thought leadership, product education, and personalized outreach to decision-makers in mid-to-large enterprises. The strategy will leverage AI-powered insights to demonstrate TechNova's unique value proposition."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Messaging Framework
        </Label>
        <Textarea
          placeholder="Messaging framework will be generated here..."
          defaultValue="Core message: Transform your business operations with intelligent automation that learns and adapts. Key pillars: 1) Efficiency - Save time on repetitive tasks, 2) Intelligence - AI-powered insights for better decisions, 3) Integration - Seamlessly connects with your existing tools."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>
    </div>
  );
}
