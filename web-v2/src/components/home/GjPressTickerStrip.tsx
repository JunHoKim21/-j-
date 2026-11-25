import { CLINIC_PRESS_RECORDS } from "@/data/urology-media";

export function GjPressTickerStrip() {
  const repeatedItems = [...CLINIC_PRESS_RECORDS, ...CLINIC_PRESS_RECORDS];

  return (
    <section
      aria-label="학술 활동 및 언론 출연 이력"
      className="overflow-hidden border-t border-black/10 bg-white py-6 text-black"
    >
      <div className="gj-marquee-track items-center gap-12">
        {repeatedItems.map((record, idx) => (
          <div
            key={`${record.id}-${idx}`}
            className="flex shrink-0 items-center gap-3 pr-4"
          >
            <span className="rounded-full bg-[#f6f6f6] px-3 py-1 text-[11px] font-bold text-gj-brass-deep">
              {record.kind}
            </span>
            <span className="text-[15px] font-bold tracking-tight text-black/85">
              {record.outlet}
            </span>
            <span className="hidden text-xs text-gj-muted sm:inline">
              {record.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
