import Reveal from "@/components/Reveal";

const STEPS = [
  ["Understand your business", "Discuss your audience, your current social presence, and what you want customers to understand."],
  ["Agree the plan and scope", "Choose the platforms, content needs, and level of support together."],
  ["Prepare and approve content", "Agree who provides materials, how content is prepared, and how you’ll review it."],
  ["Publish and review", "Define publishing responsibilities and how progress will be reviewed as part of your plan."],
];

export default function MarketingProcess() {
  return <section className="px-6 py-24 lg:px-10 lg:py-32">
    <div className="container-wide">
      <Reveal><p className="eyebrow">A plan built together</p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight lg:text-5xl">From understanding your business to showing up consistently.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash">Here’s a starting point for our work together. Your scope, responsibilities, and workflow are agreed during consultation.</p>
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(([title, detail], i) => <Reveal key={title} delay={i * 60}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">0{i + 1}</span>
          <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
          <p className="mt-3 leading-relaxed text-ash">{detail}</p>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
