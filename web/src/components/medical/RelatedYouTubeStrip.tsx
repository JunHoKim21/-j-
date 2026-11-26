"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { FEATURED_YOUTUBE_VIDEOS, type CuratedYouTubeVideo } from "@/lib/data/media";

interface RelatedYouTubeStripProps {
  videoIds?: string[];
  heading?: string;
}

/**
 * 진료센터/상세 페이지용 관련 유튜브(@uroj) Facade 스트립
 * - 초기 iframe 0개, 클릭 시 youtube-nocookie.com 모달 마운트
 */
export function RelatedYouTubeStrip({
  videoIds,
  heading = "관련 전문의 의학 영상 (@uroj)",
}: RelatedYouTubeStripProps) {
  const [selected, setSelected] = useState<CuratedYouTubeVideo | null>(null);

  const videos = (
    videoIds && videoIds.length > 0
      ? FEATURED_YOUTUBE_VIDEOS.filter((v) => videoIds.includes(v.id) && v.isSafeVerified)
      : FEATURED_YOUTUBE_VIDEOS.filter((v) => v.isSafeVerified).slice(0, 2)
  );

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  if (videos.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-[20px] font-bold text-brand-navy sm:text-[22px]">{heading}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {videos.map((video) => {
          const inner = (
            <>
              <div className="relative aspect-video w-full overflow-hidden bg-surface-dark">
                <img
                  src="/assets/hospital/visual-07.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark via-brand-navy/80 to-surface-dark/40" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-gold px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {video.category}
                </span>
                {!video.embeddable && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/80 px-2.5 py-0.5 text-[11px] font-bold text-white">
                    YouTube ↗
                  </span>
                )}
                <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-0/95 text-surface-dark shadow-md transition-colors group-hover:bg-brand-gold group-hover:text-white">
                  {video.embeddable ? (
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                </span>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-[14.5px] font-bold leading-snug text-brand-navy">
                  {video.title}
                </h3>
              </div>
            </>
          );

          return video.embeddable ? (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelected(video)}
              className="group flex flex-col overflow-hidden rounded-xl bg-surface-1 text-left transition-colors hover:bg-surface-2"
            >
              {inner}
            </button>
          ) : (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl bg-surface-1 text-left transition-colors hover:bg-surface-2"
            >
              {inner}
            </a>
          );
        })}
      </div>

      {selected && selected.embeddable && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            type="button"
            aria-label="동영상 모달 닫기"
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-surface-dark/80 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-[900px] overflow-hidden rounded-xl bg-surface-dark shadow-2xl">
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-white">
              <div className="min-w-0">
                <span className="text-[11.5px] font-semibold text-brand-brass">
                  {selected.category}
                </span>
                <h3 className="truncate text-[15px] font-bold sm:text-[17px]">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="닫기"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selected.videoId}?autoplay=1&rel=0`}
                title={selected.title}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
