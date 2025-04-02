"use server"
import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/signout-button";

export default async function Page() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <pre>{session?.user?.name}</pre>
      <SignOutButton />
    </div>
  );
}
