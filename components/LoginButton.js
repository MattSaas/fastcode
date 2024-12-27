"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginButton({ session }) {
  const dashboardUrl = "/dashboard";
  if (session) {
    return (
      <Link
        className={`btn btn-sm btn-primary hover:btn-secondary`}
        href={dashboardUrl}
      >
        Welcome Back {session.user.name || "Friend"}
      </Link>
    );
  }

  return (
    <button
      className={`btn btn-sm btn-primary hover:btn-secondary`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
    >
      Login
    </button>
  );
}
