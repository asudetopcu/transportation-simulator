import { ILogger } from "./ILogger";
import { LogEntry } from "./types";

export class CompositeLogger implements ILogger {
  constructor(private sinks: ILogger[]) {}
  log(e: LogEntry) { this.sinks.forEach(s => s.log(e)); }
  debug(m: string, c?: any) { this.sinks.forEach(s => s.debug(m, c)); }
  info (m: string, c?: any) { this.sinks.forEach(s => s.info (m, c)); }
  warn (m: string, c?: any) { this.sinks.forEach(s => s.warn (m, c)); }
  error(m: string, c?: any) { this.sinks.forEach(s => s.error(m, c)); }
}
