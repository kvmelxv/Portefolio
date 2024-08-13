/* "use client";

import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-100"}`}
        aria-label="Switch to light theme"
      >
        <SunIcon className="h-6 w-6" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded ${theme === "dark" ? "bg-gray-700" : "bg-gray-500"}`}
        aria-label="Switch to dark theme"
      >
        <MoonIcon className="h-6 w-6 text-gray-500 dark:text-yellow-300" />
      </button>
    </div>
  );
}
 */