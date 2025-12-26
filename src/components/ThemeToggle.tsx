import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9 overflow-hidden rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun
        className={`h-4 w-4 absolute transition-all duration-700 ease-in-out
          ${theme === 'dark'
            ? 'rotate-180 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
          }`}
      />
      <Moon
        className={`h-4 w-4 absolute transition-all duration-700 ease-in-out
          ${theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-180 scale-0 opacity-0'
          }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

