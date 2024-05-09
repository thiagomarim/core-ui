"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NAV_LINKS = [
  {
    name: "Docs",
    href: "/docs",
  },
  {
    name: "Components",
    href: "/docs/components",
  },
];

export default function Footer() {
  const path = usePathname();

  return (
    <footer className="py-16 container flex flex-wrap items-center justify-center sm:justify-between gap-4">
      <span className="font-light text-secondary text-center sm:text-start">
        Built by Thiago Soares Marim. The source code is available on{" "}
        <a
          href="https://github.com/thiagomarim/core-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          GitHub
        </a>
        .
      </span>
      <nav className="flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.name}>
            <span
              className={twMerge(
                "transition-colors font-light hover:text-primary/80 text-secondary/80",
                path === link.href ? "text-primary" : ""
              )}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
