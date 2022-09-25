import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { AppRoute, ROUTES } from "routes";

export const NavigationMenu: FunctionComponent = () => {
  const router = useRouter();

  const isRouteActive = (route: AppRoute) => {
    return router.pathname == route.path;
  };

  return (
    <>
      {Object.values(ROUTES).map((route: AppRoute) => {
        const { name, path, navigationLabel } = route;
        return (
          <Link href={path} key={name}>
            <a className={`${isRouteActive(route) ? "text-active" : ""}`}>{navigationLabel}</a>
          </Link>
        );
      })}
    </>
  );
};
