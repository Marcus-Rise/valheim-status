import type { FC } from "react";
import type { GetStaticProps } from "next";
import type { ServerStatusModel } from "../src/server-status";
import {
  ServerStatusCard,
  ServerStatusCardSkeleton,
  ServerStatusEnum,
  ServerStatusService,
  useServerStatus,
} from "../src/server-status";
import { Button, Centered, Dot, SkeletonRow } from "../src/components";
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

  const color = status === ServerStatusEnum.ONLINE ? "var(--color-success)" : "var(--color-danger)";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Centered splash column>
        {!isLoading ? (
          <>
            <h1>
              Valheim Server <Dot color={color} />
            </h1>
            <ServerStatusCard status={status} name={name} players={players} version={version} />
            <br />
            <Button onClick={loadStatus}>refresh</Button>
          </>
        ) : (
          <>
            <SkeletonRow style={{ width: "15em" }} />
            <br />
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
