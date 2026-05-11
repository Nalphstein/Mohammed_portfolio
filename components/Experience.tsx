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

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 bg-[#0b1220]/80 text-white dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={128}
                height={128}
                className="h-auto w-16 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <h2 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h2>
                <p className="mt-3 text-start font-semibold text-white">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
