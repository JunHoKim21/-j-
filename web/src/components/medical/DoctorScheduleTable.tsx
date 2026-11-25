import { DOCTORS, type ScheduleStatus } from "@/lib/data/clinic";

function ScheduleBadge({ status }: { status: ScheduleStatus }) {
  if (status === "OPEN") {
    return (
      <span className="inline-flex w-full items-center justify-center rounded-md bg-status-done-bg px-1 py-1.5 text-[11px] font-bold text-status-done-fg sm:text-[12.5px]">
        진료
      </span>
    );
  }
  if (status === "SURGERY_OPEN") {
    return (
      <span className="inline-flex w-full flex-col items-center justify-center rounded-md bg-surface-2 px-0.5 py-1 text-[10px] font-bold leading-[1.15] text-brand-navy sm:flex-row sm:gap-0.5 sm:px-1 sm:py-1.5 sm:text-[12px]">
        <span>수술</span>
        <span className="hidden sm:inline">·</span>
        <span>진료</span>
      </span>
    );
  }
  if (status === "CLOSED") {
    return (
      <span className="inline-flex w-full items-center justify-center rounded-md bg-status-off-bg px-1 py-1.5 text-[11px] font-semibold text-status-off-fg sm:text-[12.5px]">
        휴진
      </span>
    );
  }
  return <span className="text-[12px] text-ink-secondary/45">—</span>;
}

/**
 * 2인 전문의 요일별 진료시간표 (2026.08.24 팝업 기준)
 * - 모바일 390px 무결성: table-layout: fixed, 구분 16% + 월~토 각 14% = 100% (가로 스크롤 0%)
 */
export function DoctorScheduleTable() {
  return (
    <div className="space-y-6">
      {DOCTORS.map((doctor) => (
        <div key={doctor.slug} className="rounded-xl bg-surface-0 p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-[17px] font-bold text-brand-navy sm:text-[18px]">
              {doctor.name} {doctor.title}{" "}
              <span className="text-[13px] font-medium text-ink-secondary">진료시간표</span>
            </h3>
            <span className="text-[12px] font-medium text-ink-secondary">
              {doctor.slug === "park-cheon-jin"
                ? "월·목 오후 휴진"
                : "목요일 종일 휴진"}
            </span>
          </div>

          <table className="w-full table-fixed border-collapse text-center tabular-nums">
            <colgroup>
              <col className="w-[16%]" />
              <col className="w-[14%]" />
              <col className="w-[14%]" />
              <col className="w-[14%]" />
              <col className="w-[14%]" />
              <col className="w-[14%]" />
              <col className="w-[14%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-line-subtle text-[12px] font-semibold text-ink-secondary sm:text-[13px]">
                <th scope="col" className="py-2.5 font-semibold">
                  구분
                </th>
                {doctor.schedule.map((item) => (
                  <th
                    key={item.day}
                    scope="col"
                    className={
                      item.day === "토"
                        ? "py-2.5 font-semibold text-brand-blue"
                        : "py-2.5 font-semibold"
                    }
                  >
                    {item.day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line-subtle/60">
              <tr>
                <th
                  scope="row"
                  className="py-2.5 text-[12px] font-semibold text-brand-navy sm:text-[13px]"
                >
                  오전
                </th>
                {doctor.schedule.map((item) => (
                  <td key={`${doctor.slug}-am-${item.day}`} className="px-0.5 py-2 sm:px-1.5">
                    <ScheduleBadge status={item.am} />
                  </td>
                ))}
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-2.5 text-[12px] font-semibold text-brand-navy sm:text-[13px]"
                >
                  오후
                </th>
                {doctor.schedule.map((item) => (
                  <td key={`${doctor.slug}-pm-${item.day}`} className="px-0.5 py-2 sm:px-1.5">
                    <ScheduleBadge status={item.pm} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <p className="text-[13px] leading-relaxed text-ink-secondary">
        * 강남J비뇨기과는 예약 우선제로 운영됩니다. 일요일·공휴일은 휴진이며, 사전 예약 후 내원해 주시면 대기 시간을 줄이실 수 있습니다.
      </p>
    </div>
  );
}
