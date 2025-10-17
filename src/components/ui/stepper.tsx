import type { LucideIcon } from "lucide-react";
import { Circle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepItem {
  id: string;
  label: string;
  icon: LucideIcon;
  subSteps?: string[];
}

export interface StepperProps {
  steps: StepItem[];
  currentStep: number;
  currentSubStep?: number;
  onStepClick?: (stepIndex: number) => void;
  onSubStepClick?: (stepIndex: number, subStepIndex: number) => void;
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  currentSubStep,
  onStepClick,
  onSubStepClick,
  className,
}: StepperProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {steps.map((step, stepIndex) => {
        const isActive = stepIndex === currentStep;
        const isCompleted = stepIndex < currentStep;

        return (
          <div key={step.id} className="relative">
            {/* Step Header */}
            <button
              onClick={() => onStepClick?.(stepIndex)}
              className={cn(
                "flex items-start gap-3 w-full text-left transition-colors",
                isActive && "text-foreground",
                !isActive && !isCompleted && "text-muted-foreground",
                isCompleted && "text-foreground"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl transition-colors flex-shrink-0",
                  isActive && "bg-[#1e293b] text-white",
                  !isActive && !isCompleted && "bg-muted text-muted-foreground",
                  isCompleted && "bg-[#1e293b] text-white"
                )}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 pt-1">
                <div className="text-xs text-muted-foreground">
                  Step {stepIndex + 1}
                </div>
                <div className="font-semibold text-base">{step.label}</div>
                {stepIndex === 0 && isActive && (
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    The more details you provide, the more accurate your
                    generated strategy will be.
                  </div>
                )}
              </div>
            </button>

            {/* Sub Steps */}
            {step.subSteps && isActive && (
              <div className="ml-[50px] mt-4 space-y-1">
                {step.subSteps.map((subStep, subStepIndex) => {
                  const isSubStepActive = subStepIndex === currentSubStep;
                  const isSubStepCompleted =
                    currentSubStep !== undefined &&
                    subStepIndex < currentSubStep;

                  return (
                    <button
                      key={subStepIndex}
                      onClick={() => onSubStepClick?.(stepIndex, subStepIndex)}
                      className={cn(
                        "flex items-center justify-between gap-3 text-base w-full text-left py-3 px-4 rounded-md transition-colors",
                        isSubStepActive &&
                          "bg-muted font-medium text-foreground",
                        !isSubStepActive &&
                          !isSubStepCompleted &&
                          "text-foreground hover:bg-muted/50",
                        isSubStepCompleted && "text-foreground font-normal"
                      )}
                    >
                      <p className="flex-1 text-sm font-semibold">{subStep}</p>
                      {isSubStepCompleted ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                      ) : (
                        <Circle
                          className={cn(
                            "w-5 h-5 flex-shrink-0",
                            isSubStepActive && "text-border",
                            !isSubStepActive && "text-border"
                          )}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {stepIndex < steps.length - 1 && (
              <div
                className={cn(
                  "absolute left-6 top-14 w-[2px] h-10 transition-colors",
                  isCompleted ? "bg-border" : "bg-border"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
