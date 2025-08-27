import { ConsoleLogger } from "./logging/ConsoleLogger";
import { LevelFilteredLogger } from "./logging/LevelFilteredLogger";
import { CompositeLogger } from "./logging/CompositeLogger";
import { MemoryLogger } from "./logging/MemoryLogger";
import { Taxi } from "./vehicles/Taxi";
import { Bus } from "./vehicles/Bus";
import { Bike } from "./vehicles/Bike";
import { FleetService } from "./services/FleetService";
import { RouteRunner } from "./services/RouteRunner";

// 1) Taban logger'lar
const consoleLogger = new ConsoleLogger();
const memoryLogger = new MemoryLogger(); // test / inceleme için

// 2) Composite (ikisine birden yaz)
const devLogger = new CompositeLogger([consoleLogger, memoryLogger]);

// 3) Seviye filtresi (örn. prod'da "info")
const logger =
  process.env.NODE_ENV === "production"
    ? new LevelFilteredLogger(consoleLogger, "info")
    : new LevelFilteredLogger(devLogger, "debug");

// 4) Nesneleri logger ile oluştur
const bike = new Bike({ x: 2, y: 2 }, logger);
const taxi = new Taxi({ x: 1, y: 1 }, logger);
const bus  = new Bus ({ x: 0, y: 0 }, logger);

const fleet = new FleetService(logger);
const runner = new RouteRunner(logger);

// 5) Senaryolar
bike.travelTo({ x: 5, y: 7 });
taxi.travelTo({ x: 3, y: 4 });
bus.travelTo({ x: 10, y: 10 });

fleet.navigateAll([taxi, bus], { x: 5, y: 5 });

runner.run(taxi, [
  { x: 6, y: 6 },
  { x: 7, y: 8 },
  { x: 7, y: 10 },
]);

