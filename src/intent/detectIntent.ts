import { IntentResult } from "../types";

const INTENT_RULES: Record<string, RegExp> = {
  site_visit: /visit|see|come|schedule/i,
  buy: /buy|purchase/i,
  invest: /invest|investment/i,
  brochure: /brochure|pdf|details/i,
  callback: /call|callback|ring/i
};

export function detectIntent(text: string): IntentResult {
  if (!text) {
    return { intent: "unknown", confidence: 0 };
  }

  for (const intent in INTENT_RULES) {
    if (INTENT_RULES[intent].test(text)) {
      return { intent, confidence: 0.8 };
    }
  }

  return { intent: "unknown", confidence: 0.3 };
}
