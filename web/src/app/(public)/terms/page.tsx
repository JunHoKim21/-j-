import type { Metadata } from "next";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { SubHero } from "@/components/layout/SubHero";

export const metadata: Metadata = {
  title: "이용약관",
  description: "강남J비뇨기과의원 홈페이지, 온라인 예약 및 1:1 비밀상담 서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <>
      <SubHero
        kicker="LEGAL · TERMS OF SERVICE"
        title="이용약관"
        description="강남J비뇨기과의원 웹사이트 및 온라인 예약·1:1 비밀상담 서비스 이용에 관한 기본 사항을 안내합니다."
        breadcrumbs={[{ label: "이용약관" }]}
      />

      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page max-w-[860px] space-y-10 text-[15px] leading-[1.8] text-ink-secondary">
          {/* [법무 검토 후 최종 확정] */}
          <div className="rounded-xl bg-surface-1 px-5 py-4 text-[13.5px] font-medium text-brand-navy">
            ※ 본 이용약관은 신규 홈페이지 운영 기준 초안이며, 오픈 전 병원 및 법무 검토 후 최종 확정됩니다.
          </div>

          <article className="space-y-2.5">
            <h2 className="text-[19px] font-bold text-brand-navy">제1조 (목적)</h2>
            <p>
              본 약관은 {CLINIC_INFO.name}(이하 &lsquo;병원&rsquo;)이 운영하는 웹사이트에서 제공하는 진료 정보 안내,
              비회원 온라인 예약 신청 및 경량 회원 전용 1:1 비밀상담 서비스의 이용 조건과 절차를 규정함을 목적으로 합니다.
            </p>
          </article>

          <article className="space-y-2.5">
            <h2 className="text-[19px] font-bold text-brand-navy">제2조 (온라인 예약의 확정 기준)</h2>
            <p>
              웹사이트를 통한 온라인 예약 신청은 희망 일정을 접수하는 절차이며, 신청 즉시 예약이 확정되지 않습니다.
              병원 담당자가 진료 일정 확인 후 대표전화({CLINIC_INFO.phone})로 안내하여 최종 확정합니다.
            </p>
          </article>

          <article className="space-y-2.5">
            <h2 className="text-[19px] font-bold text-brand-navy">제3조 (1:1 비밀상담 및 의학 정보의 한계)</h2>
            <p>
              1:1 비밀상담은 환자 프라이버시 보호를 위해 이메일 로그인 회원 본인에 한해 작성 및 답변 열람이 가능합니다.
              홈페이지의 모든 의학 정보와 온라인 답변은 일반적인 이해를 돕기 위한 안내이며, 실제 의학적 진단과 처방을 대체할 수 없습니다.
            </p>
          </article>

          <article className="space-y-2.5">
            <h2 className="text-[19px] font-bold text-brand-navy">제4조 (회원 탈퇴 및 이용 제한)</h2>
            <p>
              회원은 언제든지 계정 관리 화면에서 탈퇴를 요청할 수 있으며, 병원은 관련 법령 및 개인정보처리방침에 따라
              회원 정보와 상담 기록을 지체 없이 파기합니다. 타인의 명의를 도용하거나 자동화 수단으로 스팸을 반복 등록하는 경우 이용이 제한될 수 있습니다.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
