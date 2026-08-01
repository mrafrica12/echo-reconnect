"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookingCta from "@/components/ghl/BookingCta";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/calculator", label: "Calculator" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/chat", label: "AI Chat" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="group flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-echo-lockup.webp"
            alt="Echo Reconnect"
            width={834}
            height={240}
            priority
            className="h-8 w-auto shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9rem] transition-colors ${
                  active ? "text-ink" : "text-ash hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/login" className="text-[0.9rem] text-ash hover:text-ink transition-colors">
            Log In
          </Link>
          <BookingCta
            source="Header"
            className="rounded-full bg-ink px-5 py-2 text-[0.9rem] text-paper transition-colors hover:bg-accent"
          >
            Get Started
          </BookingCta>
        </div>

        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-6 pb-8 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Primary mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-line py-4 text-[1.05rem] ${
                    active ? "text-ink" : "text-ink/90"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-center text-[0.95rem] text-ash py-2"
            >
              Log In
            </Link>
            <BookingCta
              source="Header Mobile"
              className="rounded-full bg-ink px-5 py-3 text-center text-[0.95rem] text-paper"
            >
              Get Started
            </BookingCta>
          </div>
        </div>
      )}
    </header>
  );
}
