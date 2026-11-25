import type { Metadata } from "next";
import { SubHero } from "@/components/layout/SubHero";
import { AccountClient } from "@/components/forms/AccountClient";

export const metadata: Metadata = {
  title: "계정 관리",
};

export default function AccountPage() {
  return (
    <>
      <SubHero
        kicker="MEMBER ACCOUNT"
        title="계정 관리"
        description="비밀번호 변경 및 회원 탈퇴를 안전하게 관리하실 수 있습니다."
        breadcrumbs={[{ label: "계정 관리" }]}
      />
      <AccountClient />
    </>
  );
}
