import { ServerStatusEnum } from "./server-status.enum";

class ServerStatusModel {
  constructor(
    public status = ServerStatusEnum.OFFLINE,
    public name = "Unknown",
    public version = "Unknown",
    public players = 0,
  ) {}
}

export { ServerStatusModel };
