"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface ClinicMemberAccount {
  email: string;
  displayName: string;
}

export interface SecretConsultPost {
  id: string;
  ownerEmail: string;
  category: string;
  title: string;
  content: string;
  contactPhone?: string;
  status: "접수됨" | "확인중" | "답변완료";
  createdAt: string;
  replyText?: string;
  repliedAt?: string;
}

interface ClinicMemberContextValue {
  member: ClinicMemberAccount | null;
  ready: boolean;
  myPosts: SecretConsultPost[];
  signIn: (email: string, password: string) => { ok: boolean; error?: string };
  signUp: (input: {
    email: string;
    password: string;
    displayName: string;
  }) => { ok: boolean; error?: string };
  signOut: () => void;
  createPost: (input: {
    category: string;
    title: string;
    content: string;
    contactPhone?: string;
  }) => SecretConsultPost | null;
  getMyPostById: (id: string) => SecretConsultPost | null;
}

const STORAGE_MEMBER_KEY = "gj_v2_member_session";
const STORAGE_ACCOUNTS_KEY = "gj_v2_member_accounts";
const STORAGE_POSTS_KEY = "gj_v2_secret_posts";

interface StoredAccount {
  email: string;
  password: string;
  displayName: string;
}

const ClinicMemberContext = createContext<ClinicMemberContextValue | null>(null);

export function ClinicMemberProvider({ children }: { children: ReactNode }) {
  const [member, setMember] = useState<ClinicMemberAccount | null>(null);
  const [allPosts, setAllPosts] = useState<SecretConsultPost[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedSession = window.sessionStorage.getItem(STORAGE_MEMBER_KEY);
      if (savedSession) {
        setMember(JSON.parse(savedSession) as ClinicMemberAccount);
      }
      const savedPosts = window.sessionStorage.getItem(STORAGE_POSTS_KEY);
      if (savedPosts) {
        setAllPosts(JSON.parse(savedPosts) as SecretConsultPost[]);
      }
    } catch {
      // sessionStorage 접근 제한 시 메모리 상태만 유지
    } finally {
      setReady(true);
    }
  }, []);

  const readAccounts = (): StoredAccount[] => {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_ACCOUNTS_KEY);
      return raw ? (JSON.parse(raw) as StoredAccount[]) : [];
    } catch {
      return [];
    }
  };

  const signUp = useCallback(
    ({
      email,
      password,
      displayName,
    }: {
      email: string;
      password: string;
      displayName: string;
    }) => {
      const normalized = email.trim().toLowerCase();
      if (!normalized.includes("@")) {
        return { ok: false, error: "올바른 이메일 주소를 입력해 주세요." };
      }
      if (password.length < 8) {
        return { ok: false, error: "비밀번호는 8자 이상으로 설정해 주세요." };
      }
      if (displayName.trim().length < 2) {
        return { ok: false, error: "성함 또는 닉네임을 2자 이상 입력해 주세요." };
      }

      const accounts = readAccounts();
      if (accounts.some((acc) => acc.email === normalized)) {
        return { ok: false, error: "이미 가입된 이메일 주소입니다." };
      }

      const nextAccount: StoredAccount = {
        email: normalized,
        password,
        displayName: displayName.trim(),
      };
      const session: ClinicMemberAccount = {
        email: normalized,
        displayName: displayName.trim(),
      };

      try {
        window.sessionStorage.setItem(
          STORAGE_ACCOUNTS_KEY,
          JSON.stringify([...accounts, nextAccount])
        );
        window.sessionStorage.setItem(
          STORAGE_MEMBER_KEY,
          JSON.stringify(session)
        );
      } catch {
        // ignore storage error
      }
      setMember(session);
      return { ok: true };
    },
    []
  );

  const signIn = useCallback((email: string, password: string) => {
    const normalized = email.trim().toLowerCase();
    if (!normalized.includes("@") || password.length < 8) {
      return {
        ok: false,
        error: "이메일 주소와 8자 이상 비밀번호를 확인해 주세요.",
      };
    }

    const accounts = readAccounts();
    const matched = accounts.find((acc) => acc.email === normalized);

    if (matched && matched.password !== password) {
      return { ok: false, error: "이메일 또는 비밀번호가 일치하지 않습니다." };
    }

    // 시안 테스트 편의를 위해 미등록 이메일로 8자+ 입력 시 즉시 경량 세션 발급
    const session: ClinicMemberAccount = {
      email: normalized,
      displayName: matched?.displayName ?? normalized.split("@")[0],
    };

    try {
      window.sessionStorage.setItem(STORAGE_MEMBER_KEY, JSON.stringify(session));
    } catch {
      // ignore
    }
    setMember(session);
    return { ok: true };
  }, []);

  const signOut = useCallback(() => {
    try {
      window.sessionStorage.removeItem(STORAGE_MEMBER_KEY);
    } catch {
      // ignore
    }
    setMember(null);
  }, []);

  const createPost = useCallback(
    (input: {
      category: string;
      title: string;
      content: string;
      contactPhone?: string;
    }) => {
      if (!member) return null;
      const now = new Date();
      const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}.${String(now.getDate()).padStart(2, "0")}`;

      const created: SecretConsultPost = {
        id: `gj-c-${Date.now().toString(36)}`,
        ownerEmail: member.email,
        category: input.category,
        title: input.title.trim(),
        content: input.content.trim(),
        contactPhone: input.contactPhone?.trim() || undefined,
        status: "접수됨",
        createdAt: dateStr,
      };

      setAllPosts((prev) => {
        const next = [created, ...prev];
        try {
          window.sessionStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
      return created;
    },
    [member]
  );

  // 본인 계정(ownerEmail) 글만 노출 — 비로그인 시 항상 빈 배열(0건)
  const myPosts = useMemo(() => {
    if (!member) return [];
    return allPosts.filter((post) => post.ownerEmail === member.email);
  }, [allPosts, member]);

  const getMyPostById = useCallback(
    (id: string) => {
      if (!member) return null;
      return (
        allPosts.find(
          (post) => post.id === id && post.ownerEmail === member.email
        ) ?? null
      );
    },
    [allPosts, member]
  );

  const value = useMemo(
    () => ({
      member,
      ready,
      myPosts,
      signIn,
      signUp,
      signOut,
      createPost,
      getMyPostById,
    }),
    [member, ready, myPosts, signIn, signUp, signOut, createPost, getMyPostById]
  );

  return (
    <ClinicMemberContext.Provider value={value}>
      {children}
    </ClinicMemberContext.Provider>
  );
}

export function useClinicMember() {
  const ctx = useContext(ClinicMemberContext);
  if (!ctx) {
    throw new Error("useClinicMember must be used within ClinicMemberProvider");
  }
  return ctx;
}
