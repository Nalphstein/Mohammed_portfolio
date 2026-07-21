"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { Spotlight } from "./ui/Sportlights";

const headline =
  "Dependable frontend experiences for businesses that need clarity, trust, and strong execution.";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const panelIn: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.25 },
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? undefined : "hidden";
  const whileInView = prefersReducedMotion ? undefined : "show";
  const viewport = { once: true, amount: 0.3 };

  return (
    <section className="section-shell relative overflow-hidden pt-24 md:pt-28">
      <div className="hidden dark:block">
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

      <div className="absolute inset-0 hidden dark:block dark:bg-grid-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_22%)]" />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <motion.div
          className="space-y-8"
          initial={initial}
          whileInView={whileInView}
          viewport={viewport}
          variants={container}
        >
          <div className="space-y-5">
            <motion.p variants={fadeUp} className="eyebrow">
              <span className="inline-block motion-safe:animate-float">
                Frontend Developer | Abuja, Nigeria
              </span>
            </motion.p>
            <motion.h1
              variants={container}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              {headline.split(" ").map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={word}
                  className="mr-[0.28em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
            >
              Frontend Developer and Network Engineer with experience building
              responsive web applications and supporting production
              infrastructure for enterprise and retail environments. Proven in
              improving performance, delivering client projects, integrating
              APIs, and maintaining reliable systems through structured
              monitoring and troubleshooting.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90"
            >
              View selected work
              <FaLocationArrow className="ml-2" />
            </Link>
            <a
              href="mailto:mohammed.webdesign@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-muted/40 px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-muted"
            >
              Start a conversation
              <IoCopyOutline className="ml-2" />
            </a>
            <a
              href="mailto:mohammed.webdesign@gmail.com?subject=Resume%20Request&body=Hi%20Mohammed%2C%20I%20would%20like%20to%20request%20your%20resume."
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-muted"
            >
              Request resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0"
          >
            <div className="metric-card flex-1">
              <p className="text-3xl font-semibold text-foreground">99.9%</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                service availability maintained in ISP support.
              </p>
            </div>
            <div className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-border to-transparent md:mx-4 md:block" />
            <div className="metric-card flex-1">
              <p className="text-3xl font-semibold text-foreground">50+</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                network incidents handled monthly with structured reporting.
              </p>
            </div>
            <div className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-border to-transparent md:mx-4 md:block" />
            <div className="metric-card flex-1">
              <p className="text-3xl font-semibold text-foreground">40%</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                faster page loads achieved through frontend performance work.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="surface-card relative overflow-hidden p-6"
          initial={initial}
          whileInView={whileInView}
          viewport={viewport}
          variants={panelIn}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,165,233,0.08),transparent_45%)]" />
          <div className="relative space-y-6">
            <div>
              <p className="eyebrow">Professional Summary</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
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
                  className="rounded-2xl border border-border bg-muted/60 px-4 py-4 text-sm leading-6 text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">
                Current Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Open to frontend roles and freelance web work where clarity,
                trust, performance, and execution quality matter as much as
                visual polish.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
