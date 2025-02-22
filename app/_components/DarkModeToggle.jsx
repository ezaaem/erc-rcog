"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="  items-center      justify-center p-2 rounded-md bg-sky-600 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-sky-700 transition"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-white" />
      ) : (
        <Moon className="w-6 h-6 text-white dark:text-gray-200" />
      )}
    </button>
  );
};

export default DarkModeToggle;
