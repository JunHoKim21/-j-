import { CLINIC_PHYSICIANS, type ClinicShiftState } from "@/data/clinic-profile";
import { cn } from "@/lib/cn";

const SHIFT_DAYS = ["월", "화", "수", "목", "금", "토"] as const;

function ShiftPill({ state }: { state: ClinicShiftState }) {
  if (state === "NONE") {
    return <span className="text-xs font-medium text-slate-300">—</span>;
  }

  if (state === "CLOSED") {
    return (
      <span className="inline-flex w-full items-center justify-center rounded-md bg-slate-200/80 px-1 py-1 text-[11px] font-semibold text-slate-500 sm:text-xs">
        휴진
      </span>
    );
  }

  if (state === "SURGERY_OPEN") {
    return (
      <span className="inline-flex w-full items-center justify-center rounded-md bg-gj-navy/10 px-0.5 py-1 text-[10.5px] font-bold leading-tight text-gj-navy sm:text-xs">
        수술·진료
      </span>
    );
  }

  return (
    <span className="inline-flex w-full items-center justify-center rounded-md bg-gj-blue/12 px-1 py-1 text-[11px] font-bold text-gj-blue sm:text-xs">
      진료
    </span>
  );
}

export function ClinicScheduleGrid({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div id="clinic-hours" className={cn("scroll-mt-28", className)}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CLINIC_PHYSICIANS.map((doc) => (
          <div
            key={doc.id}
            className="rounded-2xl bg-gj-cool p-4 sm:p-6"
          >
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-gj-navy sm:text-lg">
                  {doc.name} {doc.roleTitle}
                </h3>
                <p className="mt-0.5 text-xs text-gj-muted">{doc.offDaySummary}</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-gj-navy">
                예약 우선제
              </span>
            </div>

            {/* 모바일 390px 무결성: table-fixed + 구분 16% + 월~토 각 14% = 100% */}
            <table className="w-full table-fixed border-collapse text-center">
              <colgroup>
                <col style={{ width: "16%" }} />
                {SHIFT_DAYS.map((d) => (
                  <col key={d} style={{ width: "14%" }} />
                ))}
              </colgroup>
              <thead>
                <tr className="border-b border-gj-line">
                  <th className="py-2 text-[11px] font-semibold text-gj-muted sm:text-xs">
                    구분
                  </th>
                  {SHIFT_DAYS.map((day) => (
                    <th
                      key={day}
                      className={cn(
                        "py-2 text-[11px] font-bold sm:text-xs",
                        day === "토" ? "text-gj-blue" : "text-gj-ink"
                      )}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gj-line/70">
                <tr>
                  <th className="py-2.5 text-[11px] font-semibold text-gj-ink sm:text-xs">
                    오전
                  </th>
                  {doc.shifts.map((slot) => (
                    <td key={`${doc.id}-am-${slot.day}`} className="px-0.5 py-2 sm:px-1">
                      <ShiftPill state={slot.am} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="py-2.5 text-[11px] font-semibold text-gj-ink sm:text-xs">
                    오후
                  </th>
                  {doc.shifts.map((slot) => (
                    <td key={`${doc.id}-pm-${slot.day}`} className="px-0.5 py-2 sm:px-1">
                      <ShiftPill state={slot.pm} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {!compact && (
        <p className="mt-4 text-xs leading-relaxed text-gj-muted sm:text-sm">
          * 강남J비뇨기과의원은 예약 우선제로 운영됩니다. 사전 예약 후 내원해 주시면 대기 시간을 줄이실 수 있습니다. (점심시간 13:00~14:00 · 일요일 및 공휴일 휴진)
        </p>
      )}
    </div>
  );
}
