import { useSpots } from "@/hooks/useSpots";

type AnnouncementBarProps = {
  onReserve: () => void;
};

export function AnnouncementBar({ onReserve }: AnnouncementBarProps) {
  const { remaining, total } = useSpots();

  return (
    <button
      type="button"
      onClick={onReserve}
      className="fixed inset-x-0 top-0 z-[60] flex h-10 w-full items-center justify-center bg-[#0d0d0d] px-3 text-center transition-colors hover:bg-[#141414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      aria-label={`September 2026 batch now open. ${remaining} of ${total} spots remaining. Reserve yours.`}
    >
      <span className="text-[13px] font-medium tracking-[0.04em] text-accent sm:hidden">
        Sept 2026 · {remaining} spots left →
      </span>
      <span className="hidden text-[13px] font-medium tracking-[0.04em] text-accent sm:inline">
        September 2026 batch now open · {remaining} of {total} spots remaining · Reserve
        yours →
      </span>
    </button>
  );
}
