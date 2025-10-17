import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, CloudUpload, X, File } from "lucide-react";
import { useState, useRef } from "react";

export function CampaignBasicsStep() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Campaign Basics</h2>
          <p className="text-muted-foreground">
            Provide essential info about client, product, and resources.
          </p>
        </div>
        <Button variant="outline" className="bg-muted text-foreground">
          <Download className="w-4 h-4" />
          Import Brief
        </Button>
      </div>

      {/* Client Details */}
      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Client Details
        </Label>
        <Textarea
          placeholder="Enter client details..."
          defaultValue="TechNova Inc. – a global SaaS company specializing in AI-driven business solutions. Their platform helps enterprises streamline operations, reduce costs, and scale efficiently. Previous projects include launching workflow automation tools and cloud integration campaigns. Core brand values: Innovation, Reliability, and Cu..."
          className="min-h-[120px] resize-none bg-muted font-medium text-foreground pt-10"
        />
      </div>

      {/* Product/Service */}
      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Product/Service
        </Label>
        <Textarea
          placeholder="Enter product/service details..."
          defaultValue="The focus of this campaign is NovaFlow, TechNova's new AI-powered workflow automation product. It targets mid-to-large enterprises seeking to optimize repetitive tasks, integrate with existing CRMs, and enhance operational efficiency. Key features: AI-driven task automation, predictive analytics, and seamless multi-platfo..."
          className="min-h-[120px] resize-none pt-10 bg-muted text-foreground"
        />
      </div>

      {/* Mandatory Requirements */}
      <div className="relative">
        <Label className="absolute left-3 top-3 text-sm font-medium text-muted-foreground bg-muted px-1 z-10">
          Mandatory Requirements
        </Label>
        <Textarea
          placeholder="Enter mandatory requirements..."
          defaultValue={`Must include TechNova's primary logo and tagline: "Smarter Workflows, Stronger Growth.". Visual elements should align with the official blue-and-white brand palette. Avoid direct competitor comparisons (e.g., Zapier, UiPath). Ensure compliance with GDPR, data privacy regulations, and disclaimers on AI predictions.`}
          className="min-h-[120px] resize-none pt-10 bg-muted text-foreground"
        />
      </div>

      {/* Available Assets & Resources */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">
          Available Assets & Resources
        </Label>
        <p className="text-sm text-muted-foreground">
          Add all relevant documents such as logos, images, research, or
          references.
        </p>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.xlsx,.xls,.docx,.doc"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Upload area */}
        <div
          className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-muted-foreground transition-colors cursor-pointer bg-muted text-foreground"
          onClick={handleUploadClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <CloudUpload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm font-medium mb-1">
            Click to upload your file or drag & drop here
          </p>
          <p className="text-xs text-muted-foreground">
            Supported file PDF, XLSX, WORD and maximum size 5MB
          </p>
        </div>

        {/* Uploaded files list */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">
              Uploaded Files:
            </p>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <File className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
