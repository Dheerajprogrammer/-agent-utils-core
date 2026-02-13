export function normalizeText(input: string): string {
  if (!input) return "";

  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
