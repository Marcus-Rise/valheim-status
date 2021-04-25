interface IServerStatusResponseDto {
  name: string;
  version: string;
  players: number;
  max_players: number;
  map: string;
  online: boolean;
}

export type { IServerStatusResponseDto };
