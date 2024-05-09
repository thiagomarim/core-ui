"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const NAV_LINKS = [
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Components",
    href: "/docs/components",
  },
];

export default function Header() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border_button/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/">
          <span className="font-bold text-white">clean/ui</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.name}>
              <span
                className={twMerge(
                  "transition-colors hover:text-primary/80 text-secondary/80",
                  path === link.href ? "text-primary" : ""
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <a
            href="https://github.com/thiagomarim/core-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="transition-colors hover:text-primary/80 text-secondary/80">
              Github
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
