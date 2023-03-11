import cls from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation("pageError");

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError)}>
      <p>{t("Произошла непредвиеднная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
