"use client";

import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return <Switch disabled />;

  return (
    <Switch
      isSelected={theme === "dark"}
      onValueChange={(isDark) => setTheme(isDark ? "dark" : "light")}
      color="secondary"
      className="transition-transform transform hover:scale-110"
    />
  );
};

export default ThemeSwitcher;
