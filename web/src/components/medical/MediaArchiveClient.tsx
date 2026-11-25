"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { FEATURED_YOUTUBE_VIDEOS, type CuratedYouTubeVideo } from "@/lib/data/media";
import { PRESS_ARCHIVE } from "@/lib/data/community";
import { cn } from "@/lib/utils";

export function MediaArchiveClient() {
  const [tab, setTab] = useState<"YOUTUBE" | "PRESS">("YOUTUBE");
  const [selectedVideo, setSelectedVideo] = useState<CuratedYouTubeVideo | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section className="bg-surface-0 py-14 lg:py-24">
      <div className="container-page">
        {/* 탭 바 */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line-subtle pb-5">
          <div className="inline-flex rounded-lg bg-surface-1 p-1" role="tablist" aria-label="미디어 분류">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "YOUTUBE"}
              onClick={() => setTab("YOUTUBE")}
              className={cn(
                "rounded-md px-4 py-2 text-[14px] font-semibold transition-colors",
                tab === "YOUTUBE" ? "bg-brand-navy text-white" : "text-ink-secondary hover:text-brand-navy"
              )}
            >
              공식 유튜브 ({CLINIC_INFO.youtube.handle})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "PRESS"}
              onClick={() => setTab("PRESS")}
              className={cn(
                "rounded-md px-4 py-2 text-[14px] font-semibold transition-colors",
                tab === "PRESS" ? "bg-brand-navy text-white" : "text-ink-secondary hover:text-brand-navy"
              )}
            >
              언론보도 · 방송출연
            </button>
          </div>

          <a
            href={CLINIC_INFO.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue hover:text-brand-navy"
          >
            <span>유튜브 {CLINIC_INFO.youtube.handle} 전체 영상 보기</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* 유튜브 탭 */}
        {tab === "YOUTUBE" && (
          <div className="mt-10 space-y-8">
            <div className="rounded-xl bg-surface-1 p-5 text-[14px] leading-relaxed text-ink-secondary">
              구독자 <strong className="text-brand-navy">{CLINIC_INFO.youtube.subscribersLabel}</strong> · 누적 영상{" "}
              <strong className="text-brand-navy">{CLINIC_INFO.youtube.videosLabel}</strong>의 공식 채널 중,
              자극적인 수술 장면이나 치료 후기 영상을 제외하고 <strong className="text-brand-navy">전문의 의학 설명·QnA 영상</strong>만 선별해 제공합니다.
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_YOUTUBE_VIDEOS.filter((v) => v.isSafeVerified).map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className="group flex flex-col overflow-hidden rounded-xl bg-surface-1 text-left transition-colors hover:bg-surface-2"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-surface-dark">
                    <img
                      src="/assets/hospital/visual-06.jpg"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-full w-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark via-brand-navy/80 to-surface-dark/40" />
                    <span className="absolute left-3 top-3 rounded-full bg-brand-gold px-2.5 py-0.5 text-[11px] font-bold text-white">
                      {video.category}
                    </span>
                    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface-0/95 text-surface-dark shadow-lg transition-colors group-hover:bg-brand-gold group-hover:text-white">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <h3 className="line-clamp-2 text-[15.5px] font-bold leading-[1.45] text-brand-navy">
                      {video.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.55] text-ink-secondary">
                      {video.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 언론보도 탭 */}
        {tab === "PRESS" && (
          <div className="mt-8 divide-y divide-line-subtle">
            {PRESS_ARCHIVE.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[12.5px]">
                    <span className="rounded-full bg-surface-1 px-2.5 py-0.5 font-semibold text-brand-navy">
                      {item.category}
                    </span>
                    <span className="font-semibold text-brand-blue">{item.source}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-ink-primary">{item.title}</h3>
                </div>
                <span className="shrink-0 text-[13px] text-ink-secondary">{item.date}</span>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* 유튜브 모달 플레이어 */}
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
            className="absolute inset-0 bg-surface-dark/80 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-[900px] overflow-hidden rounded-xl bg-surface-dark shadow-2xl">
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-white">
              <div className="min-w-0">
                <span className="text-[11.5px] font-semibold text-brand-brass">
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
