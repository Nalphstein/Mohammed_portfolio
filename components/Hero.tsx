import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { Spotlight } from "./ui/Sportlights";

const Hero = () => {
  return (
    <section className="section-shell relative overflow-hidden pt-24 md:pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen opacity-60 md:-left-32 md:top-0"
          fill="white"
        />
        <Spotlight
          className="top-10 -left-full h-[80vh] w-[50vw] opacity-70"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw] opacity-65"
          fill="blue"
        />
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_22%)]" />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="eyebrow">Frontend Developer | Abuja, Nigeria</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              Dependable frontend experiences for businesses that need clarity,
              trust, and strong execution.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white-100 md:text-lg">
              Frontend Developer and Network Engineer with experience building
              responsive web applications and supporting production
              infrastructure for enterprise and retail environments. Proven in
              improving performance, delivering client projects, integrating
              APIs, and maintaining reliable systems through structured
              monitoring and troubleshooting.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              View selected work
              <FaLocationArrow className="ml-2" />
            </Link>
            <a
              href="mailto:mohammed.webdesign@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/10"
            >
              Start a conversation
              <IoCopyOutline className="ml-2" />
            </a>
            <a
              href="mailto:mohammed.webdesign@gmail.com?subject=Resume%20Request&body=Hi%20Mohammed%2C%20I%20would%20like%20to%20request%20your%20resume."
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/10"
            >
              Request resume
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="metric-card">
              <p className="text-3xl font-semibold text-white">99.9%</p>
              <p className="mt-2 text-sm leading-6 text-white-100">
                service availability maintained in ISP support.
              </p>
            </div>
            <div className="metric-card">
              <p className="text-3xl font-semibold text-white">50+</p>
              <p className="mt-2 text-sm leading-6 text-white-100">
                network incidents handled monthly with structured reporting.
              </p>
            </div>
            <div className="metric-card">
              <p className="text-3xl font-semibold text-white">40%</p>
              <p className="mt-2 text-sm leading-6 text-white-100">
                faster page loads achieved through frontend performance work.
              </p>
            </div>
          </div>
        </div>

        <div className="surface-card relative overflow-hidden p-6">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,165,233,0.08),transparent_45%)]" />
          <div className="relative space-y-6">
            <div>
              <p className="eyebrow">Professional Summary</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Corporate reliability with a creative frontend eye.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                "Responsive frontend systems built with React, Angular, Next.js, and Tailwind CSS",
                "Infrastructure-aware problem solving shaped by enterprise support and SLA-driven operations",
                "Calm execution, clear communication, performance tuning, and conversion-minded layouts",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black-200/40 px-4 py-4 text-sm leading-6 text-white-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                Current Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-white-100">
                Open to frontend roles and freelance web work where clarity,
                trust, performance, and execution quality matter as much as
                visual polish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
