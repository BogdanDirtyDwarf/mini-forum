import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.navbar__text)}>Mini Forum</div>
      <div className={classNames(cls.links)}>
        <AppLink to={"/"} className={classNames(cls.navbar__text)}>
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} className={classNames(cls.navbar__text)}>
          {t("О сайте")}
        </AppLink>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
