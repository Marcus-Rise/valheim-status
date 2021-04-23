import type {FC} from "react";
import type {GetStaticProps} from "next";
import {
  ServerStatusCard,
  ServerStatusCardSkeleton,
  ServerStatusEnum,
  ServerStatusModel,
  ServerStatusService,
  useServerStatus
} from "../src/server-status";
import {Button, Centered, Dot, SkeletonRow} from "../src/components";
import Head from "next/head";

const getStaticProps: GetStaticProps = async (_, service = new ServerStatusService()) => ({
  props: {
    status: await service.get()
  },
  revalidate: 60
})

const Home: FC<{ status: ServerStatusModel }> = (props) => {
  const {status, loadStatus, isLoading} = useServerStatus(props.status);

  return (
    <>
      <Head>
        <title>Valheim Server ● {status.status && `${status.status}`}</title>
        <meta name={"description"} content={"MarcusRise Valheim server status"}/>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="apple-mobile-web-app-title" content="ValheimStatus"/>
        <meta name="application-name" content="ValheimStatus"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#adc8e0"/>
      </Head>
      <Centered splash column>
        {!isLoading ? (
          <>
            <h1>Valheim Server <Dot
              color={status.status === ServerStatusEnum.ONLINE ? "var(--color-success)" : "var(--color-danger)"}/></h1>
            <ServerStatusCard status={status}/>
            <br/>

            <Button onClick={loadStatus}>refresh</Button>
          </>
        ) : (
          <>
            <SkeletonRow style={{width: "15em"}}/>
            <br/>
            <ServerStatusCardSkeleton/>
            <br/>
            <SkeletonRow style={{width: "5em"}}/>
          </>
        )}
      </Centered>
    </>
  );
};

export {getStaticProps}
export default Home;
