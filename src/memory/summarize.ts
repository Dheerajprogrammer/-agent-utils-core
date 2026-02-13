export function summarizeConversation(
  messages: string[],
  limit: number = 3
): string {
  if (!messages || messages.length === 0) return "";

  return messages.slice(-limit).join(" | ");
}
