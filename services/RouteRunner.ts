import { IVehicle } from "../contracts/IVehicle";
import { ILogger } from "../logging/ILogger";
import type Point = require("../models/Point");

export class RouteRunner {
    constructor(private logger: ILogger) {}

    run(vehicle: IVehicle, route: Point.Point[]) {
        this.logger.info("route:start", {
            vehicleTyoe: vehicle.type,
            steps: route.length
        });

        route.forEach((p, i) => {
            this.logger.debug("route:step", { index: i, to: p});
            vehicle.travelTo(p);
        });

        this.logger.info("route:done", {
            vehicleType: vehicle.type,
            at: vehicle.currentLocation
        });
    }
}