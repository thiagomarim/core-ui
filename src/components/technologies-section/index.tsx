import Image from "next/image";

export default function TechnologiesSection() {
  return (
    <section className="container flex flex-col items-center">
      <div className="max-w-[592px] border-t border-[#262626]">
        <p className="text-center text-lg font-light text-secondary mt-6">
          Various technologies and tools were used to achieve our objective,
          being as minimalist as possible, and delivering a better design
        </p>
        <div className="flex items-center justify-center gap-10 mt-6">
          <Image
            src="/technologies/next.svg"
            width={87}
            height={26}
            alt="Logo Next"
          />
          <Image
            src="/technologies/react.svg"
            width={94}
            height={26}
            alt="Logo Next"
          />
          <Image
            src="/technologies/tailwindcss.svg"
            width={120}
            height={24}
            alt="Logo Next"
          />
        </div>
      </div>
    </section>
  );
}