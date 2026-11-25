import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SYMPTOM_GUIDES = [
  {
    title: "전립선비대증 · 배뇨장애",
    question: "소변 줄기가 가늘어지고 밤에 2회 이상 화장실에 가시나요?",
    href: "/departments/prostate/bph",
  },
  {
    title: "갑작스러운 옆구리 통증 · 혈뇨",
    question: "등·옆구리가 찌르듯 아프거나 소변 색이 붉게 보이나요?",
    href: "/departments/stone/symptoms",
  },
  {
    title: "약물에 반응하지 않는 발기부전",
    question: "경구약이나 주사치료 효과가 줄어 근본적 해결을 고민 중이신가요?",
    href: "/departments/sexual-implant/penile-implant",
  },
  {
    title: "성기능 저하 · 조루증 원인 평가",
    question: "혈관·신경·호르몬 중 정확한 원인을 객관적 검사로 확인하고 싶으신가요?",
    href: "/departments/sexual-implant/ed-test",
  },
  {
    title: "음경만곡증 · 이물질 제거 재건",
    question: "발기 시 휘어짐 통증이나 과거 주입한 이물질로 염증이 걱정되시나요?",
    href: "/departments/reconstruction/peyronie",
  },
  {
    title: "무도정관수술 · 미세정관복원",
    question: "흉터 부담을 줄인 정관수술이나 현미경 복원수술 상담이 필요하신가요?",
    href: "/departments/vasectomy-circumcision/vasectomy",
  },
] as const;

/**
 * 다크 워터마크 증상별 맞춤 진료 탐색 섹션
 * - 좌측 고정 헤드라인 + 반투명 영문 워터마크 / 우측 1px 헤어라인 증상 리스트 + 원형 화살표
 */
export function SymptomGuideSection() {
  return (
    <section
      aria-labelledby="symptom-heading"
      className="relative overflow-hidden bg-surface-dark py-20 text-white lg:py-32"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* 좌측 헤드라인 + 대형 워터마크 */}
          <div className="relative space-y-4 lg:sticky lg:top-[128px] lg:col-span-5">
            <p className="text-[12px] font-bold tracking-[0.2em] text-brand-gold">
              SYMPTOM GUIDE
            </p>
            <h2
              id="symptom-heading"
              className="text-[28px] font-bold leading-[1.24] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[44px]"
            >
              내 증상에 맞는
              <br />
              진료센터 찾기
            </h2>
            <p className="max-w-[360px] text-[15px] leading-[1.72] text-white/60">
              불편한 증상을 선택하시면 해당 질환의 정확한 진단 과정과 치료 안내 페이지로 바로 연결됩니다.
            </p>
            <div
              aria-hidden="true"
              className="pointer-events-none hidden select-none pt-10 text-[64px] font-black leading-[0.95] tracking-[-0.04em] text-white/[0.04] lg:block"
            >
              SYMPTOM
              <br />
              GUIDE
            </div>
          </div>

          {/* 우측 6개 증상별 1줄 리스트 */}
          <div className="divide-y divide-white/12 border-y border-white/12 lg:col-span-7">
            {SYMPTOM_GUIDES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-6 py-7 transition-colors hover:bg-white/[0.02] sm:py-8"
              >
                <div className="space-y-1.5">
                  <h3 className="text-[19px] font-bold text-white transition-colors group-hover:text-brand-gold sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
                    {item.question}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-surface-dark transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-gold group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
