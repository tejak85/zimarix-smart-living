import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_SPOTS,
  isBatchFull,
  type SpotsData,
} from "@/config/batchAvailability";

const REFRESH_MS = 60_000;

type SpotsContextValue = SpotsData & {
  isFull: boolean;
  isLoading: boolean;
};

const SpotsContext = createContext<SpotsContextValue>({
  ...DEFAULT_SPOTS,
  isFull: isBatchFull(DEFAULT_SPOTS.remaining),
  isLoading: true,
});

function parseSpots(payload: unknown): SpotsData | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const data = payload as Record<string, unknown>;
  const remaining = Number(data.remaining);
  const total = Number(data.total);
  const year = Number(data.year);

  if (!Number.isFinite(remaining) || !Number.isFinite(total)) {
    return null;
  }

  return {
    remaining: Math.max(0, remaining),
    total: Math.max(1, total),
    batch: typeof data.batch === "string" ? data.batch : DEFAULT_SPOTS.batch,
    year: Number.isFinite(year) ? year : DEFAULT_SPOTS.year,
  };
}

export function SpotsProvider({ children }: { children: ReactNode }) {
  const [spots, setSpots] = useState<SpotsData>(DEFAULT_SPOTS);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSpots = useCallback(async (signal?: AbortSignal) => {
    try {
      const response = await fetch("/api/spots", {
        method: "GET",
        headers: { Accept: "application/json" },
        signal,
        cache: "no-store",
      });

      if (!response.ok) {
        return;
      }

      const parsed = parseSpots(await response.json());
      if (parsed) {
        setSpots(parsed);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      // Keep last known / default values on network failure.
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void fetchSpots(controller.signal);

    const interval = window.setInterval(() => {
      void fetchSpots();
    }, REFRESH_MS);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, [fetchSpots]);

  const value = useMemo<SpotsContextValue>(
    () => ({
      ...spots,
      isFull: isBatchFull(spots.remaining),
      isLoading,
    }),
    [spots, isLoading],
  );

  return <SpotsContext.Provider value={value}>{children}</SpotsContext.Provider>;
}

export function useSpots() {
  return useContext(SpotsContext);
}
