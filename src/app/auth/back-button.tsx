import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
    href: string;
    label?: string;

}
export default function BackButton({label,href}:BackButtonProps) {
  return (
    <Button variant={"link"} className="font-normal text-slate-200 w-full" size = "sm">
      <Link
        href={href}
        className="w-full flex items-center justify-center gap-x-2"
      >
        <ArrowLeft size={20} className="h-5 w-5" />
        {label}
      </Link>
    </Button>
  );
}