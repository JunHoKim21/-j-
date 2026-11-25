import type { Metadata } from "next";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";

export const metadata: Metadata = {
  title: "이용약관",
};

// [법무 검토 후 최종 확정]
export default function TermsPage() {
  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="TERMS OF SERVICE"
        title="서비스 이용약관"
        description={`${CLINIC_PROFILE.clinicName} 홈페이지 및 온라인 예약·1:1 비밀상담 서비스 이용에 관한 기본 약관입니다.`}
        breadcrumbs={[{ label: "이용약관" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[860px] space-y-8 text-[15px] leading-[1.85] text-gj-muted">
          <div>
            <h2 className="text-lg font-bold text-black">제1조 (목적)</h2>
            <p className="mt-2">
              본 약관은 {CLINIC_PROFILE.clinicName}이 제공하는 공식 홈페이지의 의료 정보
              안내, 비회원 온라인 예약 접수 및 회원 전용 1:1 비밀상담 서비스 이용 조건과
              절차를 규정함을 목적으로 합니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">
              제2조 (의료 정보 및 예약 확정의 성질)
            </h2>
            <p className="mt-2">
              홈페이지에 게시된 의학 정보와 1:1 비밀상담 답변은 내원 전 이해를 돕기 위한
              안내이며, 의학적 진단이나 처방을 대체하지 않습니다. 비회원 온라인 예약은
              접수 후 병원 담당자의 확인 전화({CLINIC_PROFILE.mainPhone})를 거쳐 최종
              확정됩니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">제3조 (계정 및 보안)</h2>
            <p className="mt-2">
              1:1 비밀상담 이용자는 본인 계정 정보를 안전하게 관리해야 하며, 타인의
              정보를 도용하거나 서비스 운영을 방해하는 행위를 금지합니다.
            </p>
          </div>
        </div>
      </section>
    </GjSubPageShell>
  );
}
