import Link from "next/link";

export default function LoginButton({ isLoggedin, Username, extraStyle }) {
  if (isLoggedin) {
    return (
      <Link
        className={`btn btn-sm btn-primary hover:btn-secondary ${
          extraStyle ? extraStyle : ""
        }`}
        href="/dashboard"
      >
        Welcome Back {Username}
      </Link>
    );
  }

  return (
    <div
      className={`btn btn-sm btn-primary hover:btn-secondary ${
        extraStyle ? extraStyle : ""
      }`}
    >
      Login
    </div>
  );
}
