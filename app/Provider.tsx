"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-900 dark:text-sky-100 transition-all duration-200 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
