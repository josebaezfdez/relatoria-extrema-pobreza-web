/** Only complete, valid calendar dates can be exported as exact timestamps. */
export function exactEditorialDate(value: string): string | undefined {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const parsed = new Date(`${value}T12:00:00Z`);
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) return undefined;
  return value;
}

export function editorialRssDate(value: string): string | undefined {
  const exact = exactEditorialDate(value);
  return exact ? new Date(`${exact}T12:00:00Z`).toUTCString() : undefined;
}
