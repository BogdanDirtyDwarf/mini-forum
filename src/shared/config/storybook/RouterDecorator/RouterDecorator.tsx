import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: any = (story: () => Story) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
