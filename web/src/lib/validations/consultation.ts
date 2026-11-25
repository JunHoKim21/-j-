import { z } from "zod";

export const CONSULTATION_CATEGORIES = [
  "전립선 센터",
  "요로결석 센터",
  "음경임플란트 · 성기능",
  "남성성형 · 재건",
  "정관 · 포경",
  "기타 비뇨의학 문의",
] as const;

export const consultationSchema = z.object({
  categorySlug: z.string().min(1, "상담 카테고리를 선택해 주세요."),
  title: z
    .string()
    .trim()
    .min(3, "제목은 3자 이상 입력해 주세요.")
    .max(100, "제목은 100자 이내로 입력해 주세요."),
  content: z
    .string()
    .trim()
    .min(10, "상담 내용을 10자 이상 자세히 작성해 주세요.")
    .max(2000, "상담 내용은 2,000자 이내로 작성해 주세요."),
  contactPhone: z
    .string()
    .trim()
    .optional()
    .refine(
      (v) => !v || v.replace(/\D/g, "").length >= 9,
      "연락처를 입력하실 경우 올바른 번호 형식으로 입력해 주세요."
    ),
  privacyAgreed: z
    .boolean()
    .refine((v) => v === true, "일반 개인정보 수집·이용에 동의해 주세요."),
  sensitiveAgreed: z
    .boolean()
    .refine(
      (v) => v === true,
      "1:1 비밀상담 작성을 위해 민감정보(건강·증상정보) 별도 동의가 필요합니다."
    ),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
