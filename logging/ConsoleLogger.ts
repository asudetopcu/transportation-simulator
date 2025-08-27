import { ILogger } from "./ILogger";
import { SimpleFormatter } from "./SimpleFormatter";
import { LogEntry} from "./types";
import { ILogFormatter } from "./SimpleFormatter";

export class ConsoleLogger implements ILogger {
  constructor(private formatter: ILogFormatter = new SimpleFormatter()) {}

  log(entry: LogEntry): void {
    const line = this.formatter.format(entry);
    if (entry.level === "error") console.error(line);
    else if (entry.level === "warn") console.warn(line);
    else if (entry.level === "debug") console.debug(line);
    else console.log(line);
  }

  debug(message: string, context?: Record<string, unknown>) { this.log({ level:"debug", message, timestamp:new Date(), context }); }
  info (message: string, context?: Record<string, unknown>) { this.log({ level:"info" , message, timestamp:new Date(), context }); }
  warn (message: string, context?: Record<string, unknown>) { this.log({ level:"warn" , message, timestamp:new Date(), context }); }
  error(message: string, context?: Record<string, unknown>) { this.log({ level:"error", message, timestamp:new Date(), context }); }
}
