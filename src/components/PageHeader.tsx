import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/**
 * The standard opening block for every page that isn't the homepage.
 *
 * Carries the homepage hero's type treatment — navy kicker, heavy display
 * headline with one word in accent, slate subcopy — but left-aligned in the
 * wide container and without the photograph, so inner pages read as the same
 * system without competing with the hero.
 *
 * `accent` is rendered as the closing phrase of the headline in brand navy,
 * which is what gives these pages the colour the homepage gets from its
 * "call." — pass it whenever the headline has a natural emphasis.
 */
export default function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  actions,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="px-6 pt-20 lg:px-10 lg:pt-28">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            {title}
            {accent ? <> <span className="text-accent">{accent}</span></> : null}
          </h1>
          {description ? (
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ash">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              {actions}
            </div>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
