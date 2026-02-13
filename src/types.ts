export type IntentResult = {
  intent: string;
  confidence: number;
};

export type BudgetRange = {
  min: number;
  max: number;
  unit: "L";
  raw: string;
};

export type CommandResult = {
  command: string;
  key?: string;
  value?: string;
};

export type LeadInput = {
  budget?: number;
  timeline?: string;
  intent?: string;
};
