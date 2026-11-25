import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, MapPin, Phone, Train } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { SubHero } from "@/components/layout/SubHero";
import { DoctorScheduleTable } from "@/components/medical/DoctorScheduleTable";

export const metadata: Metadata = {
  title: "진료시간 · 오시는 길",
  description: "강남J비뇨기과의원 2인 전문의 요일별 진료시간표, 학동역 8·9번 출구 오시는 길 및 주차·연락처 안내입니다.",
};

export default function LocationPage() {
  return (
    <>
      <SubHero
        kicker="ABOUT · HOURS & LOCATION"
        title="진료시간표 및 오시는 길"
        description="7호선 학동역 8번·9번 출구 사이, 서울시 강남구 학동로 203 4층에 위치하고 있습니다."
        breadcrumbs={[{ label: "병원소개", href: "/about/greeting" }, { label: "진료시간 · 오시는 길" }]}
      />

      {/* 2인 진료시간표 (Surface 1) */}
      <section id="schedule" className="scroll-mt-[76px] bg-surface-1 py-14 lg:scroll-mt-[120px] lg:py-20">
        <div className="container-page">
          <div className="mb-8">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-brass">
              2 SPECIALISTS SCHEDULE
            </p>
            <h2 className="mt-2 text-[24px] font-bold text-brand-navy lg:text-[30px]">
              2인 전문의 요일별 진료시간표
            </h2>
          </div>
          <DoctorScheduleTable />
        </div>
      </section>

      {/* 오시는 길 · 지도 슬롯 · 연락처 (Surface 0) */}
      <section id="map" className="scroll-mt-[76px] bg-surface-0 py-14 lg:scroll-mt-[120px] lg:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* 지도 플레이스홀더 (카카오맵 API 키 발급 후 교체) */}
            <div className="lg:col-span-7">
              <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl bg-surface-1 p-8 text-center lg:h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-2 text-brand-navy">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-[18px] font-bold text-brand-navy">{CLINIC_INFO.address}</h3>
                <p className="mt-1 text-[14.5px] font-medium text-brand-blue">
                  {CLINIC_INFO.subwayGuide}
                </p>
                <p className="mt-4 rounded-md bg-surface-0 px-3.5 py-2 text-[12.5px] text-ink-secondary">
                  [임시 지도 영역 - 카카오맵 JS API 키 발급 후 실시간 지도 연동 예정]
                </p>
              </div>
            </div>

            {/* 연락처 및 교통 안내 */}
            <div className="space-y-5 lg:col-span-5">
              <div className="rounded-xl bg-surface-1 p-6">
                <div className="flex items-center gap-2 text-[13px] font-bold text-brand-blue">
                  <Phone className="h-4 w-4" />
                  <span>대표 상담 · 예약 전화</span>
                </div>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="mt-2 block text-[26px] font-bold tabular-nums text-brand-navy hover:text-brand-blue"
                >
                  {CLINIC_INFO.phone}
                </a>
                <p className="mt-1 text-[13.5px] tabular-nums text-ink-secondary">
                  상담·문자 {CLINIC_INFO.mobileConsultPhone} · FAX {CLINIC_INFO.fax}
                </p>
              </div>

              <div className="space-y-4 rounded-xl bg-surface-1 p-6 text-[14.5px] text-ink-secondary">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                  <div>
                    <div className="font-bold text-brand-navy">전화 · 문자 상담시간</div>
                    <p className="mt-0.5">
                      {CLINIC_INFO.consultHours.weekday} / {CLINIC_INFO.consultHours.saturday}
                    </p>
                    <p className="text-[13px]">{CLINIC_INFO.consultHours.note}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                  <div>
                    <div className="font-bold text-brand-navy">지하철 이용 시</div>
                    <p className="mt-0.5">{CLINIC_INFO.subwayGuide} (도보 1분, 4층)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                  <div>
                    <div className="font-bold text-brand-navy">주차 안내</div>
                    <p className="mt-0.5">병원 빌딩 내 지하 주차장 이용 가능</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/reservation"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-navy text-[14.5px] font-bold text-white hover:bg-brand-blue"
                >
                  온라인 예약
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-surface-2 text-[14.5px] font-bold text-brand-navy hover:bg-surface-1"
                >
                  1:1 비밀상담
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
