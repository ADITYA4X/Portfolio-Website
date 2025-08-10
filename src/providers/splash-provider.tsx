"use client";

import { createContext, useContext, useState } from "react";

interface SplashContextType {
  isSplashEnabled: boolean;
  toggleSplash: () => void;
}

const SplashContext = createContext<SplashContextType | null>(null);

export const SplashProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSplashEnabled, setIsSplashEnabled] = useState(false);

  const toggleSplash = () => setIsSplashEnabled((prev) => !prev);

  return (
    <SplashContext.Provider value={{ isSplashEnabled, toggleSplash }}>
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("useSplash must be used within SplashProvider");
  }
  return context;
};
