import {ServerStatusModel} from "../model";
import {ServerStatusModelFabric} from "../model/server-status.model.fabric";
import {classToPlain} from "class-transformer"
import {ServerStatusConfig} from "../config";

class ServerStatusService {
  constructor(private readonly config = new ServerStatusConfig()) {
  }

  async get(): Promise<ServerStatusModel> {
    const response = await fetch(this.config.apiUrl);
    const data = await response.json();
    const model = ServerStatusModelFabric.fromResponseDto(data);

    return classToPlain(model) as ServerStatusModel;
  }
}

export {ServerStatusService}
