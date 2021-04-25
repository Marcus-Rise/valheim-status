import type { IServerStatusResponseDto } from "../dto";
import { ServerStatusModel } from "./server-status.model";
import { ServerStatusEnum } from "./server-status.enum";

class ServerStatusModelFabric {
  static fromResponseDto(dto: IServerStatusResponseDto): ServerStatusModel {
    return new ServerStatusModel(
      dto.online ? ServerStatusEnum.ONLINE : ServerStatusEnum.OFFLINE,
      dto.name,
      dto.version,
      dto.players,
    );
  }
}

export { ServerStatusModelFabric };
