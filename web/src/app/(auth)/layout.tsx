import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { CLINIC_INFO } from "@/lib/data/clinic";

/**
 * 경량 회원 인증 전용 중앙 집중형 클린 레이아웃 (/auth/*)
 */
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface-1">
      <header className="border-b border-line-subtle bg-surface-0">
        <div className="container-page flex h-[64px] items-center justify-between">
          <Link href="/" aria-label={`${CLINIC_INFO.name} 홈`}>
            <img
              src="/assets/brand/logo.png"
              alt={CLINIC_INFO.name}
              className="h-[28px] w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink-secondary hover:text-ink-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>홈으로</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 py-12">
        <div className="w-full max-w-[440px] rounded-2xl bg-surface-0 p-7 shadow-sm sm:p-9">
          <div className="mb-6 flex items-center gap-2 text-[12.5px] font-semibold text-brand-blue">
            <Lock className="h-3.5 w-3.5" />
            <span>1:1 비밀상담 전용 경량 회원 서비스</span>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
