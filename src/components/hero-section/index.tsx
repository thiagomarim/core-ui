import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-32">
      <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl lg:leading-[1.1] text-primary">
        Best minimalist UI components
      </h1>
      <p className="max-w-[550px] text-center text-lg font-light text-secondary">
        Minimalist designed components that you can use in your apps.
        Accessible. Customizable. Open Source.
      </p>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Button>
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button variant={"outline"}>
          <a href="https://github.com/thiagomarim/core-ui" target="_blank">
            Github
          </a>
        </Button>
      </div>
    </section>
  );
}
