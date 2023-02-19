import { lazy } from "react";

export const AboutPageAsync = lazy(() =>
  import("./AboutPage").then(({ AboutPage }) => ({ default: AboutPage }))
);
