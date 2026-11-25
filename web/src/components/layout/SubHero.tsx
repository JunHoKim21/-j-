import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubHeroProps {
  kicker: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * 서브 페이지 공통 상단 배너
 * - 풀블리드 레이아웃 기준 고정 헤더(모바일 60px / PC 104px) 높이를 고려한 상단 여백 확보
 * - 자극적 비주얼을 배제한 Deep Navy 면 대비 + 브레드크럼 + 단일 H1
 */
export function SubHero({ kicker, title, description, breadcrumbs }: SubHeroProps) {
  return (
    <section className="bg-surface-dark pb-12 pt-[104px] text-white lg:pb-16 lg:pt-[156px]">
      <div className="container-page">
        <nav aria-label="현재 위치" className="mb-4 flex flex-wrap items-center gap-1.5 text-[12.5px] text-white/60">
          <Link href="/" className="hover:text-white">
            홈
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-white/90">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="text-[12px] font-semibold tracking-[0.14em] text-brand-brass">
          {kicker}
        </p>
        <h1 className="mt-2 text-[26px] font-bold leading-[1.28] tracking-[-0.025em] text-white sm:text-[32px] lg:text-[38px]">
          {title}
        </h1>
        <p className="mt-3 max-w-[680px] text-[15px] leading-[1.68] text-white/75 lg:text-[16.5px]">
          {description}
        </p>
      </div>
    </section>
  );
}
