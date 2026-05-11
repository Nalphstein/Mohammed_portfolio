'use client';
import Image from "next/image";
import { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./Gridglobe";
import Magicbutton from "./Magicbutton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgClassName,
  img,
  id,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  img?: string;
  id?: number;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mohammed.webdesign@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white-100/[0.08] transition duration-200 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(2,6,23,0.28)] dark:shadow-none",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(8,15,29,0.96) 0%, rgba(13,21,39,0.98) 100%)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              src={img}
              alt=""
              fill
              className={cn(imgClassName, "object-cover object-center")}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt=""
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        <div>{id === 6 && <BackgroundGradientAnimation />}</div>

        <div
          className={cn(
            titleClassName,
            "relative z-10 flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-1 md:h-full lg:p-8"
          )}
        >
          <div className="z-10 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300 lg:text-sm">
            {description}
          </div>

          <div className="z-10 mt-4 max-w-96 text-lg font-semibold leading-snug text-neutral-100 lg:text-[1.9rem]">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Angular.js", "Next.js", "TypeScript"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-white/10 bg-[#101a33] px-3 py-2 text-center text-xs text-white-100 lg:px-3 lg:py-4 lg:text-base"
                    >
                      {item}
                    </span>
                  )
                )}
                <span className="rounded-xl bg-[#10132e] px-3 py-4 text-center" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-xl bg-[#10132e] px-3 py-4 text-center" />
                {["Figma", "MySQL", "HTML", "CSS"].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-[#101a33] px-3 py-2 text-center text-xs text-white-100 lg:px-3 lg:py-4 lg:text-base"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <Magicbutton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
