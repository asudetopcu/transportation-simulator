import  { VehicleBase }  from "../core/VehicleBase"
import { ILogger } from "../logging/ILogger";

export class Bus extends VehicleBase {
    readonly type : "bus";

    constructor(location: Point = { x: 0, y: 0 }, logger: ILogger) {
        super(location, logger);
    }

    protected move(point: Point): void {
        this.logger.info("bus:announce", { to: point, from: this.currentLocation });
        super.move(point);
    }
}