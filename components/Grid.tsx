import React from "react";

const coreTools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Angular",
  "REST APIs",
];

const infrastructureTools = [
  "Linux",
  "Docker",
  "Proxmox",
  "MikroTik",
  "Monitoring",
  "Incident Reporting",
];

const Grid = () => {
  return (
    <section id="about" className="section-shell py-14">
      <div className="mb-12 text-center">
        <p className="eyebrow">About</p>
        <h1 className="heading mt-3">
          A frontend developer with a <span className="text-purple">reliability mindset</span>
        </h1>
        <p className="section-copy text-center">
          I build polished interfaces for businesses and organizations that need
          clear communication, responsive execution, and digital experiences
          people can trust quickly.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="surface-card p-8 md:p-10">
          <p className="eyebrow">Positioning</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            I combine frontend craft with the calm, structured thinking that
            comes from uptime-sensitive technical work.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-white-100">
            <p>
              My background in ISP support shaped how I think about systems:
              diagnose clearly, communicate early, reduce friction, and keep
              the experience dependable under pressure.
            </p>
            <p>
              That mindset carries into my web work. I care about responsive
              layouts, credible presentation, maintainable frontend structure,
              and interfaces that feel stable instead of flashy for the sake of
              it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="metric-card">
              <p className="text-3xl font-semibold text-white">99.9%</p>
              <p className="mt-2 text-sm leading-6 text-white-100">
                service availability maintained in network support.
              </p>
            </div>
            <div className="metric-card">
              <p className="text-3xl font-semibold text-white">30%</p>
              <p className="mt-2 text-sm leading-6 text-white-100">
                downtime reduction contribution through diagnostics and monitoring.
              </p>
            </div>
            <div className="metric-card">
              <p className="text-3xl font-semibold text-white">18%</p>
              <p className="mt-2 text-sm leading-6 text-white-100">
                landing page conversion improvement from layout optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-card p-6">
            <p className="eyebrow">How I Work</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white-100">
              <p>Based in Abuja and comfortable collaborating with remote teams.</p>
              <p>I value clean handoff, direct communication, and dependable delivery.</p>
              <p>I prefer solving real business problems over adding effects that distract from the message.</p>
            </div>
          </div>

          <div className="surface-card p-6">
            <p className="eyebrow">Frontend Tools</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {coreTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card p-6">
            <p className="eyebrow">Operational Tools</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {infrastructureTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
