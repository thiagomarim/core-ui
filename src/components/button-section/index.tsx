import Link from "next/link";
import { Button } from "../ui/button";
import CardIntro from "../card-intro";

export default function ButtonSection() {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-bold md:text-3xl text-primary">
        Minimalist button for your app
      </h1>
      <p className="mt-2 text-lg font-light text-secondary">
        With minimalist design, beautiful styles, versatility and customizable.
      </p>
      <div className="mt-12">
        <span className="text-primary font-bold text-xl ">Button Variants</span>
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
          <CardIntro name="Icon">
            <Button variant={"icon"}>I</Button>
          </CardIntro>
        </div>
      </div>
      <div className="my-12">
        <span className="text-primary font-bold text-xl ">Button Sizes</span>
        <div className="grid grid-cols-3 gap-8 mt-6">
          <CardIntro name="Large">
            <Button size={"lg"}>Get Start</Button>
          </CardIntro>
          <CardIntro name="Default">
            <Button size={"default"}>Get Start</Button>
          </CardIntro>
          <CardIntro name="Small">
            <Button size={"sm"}>Get Start</Button>
          </CardIntro>
        </div>
      </div>
    </section>
  );
}
