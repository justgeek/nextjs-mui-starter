import "../sass/styles.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ROUTES } from "routes";
import Error from "next/error";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../layouts/app"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const NOT_FOUND = 404;
  const router = useRouter();
  const destination = Object.values(ROUTES).find((route) => route.path === router.asPath);

  const ComponentToRender = destination?.component;

  useEffect(() => {
    if (!router.isReady) return;
    // codes using router.query
  }, [router.isReady]);

  return (
    <App>
      {!ComponentToRender && <Error statusCode={NOT_FOUND} />}
      {ComponentToRender && <ComponentToRender {...pageProps} />}
    </App>
  );
}

export default MyApp;
