"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
  type ForgotPasswordFormValues,
  type LoginFormValues,
  type ResetPasswordFormValues,
  type SignupFormValues,
} from "@/lib/validations/auth";

export function LoginForm() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    // STEP 6에서 signInMemberAction(Supabase Auth)으로 교체 예정
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("gnj_preview_member", "1");
    }
    router.push("/consultation");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold tracking-tight text-brand-navy">이메일 로그인</h1>
        <p className="mt-1.5 text-[14px] text-ink-secondary">
          1:1 비밀상담 작성 및 병원 답변 확인을 위해 로그인해 주세요.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="login-email" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            이메일
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
            {...register("email")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="login-pw" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            비밀번호
          </label>
          <div className="relative">
            <input
              id="login-pw"
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              placeholder="비밀번호 입력"
              {...register("password")}
              className="h-12 w-full rounded-xl border border-line-subtle pl-4 pr-11 text-[15px] focus:border-brand-blue focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 표시"}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-ink-secondary"
            >
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-full bg-surface-dark text-[15px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
        >
          로그인
        </button>
      </form>

      <div className="flex items-center justify-between border-t border-line-subtle pt-5 text-[13.5px]">
        <Link href="/auth/forgot-password" className="font-medium text-ink-secondary hover:text-ink-primary">
          비밀번호 재설정
        </Link>
        <Link href="/auth/signup" className="font-bold text-brand-blue hover:underline">
          간편 이메일 회원가입
        </Link>
      </div>
    </div>
  );
}

export function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      termsAgreed: false,
      privacyAgreed: false,
      website: "",
    },
  });

  const onSubmit = async () => {
    // STEP 6에서 signUpMemberAction(Supabase Auth + member_profile + consent_record)으로 교체 예정
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("gnj_preview_member", "1");
    }
    router.push("/consultation");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold tracking-tight text-brand-navy">간편 이메일 회원가입</h1>
        <p className="mt-1.5 text-[14px] text-ink-secondary">
          1:1 비밀상담의 안전한 답변 확인을 위한 최소 정보만 수집합니다.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

        <div>
          <label htmlFor="signup-email" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            이메일
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
            {...register("email")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="signup-name" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            이름 (또는 닉네임)
          </label>
          <input
            id="signup-name"
            type="text"
            placeholder="2자 이상 입력"
            {...register("displayName")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.displayName && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.displayName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="signup-pw" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            비밀번호 (영문·숫자 포함 8자 이상)
          </label>
          <input
            id="signup-pw"
            type="password"
            autoComplete="new-password"
            placeholder="8자 이상 입력"
            {...register("password")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.password && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="signup-pw2" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            비밀번호 확인
          </label>
          <input
            id="signup-pw2"
            type="password"
            autoComplete="new-password"
            placeholder="비밀번호 다시 입력"
            {...register("confirmPassword")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.confirmPassword && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* [법무 검토 후 최종 확정] */}
        <div className="space-y-2 rounded-xl bg-surface-1 p-4 text-[13.5px]">
          <label className="flex min-h-[38px] cursor-pointer items-center gap-2.5 font-medium text-ink-primary">
            <input type="checkbox" {...register("termsAgreed")} className="h-4 w-4 accent-brand-navy" />
            <span>
              [필수]{" "}
              <Link href="/terms" className="underline">
                이용약관
              </Link>{" "}
              동의
            </span>
          </label>
          {errors.termsAgreed && (
            <p role="alert" className="pl-6 text-[12.5px] font-semibold text-red-700">
              {errors.termsAgreed.message}
            </p>
          )}

          <label className="flex min-h-[38px] cursor-pointer items-center gap-2.5 font-medium text-ink-primary">
            <input type="checkbox" {...register("privacyAgreed")} className="h-4 w-4 accent-brand-navy" />
            <span>
              [필수]{" "}
              <Link href="/privacy" className="underline">
                일반 개인정보 수집·이용
              </Link>{" "}
              동의
            </span>
          </label>
          {errors.privacyAgreed && (
            <p role="alert" className="pl-6 text-[12.5px] font-semibold text-red-700">
              {errors.privacyAgreed.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-full bg-surface-dark text-[15px] font-bold text-white transition-colors hover:bg-brand-gold-deep"
        >
          가입하고 1:1 비밀상담 이용하기
        </button>
      </form>

      <div className="border-t border-line-subtle pt-4 text-center text-[13.5px] text-ink-secondary">
        이미 계정이 있으신가요?{" "}
        <Link href="/auth/login" className="font-bold text-brand-blue hover:underline">
          로그인
        </Link>
      </div>
    </div>
  );
}

export function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async () => {
    setSent(true);
  };

  if (sent) {
    return (
      <div className="space-y-4 py-4 text-center">
        <CheckCircle2 className="mx-auto h-11 w-11 text-brand-blue" />
        <h1 className="text-[22px] font-bold text-brand-navy">재설정 링크 안내</h1>
        <p className="text-[14px] leading-relaxed text-ink-secondary">
          입력하신 이메일 주소가 등록되어 있는 경우 비밀번호 재설정 링크를 발송했습니다.
          메일함(스팸함 포함)을 확인해 주세요.
        </p>
        <Link
          href="/auth/login"
          className="inline-flex h-11 items-center justify-center rounded-full bg-surface-dark px-6 text-[14px] font-bold text-white"
        >
          로그인으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold tracking-tight text-brand-navy">비밀번호 재설정</h1>
        <p className="mt-1.5 text-[14px] text-ink-secondary">
          가입하신 이메일을 입력하시면 비밀번호 재설정 링크를 보내드립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="forgot-email" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            가입 이메일
          </label>
          <input
            id="forgot-email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-full bg-surface-dark text-[15px] font-bold text-white hover:bg-brand-gold-deep"
        >
          재설정 링크 받기
        </button>
      </form>
    </div>
  );
}

export function ResetPasswordForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async () => {
    setDone(true);
  };

  if (done) {
    return (
      <div className="space-y-4 py-4 text-center">
        <CheckCircle2 className="mx-auto h-11 w-11 text-brand-blue" />
        <h1 className="text-[22px] font-bold text-brand-navy">비밀번호가 변경되었습니다</h1>
        <p className="text-[14px] text-ink-secondary">새 비밀번호로 로그인해 주세요.</p>
        <Link
          href="/auth/login"
          className="inline-flex h-11 items-center justify-center rounded-full bg-surface-dark px-6 text-[14px] font-bold text-white"
        >
          로그인하기
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold tracking-tight text-brand-navy">새 비밀번호 설정</h1>
        <p className="mt-1.5 text-[14px] text-ink-secondary">
          영문과 숫자를 조합해 8자 이상으로 설정해 주세요.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="reset-pw" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            새 비밀번호
          </label>
          <input
            id="reset-pw"
            type="password"
            {...register("password")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.password && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="reset-pw2" className="mb-1.5 block text-[13.5px] font-semibold text-ink-secondary">
            새 비밀번호 확인
          </label>
          <input
            id="reset-pw2"
            type="password"
            {...register("confirmPassword")}
            className="h-12 w-full rounded-xl border border-line-subtle px-4 text-[15px] focus:border-brand-blue focus:outline-none"
          />
          {errors.confirmPassword && (
            <p role="alert" className="mt-1 text-[13px] font-semibold text-red-700">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-full bg-surface-dark text-[15px] font-bold text-white hover:bg-brand-gold-deep"
        >
          비밀번호 변경 완료
        </button>
      </form>
    </div>
  );
}
