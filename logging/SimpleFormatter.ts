import { LogEntry } from "./types";

export interface ILogFormatter {
  format(entry: LogEntry): string;
}

export class SimpleFormatter implements ILogFormatter {
  format(e: LogEntry): string {
    const ts = e.timestamp.toISOString();
    const ctx = e.context ? ` ${JSON.stringify(e.context)}` : "";
    return `[${ts}] ${e.level.toUpperCase()} ${e.message}${ctx}`;
  }
}
