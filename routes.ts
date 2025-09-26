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
  home: { path: "/", name: "home", navigationLabel: "Home" },
  firstPage: { path: "/first-page", name: "first-page", navigationLabel: "First Page" },
  about: { path: "/about", name: "about", navigationLabel: "About us" },
};
