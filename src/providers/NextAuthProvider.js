"use client";

import { SessionProvider } from "next-auth/react";

function NextAuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
