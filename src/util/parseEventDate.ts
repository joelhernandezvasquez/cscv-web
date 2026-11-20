import { Events } from "@/interfaces/events";

export interface EventDateBadge {
  month: string; // 3-letter uppercase Spanish abbreviation, e.g. 'NOV'
  day: string;   // '21' or a range '13–15' (en dash)
}

const MONTHS: Record<string, string> = {
  enero: 'ENE',
  febrero: 'FEB',
  marzo: 'MAR',
  abril: 'ABR',
  mayo: 'MAY',
  junio: 'JUN',
  julio: 'JUL',
  agosto: 'AGO',
  septiembre: 'SEP',
  setiembre: 'SEP',
  octubre: 'OCT',
  noviembre: 'NOV',
  diciembre: 'DIC',
  // English month names (some events are typed in English in Strapi). The badge stays in Spanish.
  january: 'ENE',
  february: 'FEB',
  march: 'MAR',
  april: 'ABR',
  may: 'MAY',
  june: 'JUN',
  july: 'JUL',
  august: 'AGO',
  september: 'SEP',
  october: 'OCT',
  november: 'NOV',
  december: 'DIC',
};

const MONTH_REGEX = new RegExp(`\\b(${Object.keys(MONTHS).join('|')})\\b`);
// 1-2 digit numbers that are not part of a time such as "7:30".
const DAY_CANDIDATE_REGEX = /(?<![\d:])\d{1,2}(?![\d:])/g;
// Month-first order: "Noviembre 13", "November 21, 2024", "Noviembre 13 al 15", "November 5-6".
const DAYS_AFTER_MONTH_REGEX = /^\s*(\d{1,2})(?![\d:])(?:\s*(?:-|–|—|to|al|a)\s*(\d{1,2})(?![\d:]))?/;

type BlockNode = { text?: string; children?: BlockNode[] };

const nodeText = (node: BlockNode): string => {
  if (typeof node.text === 'string') return node.text;
  return (node.children ?? []).map(nodeText).join('');
};

/**
 * Reads the first block of `eventDates` and extracts a month and day (or day range).
 * Accepted formats, in Spanish or English: "13–15 de noviembre", "Viernes 13 – Domingo 15 de noviembre, 2026",
 * "Noviembre 13 al 15", "Saturday November 21, 2024 3:00PM".
 * Uses the first month name found and the day numbers that come before it (or, if none, right after it), so
 * "30 de noviembre – 2 de diciembre" gives NOV 30. Returns null when no month or day is found.
 */
export const parseEventDate = (eventDates: Events['eventDates']): EventDateBadge | null => {
  const [firstBlock] = (eventDates ?? []) as BlockNode[];
  if (!firstBlock) return null;

  const text = nodeText(firstBlock)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

  const monthMatch = MONTH_REGEX.exec(text);
  if (!monthMatch) return null;

  const isDay = (day: number) => day >= 1 && day <= 31;

  // Day-first order ("13–15 de noviembre") reads the numbers before the month.
  let days = (text.slice(0, monthMatch.index).match(DAY_CANDIDATE_REGEX) ?? [])
    .map(Number)
    .filter(isDay);

  // Month-first order ("November 21, 2024") reads the numbers right after the month.
  if (days.length === 0) {
    const afterMatch = DAYS_AFTER_MONTH_REGEX.exec(text.slice(monthMatch.index + monthMatch[0].length));
    days = (afterMatch ? [afterMatch[1], afterMatch[2]] : [])
      .filter((value): value is string => value !== undefined)
      .map(Number)
      .filter(isDay);
  }
  if (days.length === 0) return null;

  const first = days[0];
  const last = days[days.length - 1];

  return {
    month: MONTHS[monthMatch[1]],
    day: first === last ? String(first) : `${first}–${last}`,
  };
};
