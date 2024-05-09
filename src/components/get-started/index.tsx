import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="container py-12 sm:py-24 flex flex-col items-center gap-2">
      <h3 className="text-xl font-semibold text-center md:text-2xl text-primary">
        Don’t spend this chance!
      </h3>
      <p className=" font-light text-secondary text-center max-w-[550px]">
        Dont miss this chance to speed up the development of your website and
        make it minimalist is the goal
      </p>
      <Link href="docs">
        <Button className="mt-2 flex items-center gap-1" variant={"outline"}>
          Get Started
          <ChevronRight size={17} />
        </Button>
      </Link>
    </section>
  );
}
