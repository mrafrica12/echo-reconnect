import BookingCta from "@/components/ghl/BookingCta";

// Replaces the previous visual-only AuthForm stub. There is no real
// authentication system behind /login or /signup yet, so rather than show a
// working-looking form that silently does nothing on submit, this states
// that plainly and offers the one action that actually works today: booking
// a consultation.
export default function ComingSoonNotice({ mode }: { mode: "login" | "signup" }) {
  return (
    <div className="border-t border-line pt-10 text-center">
      <p className="font-display text-2xl text-ink">Client portal — coming soon.</p>
      <p className="mx-auto mt-3 max-w-sm text-ash">
        {mode === "login"
          ? "Account log-in isn't available yet. In the meantime, book a free consultation and we'll get you set up directly."
          : "Self-serve sign-up isn't available yet. In the meantime, book a free consultation and we'll get your account started directly."}
      </p>
      <BookingCta
        source={mode === "login" ? "Login Page" : "Signup Page"}
        className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-base text-paper transition-colors hover:bg-accent"
      >
        Book your free consultation
      </BookingCta>
    </div>
  );
}
