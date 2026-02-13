import { BudgetRange } from "../types";

export function normalizeBudget(input: string): BudgetRange | null {
  if (!input) return null;

  const text = input.toLowerCase().replace(/,/g, "");
  let value: number | null = null;

  if (text.includes("cr")) {
    value = parseFloat(text) * 100;
  } else if (text.includes("l")) {
    value = parseFloat(text);
  } else {
    const num = parseFloat(text);
    if (!isNaN(num)) value = num;
  }

  if (!value || isNaN(value)) return null;

  return {
    min: Math.round(value * 0.9),
    max: Math.round(value * 1.1),
    unit: "L",
    raw: input
  };
}
