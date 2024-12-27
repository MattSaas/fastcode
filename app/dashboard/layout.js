import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LayoutDashboard({ children }) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return children;
}
