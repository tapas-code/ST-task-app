export default function convertToISO8601(dateStr: string): string {
  const date = new Date(dateStr);
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      999
    )
  );
  return utcDate.toISOString(); // Convert to ISO 8601 format
}
