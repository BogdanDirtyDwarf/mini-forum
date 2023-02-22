import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: React.FunctionComponent<AppLinkProps> = (props) => {
  const { to, className, children } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink)}>
      {children}
    </Link>
  );
};
