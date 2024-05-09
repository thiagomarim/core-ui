import { Button } from "../ui/button";
import CardIntro from "../card-intro";
import { FaGithub } from "react-icons/fa";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

export default function ComponentSection() {
  return (
    <section className="container flex flex-col py-12 sm:py-24">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold text-center md:text-3xl text-primary">
          Minimalist components for your project
        </h1>
        <p className="text-lg font-light text-secondary text-center max-w-[550px]">
          With minimalist designed components that you can use into your apps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <CardIntro name="Default">
          <Link href="docs">
            <Button>Get Start</Button>
          </Link>
        </CardIntro>
        <CardIntro name="Secondary">
          <Link href="docs">
            <Button variant={"secondary"}>Get Start</Button>
          </Link>
        </CardIntro>
        <CardIntro name="Outline">
          <Link href="docs">
            <Button variant={"outline"}>Get Start</Button>
          </Link>
        </CardIntro>
      </div>

      <div className="mt-12 sm:mt-24">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold text-center md:text-3xl text-primary">
            Versatility components
          </h1>
          <p className="text-lg font-light text-secondary text-center max-w-[550px]">
            You can edit the component to match your project, for exemple,
            colors, sizes, icons and much more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <CardIntro>
            <Button className="flex items-center gap-2" size={"default"}>
              <FaGithub size={18} />
              <a
                href="https://github.com/thiagomarim/core-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </CardIntro>
          <CardIntro>
            <Button variant={"outline"} className="flex items-center gap-2">
              <Mail size={18} />
              Send Email
              <ChevronRight size={18} />
            </Button>
          </CardIntro>
        </div>
      </div>
    </section>
  );
}
