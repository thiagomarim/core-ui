import { Button } from "../ui/button";
import CardIntro from "../card-intro";

export default function ComponentSection() {
  return (
    <section className="container flex flex-col py-24">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold text-center md:text-3xl text-primary">
          Minimalist components for your project
        </h1>
        <p className="text-lg font-light text-secondary text-center max-w-[550px]">
          With minimalist designed components that you can use into your apps.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
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

      <div className="py-24">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold text-center md:text-3xl text-primary">
            Versatility components
          </h1>
          <p className="text-lg font-light text-secondary text-center max-w-[550px]">
            You can edit the component to match your project, for exemple,
            colors, sizes, icons and much more.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <CardIntro>
            <Button>Get Start</Button>
          </CardIntro>
          <CardIntro>
            <Button variant={"secondary"}>Get Start</Button>
          </CardIntro>
        </div>
      </div>
    </section>
  );
}
