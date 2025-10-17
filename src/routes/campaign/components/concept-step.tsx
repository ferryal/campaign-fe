import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ConceptStep() {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Concept</h2>
        <p className="text-muted-foreground">
          Creative concepts and campaign ideas
        </p>
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Creative Concept
        </Label>
        <Textarea
          placeholder="Creative concept will be generated here..."
          defaultValue="Campaign theme: 'Work Smarter, Not Harder'. Visual concept features modern, clean designs with blue and white color palette, showcasing before/after scenarios of workflow automation. Hero imagery will depict diverse professionals confidently managing complex tasks with ease, supported by subtle AI visualization elements."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Campaign Elements
        </Label>
        <Textarea
          placeholder="Campaign elements will be generated here..."
          defaultValue="1) Hero video showcasing product in action, 2) Interactive product demo experience, 3) Customer success stories and testimonials, 4) Educational webinar series, 5) LinkedIn thought leadership content, 6) Targeted email campaigns with personalized messaging."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>
    </div>
  );
}
