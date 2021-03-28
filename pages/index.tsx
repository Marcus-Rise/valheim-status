import type {FC} from "react";
import type {GetStaticProps} from "next";
import {ServerStatusCard, ServerStatusModel, ServerStatusService, useServerStatus} from "../src/server-status";
import {Button, Centered} from "../src/components";

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
    <Centered splash column>
      {!isLoading ? (
        <>
          <ServerStatusCard status={status}/>
          <br/>

          <Button onClick={loadStatus}>refresh</Button>
        </>
      ) : <span>loading...</span>}
    </Centered>
  );
};

export {getStaticProps}
export default Home;
