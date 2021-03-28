import type {FC} from "react";
import {useState} from "react";
import type {GetServerSideProps} from "next";
import {ServerStatusModel, ServerStatusService} from "../server-status";

const getServerSideProps: GetServerSideProps = async () => {
  const service = new ServerStatusService();
  const status = await service.get();

  return {
    props: {
      status
    }
  }
}

const Home: FC<{ status: ServerStatusModel }> = (props) => {
  const [status, setStatus] = useState<ServerStatusModel>(props.status);

  const getStatus = async () => {
    const resp = await fetch("/api/status");
    const data = await resp.json();

    setStatus(data);
  }

  const items = Object.keys(status).map(i => (<li key={i}>
    <b>{i}:</b> {status[i]}
  </li>));

  return (
    <div>
      <ul>
        {items}
      </ul>
      <br/>

      <button onClick={getStatus}>refresh</button>
    </div>
  );
};

export {getServerSideProps}
export default Home;
