class ServerStatusConfig {
  constructor(public readonly apiUrl: string = process.env.API_URL) {}
}

export { ServerStatusConfig };
