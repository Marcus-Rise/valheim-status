import {NextApiHandler} from "next";
import {ServerStatusService} from "../../server-status";

const ServerStatusHandler: NextApiHandler =async (req, res) => {
  const status = await new ServerStatusService().get();

  res.json(status);
}

export default ServerStatusHandler;
