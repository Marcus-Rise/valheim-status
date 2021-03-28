import {ServerStatusEnum} from "./server-status.enum";

class ServerStatusModel {
  constructor(
    public status = ServerStatusEnum.ONLINE,
    public name = "",
    public version = "",
    public players = 0,
  ) {
  }
}

export {ServerStatusModel}
