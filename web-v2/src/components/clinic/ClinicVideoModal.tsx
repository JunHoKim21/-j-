"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import type { ClinicVideoItem } from "@/data/urology-media";
import { CLINIC_PROFILE } from "@/data/clinic-profile";

interface ClinicVideoModalProps {
  video: ClinicVideoItem | null;
  onClose: () => void;
}

export function ClinicVideoModal({ video, onClose }: ClinicVideoModalProps) {
  useEffect(() => {
    if (!video) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gj-video-modal-title"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-gj-obsidian text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/12 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-gj-brass">
              {video.category} · {CLINIC_PROFILE.youtubeChannel.handle}
            </p>
            <h3
              id="gj-video-modal-title"
              className="mt-0.5 truncate text-base font-bold sm:text-lg"
            >
              {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="영상 모달 닫기"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 클릭 시에만 youtube-nocookie.com 동적 마운트, 닫기 시 즉시 언마운트 */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>

        <div className="flex flex-col justify-between gap-3 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
            {video.summary}
          </p>
          <a
            href={CLINIC_PROFILE.youtubeChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-gj-brass/50 px-3.5 py-2 text-xs font-semibold text-gj-brass-light transition hover:bg-gj-brass hover:text-gj-obsidian"
          >
            공식 채널 바로가기
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
