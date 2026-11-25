import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingQuickBar } from "@/components/layout/FloatingQuickBar";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

/**
 * 경량 회원(MEMBER) 전용 라우트 그룹 레이아웃 (/consultation/*, /account)
 * - STEP 6에서 서버 측 Supabase Auth 세션 주입(requireMember) 연결 지점
 */
export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingQuickBar />
      <MobileStickyBar />
    </div>
  );
}
