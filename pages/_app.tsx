import '../src/styles/globals.scss'
import type {FC} from "react";
import {AppProps} from "next/app";
import {Layout} from "../src/components";

const MyApp: FC<AppProps> = ({Component, pageProps}) => <Layout><Component {...pageProps} /></Layout>;

export default MyApp
