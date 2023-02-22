import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { DarkModeIcon, LightModeIcon } from "shared/assets/icons";
import { Button, ThemeButton } from "shared/ui";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher)}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <DarkModeIcon height="32px" width="32px" />
      ) : (
        <LightModeIcon height="32px" width="32px" fill="white" />
      )}
    </Button>
  );
};
