import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { SubHero } from "@/components/layout/SubHero";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { DoctorScheduleTable } from "@/components/medical/DoctorScheduleTable";

export const metadata: Metadata = {
  title: "온라인 예약",
  description:
    "강남J비뇨기과의원 비회원 온라인 예약 신청 페이지입니다. 희망 일정 접수 후 병원 담당자 확인 전화로 최종 확정됩니다.",
};

export default function ReservationPage() {
  return (
    <>
      <SubHero
        kicker="ONLINE RESERVATION"
        title="온라인 예약 신청"
        description="회원가입 없이 희망 진료 일정을 신청하실 수 있습니다. 접수 후 병원 담당자가 확인 전화를 드려 최종 확정합니다."
        breadcrumbs={[{ label: "온라인 예약" }]}
      />

      <section className="bg-surface-0 py-12 lg:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* 좌측: 예약 폼 (7col) */}
            <div className="lg:col-span-7">
              <ReservationForm />
            </div>

            {/* 우측: 2인 진료시간표 & 전화 안내 Sticky 사이드바 (5col) */}
            <aside className="space-y-6 lg:sticky lg:top-[124px] lg:col-span-5">
              <div className="rounded-2xl bg-surface-1 p-5 sm:p-6">
                <h2 className="mb-4 text-[16px] font-bold text-brand-navy">
                  2인 전문의 진료시간표 확인
                </h2>
                <DoctorScheduleTable />
              </div>

              <div className="rounded-2xl bg-surface-dark p-6 text-white">
                <p className="text-[12px] font-bold tracking-[0.14em] text-brand-gold">
                  DIRECT CALL
                </p>
                <p className="mt-1.5 text-[14px] text-white/75">
                  당일 급한 요로결석 통증이나 빠른 일정 조율은 전화로 문의해 주세요.
                </p>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-[24px] font-bold tabular-nums text-white hover:text-brand-gold"
                >
                  <Phone className="h-5 w-5 text-brand-gold" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <p className="mt-1 text-[12.5px] text-white/60">
                  {CLINIC_INFO.consultHours.weekday} · {CLINIC_INFO.consultHours.saturday}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
