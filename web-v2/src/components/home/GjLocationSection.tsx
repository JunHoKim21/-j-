"use client";

import { useState } from "react";
import { Car, Clock, ExternalLink, MapPin, Phone, TrainFront } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { cn } from "@/lib/cn";

type LocationTab = "directions" | "parking" | "hours";

export function GjLocationSection() {
  const [tab, setTab] = useState<LocationTab>("directions");

  return (
    <section
      id="clinic-location"
      aria-label="학동역 단일 프리미엄 본원 오시는 길"
      className="scroll-mt-24 bg-white py-20 text-black lg:py-[120px]"
    >
      <div className="gj-container">
        {/* 상단 대형 탭 (26px, 비활성 15% → 활성 블랙 + 2px 언더라인) */}
        <div
          data-gj-reveal
          role="tablist"
          aria-label="학동역 본원 안내 탭"
          className="flex flex-wrap items-center gap-7"
        >
          {(
            [
              { id: "directions", label: "강남 학동역 본원" },
              { id: "parking", label: "주차 · 지하철 안내" },
              { id: "hours", label: "진료 · 상담시간" },
            ] as const
          ).map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className={cn(
                  "relative pb-2 text-[20px] font-bold transition sm:text-[26px]",
                  active
                    ? "text-black after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-black"
                    : "text-black/15 hover:text-black/50"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* 60% / 40% 플렉스 2단 (gap 45px) */}
        <div
          data-gj-reveal
          className="mt-10 grid grid-cols-1 gap-8 lg:mt-[64px] lg:grid-cols-12 lg:gap-11"
        >
          {/* 좌측 60%: 2:1 비율 학동역 8·9번 출구 약도 */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-[15px] border border-gj-line bg-[#f6f6f6] sm:aspect-[2/1]">
              <svg
                viewBox="0 0 800 400"
                className="h-full w-full"
                role="img"
                aria-label="지하철 7호선 학동역 8번·9번 출구 사이 강남J비뇨기과의원 위치 약도"
              >
                <rect width="800" height="400" fill="#F6F6F6" />
                <rect x="30" y="30" width="210" height="135" rx="14" fill="#EAEAEA" />
                <rect x="280" y="30" width="250" height="135" rx="14" fill="#EAEAEA" />
                <rect x="570" y="30" width="200" height="135" rx="14" fill="#EAEAEA" />
                <rect x="30" y="245" width="210" height="125" rx="14" fill="#EAEAEA" />
                <rect x="280" y="245" width="250" height="125" rx="14" fill="#EAEAEA" />
                <rect x="570" y="245" width="200" height="125" rx="14" fill="#EAEAEA" />

                <rect x="0" y="182" width="800" height="46" fill="#FFFFFF" />
                <line
                  x1="0"
                  y1="205"
                  x2="800"
                  y2="205"
                  stroke="#D4D4D4"
                  strokeWidth="2"
                  strokeDasharray="10 8"
                />
                <rect x="248" y="0" width="24" height="400" fill="#FFFFFF" />
                <rect x="538" y="0" width="24" height="400" fill="#FFFFFF" />

                <g transform="translate(260, 205)">
                  <rect x="-56" y="-17" width="112" height="34" rx="17" fill="#5B6B2E" />
                  <text x="0" y="5" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    7호선 학동역
                  </text>
                </g>

                <g transform="translate(362, 166)">
                  <circle r="13" fill="#101010" />
                  <text x="0" y="4.5" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    8
                  </text>
                </g>
                <g transform="translate(462, 166)">
                  <circle r="13" fill="#101010" />
                  <text x="0" y="4.5" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    9
                  </text>
                </g>

                <g transform="translate(412, 102)">
                  <circle r="34" fill="#FCA400" opacity="0.24" />
                  <rect x="-92" y="-32" width="184" height="52" rx="12" fill="#101010" />
                  <text
                    x="0"
                    y="-10"
                    textAnchor="middle"
                    fill="#FCA400"
                    fontSize="10.5"
                    fontWeight="700"
                    letterSpacing="1.2"
                  >
                    학동로 203 · 4층
                  </text>
                  <text x="0" y="10" textAnchor="middle" fill="#FFFFFF" fontSize="14.5" fontWeight="700">
                    강남J비뇨기과의원
                  </text>
                  <polygon points="-7,20 7,20 0,30" fill="#101010" />
                </g>

                <text x="640" y="210" fill="#737373" fontSize="12" fontWeight="600">
                  학동로 (강남구청역 방향 →)
                </text>
              </svg>

              <div className="absolute right-4 bottom-4 flex gap-2">
                <a
                  href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-bold text-black shadow-md transition hover:bg-black hover:text-white"
                >
                  네이버 지도
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%95%99%EB%8F%99%EB%A1%9C%20203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f6f6f6] px-4 py-2 text-xs font-bold text-black shadow-md transition hover:bg-black hover:text-white"
                >
                  카카오맵
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 우측 40%: 주소 · 연락처 · 필 버튼 */}
          <div className="flex flex-col justify-between lg:col-span-5">
            {tab === "directions" && (
              <div>
                <h3 className="flex items-start gap-2 text-[22px] font-bold leading-snug text-black sm:text-[26px]">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-gj-brass" />
                  {CLINIC_PROFILE.streetAddress}
                </h3>
                <p className="mt-2 pl-8 text-[15px] text-gj-muted">
                  {CLINIC_PROFILE.transitGuide}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 pl-8">
                  <span className="rounded-full bg-[#f6f6f6] px-4 py-2 text-[13.5px] font-semibold text-black">
                    {CLINIC_PROFILE.facilitySummary}
                  </span>
                </div>

                <div className="mt-7 border-t border-black/10 pt-6">
                  <p className="text-xs font-bold tracking-[0.16em] text-gj-muted">
                    대표 전화 · 상담 문의
                  </p>
                  <a
                    href={CLINIC_PROFILE.mainPhoneHref}
                    className="mt-2 inline-flex items-center gap-2 text-[30px] font-bold tracking-tight tabular-nums text-black hover:text-gj-brass-deep"
                  >
                    <Phone className="h-6 w-6 text-gj-brass" />
                    {CLINIC_PROFILE.mainPhone}
                  </a>
                  <p className="mt-2 text-sm tabular-nums text-gj-muted">
                    상담 · 문자 {CLINIC_PROFILE.consultMobile} · FAX {CLINIC_PROFILE.faxNumber}
                  </p>
                </div>
              </div>
            )}

            {tab === "parking" && (
              <div className="space-y-4">
                <div className="rounded-[15px] bg-[#f6f6f6] p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-black">
                    <TrainFront className="h-5 w-5 text-gj-brass-deep" />
                    지하철 7호선 학동역
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gj-muted">
                    7호선 학동역 8번·9번 출구 사이 학동로 203 빌딩 4층 (도보 1분)
                  </p>
                </div>
                <div className="rounded-[15px] bg-[#f6f6f6] p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-black">
                    <Car className="h-5 w-5 text-gj-brass-deep" />
                    지하 주차장 안내
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gj-muted">
                    {CLINIC_PROFILE.parkingGuide} (내비게이션: 서울시 강남구 학동로 203)
                  </p>
                </div>
              </div>
            )}

            {tab === "hours" && (
              <div className="rounded-[15px] bg-[#f6f6f6] p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-black">
                  <Clock className="h-5 w-5 text-gj-brass-deep" />
                  상담 · 진료시간
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm tabular-nums">
                  <li className="flex justify-between border-b border-black/10 pb-2">
                    <span className="text-gj-muted">평일 상담</span>
                    <span className="font-bold">09:00 ~ 18:00</span>
                  </li>
                  <li className="flex justify-between border-b border-black/10 pb-2">
                    <span className="text-gj-muted">토요일 상담</span>
                    <span className="font-bold">09:00 ~ 13:00</span>
                  </li>
                  <li className="flex justify-between border-b border-black/10 pb-2">
                    <span className="text-gj-muted">점심시간</span>
                    <span className="font-semibold">13:00 ~ 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gj-muted">휴진</span>
                    <span className="font-bold text-gj-brass-deep">일요일 · 공휴일 휴진</span>
                  </li>
                </ul>
              </div>
            )}

            <div className="mt-7 grid grid-cols-2 gap-3">
              <a
                href={CLINIC_PROFILE.mainPhoneHref}
                className="flex h-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white transition hover:bg-gj-brass"
              >
                전화 문의
              </a>
              <a
                href="#quick-reservation"
                className="flex h-12 items-center justify-center rounded-full bg-[#f6f6f6] text-sm font-bold text-black transition hover:bg-gj-cool-deep"
              >
                온라인 예약
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
