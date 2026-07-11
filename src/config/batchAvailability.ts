/**
 * September 2026 installation batch availability.
 * Update BATCH_SPOTS_REMAINING as spots fill — set to 0 when full.
 */
export const BATCH_NAME = "September";
export const BATCH_YEAR = 2026;
export const BATCH_SPOTS_TOTAL = 8;
export const BATCH_SPOTS_REMAINING = 8;

export const isBatchFull = () => BATCH_SPOTS_REMAINING <= 0;
