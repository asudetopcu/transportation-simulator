import  { VehicleBase }  from "../core/VehicleBase"
import { ILogger } from "../logging/ILogger";
import { Point } from "../models/Point";

export class Bike extends VehicleBase {
    readonly type! : "bike";
    
    constructor(location: Point = { x: 0, y: 0 }, logger: ILogger) {
        super(location, logger);
    }

    protected move(point: Point): void {
        this.logger.info("bike:announce", { to: point, from: this.currentLocation });
        super.move(point);
    }
}