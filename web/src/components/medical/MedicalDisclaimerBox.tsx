import { Info } from "lucide-react";

/**
 * 의료법 부작용·주의사항 공통 고지 박스
 * - 모든 진료 상세 페이지 하단 의무 배치용 공통 컴포넌트
 */
export function MedicalDisclaimerBox() {
  return (
    <aside
      aria-label="진료 및 수술 전 확인사항"
      className="rounded-r-xl border-l-[3px] border-brand-navy bg-surface-1 px-5 py-4 sm:px-6 sm:py-5"
    >
      <div className="flex items-start gap-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
        <div className="space-y-1">
          <h3 className="text-[14px] font-bold text-brand-navy">진료 및 수술 전 확인사항</h3>
          <p className="text-[13.5px] leading-[1.65] text-ink-secondary">
            모든 검사·시술 및 수술은 개인의 건강 상태와 해부학적 조건에 따라 출혈, 감염, 염증, 통증 등 부작용이 발생할 수 있습니다.
            본 페이지의 의학 정보는 이해를 돕기 위한 안내이며, 정확한 진단과 치료 계획은 반드시 비뇨의학과 전문의와 직접 상담 후 결정하시기 바랍니다.
          </p>
        </div>
      </div>
    </aside>
  );
}
