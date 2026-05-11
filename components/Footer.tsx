import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:mb-5" id="contact">
      <div className="section-shell flex flex-col items-center">
        <p className="eyebrow text-center">Contact</p>
        <h1 className="heading mt-3 lg:max-w-[45vw]">
          Let&apos;s build a <span className="text-purple">stronger</span>{" "}
          digital presence.
        </h1>

        <p className="section-copy my-5 text-center md:mt-10">
          If you need a frontend developer who cares about polish, clarity,
          reliability, and smooth delivery, I&apos;d love to hear about the
          project.
        </p>

        <a
          href="mailto:mohammed.webdesign@gmail.com"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
        >
          Email Mohammed
          <FaLocationArrow className="ml-2" />
        </a>

        <div className="mt-16 flex w-full flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-sm font-light text-white-100 md:text-base md:font-normal">
          Copyright 2026 Mohammed
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.name}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg saturate-180 transition hover:-translate-y-0.5 hover:border-purple/60"
            >
              <Image
                src={profile.img}
                alt={profile.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
