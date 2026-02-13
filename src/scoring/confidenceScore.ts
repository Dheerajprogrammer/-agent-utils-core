import { LeadInput } from "../types";

export function confidenceScore(lead: LeadInput): number {
  let score = 0;

  if (lead.budget) score += 0.3;
  if (lead.timeline === "0-3") score += 0.4;
  if (lead.intent === "buy") score += 0.3;

  return Math.min(score, 1);
}
