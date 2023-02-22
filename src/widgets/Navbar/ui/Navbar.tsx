import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.navbar__text)}>My App</div>
      <div className={classNames(cls.links)}>
        <AppLink to={"/"} className={classNames(cls.navbar__text)}>
          Главная
        </AppLink>
        <AppLink to={"/about"} className={classNames(cls.navbar__text)}>
          О сайте
        </AppLink>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
