import Link from "next/link";
import { Button } from "../ui/button";
import CardIntro from "../card-intro";

export default function ButtonSection() {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-semibold md:text-3xl text-primary">
        Minimalist button for your app
      </h1>
      <p className="mt-2 text-lg font-light text-secondary">
        With minimalist design, beautiful styles, versatility and customizable.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-6">
        <CardIntro name="Default">
          <Button>Get Start</Button>
        </CardIntro>
        <CardIntro name="Secondary">
          <Button variant={"secondary"}>Get Start</Button>
        </CardIntro>
        <CardIntro name="Outline">
          <Button variant={"outline"}>Get Start</Button>
        </CardIntro>
      </div>
    </section>
  );
}
