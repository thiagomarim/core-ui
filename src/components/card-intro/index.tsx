import { ReactNode } from "react";

interface CardIntroProps {
  children: ReactNode;
  name: string;
}

export default function CardIntro({ children, name }: CardIntroProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3>{name}</h3>
      <div className="border border-[#262626] rounded-lg h-40">
        <div className="w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
