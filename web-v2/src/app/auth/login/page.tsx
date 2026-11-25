"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { useClinicMember } from "@/context/ClinicMemberContext";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useClinicMember();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const res = signIn(email, password);
    if (!res.ok) {
      setError(res.error ?? "로그인 정보를 확인해 주세요.");
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
                <Lock className="h-5 w-5" />
              </div>
              <h1 className="mt-4 text-2xl font-bold text-black">
                1:1 비밀상담 로그인
              </h1>
              <p className="mt-2 text-xs leading-relaxed text-gj-muted sm:text-sm">
                본인 상담 내역 보호를 위한 최소 정보만 사용합니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="gj-login-email"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  이메일
                </label>
                <input
                  id="gj-login-email"
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
                  htmlFor="gj-login-pw"
                  className="mb-1.5 block text-xs font-bold text-gj-muted"
                >
                  비밀번호 (8자 이상)
                </label>
                <input
                  id="gj-login-pw"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호 입력"
                  className="h-12 w-full rounded-xl border border-gj-line bg-[#f6f6f6] px-4 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              {error && (
                <p className="rounded-lg bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-black text-sm font-bold text-white transition hover:bg-gj-brass"
              >
                로그인
              </button>
            </form>

            <div className="mt-6 border-t border-gj-line pt-5 text-center text-xs text-gj-muted">
              아직 계정이 없으신가요?{" "}
              <Link
                href="/auth/signup"
                className="font-bold text-black underline hover:text-gj-brass-deep"
              >
                1분 간편 회원가입
              </Link>
            </div>
          </div>
        </div>
      </section>
    </GjSubPageShell>
  );
}
