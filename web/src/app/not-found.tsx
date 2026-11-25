import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data/clinic";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-surface-1 px-5 text-center">
      <p className="text-[12px] font-bold tracking-[0.16em] text-brand-brass">404 NOT FOUND</p>
      <h1 className="mt-3 text-[26px] font-bold text-brand-navy sm:text-[32px]">
        요청하신 페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-ink-secondary">
        주소가 변경되었거나 삭제된 페이지입니다. 아래 버튼으로 메인 화면 또는 온라인 예약으로 이동하실 수 있습니다.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-navy px-6 text-[14.5px] font-semibold text-white hover:bg-brand-blue"
        >
          메인으로 이동
        </Link>
        <Link
          href="/reservation"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-surface-0 px-6 text-[14.5px] font-semibold text-brand-navy hover:bg-surface-2"
        >
          온라인 예약
        </Link>
      </div>
      <p className="mt-8 text-[13px] tabular-nums text-ink-secondary">
        문의전화: {CLINIC_INFO.phone}
      </p>
    </div>
  );
}
