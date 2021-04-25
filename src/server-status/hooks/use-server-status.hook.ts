import { useCallback, useState } from "react";
import { ServerStatusModel } from "../model";

const useServerStatus = (defaultStatus?: ServerStatusModel) => {
  const [status, setStatus] = useState<ServerStatusModel>(defaultStatus);
  const [isLoading, setIsLoading] = useState(false);

  const loadStatus = useCallback(() => {
    setIsLoading(true);

    fetch("/api/status")
      .then((res) => res.json())
      .then(setStatus)
      .catch((e) => {
        console.error(e);
        setStatus(new ServerStatusModel());
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { status, isLoading, loadStatus };
};

export { useServerStatus };
