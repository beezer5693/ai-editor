"use client";

import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";

type Props = {
  currentTheme?: Theme;
};

const ThemeIcon = ({ currentTheme }: Props) => {
  switch (currentTheme) {
    case "system":
      return <Monitor className="size-3" />;
    case "light":
      return <Sun className="size-3" />;
    case "dark":
      return <Moon className="size-3" />;
  }
};

const ThemeSwitch = () => {
  const { theme, setTheme, themes } = useTheme();
  return (
    <div className="flex items-center relative">
      <Select
        defaultValue={theme}
        onValueChange={(value: Theme) => setTheme(value)}
      >
        <SelectTrigger className="w-full pl-6 pr-3 py-1.5 bg-transparent outline-none capitalize h-[32px] text-xs">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {themes.map((theme) => (
              <SelectItem key={theme} value={theme} className="capilization">
                {theme}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="absolute left-2 pointer-events-none">
        <ThemeIcon currentTheme={theme as Theme} />
      </div>
    </div>
  );
};

export default ThemeSwitch;
