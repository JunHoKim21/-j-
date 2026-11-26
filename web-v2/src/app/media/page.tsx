"use client";

import { useState } from "react";
import { ExternalLink, Newspaper, Play, PlayCircle } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import {
  CLINIC_PRESS_RECORDS,
  UROLOGY_VIDEO_GALLERY,
  type ClinicVideoItem,
} from "@/data/urology-media";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { ClinicVideoModal } from "@/components/clinic/ClinicVideoModal";
import { cn } from "@/lib/cn";

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"youtube" | "press">("youtube");
  const [activeVideo, setActiveVideo] = useState<ClinicVideoItem | null>(null);

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker={`OFFICIAL MEDIA · ${CLINIC_PROFILE.youtubeChannel.handle}`}
        title="Video Gallery · 언론보도"
        description={`구독자 ${CLINIC_PROFILE.youtubeChannel.subscribers} · 영상 ${CLINIC_PROFILE.youtubeChannel.totalVideos}편의 강남J 공식 유튜브(@uroj) 선별 의학 가이드와 학술·언론 출연 아카이브입니다.`}
        breadcrumbs={[{ label: "Video Gallery" }]}
        imageSrc="/assets/sample/trust-bg.jpg"
      />

      {/* 탭 바 */}
      <div className="border-b border-gj-line bg-[#f6f6f6]">
        <div className="gj-container flex gap-2 py-3">
          <button
            type="button"
            onClick={() => setActiveTab("youtube")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition",
              activeTab === "youtube"
                ? "bg-black text-white"
                : "bg-white text-gj-muted hover:text-black"
            )}
          >
            <PlayCircle className="h-4 w-4 text-gj-brass" />
            공식 유튜브 ({CLINIC_PROFILE.youtubeChannel.handle})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("press")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition",
              activeTab === "press"
                ? "bg-black text-white"
                : "bg-white text-gj-muted hover:text-black"
            )}
          >
            <Newspaper className="h-4 w-4 text-gj-brass-deep" />
            학술 · 언론 · 방송 ({CLINIC_PRESS_RECORDS.length})
          </button>
        </div>
      </div>

      <section className="bg-white py-20 lg:py-24">
        <div className="gj-container">
          {activeTab === "youtube" ? (
            <div>
              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-gj-brass-deep">
                    SAFE MEDICAL EXPLAINERS
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                    전문의가 직접 설명하는 비뇨의학 영상
                  </h2>
                  <p className="mt-2 text-sm text-gj-muted">
                    자극적인 수술 장면과 환자 후기 영상을 배제하고 질환 이해와 QnA 중심으로
                    선별했습니다.
                  </p>
                </div>
                <a
                  href={CLINIC_PROFILE.youtubeChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-black px-5 text-sm font-bold text-white transition hover:bg-gj-brass"
                >
                  유튜브 채널 바로가기
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {UROLOGY_VIDEO_GALLERY.map((video) => {
                  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
                  const mediaThumb = (
                    <>
                      <img
                        src={video.safeCoverSrc}
                        alt={video.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />
                      <span className="absolute top-4 left-4 rounded-full bg-black/75 px-3 py-1 text-xs font-bold text-gj-brass">
                        {video.category}
                      </span>
                      {!video.embeddable && (
                        <span className="absolute top-4 right-4 rounded-full bg-black/80 px-3 py-1 text-xs font-bold text-white">
                          YouTube ↗
                        </span>
                      )}
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-black shadow-xl transition group-hover:scale-110 group-hover:bg-gj-brass group-hover:text-white">
                          {video.embeddable ? (
                            <Play className="ml-0.5 h-6 w-6 fill-current" />
                          ) : (
                            <ExternalLink className="h-6 w-6" />
                          )}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <article
                      key={video.id}
                      data-gj-reveal
                      className="group overflow-hidden rounded-2xl border border-gj-line bg-[#f6f6f6]"
                    >
                      {video.embeddable ? (
                        <button
                          type="button"
                          onClick={() => setActiveVideo(video)}
                          aria-label={`${video.title} 재생`}
                          className="relative aspect-video w-full overflow-hidden bg-black text-left"
                        >
                          {mediaThumb}
                        </button>
                      ) : (
                        <a
                          href={watchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${video.title} 유튜브에서 보기`}
                          className="relative block aspect-video w-full overflow-hidden bg-black text-left"
                        >
                          {mediaThumb}
                        </a>
                      )}

                      <div className="p-6">
                        {video.embeddable ? (
                          <button
                            type="button"
                            onClick={() => setActiveVideo(video)}
                            className="text-left"
                          >
                            <h3 className="text-lg font-bold leading-snug text-black transition group-hover:text-gj-brass-deep">
                              {video.title}
                            </h3>
                          </button>
                        ) : (
                          <a
                            href={watchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-left"
                          >
                            <h3 className="text-lg font-bold leading-snug text-black transition group-hover:text-gj-brass-deep">
                              {video.title}
                            </h3>
                          </a>
                        )}
                        <p className="mt-2 text-sm leading-relaxed text-gj-muted">
                          {video.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {video.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-black/75"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl">
                학술 활동 · 언론 기고 · 방송 출연
              </h2>
              <div className="divide-y divide-gj-line border-y border-gj-line">
                {CLINIC_PRESS_RECORDS.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#f6f6f6] px-3 py-1 text-xs font-bold text-gj-brass-deep">
                        {item.kind}
                      </span>
                      <span className="text-sm font-bold text-black">
                        {item.outlet}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gj-muted sm:text-right sm:text-[15px]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ClinicVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </GjSubPageShell>
  );
}
