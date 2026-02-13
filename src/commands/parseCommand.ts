import { CommandResult } from "../types";

export function parseCommand(input: string): CommandResult | null {
  if (!input || !input.startsWith("/")) return null;

  const tokens = input.slice(1).trim().split(" ");
  const command = tokens[0];
  const key = tokens[1];
  const value = tokens.slice(2).join(" ");

  return {
    command,
    key,
    value: value || undefined
  };
}
