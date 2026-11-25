import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface GjBreadcrumbItem {
  label: string;
  href?: string;
}

interface GjSubHeroProps {
  kicker: string;
  title: string;
  description: string;
  breadcrumbs: GjBreadcrumbItem[];
  imageSrc?: string;
}

export function GjSubHero({
  kicker,
  title,
  description,
  breadcrumbs,
  imageSrc,
}: GjSubHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#101010] py-16 text-white sm:py-20 lg:py-24">
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/95 via-[#101010]/82 to-[#101010]/68" />
        </>
      )}

      <div className="gj-container relative z-10">
        <nav aria-label="현재 위치" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-white/60">
          <Link href="/" className="transition hover:text-white">
            HOME
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              {crumb.href ? (
                <Link href={crumb.href} className="transition hover:text-gj-brass">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-gj-brass">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="text-[11px] font-bold tracking-[0.22em] text-gj-brass sm:text-xs">
          {kicker}
        </p>
        <h1 className="mt-3 text-[30px] font-bold leading-[1.24] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[50px]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.75] text-white/75 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
