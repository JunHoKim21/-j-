"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const FACILITY_PHOTOS = Array.from({ length: 12 }, (_, idx) => {
  const num = String(idx + 1).padStart(2, "0");
  return {
    id: `facility-${num}`,
    src: `/assets/hospital/visual-${num}.jpg`,
    caption: `강남J비뇨기과 진료·대기·수술 공간 ${num}`,
  };
});

export function FacilitiesGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeIdx === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") {
        setActiveIdx((i) => (i === null ? null : (i - 1 + FACILITY_PHOTOS.length) % FACILITY_PHOTOS.length));
      }
      if (e.key === "ArrowRight") {
        setActiveIdx((i) => (i === null ? null : (i + 1) % FACILITY_PHOTOS.length));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIdx]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITY_PHOTOS.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className="group overflow-hidden rounded-xl bg-surface-1 text-left focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-surface-2">
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-3 text-[13.5px] font-medium text-ink-secondary">
              {photo.caption}
            </div>
          </button>
        ))}
      </div>

      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={FACILITY_PHOTOS[activeIdx].caption}
        >
          <button
            type="button"
            aria-label="이미지 확대 닫기"
            onClick={() => setActiveIdx(null)}
            className="absolute inset-0 bg-surface-dark/85 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-[960px]">
            <div className="mb-3 flex items-center justify-between text-white">
              <span className="text-[14px] font-semibold">
                {FACILITY_PHOTOS[activeIdx].caption} ({activeIdx + 1} / {FACILITY_PHOTOS.length})
              </span>
              <button
                type="button"
                onClick={() => setActiveIdx(null)}
                aria-label="닫기"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-black">
              <img
                src={FACILITY_PHOTOS[activeIdx].src}
                alt={FACILITY_PHOTOS[activeIdx].caption}
                className="max-h-[75vh] w-full object-contain"
              />
              <button
                type="button"
                aria-label="이전 사진"
                onClick={() =>
                  setActiveIdx((activeIdx - 1 + FACILITY_PHOTOS.length) % FACILITY_PHOTOS.length)
                }
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface-dark/70 text-white hover:bg-surface-dark"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="다음 사진"
                onClick={() => setActiveIdx((activeIdx + 1) % FACILITY_PHOTOS.length)}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface-dark/70 text-white hover:bg-surface-dark"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
