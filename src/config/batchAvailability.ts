/**
 * Shared batch defaults — used as client fallback when /api/spots is unavailable.
 * Live values come from GET /api/spots (Vercel env: SPOTS_REMAINING).
 */
export const BATCH_NAME = "September";
export const BATCH_YEAR = 2026;
export const BATCH_SPOTS_TOTAL = 8;
export const BATCH_SPOTS_REMAINING = 8;

export const isBatchFull = (remaining = BATCH_SPOTS_REMAINING) => remaining <= 0;

export type SpotsData = {
  remaining: number;
  total: number;
  batch: string;
  year: number;
};

export const DEFAULT_SPOTS: SpotsData = {
  remaining: BATCH_SPOTS_REMAINING,
  total: BATCH_SPOTS_TOTAL,
  batch: BATCH_NAME,
  year: BATCH_YEAR,
};
