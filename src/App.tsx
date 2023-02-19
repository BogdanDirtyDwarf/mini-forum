import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Link to={"/"}>На главную</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </>
  );
};
