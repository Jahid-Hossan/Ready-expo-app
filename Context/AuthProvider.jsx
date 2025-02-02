import React, { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const contextData = {
    name: "jahid",
  };

  const queryClient = new QueryClient();

  return (
    <AuthContext.Provider value={contextData}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  );
}
