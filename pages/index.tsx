import type { FC } from "react";
import type { GetStaticProps } from "next";
import type { ServerStatusModel } from "../src/server-status";
import { ServerStatusCard, ServerStatusCardSkeleton, ServerStatusService, useServerStatus } from "../src/server-status";
import { Button, Centered, SkeletonRow } from "../src/components";
import Head from "next/head";

const getStaticProps: GetStaticProps = async (_, service = new ServerStatusService()) => ({
  props: {
    status: await service.get(),
  },
  revalidate: 60,
});

const Home: FC<{ status: ServerStatusModel }> = (props) => {
  const {
    status: { status, players, name, version },
    loadStatus,
    isLoading,
  } = useServerStatus(props.status);
  const playersStr = !!players ? ` (${players})` : "";
  const title = `Valheim Server ● ${status}${playersStr}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Centered splash column>
        {!isLoading ? (
          <>
            <ServerStatusCard status={status} name={name} players={players} version={version} />
            <br />
            <Button onClick={loadStatus}>refresh</Button>
          </>
        ) : (
          <>
            <ServerStatusCardSkeleton />
            <br />
            <SkeletonRow style={{ width: "5em" }} />
          </>
        )}
      </Centered>
    </>
  );
};

export { getStaticProps };
export default Home;
