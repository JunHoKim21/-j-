import { z } from "zod";

const passwordRule = z
  .string()
  .min(8, "비밀번호는 8자 이상이어야 합니다.")
  .max(64, "비밀번호는 64자 이하로 입력해 주세요.")
  .refine(
    (v) => /[A-Za-z]/.test(v) && /\d/.test(v),
    "영문과 숫자를 모두 포함해 주세요."
  );

export const loginSchema = z.object({
  email: z.string().trim().email("올바른 이메일 주소를 입력해 주세요."),
  password: z.string().min(1, "비밀번호를 입력해 주세요."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const signupSchema = z
  .object({
    email: z.string().trim().email("올바른 이메일 주소를 입력해 주세요."),
    displayName: z
      .string()
      .trim()
      .min(2, "이름(또는 닉네임)은 2자 이상 입력해 주세요.")
      .max(20, "20자 이내로 입력해 주세요."),
    password: passwordRule,
    confirmPassword: z.string(),
    termsAgreed: z.boolean().refine((v) => v === true, "이용약관에 동의해 주세요."),
    privacyAgreed: z
      .boolean()
      .refine((v) => v === true, "일반 개인정보 수집·이용에 동의해 주세요."),
    website: z.string().max(0).optional(), // Honeypot
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type SignupFormValues = z.infer<typeof signupSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email("가입하신 이메일 주소를 정확히 입력해 주세요."),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: passwordRule,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "현재 비밀번호를 입력해 주세요."),
    newPassword: passwordRule,
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "새 비밀번호가 일치하지 않습니다.",
  });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
