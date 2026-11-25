"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { AboutSubNav } from "@/components/clinic/AboutSubNav";

const FACILITY_PHOTOS = [
  { src: "/assets/hospital/visual-01.jpg", title: "강남J비뇨기과의원 본원 로비", tag: "라운지" },
  { src: "/assets/hospital/visual-02.jpg", title: "프라이빗 접수 · 안내 데스크", tag: "접수" },
  { src: "/assets/hospital/visual-03.jpg", title: "5개 독립 개인진료실", tag: "독립진료실" },
  { src: "/assets/hospital/visual-04.jpg", title: "2개 전용 수술센터", tag: "수술센터" },
  { src: "/assets/hospital/visual-05.jpg", title: "비뇨기 정밀 진단 · 초음파실", tag: "정밀진단" },
  { src: "/assets/hospital/visual-06.jpg", title: "수술 후 프라이빗 회복 공간", tag: "회복실" },
  { src: "/assets/hospital/visual-07.jpg", title: "자체 설계 멸균 · 소독 설비", tag: "멸균시스템" },
  { src: "/assets/hospital/visual-08.jpg", title: "독립 상담실 · 프라이버시 동선", tag: "독립상담" },
  { src: "/assets/hospital/visual-09.jpg", title: "전립선 · 요로결석 검사 장비", tag: "검사장비" },
  { src: "/assets/hospital/visual-10.jpg", title: "편안한 대기 공간", tag: "대기공간" },
  { src: "/assets/hospital/visual-11.jpg", title: "수술 모니터링 장비", tag: "안전모니터링" },
  { src: "/assets/hospital/visual-12.jpg", title: "강남 학동역 단일 프리미엄 본원", tag: "본원" },
];

export default function AboutFacilitiesPage() {
  const [selected, setSelected] = useState<(typeof FACILITY_PHOTOS)[number] | null>(
    null
  );

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="PRIVATE INFRASTRUCTURE"
        title="시설 · 전용 수술실 둘러보기"
        description={`${CLINIC_PROFILE.facilitySummary}을 갖춘 강남 학동역 단일 프리미엄 본원의 실제 공간을 확인하실 수 있습니다.`}
        breadcrumbs={[
          { label: "강남J 스토리", href: "/about/greeting" },
          { label: "시설 · 전용 수술실" },
        ]}
        imageSrc="/assets/hospital/visual-04.jpg"
      />
      <AboutSubNav currentPath="/about/facilities" />

      <section className="bg-white py-20 lg:py-28">
        <div className="gj-container">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                REAL HOSPITAL GALLERY
              </p>
              <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                {CLINIC_PROFILE.facilitySummary}
              </h2>
            </div>
            <p className="text-sm text-gj-muted">
              사진을 클릭하면 크게 보실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITY_PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                data-gj-reveal
                className="group overflow-hidden rounded-2xl bg-[#f6f6f6]"
              >
                <button
                  type="button"
                  onClick={() => setSelected(photo)}
                  className="relative aspect-[3/2] w-full overflow-hidden bg-black text-left"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold text-gj-brass">
                    {photo.tag}
                  </span>
                </button>
                <figcaption className="px-5 py-4 text-sm font-bold text-black">
                  {photo.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#101010] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/12 px-5 py-4">
              <div>
                <span className="text-xs font-bold text-gj-brass">{selected.tag}</span>
                <p className="text-base font-bold">{selected.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="이미지 닫기"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={selected.src}
              alt={selected.title}
              className="max-h-[75vh] w-full object-contain bg-black"
            />
          </div>
        </div>
      )}
    </GjSubPageShell>
  );
}
