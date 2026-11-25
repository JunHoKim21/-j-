import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Lock,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { CLINIC_INFO, DOCTORS, THREE_S_PRINCIPLES } from "@/lib/data/clinic";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSlider } from "@/components/medical/HeroSlider";
import { CenterHorizontalSlider } from "@/components/medical/CenterHorizontalSlider";
import { YouTubeSection } from "@/components/medical/YouTubeSection";
import { DoctorScheduleTable } from "@/components/medical/DoctorScheduleTable";

const TRUST_METRICS = [
  {
    value: "27년",
    label: "SINCE 1999 정통 비뇨의학",
    desc: "1999년 개원 이래 전립선·요로결석·남성재건 분야에 집중해 온 단일 전문 비뇨의학과",
  },
  {
    value: "2인 협진",
    label: "박천진 대표원장 · 이웅희 원장",
    desc: "풍부한 수술 경력의 대표원장과 세브란스 교수 출신 전문의의 정밀 진단 및 협진 시스템",
  },
  {
    value: "5개 독립실",
    label: "프라이버시 진료 · 전용 수술센터 2실",
    desc: "독립된 개인진료실과 전원 남성 간호팀, 수술 중 음악요법(IOM)으로 심리적 안정감 제공",
  },
  {
    value: "5.2만+",
    label: "공식 유튜브 @uroj · 780+ 영상",
    desc: "진료부터 수술 원리까지 전문의가 직접 설명하는 투명하고 검증된 의학 콘텐츠 아카이브",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* [SEC 1] FULL-BLEED MULTI-SLIDE HERO */}
      <HeroSlider />

      {/* [SEC 2] 다크 몰입 밴드 — 5대 핵심 진료센터 (5열 3:4 미니멀 포스터 카드) */}
      <CenterHorizontalSlider />

      {/* [SEC 3] 다크 스플릿 스토리텔링 — trust-bg 무드 배경 + 3S 원칙 & 신뢰 지표 스택 */}
      <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-20 text-white lg:py-32">
        <img
          src="/assets/sample/trust-bg.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-22"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/92" />

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* 좌측 고정 헤드라인 */}
            <div className="space-y-6 lg:sticky lg:top-[124px] lg:col-span-5">
              <p className="text-[12px] font-bold tracking-[0.18em] text-brand-gold">
                WHY GANGNAM J
              </p>
              <h2 className="text-[28px] font-bold leading-[1.24] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">
                진료 그 이상,
                <br />
                데이터와 원칙으로
                <br />
                증명하는 신뢰
              </h2>
              <p className="text-[15px] leading-[1.75] text-white/70">
                단순한 시술이 아니라 환자의 프라이버시와 장기적인 삶의 질을 지키는
                Safe · Simple · Speed 3S 원칙을 고수합니다.
              </p>
              <div className="pt-2">
                <Link
                  href="/about/greeting"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-[14px] font-bold text-surface-dark transition-colors hover:bg-brand-gold hover:text-white"
                >
                  <span>병원 철학 자세히 보기</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 우측 대형 타이포 지표 스택 (1px 헤어라인 구분) */}
            <div className="divide-y divide-white/15 border-y border-white/15 lg:col-span-7">
              {TRUST_METRICS.map((item, idx) => (
                <Reveal key={item.label} delayMs={idx * 70}>
                  <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-10">
                    <div className="text-[38px] font-extrabold tracking-tight tabular-nums text-brand-gold sm:col-span-5 sm:text-[46px]">
                      {item.value}
                    </div>
                    <div className="space-y-1.5 sm:col-span-7">
                      <h3 className="text-[17.5px] font-bold text-white">{item.label}</h3>
                      <p className="text-[14px] leading-[1.68] text-white/65">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 3S 원칙 3컬럼 에디토리얼 스트립 */}
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {THREE_S_PRINCIPLES.map((item, idx) => (
              <Reveal key={item.code} delayMs={idx * 80}>
                <div className="h-full space-y-3 rounded-2xl bg-surface-dark-soft/90 p-7 backdrop-blur-xs">
                  <span className="text-[12px] font-bold tracking-[0.18em] text-brand-gold">
                    {item.code}
                  </span>
                  <h3 className="text-[19px] font-bold text-white">{item.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-white/70">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* [SEC 4] 화이트 브레이크 — 2인 전문의 협진 스포트라이트 */}
      <section aria-labelledby="doctors-heading" className="bg-surface-0 py-20 lg:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] font-bold tracking-[0.18em] text-brand-gold-deep">
                MEDICAL TEAM · 2 SPECIALISTS
              </p>
              <h2
                id="doctors-heading"
                className="mt-3 text-[28px] font-bold leading-[1.26] tracking-[-0.03em] text-ink-primary sm:text-[36px] lg:text-[44px]"
              >
                남다른 자부심,
                <br className="sm:hidden" /> 2인 전문의 협진 팀
              </h2>
            </div>
            <Link
              href="/about/doctors"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-ink-primary transition-colors hover:text-brand-gold-deep"
            >
              <span>의료진 약력 전체 보기</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {DOCTORS.map((doctor, idx) => (
              <Reveal key={doctor.slug} delayMs={idx * 90}>
                <article className="flex h-full flex-col gap-7 rounded-2xl bg-surface-1 p-7 sm:flex-row sm:p-9">
                  {/* 3:4 스튜디오 프로필 사진 */}
                  <div className="aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl bg-surface-2 sm:w-[220px]">
                    {doctor.imagePath ? (
                      <img
                        src={doctor.imagePath}
                        alt={`${doctor.name} ${doctor.title}`}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center px-5 text-center">
                        <UserRound className="h-16 w-16 text-ink-primary/25" strokeWidth={1.3} />
                        <span className="mt-3 text-[14px] font-bold text-ink-primary">
                          {doctor.name} {doctor.title}
                        </span>
                        <span className="mt-1 text-[11px] leading-snug text-ink-secondary">
                          {doctor.imagePlaceholderNote}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-5">
                    <div>
                      <span className="inline-block rounded-full bg-surface-dark px-3 py-1 text-[11px] font-bold text-brand-gold">
                        {doctor.title}
                      </span>
                      <h3 className="mt-3 text-[26px] font-bold tracking-tight text-ink-primary">
                        {doctor.name}{" "}
                        <span className="text-[16px] font-semibold text-ink-secondary">전문의</span>
                      </h3>
                      <p className="mt-1 text-[13.5px] font-medium text-ink-secondary">
                        {doctor.credentials}
                      </p>
                      <p className="mt-3 text-[14px] font-bold text-brand-navy">
                        {doctor.specialtySummary}
                      </p>
                      <ul className="mt-4 space-y-1.5 text-[13.5px] leading-relaxed text-ink-secondary">
                        {doctor.highlights.map((line) => (
                          <li key={line} className="flex items-start gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold-deep" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <Link
                        href="/reservation"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-surface-dark px-5 text-[13.5px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
                      >
                        예약하기
                      </Link>
                      <Link
                        href="/about/doctors"
                        className="text-[13.5px] font-semibold text-ink-secondary hover:text-ink-primary"
                      >
                        약력 상세 &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* [SEC 5] 다크 미디어 밴드 — 공식 유튜브(@uroj) 순백 화이트 카드 4열 */}
      <YouTubeSection />

      {/* [SEC 6] 시그니처 골드-브래스 그라데이션 상담·예약 전환 배너 */}
      <section className="bg-surface-dark-soft pb-20 lg:pb-28">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#C89B4B] via-[#AE8034] to-[#7D591F] p-8 text-white sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-3 lg:col-span-7">
                <p className="text-[12px] font-bold tracking-[0.18em] text-white/80">
                  PRIVATE CONSULTATION &amp; RESERVATION
                </p>
                <h2 className="text-[26px] font-bold leading-[1.28] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[40px]">
                  혼자 고민하지 마세요.
                  <br />
                  강남J 2인 전문의가 답해드립니다.
                </h2>
                <p className="max-w-[520px] text-[15px] leading-[1.7] text-white/85">
                  비회원도 간편하게 온라인 예약을 신청할 수 있으며(접수 후 병원 전화 확정),
                  민감한 증상 문의는 1:1 비공개 비밀상담으로 안전하게 보호됩니다.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5">
                <Link
                  href="/reservation"
                  className="flex h-[54px] items-center justify-center gap-2 rounded-full bg-surface-dark text-[15px] font-bold text-white transition-colors hover:bg-brand-navy"
                >
                  <CalendarCheck className="h-4 w-4 text-brand-gold" />
                  <span>비회원 온라인 예약 신청</span>
                </Link>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href="/consultation"
                    className="flex h-[50px] items-center justify-center gap-2 rounded-full bg-black/25 text-[14px] font-bold text-white backdrop-blur-xs transition-colors hover:bg-black/40"
                  >
                    <Lock className="h-4 w-4" />
                    <span>1:1 비밀상담</span>
                  </Link>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="flex h-[50px] items-center justify-center gap-2 rounded-full bg-white/95 text-[14px] font-bold tabular-nums text-surface-dark transition-colors hover:bg-white"
                  >
                    <Phone className="h-4 w-4 text-brand-gold-deep" />
                    <span>{CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [SEC 7] 화이트 브레이크 — 2인 진료시간표 & 학동역 오시는 길 */}
      <section aria-labelledby="schedule-heading" className="bg-surface-0 py-20 lg:py-28">
        <div className="container-page">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] font-bold tracking-[0.18em] text-brand-gold-deep">
                HOURS &amp; LOCATION
              </p>
              <h2
                id="schedule-heading"
                className="mt-3 text-[28px] font-bold leading-[1.28] tracking-[-0.03em] text-ink-primary sm:text-[36px]"
              >
                진료시간표 및 오시는 길
              </h2>
            </div>
            <Link
              href="/about/location"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-ink-primary hover:text-brand-gold-deep"
            >
              <span>오시는 길 · 주차 안내 자세히</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* 좌측: 2인 전문의 7컬럼 진료시간표 */}
            <div className="rounded-2xl bg-surface-1 p-5 sm:p-7 lg:col-span-7">
              <DoctorScheduleTable />
            </div>

            {/* 우측: 학동역 오시는 길 요약 */}
            <div className="space-y-6 rounded-2xl bg-surface-1 p-6 sm:p-8 lg:col-span-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-dark px-3 py-1 text-[12px] font-bold text-brand-gold">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{CLINIC_INFO.subwayGuide}</span>
                </div>
                <h3 className="pt-1 text-[22px] font-bold text-ink-primary">
                  {CLINIC_INFO.address}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-secondary">
                  병원 빌딩 내 지하 주차장을 이용하실 수 있으며, 예약 우선제로 운영됩니다.
                </p>
              </div>

              <div className="space-y-2 rounded-xl bg-surface-0 p-5">
                <div className="text-[12.5px] font-semibold text-ink-secondary">
                  대표 상담 · 예약 전화
                </div>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-[28px] font-extrabold tracking-tight tabular-nums text-ink-primary hover:text-brand-gold-deep"
                >
                  <Phone className="h-5 w-5 text-brand-gold-deep" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
                <p className="text-[13.5px] text-ink-secondary">
                  {CLINIC_INFO.consultHours.weekday} · {CLINIC_INFO.consultHours.saturday}
                </p>
                <p className="text-[13px] tabular-nums text-ink-secondary">
                  문자·상담 {CLINIC_INFO.mobileConsultPhone}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/reservation"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-surface-dark text-[14px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
                >
                  온라인 예약
                </Link>
                <Link
                  href="/about/location"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-surface-0 text-[14px] font-bold text-ink-primary transition-colors hover:bg-surface-2"
                >
                  지도 · 주차 안내
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
