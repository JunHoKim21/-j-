"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import type { ClinicVideoItem } from "@/data/urology-media";
import { ClinicVideoModal } from "@/components/clinic/ClinicVideoModal";

export function ClinicRelatedVideoStrip({
  videos,
}: {
  videos: ClinicVideoItem[];
}) {
  const [selected, setSelected] = useState<ClinicVideoItem | null>(null);
  if (videos.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {videos.map((video) => (
          <article
            key={video.id}
            className="group overflow-hidden rounded-2xl border border-gj-line bg-[#f6f6f6]"
          >
            <button
              type="button"
              onClick={() => setSelected(video)}
              aria-label={`${video.title} 재생`}
              className="relative aspect-video w-full overflow-hidden bg-black text-left"
            >
              <img
                src={video.safeCoverSrc}
                alt={video.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />
              <span className="absolute top-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold text-gj-brass">
                {video.category}
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition group-hover:scale-110 group-hover:bg-gj-brass group-hover:text-white">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </span>
              </span>
            </button>
            <div className="p-5">
              <h4 className="line-clamp-2 text-[15.5px] font-bold leading-snug text-black">
                {video.title}
              </h4>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gj-muted">
                {video.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      <ClinicVideoModal video={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
