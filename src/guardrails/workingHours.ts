export function withinWorkingHours({
  now,
  start,
  end
}: {
  now: string;
  start: string;
  end: string;
}): boolean {
  return now >= start && now <= end;
}
