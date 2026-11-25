import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/main.html", destination: "/", permanent: true },
      { source: "/@2018", destination: "/", permanent: true },
      { source: "/@2018/index.html", destination: "/", permanent: true },
      { source: "/@2018/01_hp/hp_01.html", destination: "/about/doctors", permanent: true },
      { source: "/@2018/01_hp/hp_12.html", destination: "/about/doctors", permanent: true },
      { source: "/@2018/01_hp/hp_04.html", destination: "/about/location", permanent: true },
      { source: "/@2018/01_hp/hp_08.html", destination: "/about/location", permanent: true },
      { source: "/@2018/01_hp/hp_11.html", destination: "/about/facilities", permanent: true },
      { source: "/@2018/01_hp/nonbenefit.html", destination: "/nonbenefit", permanent: true },
      { source: "/@2018/01_hp/hp_09.html", destination: "/about/greeting", permanent: true },
      { source: "/@2018/01_hp/hp_03.html", destination: "/about/greeting", permanent: true },
      { source: "/@2018/01_hp/:path*", destination: "/media", permanent: true },
      { source: "/@2018/clinic_08/c8_0101.html", destination: "/departments/stone/symptoms", permanent: true },
      { source: "/@2018/clinic_08/c8_0201.html", destination: "/departments/stone/diagnosis", permanent: true },
      { source: "/@2018/clinic_08/:path*", destination: "/departments/stone/treatment", permanent: true },
      { source: "/@2018/clinic_04/c4_0401.html", destination: "/departments/sexual-implant/penile-implant", permanent: true },
      { source: "/@2018/clinic_04/c4_0101.html", destination: "/departments/sexual-implant/ed", permanent: true },
      { source: "/@2018/clinic_04/c4_0201.html", destination: "/departments/sexual-implant/ed-test", permanent: true },
      { source: "/@2018/clinic_04/:path*", destination: "/departments/sexual-implant/ed-treatment", permanent: true },
      { source: "/@2018/clinic_06/:path*", destination: "/departments/sexual-implant/pe", permanent: true },
      { source: "/@2018/clinic_02/c2_0101.html", destination: "/departments/prostate/overview", permanent: true },
      { source: "/@2018/clinic_02/c2_0201.html", destination: "/departments/prostate/bph", permanent: true },
      { source: "/@2018/clinic_02/c2_0301.html", destination: "/departments/prostate/holep", permanent: true },
      { source: "/@2018/clinic_02/c2_0701.html", destination: "/departments/prostate/urolift", permanent: true },
      { source: "/@2018/clinic_02/c2_0401.html", destination: "/departments/prostate/prostatitis", permanent: true },
      { source: "/@2018/clinic_02/c2_0501.html", destination: "/departments/prostate/cancer", permanent: true },
      { source: "/@2018/clinic_02/:path*", destination: "/departments/prostate/prostatodynia", permanent: true },
      { source: "/@2018/clinic_03/c3_0101.html", destination: "/departments/reconstruction/glans", permanent: true },
      { source: "/@2018/clinic_03/c3_0201.html", destination: "/departments/reconstruction/girth", permanent: true },
      { source: "/@2018/clinic_03/c3_0301.html", destination: "/departments/reconstruction/length", permanent: true },
      { source: "/@2018/clinic_03/c3_0401.html", destination: "/departments/reconstruction/foreign-body", permanent: true },
      { source: "/@2018/clinic_03/c3_0501.html", destination: "/departments/reconstruction/peyronie", permanent: true },
      { source: "/@2018/clinic_03/:path*", destination: "/departments/reconstruction/buried-penis", permanent: true },
      { source: "/@2018/clinic_05/c5_0301.html", destination: "/departments/vasectomy-circumcision/reversal", permanent: true },
      { source: "/@2018/clinic_05/:path*", destination: "/departments/vasectomy-circumcision/vasectomy", permanent: true },
      { source: "/@2018/clinic_07/:path*", destination: "/departments/vasectomy-circumcision/circumcision", permanent: true },
      { source: "/@2018/02_coun/rev.html", destination: "/reservation", permanent: true },
      { source: "/@2018/02_coun/:path*", destination: "/consultation", permanent: true },
      { source: "/@2018/05_faq/:path*", destination: "/faq", permanent: true },
      { source: "/@2018/04_member/login.html", destination: "/auth/login", permanent: true },
      { source: "/@2018/04_member/join1.html", destination: "/auth/signup", permanent: true },
      { source: "/@2018/04_member/member_01.html", destination: "/privacy", permanent: true },
      { source: "/@2018/04_member/member_02.html", destination: "/terms", permanent: true },
      { source: "/@2018/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
