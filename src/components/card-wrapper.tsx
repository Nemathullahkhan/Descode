import Header from "@/app/auth/header";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import BackButton from "@/app/auth/back-button";
import Social from "./auth/social";

interface CardWrapperProps {
  children?: React.ReactNode;
  headerTitle?: string;
  headerLabel?: string;
  backButtonLabel?: string;
  backButtonHref: string;
}

export default function CardWrapper({
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  children,
}: CardWrapperProps) {
  return (
    <Card className="bg-black text-slate-300 border-none">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <Social />

      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
