import { Check, ChevronDown, Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface TargetAudience {
  id: string;
  name: string;
}

export interface TargetAudienceSelectorProps {
  audiences: TargetAudience[];
  selectedAudiences: string[];
  onSelect: (audienceId: string) => void;
  onEdit: (audienceId: string) => void;
  onCreateNew: () => void;
  className?: string;
}

export function TargetAudienceSelector({
  audiences,
  selectedAudiences,
  onSelect,
  onEdit,
  onCreateNew,
  className,
}: TargetAudienceSelectorProps) {
  const selectedNames = audiences
    .filter((a) => selectedAudiences.includes(a.id))
    .map((a) => a.name)
    .join(", ");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-between text-left hover:bg-muted border-input",
            className
          )}
        >
          <span
            className={cn(
              "font-medium",
              !selectedNames && "text-muted-foreground"
            )}
          >
            {selectedNames || "Select target audience"}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50 flex-shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] p-3">
        <DropdownMenuItem
          onSelect={() => {
            onCreateNew();
          }}
          className="flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors mb-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">Create New Audience</span>
        </DropdownMenuItem>

        <div className="space-y-1">
          {audiences.map((audience) => {
            const isSelected = selectedAudiences.includes(audience.id);
            return (
              <div
                key={audience.id}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors group"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(audience.id);
                  }}
                  className="flex items-center gap-3 flex-1 text-left"
                >
                  <div
                    className={cn(
                      "w-4 h-4 border-2 rounded flex items-center justify-center transition-colors",
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className="text-sm">{audience.name}</span>
                </button>
                <DropdownMenuItem
                  onSelect={() => {
                    onEdit(audience.id);
                  }}
                  className="p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background rounded cursor-pointer"
                  asChild
                >
                  <button type="button">
                    <Edit className="w-4 h-4 text-muted-foreground" />
                  </button>
                </DropdownMenuItem>
              </div>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
