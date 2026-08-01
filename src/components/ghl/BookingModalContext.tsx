"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { buildCalendarUrl, type LeadSource } from "@/lib/ghl";
import { COMPANY } from "@/data/company";

type BookingModalContextValue = {
  isOpen: boolean;
  open: (source: LeadSource | string) => void;
  close: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return ctx;
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [calendarUrl, setCalendarUrl] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = useCallback((source: LeadSource | string) => {
    triggerRef.current = document.activeElement as HTMLElement;
    setCalendarUrl(buildCalendarUrl(source));
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeButton = dialogRef.current?.querySelector<HTMLElement>(
      "[data-modal-close]"
    );
    closeButton?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <BookingModalContext.Provider value={{ isOpen, open, close }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={close}
            aria-hidden="true"
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Book your free consultation"
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <p className="font-display text-base font-semibold text-ink">
                Book your free consultation
              </p>
              <button
                type="button"
                data-modal-close
                onClick={close}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-ash transition-colors hover:bg-surface hover:text-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <div className="min-h-[420px] flex-1 overflow-auto">
              {calendarUrl ? (
                <iframe
                  src={calendarUrl}
                  title="Book your free consultation"
                  className="h-full min-h-[420px] w-full"
                />
              ) : (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center px-8 text-center">
                  <p className="text-ink">Online booking is warming up.</p>
                  <p className="mt-2 text-ash">
                    In the meantime, reach us at{" "}
                    <a
                      href={COMPANY.phoneHref}
                      className="text-ink underline underline-offset-2 hover:text-accent"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}
