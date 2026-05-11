import React from "react";
import Image from "next/image";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section className="section-shell" id="experience">
      <p className="eyebrow text-center">Experience</p>
      <h1 className="heading mt-3">
        Work <span className="text-purple">experience</span>
      </h1>
      <p className="section-copy text-center">
        My background blends frontend delivery with hands-on infrastructure
        support, so I approach web work with both presentation quality and
        operational reliability in mind.
      </p>

      <div className="mt-12 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 bg-[#0b1220]/80 text-white dark:border-slate-800"
          >
            <div className="flex flex-col p-4 py-6 md:p-6 lg:flex-row lg:items-start lg:p-8">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={128}
                height={128}
                className="h-auto w-16 md:w-20 lg:w-24"
              />

              <div className="lg:ms-5">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
                    {card.company}
                  </p>
                  <p className="text-sm text-white-100">{card.period}</p>
                </div>
                <h2 className="mt-3 text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h2>
                <p className="mt-3 text-start font-medium leading-7 text-white">
                  {card.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.metrics?.map((metric: string) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white-100"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
