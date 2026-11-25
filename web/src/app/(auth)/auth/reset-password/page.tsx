import type { Metadata } from "next";
import { ResetPasswordForm } from "@/components/forms/AuthForms";

export const metadata: Metadata = { title: "새 비밀번호 설정" };

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
