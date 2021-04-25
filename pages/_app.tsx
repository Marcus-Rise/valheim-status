import "../src/styles/globals.scss";
import type { FC } from "react";
import type { AppProps } from "next/app";
import { Layout } from "../src/components";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <meta name={"description"} content={"MarcusRise Valheim server status"} />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="apple-mobile-web-app-title" content="ValheimStatus" />
    <meta name="application-name" content="ValheimStatus" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#adc8e0" />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
