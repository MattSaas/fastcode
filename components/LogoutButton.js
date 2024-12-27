"use client";
import { signOut } from "next-auth/react";
function LogoutButton() {
  return (
    <button
      className={`btn btn-sm btn-secondary hover:btn-primary`}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
