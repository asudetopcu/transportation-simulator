import { ILogger } from "./ILogger";
import { LogEntry } from "./types";

export class MemoryLogger implements ILogger {
  public entries: LogEntry[] = [];
  log(entry: LogEntry) { this.entries.push(entry); }
  debug(m: string, c?: any) { this.log({ level:"debug", message:m, timestamp:new Date(), context:c }); }
  info (m: string, c?: any) { this.log({ level:"info" , message:m, timestamp:new Date(), context:c }); }
  warn (m: string, c?: any) { this.log({ level:"warn" , message:m, timestamp:new Date(), context:c }); }
  error(m: string, c?: any) { this.log({ level:"error", message:m, timestamp:new Date(), context:c }); }
}
