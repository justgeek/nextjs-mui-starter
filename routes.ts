import { HelloPage } from "pages/hello-page";

export interface AppRoute {
  path: string;
  navigationLabel?: string;
  name: string;
  children?: AppRoute[];
}

export interface AppRoutes {
  [key: string]: AppRoute;
}

export const ROUTES: AppRoutes = {
  products: { path: "/", name: "home", navigationLabel: "Home" },
};

export const HomeRoute = HelloPage;
