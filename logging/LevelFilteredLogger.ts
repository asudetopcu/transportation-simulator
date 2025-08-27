import { ILogger } from "./ILogger";
import { LogEntry, LogLevel } from "./types";

export class LevelFilteredLogger implements ILogger {
  constructor(
    private base: ILogger,         
    private minimum: LogLevel     
  ) {}

  private order: LogLevel[] = ["debug", "info", "warn", "error"];

  private allowed(level: LogLevel): boolean {
    return this.order.indexOf(level) >= this.order.indexOf(this.minimum);
  }

  // Ortak emisyon yordamı
  private emit(level: LogLevel, message: string, context?: Record<string, unknown>) {
    if (!this.allowed(level)) return;
    const entry: LogEntry = { level, message, timestamp: new Date(), context };
    this.base.log(entry); // alttaki logger'a delege edilir
  }

  // ILogger gereksinimleri
  log(entry: LogEntry): void {
    if (this.allowed(entry.level)) {
      this.base.log(entry);
    }
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.emit("debug", message, context);
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.emit("info", message, context);
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.emit("warn", message, context);
  }

  error(message: string, context?: Record<string, unknown>): void {
    this.emit("error", message, context);
  }
}
