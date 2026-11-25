"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";
import { useClinicMember } from "@/context/ClinicMemberContext";
import { UROLOGY_CENTERS } from "@/data/urology-centers";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";
import { ClinicConsentSplit } from "@/components/clinic/ClinicConsentSplit";

export default function ConsultationNewPage() {
  const router = useRouter();
  const { member, ready, createPost } = useClinicMember();

  const [category, setCategory] = useState(UROLOGY_CENTERS[0].title);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [generalAgreed, setGeneralAgreed] = useState(false);
  const [sensitiveAgreed, setSensitiveAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (title.trim().length < 2) next.title = "상담 제목을 입력해 주세요.";
    if (content.trim().length < 10)
      next.content = "상담 내용을 10자 이상 자세히 입력해 주세요.";
    if (!generalAgreed)
      next.generalAgreed = "일반 개인정보 수집·이용에 동의해 주세요.";
    if (!sensitiveAgreed)
      next.sensitiveAgreed =
        "민감정보(건강·증상정보) 별도 수집·이용에 동의해 주세요.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const created = createPost({
      category,
      title,
      content,
      contactPhone,
    });
    if (created) {
      router.push(`/consultation/${created.id}`);
    }
  };

  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="PRIVATE 1:1 CONSULTATION"
        title="새 1:1 비밀상담 작성"
        description="작성하신 내용은 본인과 강남J비뇨기과 의료진만 열람할 수 있습니다."
        breadcrumbs={[
          { label: "1:1 비밀상담", href: "/consultation" },
          { label: "새 상담 작성" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[820px]">
          {ready && !member ? (
            <div className="rounded-3xl bg-[#f6f6f6] p-10 text-center">
              <p className="text-base font-bold text-black">
                1:1 비밀상담 작성은 로그인 후 이용하실 수 있습니다.
              </p>
              <Link
                href="/auth/login"
                className="mt-5 inline-flex h-12 items-center rounded-full bg-black px-8 text-sm font-bold text-white hover:bg-gj-brass"
              >
                이메일 로그인
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6 rounded-3xl border border-gj-line bg-white p-6 sm:p-10"
            >
              <div>
                <label
                  htmlFor="gj-c-cat"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  상담 분야
                </label>
                <select
                  id="gj-c-cat"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm font-semibold text-black focus:border-black focus:bg-white focus:outline-none"
                >
                  {UROLOGY_CENTERS.map((c) => (
                    <option key={c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="기타 비뇨기 문의">기타 비뇨기 문의</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="gj-c-title"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  상담 제목 *
                </label>
                <input
                  id="gj-c-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="예: 전립선비대증 HoLEP 회복 기간 문의드립니다"
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                />
                {errors.title && (
                  <p className="mt-1 text-xs font-medium text-rose-600">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gj-c-content"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  상담 내용 * (최소 10자)
                </label>
                <textarea
                  id="gj-c-content"
                  rows={7}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="현재 증상, 기간, 궁금하신 사항을 자유롭게 작성해 주세요."
                  className="w-full rounded-xl border border-gj-line bg-[#f6f6f6] p-4 text-sm leading-relaxed text-black focus:border-black focus:bg-white focus:outline-none"
                />
                {errors.content && (
                  <p className="mt-1 text-xs font-medium text-rose-600">
                    {errors.content}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gj-c-phone"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  전화 회신 연락처 (선택)
                </label>
                <input
                  id="gj-c-phone"
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="전화 안내를 함께 원하실 경우에만 입력해 주세요"
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <ClinicConsentSplit
                idPrefix="consult-new"
                theme="light"
                generalAgreed={generalAgreed}
                sensitiveAgreed={sensitiveAgreed}
                onGeneralChange={setGeneralAgreed}
                onSensitiveChange={setSensitiveAgreed}
                generalError={errors.generalAgreed}
                sensitiveError={errors.sensitiveAgreed}
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Link
                  href="/consultation"
                  className="inline-flex h-12 items-center gap-1.5 rounded-full border border-gj-line px-5 text-sm font-bold text-gj-muted hover:border-black hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                  목록으로
                </Link>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-8 text-sm font-bold text-white transition hover:bg-gj-brass"
                >
                  <Lock className="h-4 w-4" />
                  1:1 비밀상담 등록하기
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </GjSubPageShell>
  );
}
