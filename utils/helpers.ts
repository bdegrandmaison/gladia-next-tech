export function formatEnumLabels(str: string): string {
  const formatted = str.replace(/([A-Z])/g, ' $1').toLowerCase();
  return formatted.charAt(1).toUpperCase() + formatted.slice(2);
}

export function validateEmailFormat(email: string) {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexp.test(email);
}
