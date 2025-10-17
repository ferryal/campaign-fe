import { createFileRoute } from "@tanstack/react-router";
import { CampaignPage } from "./campaign/CampaignPage";

export const Route = createFileRoute("/")({
  component: CampaignPage,
});
