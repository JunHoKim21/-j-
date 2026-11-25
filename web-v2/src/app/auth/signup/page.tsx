"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import { useClinicMember } from "@/context/ClinicMemberContext";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";

export default function SignupPage() {
  const router = useRouter();
  const { signUp } = useClinicMember();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setError("이용약관 및 일반 개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    const res = signUp({ email, password, displayName });
    if (!res.ok) {
      setError(res.error ?? "입력 정보를 확인해 주세요.");
      return;
    }
    router.push("/consultation");
  };

  return (
    <GjSubPageShell>
      <section className="bg-[#f6f6f6] py-20 lg:py-28">
        <div className="gj-container max-w-[460px]">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-gj-brass">
                <UserPlus className="h-5 w-5" />
              </div>
              <h1 className="mt-4 text-2xl font-bold text-black">
                간편 이메일 회원가입
              </h1>
              <p className="mt-2 text-xs leading-relaxed text-gj-muted sm:text-sm">
                1:1 비밀상담 이용을 위해 이메일·비밀번호·닉네임(성함)만 최소 수집합니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="gj-up-email"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  이메일 *
                </label>
                <input
                  id="gj-up-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="gj-up-name"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  성함 또는 닉네임 *
                </label>
                <input
                  id="gj-up-name"
                  type="text"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="홍길동"
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="gj-up-pw"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  비밀번호 * (8자 이상)
                </label>
                <input
                  id="gj-up-pw"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="영문·숫자 포함 8자 이상"
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-2.5 rounded-xl bg-[#f6f6f6] p-3.5 text-xs leading-relaxed text-black">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gj-brass"
                />
                <span>
                  [필수] 이용약관 및 일반 개인정보 수집·이용에 동의합니다. (건강·증상
                  민감정보는 비밀상담 작성 시 별도 동의를 받습니다.)
                </span>
              </label>

              {error && (
                <p className="rounded-lg bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:bg-gj-brass"
              >
                가입하고 비밀상담 시작하기
              </button>
            </form>

            <div className="mt-6 border-t border-gj-line pt-5 text-center text-xs text-gj-muted">
              이미 가입되어 있으신가요?{" "}
              <Link
                href="/auth/login"
                className="font-bold text-black underline hover:text-gj-brass-deep"
              >
                로그인하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </GjSubPageShell>
  );
}
