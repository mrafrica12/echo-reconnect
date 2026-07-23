import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/data/company";

const SERVICE_LINKS = [
  { href: "/services", label: "Automation Systems" },
  { href: "/services#missed-call-recovery", label: "Missed Call Recovery" },
  { href: "/services#automated-appointment-booking", label: "Appointment Booking" },
  { href: "/services#intelligent-lead-capture", label: "Lead Capture" },
  { href: "/calculator", label: "ROI Calculator" },
  { href: "/chat", label: "AI Chat" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-wide grid gap-12 px-6 py-14 text-sm text-ash sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="group flex items-center">
            <Image
              src="/images/logo-echo-lockup.webp"
              alt="Echo Reconnect"
              width={834}
              height={240}
              className="h-7 w-auto shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col gap-1">
            <span>{COMPANY.location}</span>
            <Link href={COMPANY.emailHref} className="hover:text-ink transition-colors">
              {COMPANY.email}
            </Link>
            <Link href={COMPANY.phoneHref} className="hover:text-ink transition-colors">
              {COMPANY.phoneDisplay}
            </Link>
          </div>
        </div>

        <nav aria-label="Services">
          <p className="text-xs uppercase tracking-[0.14em] text-ash/70">Services</p>
          <ul className="mt-4 flex flex-col gap-2">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-ink transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="text-xs uppercase tracking-[0.14em] text-ash/70">Company</p>
          <ul className="mt-4 flex flex-col gap-2">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-ink transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="text-xs uppercase tracking-[0.14em] text-ash/70">Legal</p>
          <ul className="mt-4 flex flex-col gap-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-ink transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line px-6 py-4 text-center text-xs text-ash/70 lg:px-10">
        <span>© {new Date().getFullYear()} {COMPANY.name}. </span>
        Front end designed by{" "}
        <a
          href="https://umojaserv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink"
        >
          UmojaServ
        </a>
      </div>
    </footer>
  );
}
