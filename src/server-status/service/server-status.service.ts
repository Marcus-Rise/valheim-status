import {ServerStatusModel} from "../model";
import {ServerStatusModelFabric} from "../model/server-status.model.fabric";
import {classToPlain} from "class-transformer"
import {ServerStatusConfig} from "../config";
import axios, {AxiosError} from "axios";

class ServerStatusService {
  constructor(private readonly config = new ServerStatusConfig()) {
  }

  async get(): Promise<ServerStatusModel> {
    let model = new ServerStatusModel();

    await axios.get(this.config.apiUrl, {timeout: 500})
      .then((data) => {
        model = ServerStatusModelFabric.fromResponseDto(data.data);
      })
      .catch((e: AxiosError) => console.error(e.toJSON()));

    return classToPlain(model) as ServerStatusModel;
  }
}

export {ServerStatusService}
