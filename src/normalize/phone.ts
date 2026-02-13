export function normalizePhone(input: string) {
  if (!input) return { valid: false };

  const digits = input.replace(/\D/g, "");

  if (digits.length < 10) {
    return { valid: false };
  }

  const number = digits.slice(-10);
  const countryCode =
    digits.length > 10 ? `+${digits.slice(0, -10)}` : "+91";

  return {
    countryCode,
    number,
    valid: true
  };
}
