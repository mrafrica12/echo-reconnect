export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  result?: string;
  image?: string;
  status: "requires-verification" | "approved";
};

// REVIEW REQUIRED: The testimonials previously shown on this site (Sarah Chen,
// Marcus Rodriguez, Emily Watson) could not be confirmed as real, permissioned
// customers and were removed rather than published as verified proof. Add real
// testimonials here once a client has approved the exact quote, name, title,
// company, and any result percentage for publication — set status to
// "approved" only after that confirmation. The home page and testimonial
// component both render nothing when this array is empty.
export const TESTIMONIALS: Testimonial[] = [];
