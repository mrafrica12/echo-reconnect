export const ASSESSMENT_URL = "https://quiz.echoreconnects.com/";

export type AssessmentLocation = "hero" | "navigation" | "assessment_section" | "final_cta" | "ai_receptionist";

export function assessmentUrl(location: AssessmentLocation, search = "") {
  const url = new URL(ASSESSMENT_URL);
  const incoming = new URLSearchParams(search);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = incoming.get(key);
    if (value) url.searchParams.set(key, value);
  }
  url.searchParams.set("source_location", location === "ai_receptionist" ? "ai_receptionist" : location === "navigation" ? "navigation" : `homepage_${location}`);
  return url.toString();
}
