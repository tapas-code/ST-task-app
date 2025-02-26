export default function convertToISO8601(dateStr: string): string {
  const date = new Date(dateStr);
  date.setUTCHours(23, 59, 59, 999); // Set time to end of the day in UTC
  return date.toISOString(); // Convert to ISO 8601 format
}
