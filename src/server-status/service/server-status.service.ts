import {ServerStatusModel} from "../model";
import {ServerStatusModelFabric} from "../model/server-status.model.fabric";
import {classToPlain} from "class-transformer"
import {ServerStatusConfig} from "../config";

class ServerStatusService {
  constructor(private readonly config = new ServerStatusConfig()) {
  }

  async get(): Promise<ServerStatusModel> {
    let model = new ServerStatusModel();

    await fetch(this.config.apiUrl)
      .then(res => res.json())
      .then(data => {
        model = ServerStatusModelFabric.fromResponseDto(data);
      }).catch(console.error);

    return classToPlain(model) as ServerStatusModel;
  }
}

export {ServerStatusService}
