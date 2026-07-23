/**
 * Live batch availability for the homepage.
 * Update SPOTS_REMAINING in Vercel env vars to change without redeploying,
 * or edit the defaults below and redeploy.
 *
 * GET /api/spots → { remaining, total, batch, year }
 */
const DEFAULTS = {
  remaining: 3,
  total: 8,
  batch: "September",
  year: 2026,
};

export default function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const remaining = Number.parseInt(
    process.env.SPOTS_REMAINING ?? String(DEFAULTS.remaining),
    10,
  );
  const total = Number.parseInt(
    process.env.SPOTS_TOTAL ?? String(DEFAULTS.total),
    10,
  );

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=60");
  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    remaining: Number.isFinite(remaining) ? Math.max(0, remaining) : DEFAULTS.remaining,
    total: Number.isFinite(total) ? Math.max(1, total) : DEFAULTS.total,
    batch: process.env.SPOTS_BATCH || DEFAULTS.batch,
    year: Number.parseInt(process.env.SPOTS_YEAR ?? String(DEFAULTS.year), 10) || DEFAULTS.year,
  });
}
