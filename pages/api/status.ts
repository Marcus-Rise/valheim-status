import type { NextApiHandler } from "next";
import { ServerStatusService } from "../../src/server-status";

const ServerStatusHandler: NextApiHandler = async (_, res, service = new ServerStatusService()) => {
  res.json(await service.get());
};

export default ServerStatusHandler;
