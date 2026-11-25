"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, Play, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { FEATURED_YOUTUBE_VIDEOS, type CuratedYouTubeVideo } from "@/lib/data/media";

const COVER_BACKGROUNDS = [
  "/assets/sample/center-prostate.jpg.png",
  "/assets/sample/center-implant.jpg",
  "/assets/sample/center-reconstruction.jpg",
  "/assets/sample/trust-bg.jpg",
];

/**
 * 공식 유튜브(@uroj) 다크 에디토리얼 미디어 섹션 (Facade 패턴)
 * - 다크 바탕(#181C23) 위 순백 화이트(#FFFFFF) 카드 4열 대비
 * - 자극적 수술 장면 원본 썸네일 배제 → 브랜드 의학 가이드 커버 + 클릭 시 youtube-nocookie.com 모달 재생
 */
export function YouTubeSection() {
  const [selectedVideo, setSelectedVideo] = useState<CuratedYouTubeVideo | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section aria-labelledby="youtube-heading" className="bg-surface-dark-soft py-20 text-white lg:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-bold tracking-[0.18em] text-brand-gold">
              OFFICIAL YOUTUBE · {CLINIC_INFO.youtube.handle}
            </p>
            <h2
              id="youtube-heading"
              className="mt-3 text-[28px] font-bold leading-[1.28] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[40px]"
            >
              전문의가 직접 답하는 의학 영상
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-white/65 lg:text-[16px]">
              구독자 <strong className="font-bold text-white">{CLINIC_INFO.youtube.subscribersLabel}</strong> · 누적 영상{" "}
              <strong className="font-bold text-white">{CLINIC_INFO.youtube.videosLabel}</strong>의 공식 채널에서
              자극적인 장면 없이 핵심 의학 정보만 선별했습니다.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/media"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-5 text-[13.5px] font-semibold text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              미디어 전체보기
            </Link>
            <a
              href={CLINIC_INFO.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-surface-0 px-5 text-[13.5px] font-bold text-surface-dark transition-colors hover:bg-brand-gold hover:text-white"
            >
              <span>유튜브 더보기</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* 다크 배경 위 순백 화이트 카드 4열 */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_YOUTUBE_VIDEOS.filter((v) => v.isSafeVerified).map((video, idx) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelectedVideo(video)}
              className="group flex flex-col overflow-hidden rounded-2xl bg-surface-0 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              {/* 비자극 브랜드 의학 가이드 16:9 커버 */}
              <div className="relative aspect-video w-full overflow-hidden bg-surface-dark">
                <img
                  src={COVER_BACKGROUNDS[idx % COVER_BACKGROUNDS.length]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark via-brand-navy/80 to-surface-dark/40" />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-gold px-2.5 py-0.5 text-[10.5px] font-bold text-white">
                      {video.category}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider text-white/60">
                      {CLINIC_INFO.youtube.handle}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <span className="line-clamp-2 text-[14px] font-bold leading-snug text-white">
                      {video.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-surface-dark shadow-md transition-colors group-hover:bg-brand-gold group-hover:text-white"
                    >
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                  </div>
                </div>
              </div>

              {/* 화이트 하단 바디 */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="line-clamp-2 text-[15.5px] font-bold leading-[1.45] text-ink-primary group-hover:text-brand-gold-deep">
                    {video.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.58] text-ink-secondary">
                    {video.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {video.category.split("·").map((tag) => (
                    <span
                      key={tag.trim()}
                      className="rounded-md bg-surface-1 px-2.5 py-1 text-[11.5px] font-semibold text-ink-secondary"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                  <span className="rounded-md bg-surface-1 px-2.5 py-1 text-[11.5px] font-semibold text-ink-secondary">
                    전문의 설명
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 팝업 모달 플레이어 */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
        >
          <button
            type="button"
            aria-label="동영상 모달 닫기"
            onClick={() => setSelectedVideo(null)}
            className="absolute inset-0 bg-surface-dark/85 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-[900px] overflow-hidden rounded-2xl bg-surface-dark shadow-2xl">
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-white">
              <div className="min-w-0">
                <span className="text-[11.5px] font-bold text-brand-gold">
                  {selectedVideo.category}
                </span>
                <h3 className="truncate text-[15px] font-bold sm:text-[17px]">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="닫기"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
