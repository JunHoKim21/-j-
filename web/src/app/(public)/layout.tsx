import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { FloatingQuickBar } from "@/components/layout/FloatingQuickBar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1 pt-[60px] lg:pt-[84px]">{children}</main>
      <SiteFooter />
      <FloatingQuickBar />
      <MobileStickyBar />
    </div>
  );
}
