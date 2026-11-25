import { z } from "zod";

export const RESERVATION_CENTERS = [
  "전립선 센터",
  "요로결석 센터",
  "음경임플란트 · 성기능 센터",
  "남성성형 · 재건 센터",
  "정관 · 포경 센터",
  "초진 상담 · 미정",
] as const;

export const PREFERRED_DOCTORS = [
  { id: "any", label: "의료진 무관 (가장 빠른 일정)" },
  { id: "park-cheon-jin", label: "박천진 대표원장 (월·목 오후 휴진)" },
  { id: "lee-woong-hee", label: "이웅희 원장 (목요일 종일 휴진)" },
] as const;

export type PreferredDoctorId = (typeof PREFERRED_DOCTORS)[number]["id"];

export const TIME_SLOTS = [
  { value: "AM_0930", label: "오전 09:30", period: "AM" as const },
  { value: "AM_1030", label: "오전 10:30", period: "AM" as const },
  { value: "AM_1130", label: "오전 11:30", period: "AM" as const },
  { value: "PM_1400", label: "오후 14:00", period: "PM" as const },
  { value: "PM_1500", label: "오후 15:00", period: "PM" as const },
  { value: "PM_1600", label: "오후 16:00", period: "PM" as const },
] as const;

/**
 * 2026.08.24 팝업 2인 진료시간표 기준 휴진 판별 헬퍼
 * - 일요일(0): 병원 전체 휴진
 * - 이웅희 원장: 목요일(4) 종일 휴진
 * - 박천진 대표원장: 월요일(1)·목요일(4) 오후 휴진
 * - 토요일(6): 오후 휴진
 */
export function getDayAvailability(dateStr: string, doctorId: PreferredDoctorId) {
  if (!dateStr) {
    return { dayDisabled: false, pmDisabled: false, reason: null as string | null };
  }
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) {
    return { dayDisabled: false, pmDisabled: false, reason: null as string | null };
  }
  const dayOfWeek = new Date(y, m - 1, d).getDay(); // 0=일..6=토

  if (dayOfWeek === 0) {
    return {
      dayDisabled: true,
      pmDisabled: true,
      reason: "일요일은 병원 정기 휴진일입니다. 평일 또는 토요일을 선택해 주세요.",
    };
  }
  if (doctorId === "lee-woong-hee" && dayOfWeek === 4) {
    return {
      dayDisabled: true,
      pmDisabled: true,
      reason: "이웅희 원장님은 목요일 종일 휴진입니다. 다른 요일 또는 박천진 대표원장님을 선택해 주세요.",
    };
  }
  if (dayOfWeek === 6) {
    return {
      dayDisabled: false,
      pmDisabled: true,
      reason: "토요일은 오전 진료만 운영됩니다 (09:00 ~ 12:30).",
    };
  }
  if (doctorId === "park-cheon-jin" && (dayOfWeek === 1 || dayOfWeek === 4)) {
    return {
      dayDisabled: false,
      pmDisabled: true,
      reason: "박천진 대표원장님은 월·목요일 오후 휴진입니다. 오전 시간대를 선택해 주세요.",
    };
  }
  return { dayDisabled: false, pmDisabled: false, reason: null as string | null };
}

export const reservationSchema = z
  .object({
    departmentCategory: z.string().min(1, "진료 분야를 선택해 주세요."),
    preferredDoctorId: z.enum(["any", "park-cheon-jin", "lee-woong-hee"]),
    preferredDate: z.string().min(1, "희망 날짜를 선택해 주세요."),
    preferredTimeSlot: z.string().min(1, "희망 시간대를 선택해 주세요."),
    patientName: z
      .string()
      .trim()
      .min(2, "성함은 2자 이상 입력해 주세요.")
      .max(30, "성함은 30자 이내로 입력해 주세요."),
    patientPhone: z
      .string()
      .trim()
      .refine((v) => v.replace(/\D/g, "").length >= 9, "올바른 휴대폰 번호를 입력해 주세요."),
    symptomMemo: z.string().max(300, "메모는 300자 이내로 입력해 주세요.").optional(),
    privacyAgreed: z.boolean().refine((v) => v === true, "일반 개인정보 수집·이용에 동의해 주세요."),
    sensitiveAgreed: z.boolean(),
    website: z.string().max(0).optional(), // Honeypot 스팸 방어 필드
  })
  .superRefine((data, ctx) => {
    const avail = getDayAvailability(data.preferredDate, data.preferredDoctorId);
    if (avail.dayDisabled) {
      ctx.addIssue({
        code: "custom",
        path: ["preferredDate"],
        message: avail.reason ?? "선택하신 날짜는 휴진일입니다.",
      });
    }
    const slot = TIME_SLOTS.find((s) => s.value === data.preferredTimeSlot);
    if (avail.pmDisabled && slot?.period === "PM") {
      ctx.addIssue({
        code: "custom",
        path: ["preferredTimeSlot"],
        message: avail.reason ?? "선택하신 시간대는 휴진입니다.",
      });
    }
    if (data.symptomMemo && data.symptomMemo.trim().length > 0 && !data.sensitiveAgreed) {
      ctx.addIssue({
        code: "custom",
        path: ["sensitiveAgreed"],
        message: "증상·내원 목적 메모를 입력하신 경우 민감정보(건강정보) 별도 동의가 필요합니다.",
      });
    }
  });

export type ReservationFormValues = z.infer<typeof reservationSchema>;
