import type { ReactNode } from "react";
import { Lightbulb, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SmartTipProps {
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export function SmartTip({
  title = "Smart Tip",
  children,
  onClose,
  className,
}: SmartTipProps) {
  return (
    <div className={cn("relative bg-[#FFFBEB] rounded-lg p-5", className)}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <div className="flex flex-col items-start gap-3 pr-6">
        <div className="flex-shrink-0">
          <Lightbulb className="w-7 h-7 text-amber-500" />
        </div>
        <div className="flex-1 mt-1">
          <h4 className="font-semibold text-[#1F2937] text-base mb-1.5">
            {title}
          </h4>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
