import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const {t} = useTranslation("pageNotFound")
  return (
    <div className={classNames(cls.NotFoundPage)}>
      {t("Страница не найдена")}
    </div>
  );
};