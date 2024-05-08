export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-primary">
        Best minimalist ui components
      </h1>
      <p className="max-w-[750px] text-center text-lg font-light text-secondary">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </p>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10"></div>
    </section>
  );
}
