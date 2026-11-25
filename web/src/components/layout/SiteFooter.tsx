import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { FOOTER_LEGAL_LINKS } from "@/lib/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-white/75 pb-[calc(88px+env(safe-area-inset-bottom))] md:pb-16">
      {/* 상단 법적·핵심 링크 바 */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-wrap items-center gap-x-6 gap-y-2 py-5 text-[13.5px]">
          {FOOTER_LEGAL_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.emphasized
                  ? "font-bold text-brand-gold transition-colors hover:text-white"
                  : "text-white/70 transition-colors hover:text-white"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 본문 3단 그리드 */}
      <div className="container-page pt-10 md:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* 1열: 병원·사업자 정보 */}
          <div className="space-y-4">
            <img
              src="/assets/brand/logo-white.png"
              alt={CLINIC_INFO.name}
              className="h-[30px] w-auto object-contain"
            />
            <dl className="space-y-1.5 text-[13.5px] leading-relaxed text-white/65">
              <div>
                <span className="text-white/45">상호: </span>
                <span className="text-white/90">{CLINIC_INFO.name}</span>
                <span className="mx-2 text-white/20">|</span>
                <span className="text-white/45">대표자: </span>
                <span className="text-white/90">{CLINIC_INFO.representative}</span>
              </div>
              <div>
                <span className="text-white/45">사업자등록번호: </span>
                <span className="tabular-nums text-white/90">{CLINIC_INFO.businessNumber}</span>
              </div>
              <div>
                <span className="text-white/45">주소: </span>
                <span>
                  {CLINIC_INFO.address} ({CLINIC_INFO.subwayGuide})
                </span>
              </div>
            </dl>
          </div>

          {/* 2열: 2인 진료시간 요약 */}
          <div className="space-y-3">
            <h2 className="text-[14px] font-bold tracking-wide text-brand-gold">
              2인 전문의 진료 안내
            </h2>
            <ul className="space-y-1.5 text-[13.5px] leading-relaxed text-white/65">
              <li>
                <strong className="font-semibold text-white/90">박천진 대표원장:</strong> 월~금 오전 수술·진료 / 화·수·금 오후 진료 / 토 오전 진료
              </li>
              <li>
                <strong className="font-semibold text-white/90">이웅희 원장:</strong> 월·화·수·금 오전·오후 진료 / 목 휴진 / 토 오전 진료
              </li>
              <li className="text-white/50">
                상담시간: {CLINIC_INFO.consultHours.weekday} · {CLINIC_INFO.consultHours.saturday}
              </li>
            </ul>
          </div>

          {/* 3열: 대표 연락처 및 유튜브 */}
          <div className="space-y-3">
            <h2 className="text-[14px] font-bold tracking-wide text-brand-gold">
              상담 및 예약 문의
            </h2>
            <div className="space-y-1.5 text-[13.5px]">
              <div>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="text-[24px] font-bold tracking-tight tabular-nums text-white transition-colors hover:text-brand-gold"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <p className="tabular-nums text-white/65">
                상담·문자 {CLINIC_INFO.mobileConsultPhone} · FAX {CLINIC_INFO.fax}
              </p>
              <div className="pt-2">
                <a
                  href={CLINIC_INFO.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  <span>공식 유튜브 {CLINIC_INFO.youtube.handle}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[12px] text-white/40">
          Copyright &copy; {CLINIC_INFO.since} {CLINIC_INFO.englishName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
