import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { projects } from "@/data";

const Recentprojects = () => {
  return (
    <section className="section-shell" id="projects">
      <p className="eyebrow text-center">Projects</p>
      <h1 className="heading mt-3">
        Selected <span className="text-purple">projects</span>
      </h1>
      <p className="section-copy text-center">
        A focused selection of client-facing work that shows how I approach
        credibility, responsiveness, and clear business communication on the web.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {projects.map(({ id, title, des, role, result, img, iconLists, link }) => (
          <article
            key={id}
            className="surface-card p-6 transition hover:border-white/20"
          >
            <div className="relative mb-8 flex h-[260px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101827]">
              <Image
                src="/bg.png"
                alt=""
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <Image
                src={img}
                alt={title}
                width={560}
                height={320}
                className="absolute bottom-0 z-10 h-auto w-full object-contain"
              />
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                  Featured work
                </p>
                <h2 className="mt-3 text-xl font-semibold md:text-2xl">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-white-100 lg:text-base">
                  {des}
                </p>
              </div>

              <div className="space-y-3 text-sm text-white-100">
                <p className="rounded-xl border border-white/10 bg-black-200/40 px-4 py-3 leading-6">
                  {role}
                </p>
                <p className="rounded-xl border border-white/10 bg-black-200/40 px-4 py-3 leading-6">
                  {result}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{ transform: `translateX(${-8 * index}px)` }}
                    >
                      <Image
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        className="p-1.5 lg:p-2"
                      />
                    </div>
                  ))}
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Visit live site
                  <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Recentprojects;
