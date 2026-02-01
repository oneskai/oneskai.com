'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { Icon } from './Icon';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {resolvedTheme === 'light' ? (
        <Icon type="moon" className="theme-icon" />
      ) : (
        <Icon type="sun" className="theme-icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
