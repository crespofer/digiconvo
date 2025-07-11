"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeStore } from "../../../stores/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 text-yellow-500" />;
      case "dark":
        return <Moon className="h-4 w-4 text-blue-400" />;
      case "system":
        return <Monitor className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 rounded-lg theme-border theme-surface px-3 py-2 text-sm font-medium theme-text shadow-sm transition-all theme-hover hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      title={`Current theme: ${getLabel()}. Click to cycle through themes.`}
      aria-label={`Switch theme from ${getLabel()}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
      <span className="hidden sm:inline">{getLabel()}</span>
    </motion.button>
  );
}
