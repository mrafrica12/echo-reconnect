import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create an Echo Reconnect account to start recovering missed calls, automating appointment booking, and growing your service business.",
};

export default function SignupPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="container-copy">
        <h1 className="text-center font-display text-4xl font-semibold text-ink sm:text-5xl">
          Create your account
        </h1>
        <div className="mt-16">
          <AuthForm mode="signup" />
        </div>
        <p className="mt-10 text-center text-ash">
          Already have an account?{" "}
          <Link href="/login" className="text-ink hover:text-accent transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
