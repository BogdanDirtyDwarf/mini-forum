import { useTranslation } from "react-i18next";

export const MainPage:React.FunctionComponent = () => {
  const {t} = useTranslation()
  return (
    <>
      <div>{t("Главная")}</div>
    </>
  );
};
