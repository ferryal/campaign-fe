import {
  X,
  Upload,
  Briefcase,
  MapPin,
  Heart,
  GraduationCap,
  User,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export interface AudiencePersona {
  name: string;
  quote: string;
  gender: string;
  age: number;
  location: string;
  relationshipStatus: string;
  title: string;
  education: string;
  avatar?: string;
  demographic: string;
  lifestyles: string;
  behavioral: string;
  psychographicAttitudinal: string;
  personaPrompt: string;
  goals: string[];
  motivations: string[];
}

export interface AudienceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  audienceName: string;
  persona?: AudiencePersona;
  isNewAudience?: boolean;
}

export function AudienceDetailModal({
  isOpen,
  onClose,
  audienceName,
  persona,
  isNewAudience = false,
}: AudienceDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-xl shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden border border-border">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-background">
          <h2 className="text-lg font-semibold">{audienceName}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-muted rounded-md transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {isNewAudience ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Fill in the details to create a new audience persona</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column - Input Fields */}
              <div className="space-y-6">
                {/* Demographic */}
                <div className="relative">
                  <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
                    Demographic
                  </Label>
                  <Textarea
                    placeholder="Enter demographic information..."
                    defaultValue={persona?.demographic}
                    className="min-h-[100px] resize-none bg-muted font-medium text-foreground pt-10"
                  />
                </div>

                {/* Lifestyles */}
                <div className="relative">
                  <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
                    Lifestyles
                  </Label>
                  <Textarea
                    placeholder="Enter lifestyle information..."
                    defaultValue={persona?.lifestyles}
                    className="min-h-[100px] resize-none bg-muted font-medium text-foreground pt-10"
                  />
                </div>

                {/* Behavioral */}
                <div className="relative">
                  <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
                    Behavioral
                  </Label>
                  <Textarea
                    placeholder="Enter behavioral information..."
                    defaultValue={persona?.behavioral}
                    className="min-h-[100px] resize-none bg-muted font-medium text-foreground pt-10"
                  />
                </div>

                {/* Psychographic & Attitudinal */}
                <div className="relative">
                  <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
                    Psychographic & Attitudinal
                  </Label>
                  <Textarea
                    placeholder="Enter psychographic information..."
                    defaultValue={persona?.psychographicAttitudinal}
                    className="min-h-[100px] resize-none bg-muted font-medium text-foreground pt-10"
                  />
                </div>

                {/* Persona Prompt */}
                <div className="relative">
                  <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
                    Persona Prompt
                  </Label>
                  <Textarea
                    placeholder="Enter persona prompt..."
                    defaultValue={persona?.personaPrompt}
                    className="min-h-[100px] resize-none bg-muted font-medium text-foreground pt-10"
                  />
                </div>

                {/* Upload Documents */}
                <div>
                  <h3 className="font-semibold mb-3 text-sm">
                    Upload Documents
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Upload interview notes, audience docs, or research
                    (optional)
                  </p>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-muted-foreground transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Click to upload your file or drag & drop here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supported file PDF, XLSX, WORD and maximum size 5MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Tabs and Persona Card */}
              <div>
                <Tabs defaultValue="persona" className="w-full">
                  <div className="bg-muted/40 rounded-xl border border-border/50 overflow-hidden">
                    <TabsList className="w-full h-auto bg-muted/50 rounded-none p-2 justify-start gap-2">
                      <TabsTrigger
                        value="persona"
                        className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md px-4 py-2"
                      >
                        Persona Detail
                      </TabsTrigger>
                      <TabsTrigger
                        value="livechat"
                        className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md px-4 py-2"
                      >
                        Live Chat
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="persona" className="mt-0 p-6">
                      {/* Avatar and Name */}
                      <div className="flex flex-col items-center text-center mb-6">
                        <Avatar className="w-24 h-24 mb-4">
                          <AvatarImage src={persona?.avatar} />
                          <AvatarFallback className="text-2xl">
                            {persona?.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold mb-1">
                          {persona?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground italic">
                          "{persona?.quote}"
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                            <User className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">
                              {persona?.gender}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Gender
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">
                              {persona?.age} Years Old
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Age
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">
                              {persona?.location}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Location
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Heart className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">
                              {persona?.relationshipStatus}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Relationship status
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Briefcase className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">
                              {persona?.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Title
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-background rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                            <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">
                              {persona?.education}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Education
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-foreground mb-4 leading-[1.7]">
                        {persona?.name} is a {persona?.age}-year-old{" "}
                        {persona?.gender.toLowerCase()} living solo in the city
                        and working as a {persona?.title.toLowerCase()}. She
                        enjoys socializing with colleagues after work, attending
                        networking events, and investing in her personal and
                        professional growth. {persona?.name} thrives in dynamic
                        environments where creativity and collaboration are
                        highly valued.
                      </p>

                      <p className="text-sm text-foreground mb-6 leading-[1.7]">
                        She actively experiments with new tools and strategies,
                        keeping herself at the forefront of marketing
                        innovations, and sees technology as a way to enhance
                        (not replace) human creativity.
                      </p>

                      {/* Goals */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="w-4 h-4 text-foreground" />
                          <h4 className="font-semibold text-sm">Goals</h4>
                        </div>
                        <div className="space-y-2">
                          {persona?.goals.map((goal, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                                <svg
                                  className="w-4 h-4 text-green-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm text-foreground leading-[1.7]">
                                {goal}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Motivations */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Heart className="w-4 h-4 text-foreground" />
                          <h4 className="font-semibold text-sm">Motivations</h4>
                        </div>
                        <div className="space-y-2">
                          {persona?.motivations.map((motivation, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                                <svg
                                  className="w-4 h-4 text-green-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm text-foreground leading-[1.7]">
                                {motivation}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="livechat" className="mt-0 p-6">
                      <div className="text-center py-12 text-muted-foreground">
                        <p>Live chat feature coming soon</p>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t bg-muted/20">
          <Button
            variant="outline"
            onClick={onClose}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            Remove
          </Button>
          <Button
            onClick={onClose}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
