import type { Metadata, Viewport } from "next";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { ClinicMemberProvider } from "@/context/ClinicMemberContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_PROFILE.clinicName} | 27년 정통 비뇨의학 · 2인 전문의 협진`,
    template: `%s | ${CLINIC_PROFILE.clinicName}`,
  },
  description:
    "1999년 개원 강남J비뇨기과의원. 강남 학동역 단일 프리미엄 본원, 박천진 대표원장·이웅희 원장 2인 전문의 협진, 5개 독립 개인진료실 · 2개 전용 수술실.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC_PROFILE.clinicName,
    telephone: CLINIC_PROFILE.mainPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "학동로 203 4층",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    sameAs: [CLINIC_PROFILE.youtubeChannel.url],
  };

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-dvh bg-gj-obsidian text-gj-ink antialiased">
        <ClinicMemberProvider>{children}</ClinicMemberProvider>
      </body>
    </html>
  );
}
