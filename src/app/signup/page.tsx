import type { Metadata } from "next";
import Link from "next/link";
import ComingSoonNotice from "@/components/auth/ComingSoonNotice";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "The Echo Reconnect client portal is coming soon. Book a free consultation to get started today.",
};

export default function SignupPage() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="container-copy">
        <h1 className="text-center font-display text-4xl font-semibold text-ink sm:text-5xl">
          Create your account
        </h1>
        <div className="mt-16">
          <ComingSoonNotice mode="signup" />
        </div>
        <p className="mt-10 text-center text-ash">
          Already working with us?{" "}
          <Link href="/login" className="text-ink hover:text-accent transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
