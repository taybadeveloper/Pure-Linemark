import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Open your Pure Linemark account in under 2 minutes. Start with just $250 and let the AI trading engine work the markets for you, 24/7.",
  alternates: { canonical: "/sign-up" },
};

export default function SignUpPage() {
  // The registration form lives on the home page
  redirect("/#sign-up");
}
