"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-1 rounded-full border border-border bg-card/85 px-4 py-3 shadow-[0_18px_50px_rgba(2,6,23,0.12)] backdrop-blur-md dark:shadow-[0_18px_50px_rgba(2,6,23,0.35)]",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="!cursor-pointer">{navItem.name}</span>
        </Link>
      ))}
      <ThemeToggle />
    </motion.div>
  );
};
