import { Sun, Monitor, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "system" as const, icon: Monitor, label: "System" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-surface border border-border rounded-full p-1.5 shadow-lg">
        {themes.map(({ value, icon: Icon, label }) => {
          const isSelected = theme === value;
          return (
            <button
              key={value}
              onClick={() => setTheme(value)}
              className={`
                relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full
                transition-all duration-200 ease-out
                ${isSelected 
                  ? "bg-green text-text-base scale-110" 
                  : "text-text-muted hover:text-text-base hover:bg-surfaceAlt"
                }
              `}
              aria-label={label}
              title={label}
            >
              <Icon size={18} className="md:w-5 md:h-5" />
              {isSelected && (
                <span className="absolute -inset-1 border-2 border-green rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
