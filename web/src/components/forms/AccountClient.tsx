"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";
import {
  changePasswordSchema,
  type ChangePasswordFormValues,
} from "@/lib/validations/auth";

export function AccountClient() {
  const router = useRouter();
  const [pwChanged, setPwChanged] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawPw, setWithdrawPw] = useState("");
  const [withdrawChecked, setWithdrawChecked] = useState(false);
  const [withdrawErr, setWithdrawErr] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onChangePassword = async () => {
    setPwChanged(true);
    reset();
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawPw.trim()) {
      setWithdrawErr("본인 확인을 위해 현재 비밀번호를 입력해 주세요.");
      return;
    }
    if (!withdrawChecked) {
      setWithdrawErr("회원 탈퇴 및 개인정보 파기 안내에 동의해 주세요.");
      return;
    }
    setWithdrawErr(null);
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("gnj_preview_member");
    }
    setWithdrawOpen(false);
    router.push("/");
  };

  return (
    <section className="bg-surface-0 py-12 lg:py-20">
      <div className="container-page max-w-[680px] space-y-10">
        {/* 기본 계정 정보 */}
        <div className="rounded-2xl bg-surface-1 p-6 sm:p-8">
          <h2 className="text-[18px] font-bold text-brand-navy">계정 정보</h2>
          <dl className="mt-4 divide-y divide-line-subtle text-[14.5px]">
            <div className="flex justify-between py-3">
              <dt className="text-ink-secondary">가입 이메일</dt>
              <dd className="font-semibold text-ink-primary">member@example.com (프리뷰)</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-ink-secondary">회원 권한</dt>
              <dd className="font-semibold text-brand-blue">일반 회원 (1:1 비밀상담 전용)</dd>
            </div>
          </dl>
        </div>

        {/* 비밀번호 변경 */}
        <div className="rounded-2xl bg-surface-1 p-6 sm:p-8">
          <h2 className="text-[18px] font-bold text-brand-navy">비밀번호 변경</h2>
          <form onSubmit={handleSubmit(onChangePassword)} className="mt-5 space-y-4" noValidate>
            <div>
              <label htmlFor="cur-pw" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
                현재 비밀번호
              </label>
              <input
                id="cur-pw"
                type="password"
                {...register("currentPassword")}
                className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] focus:border-brand-blue focus:outline-none"
              />
              {errors.currentPassword && (
                <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="new-pw" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
                새 비밀번호 (영문·숫자 포함 8자 이상)
              </label>
              <input
                id="new-pw"
                type="password"
                {...register("newPassword")}
                className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] focus:border-brand-blue focus:outline-none"
              />
              {errors.newPassword && (
                <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="new-pw2" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
                새 비밀번호 확인
              </label>
              <input
                id="new-pw2"
                type="password"
                {...register("confirmNewPassword")}
                className="h-12 w-full rounded-xl border border-line-subtle bg-surface-0 px-4 text-[15px] focus:border-brand-blue focus:outline-none"
              />
              {errors.confirmNewPassword && (
                <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </div>

            {pwChanged && (
              <p className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-blue">
                <CheckCircle2 className="h-4 w-4" />
                비밀번호 변경 요청이 확인되었습니다.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center rounded-full bg-surface-dark px-6 text-[14px] font-bold text-white hover:bg-brand-gold-deep"
            >
              비밀번호 변경
            </button>
          </form>
        </div>

        {/* 회원 탈퇴 경계 영역 */}
        <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 sm:p-8">
          <h2 className="text-[17px] font-bold text-red-900">회원 탈퇴</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-red-900/80">
            탈퇴 시 계정 정보와 작성하신 모든 1:1 비밀상담 기록 및 민감정보는 복구할 수 없도록 즉시 파기됩니다.
          </p>
          <button
            type="button"
            onClick={() => setWithdrawOpen(true)}
            className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-red-300 bg-white px-5 text-[13.5px] font-bold text-red-700 hover:bg-red-50"
          >
            회원 탈퇴 진행
          </button>
        </div>
      </div>

      {/* 회원 탈퇴 확인 모달 */}
      {withdrawOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="회원 탈퇴 확인"
        >
          <button
            type="button"
            aria-label="모달 닫기"
            onClick={() => setWithdrawOpen(false)}
            className="absolute inset-0 bg-surface-dark/70 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-[440px] rounded-2xl bg-surface-0 p-6 shadow-2xl sm:p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="text-[18px] font-bold">회원 탈퇴 최종 확인</h3>
              </div>
              <button
                type="button"
                onClick={() => setWithdrawOpen(false)}
                aria-label="닫기"
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleWithdraw} className="mt-4 space-y-4">
              <p className="text-[13.5px] leading-relaxed text-ink-secondary">
                탈퇴 즉시 모든 개인정보 및 1:1 비밀상담 내역이 영구 파기되며 복구할 수 없습니다.
              </p>

              <div>
                <label htmlFor="withdraw-pw" className="mb-1.5 block text-[13px] font-semibold text-ink-secondary">
                  현재 비밀번호 재확인
                </label>
                <input
                  id="withdraw-pw"
                  type="password"
                  value={withdrawPw}
                  onChange={(e) => setWithdrawPw(e.target.value)}
                  className="h-11 w-full rounded-xl border border-line-subtle px-4 text-[14.5px]"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-2.5 text-[13px] font-medium text-ink-primary">
                <input
                  type="checkbox"
                  checked={withdrawChecked}
                  onChange={(e) => setWithdrawChecked(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-red-700"
                />
                <span>위 내용을 확인했으며, 회원 탈퇴 및 개인정보 즉시 파기에 동의합니다.</span>
              </label>

              {withdrawErr && (
                <p role="alert" className="text-[13px] font-semibold text-red-700">
                  {withdrawErr}
                </p>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setWithdrawOpen(false)}
                  className="h-10 rounded-full bg-surface-1 px-5 text-[13.5px] font-semibold text-ink-secondary"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="h-10 rounded-full bg-red-700 px-5 text-[13.5px] font-bold text-white hover:bg-red-800"
                >
                  탈퇴 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
