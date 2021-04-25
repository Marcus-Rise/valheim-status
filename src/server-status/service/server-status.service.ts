import { ServerStatusModel, ServerStatusModelFabric } from "../model";
import { classToPlain } from "class-transformer";
import { ServerStatusConfig } from "../config";
import type { AxiosError } from "axios";
import axios from "axios";

class ServerStatusService {
  constructor(private readonly config = new ServerStatusConfig()) {}

  async get(): Promise<ServerStatusModel> {
    let model = new ServerStatusModel();

    await axios
      .get(this.config.apiUrl, { timeout: 500 })
      .then((data) => {
        model = ServerStatusModelFabric.fromResponseDto(data.data);
      })
      .catch((e: AxiosError) => console.error(e.toJSON()));

    return classToPlain(model) as ServerStatusModel;
  }
}

export { ServerStatusService };
