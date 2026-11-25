import type { Metadata } from "next";
import { CLINIC_PROFILE } from "@/data/clinic-profile";
import { GjSubPageShell } from "@/components/shell/GjSubPageShell";
import { GjSubHero } from "@/components/shell/GjSubHero";

export const metadata: Metadata = {
  title: "개인정보처리방침",
};

// [법무 검토 후 최종 확정]
export default function PrivacyPage() {
  return (
    <GjSubPageShell>
      <GjSubHero
        kicker="PRIVACY POLICY"
        title="개인정보처리방침"
        description={`${CLINIC_PROFILE.clinicName}은 개인정보보호법 등 관련 법령을 준수하여 환자의 개인정보와 민감정보(건강정보)를 안전하게 보호합니다.`}
        breadcrumbs={[{ label: "개인정보처리방침" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="gj-container max-w-[860px] space-y-8 text-[15px] leading-[1.85] text-gj-muted">
          <div>
            <h2 className="text-lg font-bold text-black">
              1. 개인정보 및 민감정보의 수집 항목과 목적
            </h2>
            <p className="mt-2">
              병원은 비회원 온라인 예약 접수 및 경량 회원 전용 1:1 비밀상담 서비스
              제공을 위해 최소한의 일반 개인정보(성함, 연락처 또는 이메일)와 별도 동의를
              거친 민감정보(선택 진료분야 및 증상 문의 내용)만을 수집·이용합니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">
              2. 민감정보(건강정보)의 별도 동의 및 비공개 보호
            </h2>
            <p className="mt-2">
              개인정보보호법 제23조에 따라 건강·증상 관련 민감정보는 일반 개인정보와
              분리하여 별도 동의를 받으며, 1:1 비밀상담 내역은 본인과 의료진 외 타인에게
              일체 노출되지 않습니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">
              3. 보유 및 이용기간과 파기
            </h2>
            <p className="mt-2">
              수집된 상담·예약 정보는 목적 달성 후 관련 법령에서 정한 보관 기간 또는
              접수·답변 완료일로부터 1년 이내에 지체 없이 복구 불가능한 방법으로
              파기합니다.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black">
              4. 개인정보 보호책임자 및 문의처
            </h2>
            <p className="mt-2">
              개인정보 보호책임자: {CLINIC_PROFILE.representative} 대표원장 · 대표전화:{" "}
              {CLINIC_PROFILE.mainPhone} · 주소: {CLINIC_PROFILE.streetAddress}
            </p>
          </div>
        </div>
      </section>
    </GjSubPageShell>
  );
}
