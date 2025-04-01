import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" relative flex h-screen  bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900">
      <div className="w-full max-w-7xl mx-10 my-12">
        <nav className="flex w-full justify-between">
          <div className=" text-white border-2 rounded-full p-3">logo</div>
          <div className="flex relative gap-x-3">
            <Link href= {"/auth/login"}>
              <Button variant={"default"}>Login</Button>
            </Link>
            <Link href= {"/auth/register"}>
              <Button variant={"default"}>Signup</Button>
            </Link>
          </div>
        </nav>
        
      </div>
    </main>
  );
}
