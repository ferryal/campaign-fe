import { createFileRoute } from "@tanstack/react-router";
import { CampaignPage } from "./CampaignPage";

export const Route = createFileRoute("/campaign")({
  component: CampaignPage,
});
