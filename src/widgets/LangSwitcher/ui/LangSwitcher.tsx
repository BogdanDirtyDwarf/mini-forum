import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from "react-i18next";
import { TranslateIcon } from 'shared/assets/icons';
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const { theme } = useTheme();
  
  return (
    <>
      <Button theme={ThemeButton.CLEAR} onClick={toggleLang}>
        {theme === Theme.LIGHT ? (
          <TranslateIcon height="32px" width="32px" fill='black' />
        ) : (
          <TranslateIcon height="32px" width="32px" fill="white" />
        )}
      </Button>
    </>
  );
};