"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookingCta from "@/components/ghl/BookingCta";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const CLIENT_PORTAL_URL = "https://app.echoreconnects.com";

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
            alt="Echo Reconnects"
            // Declared at render size (not the 834x240 master) — next/image
            // builds its srcset from these, so the old values had browsers
            // downloading a 1920px-wide file for a 32px-tall lockup.
            width={278}
            height={80}
            priority
            className="h-8 w-auto shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
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

        <div className="hidden items-center gap-5 xl:flex">
          <Link href={CLIENT_PORTAL_URL} className="text-[0.9rem] text-ash hover:text-ink transition-colors">
            Client Portal
          </Link>
          <BookingCta
            source="Header"
            className="rounded-full bg-accent px-5 py-2.5 text-[0.9rem] text-white transition-colors hover:bg-accent-strong"
          >
            Book a Consultation
          </BookingCta>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center xl:hidden"
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
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper px-6 pb-8 pt-2 xl:hidden">
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
              href={CLIENT_PORTAL_URL}
              onClick={() => setOpen(false)}
              className="text-center text-[0.95rem] text-ash py-2"
            >
              Client Portal
            </Link>
            <BookingCta
              source="Header Mobile"
              className="rounded-full bg-accent px-5 py-3 text-center text-[0.95rem] text-white"
            >
              Book a Consultation
            </BookingCta>
          </div>
        </div>
      )}
    </header>
  );
}
