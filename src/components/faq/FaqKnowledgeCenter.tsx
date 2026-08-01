"use client";

import { useMemo, useState } from "react";
import AccordionItem from "@/components/faq/AccordionItem";
import { FAQ_CATEGORIES } from "@/lib/faq-data";

const ALL = "All";

export default function FaqKnowledgeCenter() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return FAQ_CATEGORIES.map((category) => ({
      name: category.name,
      items: category.items.filter((item) => {
        if (activeCategory !== ALL && category.name !== activeCategory) {
          return false;
        }
        if (!q) return true;
        return (
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        );
      }),
    })).filter((category) => category.items.length > 0);
  }, [query, activeCategory]);

  const resultCount = results.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div className="container-copy px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions"
          aria-label="Search questions"
          className="w-full rounded-sm border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-ink focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:max-w-xs"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {[ALL, ...FAQ_CATEGORIES.map((c) => c.name)].map((name) => {
          const active = activeCategory === name;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCategory(name)}
              aria-pressed={active}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                active
                  ? "bg-ink text-paper"
                  : "border border-line text-ash hover:text-ink"
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>

      <div className="mt-16">
        {resultCount === 0 ? (
          <p className="py-16 text-center text-ash">
            No questions match &ldquo;{query}&rdquo;. Try a different search,
            or{" "}
            <a
              href="/contact"
              className="text-ink underline underline-offset-2 hover:text-accent"
            >
              ask us directly
            </a>
            .
          </p>
        ) : (
          <div className="flex flex-col gap-14">
            {results.map((category) => (
              <div key={category.name}>
                <p className="text-sm uppercase tracking-[0.14em] text-ash">
                  {category.name}
                </p>
                <div className="mt-4">
                  {category.items.map((item) => {
                    const key = `${category.name}:${item.q}`;
                    return (
                      <AccordionItem
                        key={key}
                        question={item.q}
                        answer={item.a}
                        isOpen={openKey === key}
                        onToggle={() =>
                          setOpenKey(openKey === key ? null : key)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
