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

const getStaticProps: GetStaticProps = async () => {
  const service = new ServerStatusService();
  const status = await service.get();

  return {
    props: {
      status
    },
    revalidate: 60
  }
}

const Home: FC<{ status: ServerStatusModel }> = (props) => {
  const {status, loadStatus, isLoading} = useServerStatus(props.status);

  return (
    <>
      <Head>
        <title>Valheim Server ● {status.status && `${status.status}`}</title>
        <meta name={"description"} content={"MarcusRise Valheim server status"}/>
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
