import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-wide flex flex-col gap-8 px-6 py-14 text-sm text-ash lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex flex-col gap-2">
          <Link href="/" className="group flex items-center">
            <Image
              src="/images/logo-echo-lockup.png"
              alt="Echo Reconnect"
              width={789}
              height={240}
              className="h-7 w-auto shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </Link>
          <span>Atlanta, GA · info@echoreconnect.com · 770-230-5060</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          <Link href="/services" className="hover:text-ink transition-colors">
            Services
          </Link>
          <Link href="/calculator" className="hover:text-ink transition-colors">
            Calculator
          </Link>
          <Link href="/faq" className="hover:text-ink transition-colors">
            FAQ
          </Link>
          <Link href="/chat" className="hover:text-ink transition-colors">
            AI Chat
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            Contact
          </Link>
        </nav>

        <span>© {new Date().getFullYear()} Echo Reconnect</span>
      </div>

      <div className="border-t border-line px-6 py-4 text-center text-xs text-ash/70 lg:px-10">
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
