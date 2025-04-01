import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";

const font = Lato({
    subsets: ["latin"],
    weight:["400"] });

interface HeaderProps {
    title?: string,
    label?: string
}

export default function Header({title, label}: HeaderProps) {
  return (
    <div className="flex flex-col w-full gap-y-2 items-center justify-center">
        <h1 className={cn("text-4xl",font.className)}>{title}</h1>
        <p>{label}</p>

    </div>
  );
}