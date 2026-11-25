import type { Metadata } from "next";
import { CLINIC_INFO } from "@/lib/data/clinic";
import { SubHero } from "@/components/layout/SubHero";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "강남J비뇨기과의원 개인정보처리방침 및 민감정보(건강정보) 보호 기준을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <SubHero
        kicker="LEGAL · PRIVACY POLICY"
        title="개인정보처리방침"
        description="강남J비뇨기과의원은 개인정보보호법 및 의료법 등 관련 법령을 준수하여 환자의 개인정보와 민감정보를 안전하게 보호합니다."
        breadcrumbs={[{ label: "개인정보처리방침" }]}
      />

      <section className="bg-surface-0 py-14 lg:py-24">
        <div className="container-page max-w-[860px] space-y-10 text-[15px] leading-[1.8] text-ink-secondary">
          {/* [법무 검토 후 최종 확정] */}
          <div className="rounded-xl bg-surface-1 px-5 py-4 text-[13.5px] font-medium text-brand-navy">
            ※ 본 개인정보처리방침은 신규 반응형 홈페이지 기준 초안이며, 오픈 전 병원 및 법무 검토 후 최종 확정됩니다.
          </div>

          <article className="space-y-3">
            <h2 className="text-[19px] font-bold text-brand-navy">1. 개인정보의 처리 목적</h2>
            <p>
              {CLINIC_INFO.name}(이하 &lsquo;병원&rsquo;)은 다음의 목적을 위하여 필요한 최소한의 개인정보를 처리합니다.
              처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>온라인 진료 예약 신청 접수 및 병원 전화 확인·예약 확정 안내</li>
              <li>경량 회원제 기반 1:1 비밀상담 작성, 전문의 답변 제공 및 본인 확인</li>
              <li>민원 처리, 법령상 의무 이행 및 서비스 보안 유지</li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-[19px] font-bold text-brand-navy">2. 처리하는 개인정보 및 민감정보 항목</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong className="text-ink-primary">온라인 예약 (비회원):</strong> 성함, 연락처(암호화 저장), 희망 진료분야·의료진·일시 / [별도 민감정보 동의 시] 내원 목적·증상 메모
              </li>
              <li>
                <strong className="text-ink-primary">경량 회원가입 (1:1 비밀상담 전용):</strong> 이메일, 비밀번호(일방향 암호화), 이름(또는 닉네임)
              </li>
              <li>
                <strong className="text-ink-primary">1:1 비밀상담 작성 (민감정보 별도 동의 필수):</strong> 상담 카테고리, 제목, 증상·건강 관련 상담 내용, 회신 연락처(선택, 암호화 저장)
              </li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-[19px] font-bold text-brand-navy">3. 개인정보의 보유 및 이용기간 · 파기</h2>
            <p>
              병원은 법령에 따른 보유·이용기간 또는 정보주체로부터 동의받은 보유기간 내에서 개인정보를 처리·보유합니다.
              온라인 예약 및 1:1 비밀상담 기록은 목적 달성(처리·답변 완료) 후 <strong className="text-ink-primary">1년간 보관 후 지체 없이 영구 파기</strong>하며,
              회원이 탈퇴를 요청하는 경우 관련 법령상 보존 의무가 없는 한 즉시 파기 또는 복구 불가능한 방식으로 비식별화합니다.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-[19px] font-bold text-brand-navy">4. 개인정보의 안전성 확보 조치</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>전송 구간 암호화(HTTPS) 및 연락처 등 주요 식별정보 AES-256-GCM 암호화 저장</li>
              <li>관리자 권한 최소화(SUPER_ADMIN / STAFF) 및 서버 측 본인 소유 검증을 통한 타인 상담 열람 원천 차단</li>
              <li>환자 상담 내용의 외부 AI 서비스 전송 금지 및 서버 로그 미기록</li>
            </ul>
          </article>

          <article className="space-y-3">
            <h2 className="text-[19px] font-bold text-brand-navy">5. 개인정보 보호책임자</h2>
            <div className="rounded-xl bg-surface-1 p-5 text-[14.5px]">
              <p>
                <strong className="text-brand-navy">개인정보 보호책임자:</strong> {CLINIC_INFO.representative} 대표원장
              </p>
              <p className="mt-1 tabular-nums">
                <strong className="text-brand-navy">연락처:</strong> {CLINIC_INFO.phone} ({CLINIC_INFO.address})
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
