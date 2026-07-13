"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-echo-mark.png"
            alt=""
            width={491}
            height={360}
            priority
            className="h-7 w-auto shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
            Echo Reconnect
          </span>
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
          <Link
            href="/signup"
            className="rounded-full bg-ink px-5 py-2 text-[0.9rem] text-paper transition-colors hover:bg-accent"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
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
        <div className="border-t border-line bg-paper px-6 pb-8 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Primary mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-[1.05rem] text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-center text-[0.95rem] text-ash py-2"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ink px-5 py-3 text-center text-[0.95rem] text-paper"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
