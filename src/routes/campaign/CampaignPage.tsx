import { useState } from "react";
import { Stepper } from "@/components/ui/stepper";
import { SmartTip } from "@/components/ui/smart-tip";
import { AudienceDetailModal } from "./components/audience-detail-modal";
import type { AudiencePersona } from "./components/audience-detail-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Share,
  Ellipsis,
  Link2,
  Download,
  Copy,
  Trash2,
  Archive,
} from "lucide-react";
import { CampaignBasicsStep } from "./components/campaign-basics-step";
import { MarketIntelligenceStep } from "./components/market-intelligence-step";
import { StrategicObjectivesStep } from "./components/strategic-objectives-step";
import { StrategyStep } from "./components/strategy-step";
import { ConceptStep } from "./components/concept-step";
import { ExecutionStep } from "./components/execution-step";
import {
  steps,
  defaultAudiences,
  soloLivingPersona,
} from "@/constant/campaign-data";

export function CampaignPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [showSmartTip, setShowSmartTip] = useState(true);
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([
    "solo-living",
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAudienceName, setModalAudienceName] = useState("");
  const [modalPersona, setModalPersona] = useState<AudiencePersona | undefined>(
    undefined
  );
  const [isNewAudience, setIsNewAudience] = useState(false);

  const handleAudienceSelect = (audienceId: string) => {
    setSelectedAudiences((prev) =>
      prev.includes(audienceId)
        ? prev.filter((id) => id !== audienceId)
        : [...prev, audienceId]
    );
  };

  const handleAudienceEdit = (audienceId: string) => {
    const audience = defaultAudiences.find((a) => a.id === audienceId);
    if (audience) {
      setModalAudienceName(audience.name);
      if (audienceId === "solo-living") {
        setModalPersona(soloLivingPersona);
      } else {
        setModalPersona(undefined);
      }
      setIsNewAudience(false);
      setModalOpen(true);
    }
  };

  const handleCreateNewAudience = () => {
    setModalAudienceName("New Audience");
    setModalPersona(undefined);
    setIsNewAudience(true);
    setModalOpen(true);
  };

  const handleNext = () => {
    if (currentStep === 0 && currentSubStep < 2) {
      setCurrentSubStep(currentSubStep + 1);
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(0);
    }
  };

  const handleBack = () => {
    if (currentStep === 0 && currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (currentStep - 1 === 0) {
        setCurrentSubStep(2);
      }
    }
  };

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    console.log("Link copied to clipboard");
  };

  const handleDownload = () => {
    console.log("Downloading campaign...");
  };

  const handleArchive = () => {
    console.log("Archiving campaign...");
  };

  const handleDelete = () => {
    console.log("Deleting campaign...");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-background px-8 py-4 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Nike Concept 1st Try</h1>
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
              In Progress
            </span>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 bg-[#1e293b] text-white"
                >
                  <Share className="w-4 h-4" />
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => handleShare("email")}>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Share via Email
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare("slack")}>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5zm2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5zm8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2zm-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5zm-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z" />
                  </svg>
                  Share to Slack
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare("teams")}>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.625 8.127v7.746a1.127 1.127 0 0 1-1.127 1.127h-7.746a1.127 1.127 0 0 1-1.127-1.127V8.127a1.127 1.127 0 0 1 1.127-1.127h7.746a1.127 1.127 0 0 1 1.127 1.127z" />
                    <circle cx="8.25" cy="8.25" r="3" />
                    <path d="M6.375 17.625v-1.5a2.625 2.625 0 0 1 2.625-2.625h1.5" />
                  </svg>
                  Share to Teams
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleCopyLink}>
                  <Link2 className="w-4 h-4 mr-2" />
                  Copy Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Ellipsis className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyLink}>
                  <Copy className="w-4 h-4 mr-2" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleArchive}>
                  <Archive className="w-4 h-4 mr-2" />
                  Archive
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="text-red-600 focus:text-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-[26%] border-r bg-background relative">
          <div className="h-[calc(100vh-73px)] overflow-y-auto">
            <div className="p-8 pb-32">
              <Stepper
                steps={steps}
                currentStep={currentStep}
                currentSubStep={currentSubStep}
                onStepClick={setCurrentStep}
                onSubStepClick={(stepIndex, subStepIndex) => {
                  setCurrentStep(stepIndex);
                  setCurrentSubStep(subStepIndex);
                }}
              />
            </div>
          </div>

          {showSmartTip && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-background">
              <SmartTip onClose={() => setShowSmartTip(false)}>
                Clear objectives make strategy generation more focused and
                effective.
              </SmartTip>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
          <div className="flex-1 overflow-y-auto p-8">
            <div className="w-full">
              {currentStep === 0 && currentSubStep === 0 && (
                <CampaignBasicsStep />
              )}

              {currentStep === 0 && currentSubStep === 1 && (
                <MarketIntelligenceStep
                  audiences={defaultAudiences}
                  selectedAudiences={selectedAudiences}
                  onAudienceSelect={handleAudienceSelect}
                  onAudienceEdit={handleAudienceEdit}
                  onCreateNewAudience={handleCreateNewAudience}
                />
              )}

              {currentStep === 0 && currentSubStep === 2 && (
                <StrategicObjectivesStep />
              )}

              {currentStep === 1 && <StrategyStep />}

              {currentStep === 2 && <ConceptStep />}

              {currentStep === 3 && <ExecutionStep />}
            </div>
          </div>

          <div className="sticky bottom-0 left-0 right-0 bg-background px-8 py-6 z-20">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0 && currentSubStep === 0}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                className="bg-[#1e293b] text-white"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AudienceDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        audienceName={modalAudienceName}
        persona={modalPersona}
        isNewAudience={isNewAudience}
      />
    </div>
  );
}
