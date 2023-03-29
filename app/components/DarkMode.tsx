"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsSunFill } from "react-icons/bs";
import { TbMoon } from "react-icons/tb";

export const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted ? (
        currentTheme === "dark" ? (
          <TbMoon
            className="cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsSunFill
            className=" cursor-pointer "
            onClick={() => setTheme("dark")}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};
