import { serializeJsonLd } from "@/lib/seo";

/** Emits one structured-data block. Server-rendered so crawlers that don't
 *  execute JavaScript still see it in the initial HTML. */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
