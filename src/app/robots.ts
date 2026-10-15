import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Assistant crawlers are already covered by the `*` rule, but naming them
// explicitly is the documented way to opt in — several of them read their own
// user-agent block first and treat a missing one as ambiguous. Remove a name
// here to keep that assistant from citing the site.
const ASSISTANT_CRAWLERS = [
  "GPTBot", // ChatGPT training
  "OAI-SearchBot", // ChatGPT browsing and citations
  "ChatGPT-User", // ChatGPT on-demand fetches
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini grounding and AI Overviews
  "Applebot-Extended",
  "meta-externalagent",
  "Bingbot",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...ASSISTANT_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
