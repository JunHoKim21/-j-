import Link from "next/link";
import { Phone, PlayCircle } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { CLINIC_FOOTER_POLICY_LINKS } from "@/data/clinic-navigation";

export function GjSiteFooter() {
  return (
    <footer className="bg-[#101010] pt-12 pb-[140px] text-white lg:py-14">
      <div className="gj-container">
        {/* 상단 브랜드 안내 바 */}
        <div className="mb-10 flex flex-col items-start justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-gj-brass px-2.5 py-1 text-xs font-extrabold text-white">
              SINCE {CLINIC_PROFILE.foundedYear}
            </span>
            <p className="text-sm font-semibold text-white/90">
              {CLINIC_PROFILE.headquartersLabel} · {CLINIC_PROFILE.facilitySummary}
            </p>
          </div>
          <a
            href={CLINIC_PROFILE.youtubeChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gj-brass hover:text-white"
          >
            <PlayCircle className="h-4 w-4" />
            공식 유튜브 {CLINIC_PROFILE.youtubeChannel.handle} ({CLINIC_PROFILE.youtubeChannel.subscribers})
          </a>
        </div>

        {/* 하단 좌우 2단 구조 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* 좌측: 화이트 로고 + 약관/비급여 링크 + 사업자정보 */}
          <div className="lg:col-span-6">
            <img
              src="/assets/brand/logo-white.png"
              alt={CLINIC_PROFILE.clinicName}
              className="h-9 w-auto object-contain"
            />

            <nav
              aria-label="푸터 정책 링크"
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14.5px]"
            >
              {CLINIC_FOOTER_POLICY_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    item.highlight
                      ? "font-bold text-gj-brass transition hover:text-white"
                      : "text-white/75 transition hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 space-y-1.5 text-[14px] leading-relaxed text-white/60">
              <p>
                상호: {CLINIC_PROFILE.clinicName} | 대표자: {CLINIC_PROFILE.representative} | 사업자등록번호:{" "}
                <span className="tabular-nums">{CLINIC_PROFILE.businessRegistration}</span>
              </p>
              <p>
                주소: {CLINIC_PROFILE.streetAddress} ({CLINIC_PROFILE.transitGuide})
              </p>
              <p className="pt-2 text-[13px] text-white/40">
                COPYRIGHT © {CLINIC_PROFILE.clinicName} ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* 우측: 단일 본원 연락처 & 2인 진료시간 요약 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
            <div className="border-t border-white/15 pt-5 lg:border-t-0 lg:border-l lg:pl-7 lg:pt-0">
              <p className="text-xs font-bold tracking-[0.18em] text-gj-brass">
                HAKDONG HEADQUARTERS
              </p>
              <a
                href={CLINIC_PROFILE.mainPhoneHref}
                className="mt-3 inline-flex items-center gap-2 text-2xl font-bold tabular-nums text-white hover:text-gj-brass"
              >
                <Phone className="h-5 w-5 text-gj-brass" />
                {CLINIC_PROFILE.mainPhone}
              </a>
              <p className="mt-2 text-sm tabular-nums text-white/65">
                상담 · 문자 {CLINIC_PROFILE.consultMobile}
              </p>
              <p className="mt-1 text-sm tabular-nums text-white/55">
                FAX {CLINIC_PROFILE.faxNumber}
              </p>
            </div>

            <div className="border-t border-white/15 pt-5 lg:border-t-0 lg:border-l lg:pl-7 lg:pt-0">
              <p className="text-xs font-bold tracking-[0.18em] text-gj-brass">
                2 DOCTORS SCHEDULE
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-white/75">
                <p>
                  <strong className="text-white">박천진 대표원장</strong> · 월·목 오후 휴진
                </p>
                <p>
                  <strong className="text-white">이웅희 원장</strong> · 목요일 종일 휴진
                </p>
                <p className="pt-2 text-xs tabular-nums text-white/55">
                  {CLINIC_PROFILE.operatingHours.weekdayConsult} /{" "}
                  {CLINIC_PROFILE.operatingHours.saturdayConsult}
                </p>
                <p className="text-xs text-white/45">
                  {CLINIC_PROFILE.operatingHours.closedNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
