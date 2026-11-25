"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import {
  UROLOGY_VIDEO_GALLERY,
  type ClinicVideoItem,
} from "@/data/urology-media";
import { ClinicVideoModal } from "@/components/clinic/ClinicVideoModal";

export function GjVideoGallerySection() {
  const [activeVideo, setActiveVideo] = useState<ClinicVideoItem | null>(null);

  return (
    <section
      id="video-gallery"
      aria-label="강남J 공식 유튜브 Video Gallery"
      className="scroll-mt-24 bg-[#101010] pt-24 pb-20 text-white lg:pt-[180px] lg:pb-24"
    >
      <div className="gj-container">
        {/* 상단 헤더 */}
        <div
          data-gj-reveal
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gj-brass">
              OFFICIAL YOUTUBE · {CLINIC_PROFILE.youtubeChannel.handle}
            </p>
            <h2 className="mt-3 text-[32px] font-bold leading-[1.28] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
              강남J Video Gallery
            </h2>
            <p className="mt-3 text-[15px] text-white/70 sm:text-[18px]">
              구독자 <strong className="text-gj-brass">{CLINIC_PROFILE.youtubeChannel.subscribers}</strong> · 영상{" "}
              <strong className="text-white">{CLINIC_PROFILE.youtubeChannel.totalVideos}편</strong>,
              전문의가 직접 설명하는 비뇨의학 가이드
            </p>
          </div>

          <a
            href={CLINIC_PROFILE.youtubeChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-white/35 px-6 text-[14.5px] font-semibold text-white transition hover:border-gj-brass hover:bg-gj-brass hover:text-white lg:self-auto"
          >
            유튜브 더보기
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* #F6F6F6 라이트 그레이 4열 카드 (gap 20px, 16:9 썸네일) */}
        <div className="gj-no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {UROLOGY_VIDEO_GALLERY.map((video, idx) => (
            <article
              key={video.id}
              data-gj-reveal
              data-gj-delay={String(idx * 0.06)}
              className="group flex w-[285px] shrink-0 snap-start flex-col overflow-hidden rounded-[14px] bg-[#f6f6f6] text-black transition duration-300 hover:-translate-y-1 lg:w-auto"
            >
              {/* 16:9 안전 커버 (수술 원색 장면 미노출, 초기 iframe 0개) */}
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`${video.title} 재생`}
                className="relative aspect-video w-full overflow-hidden bg-black text-left"
              >
                <img
                  src={video.safeCoverSrc}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/25" />

                <span className="absolute top-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold text-gj-brass">
                  {video.category}
                </span>

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/92 text-black shadow-lg transition group-hover:scale-110 group-hover:bg-gj-brass group-hover:text-white">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col justify-between p-5 lg:px-6 lg:py-6">
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="text-left"
                >
                  <h3 className="line-clamp-2 text-[17px] font-bold leading-[1.45] text-black transition group-hover:text-gj-brass-deep">
                    {video.title}
                  </h3>
                </button>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white px-2.5 py-1 text-[12.5px] font-medium text-black/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ClinicVideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
