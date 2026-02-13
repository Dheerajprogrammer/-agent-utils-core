const store: Record<string, { count: number; expires: number }> = {};

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();

  if (!store[key] || store[key].expires < now) {
    store[key] = {
      count: 1,
      expires: now + windowMs
    };
    return true;
  }

  if (store[key].count < limit) {
    store[key].count += 1;
    return true;
  }

  return false;
}
