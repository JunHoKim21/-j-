import { AlertCircle } from "lucide-react";

/**
 * 의료법 준수: 모든 진료·시술 상세 페이지 하단 의무 배치 부작용·주의사항 공통 고지 박스
 */
export function UrologyDisclaimerBox() {
  return (
    <aside
      aria-label="진료 및 수술 전 확인사항"
      className="rounded-2xl border-l-4 border-l-gj-brass-deep bg-[#f6f6f6] p-6 sm:p-7"
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gj-brass-deep" />
        <div>
          <h3 className="text-[15px] font-bold text-black">
            진료 및 수술 전 부작용 · 주의사항 고지
          </h3>
          <p className="mt-2 text-[13.5px] leading-[1.78] text-gj-muted sm:text-[14px]">
            모든 검사·시술 및 수술은 개인의 건강 상태, 기저질환 및 해부학적 조건에
            따라 출혈, 감염, 염증, 부종, 통증, 감각 변화 또는 기대 결과와의 차이 등
            부작용이 발생할 수 있습니다. 본 페이지의 의학 정보는 이해를 돕기 위한
            일반적인 안내이며, 정확한 진단과 치료 계획은 반드시 비뇨의학과 전문의와
            직접 상담 후 결정하시기 바랍니다.
          </p>
        </div>
      </div>
    </aside>
  );
}
