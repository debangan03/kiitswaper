"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { VscAccount } from 'react-icons/vsc'

function Logout() {
  return (
    <div>
      <VscAccount className="text-2xl font-semibold" onClick={() => signOut({
        callbackUrl:
          process.env.VERCEL_URL || "http://localhost:3000",
      })} />

    </div>
  );
}

export default Logout;