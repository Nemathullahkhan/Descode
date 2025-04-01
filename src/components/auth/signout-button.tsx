// components/sign-out-button.tsx
"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <button 
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}