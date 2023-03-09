import { useTranslation } from "react-i18next";

export const AboutPage: React.FunctionComponent = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <div>{t("О нас")}</div>
    </>
  );
};
