import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/forms/AuthForms";

export const metadata: Metadata = { title: "비밀번호 재설정" };

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
