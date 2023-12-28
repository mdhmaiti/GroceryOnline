"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();
const AuthQueryProvider = ({ children }: props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default AuthQueryProvider;
