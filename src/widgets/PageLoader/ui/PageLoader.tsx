import cls from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader)}>
      <Loader />
    </div>
  );
};
