import type { Metadata, Viewport } from "next";
import { CLINIC_INFO } from "@/lib/data/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_INFO.name} | 2인 전문의 협진 · 전립선·요로결석·남성재건`,
    template: `%s | ${CLINIC_INFO.name}`,
  },
  description:
    "1999년 개원 강남J비뇨기과의원. 박천진 대표원장·이웅희 원장 2인 전문의 협진, HoLEP 전립선비대증·요로결석·음경임플란트·남성재건수술, 5개 독립 개인진료실 프라이버시 진료.",
  other: {
    "naver-site-verification": "64cd5619dd07f1f4aae3c5baca241d4e9df20eda",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F253E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC_INFO.name,
    url: "https://www.manclinic.com",
    telephone: CLINIC_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "학동로 203 4F",
      addressLocality: "강남구",
      addressRegion: "서울특별시",
      addressCountry: "KR",
    },
    sameAs: [CLINIC_INFO.youtube.url],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-surface-0 text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
