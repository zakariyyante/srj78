const EMPTY_VALUE_PARAMS = ['clickid', 'visit_id', 'dynamic2', 'tpdeh'] as const;

/**
 * Injects `gclid` into known affiliate params when they exist but are empty,
 * e.g. `...&clickid=` -> `...&clickid=<gclid>`.
 *
 * If no such params exist, it falls back to appending `gclid` as `?gclid=...` (or `&gclid=...`).
 */
export function withGclid(url: string, gclid?: string): string {
  if (!gclid) return url;

  try {
    const u = new URL(url);

    let filledAny = false;
    for (const key of EMPTY_VALUE_PARAMS) {
      if (!u.searchParams.has(key)) continue;
      const value = u.searchParams.get(key);
      if (value && value.trim().length > 0) continue;
      u.searchParams.set(key, gclid);
      filledAny = true;
    }

    if (!filledAny && !u.searchParams.has('gclid')) {
      u.searchParams.set('gclid', gclid);
    }

    return u.toString();
  } catch {
    // If URL parsing fails, do a best-effort append.
    if (url.includes('?')) return `${url}&gclid=${encodeURIComponent(gclid)}`;
    return `${url}?gclid=${encodeURIComponent(gclid)}`;
  }
}

