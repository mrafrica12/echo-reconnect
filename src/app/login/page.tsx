import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Log In",
  description:
    "Log in to your Echo Reconnect account to manage your missed call automation, appointment bookings, and business communication settings.",
};

export default function LoginPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="container-copy">
        <h1 className="text-center font-display text-4xl font-semibold text-ink sm:text-5xl">
          Log in
        </h1>
        <div className="mt-16">
          <AuthForm mode="login" />
        </div>
        <p className="mt-10 text-center text-ash">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-ink hover:text-accent transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
