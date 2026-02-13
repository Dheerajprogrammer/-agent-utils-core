export function extractEntities(text: string) {
  if (!text) return {};

  const budgetMatch = text.match(/(\d+)\s?(l|lac|lakh|cr)/i);
  const locationMatch = text.match(/in\s([a-zA-Z\s]+)/i);
  const timelineMatch = text.match(/(\d+)\s?(month|months|week|weeks)/i);

  return {
    budget: budgetMatch ? budgetMatch[1] : null,
    location: locationMatch ? locationMatch[1].trim() : null,
    timeline: timelineMatch ? timelineMatch[0] : null
  };
}
