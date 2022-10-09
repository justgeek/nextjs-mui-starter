import { NextPage } from "next";
import FirstPage from "pages/first-page/index.page";
import { SecondPage } from "pages/second-page";

export interface AppRoute {
  path: string;
  navigationLabel?: string;
  name: string;
  component: NextPage;
  children?: AppRoute[];
}

export interface AppRoutes {
  [key: string]: AppRoute;
}

export const ROUTES: AppRoutes = {
  home: { path: "/", name: "home", navigationLabel: "Home", component: FirstPage },
  about: { path: "/about", name: "about", navigationLabel: "About us", component: SecondPage },
};

export const HomeRoute = FirstPage;
