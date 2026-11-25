import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { CLINIC_PROFILE } from "@/data/clinic-profile";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-gj-obsidian px-5 py-24 text-center text-white">
      <p className="text-xs font-semibold tracking-[0.2em] text-gj-brass">
        {CLINIC_PROFILE.englishBrand}
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        요청하신 페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
        입력하신 주소가 변경되었거나 존재하지 않습니다. 메인 페이지로 이동하시거나
        대표전화({CLINIC_PROFILE.mainPhone})로 문의해 주세요.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-gj-brass px-6 py-3.5 text-sm font-semibold text-gj-obsidian transition hover:bg-gj-brass-light"
        >
          <ArrowLeft className="h-4 w-4" />
          메인 페이지로 돌아가기
        </Link>
        <a
          href={CLINIC_PROFILE.mainPhoneHref}
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Phone className="h-4 w-4" />
          {CLINIC_PROFILE.mainPhone}
        </a>
      </div>
    </main>
  );
}
