"use client";
import Link from "next/link";
import { Link as MUILink } from "@mui/material";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { AppRoute, ROUTES } from "../../../../routes";
import "./styles.scss";

export const NavigationMenu: FunctionComponent = () => {
  const pathname = usePathname();

  const isRouteActive = (route: AppRoute) => {
    return pathname === route.path;
  };

  return (
    <>
      {Object.values(ROUTES).map((route: AppRoute) => {
        const { name, path, navigationLabel } = route;
        return (
          <Link href={path} key={name} legacyBehavior>
            <MUILink underline="none" className={`nav-link ${isRouteActive(route) ? "active" : ""}`}>
              {navigationLabel}
            </MUILink>
          </Link>
        );
      })}
    </>
  );
};
