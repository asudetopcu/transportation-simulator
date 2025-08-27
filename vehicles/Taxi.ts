import  { VehicleBase }  from "../core/VehicleBase"
import { ILogger } from "../logging/ILogger";
import { Point } from "../models/Point";

export class Taxi extends VehicleBase {
    readonly type : "taxi";

    constructor(location: Point = {x:0, y:0}, logger: ILogger) {
        super(location, logger);
    }

    protected beforeTravel(point: Point): void {
        const d = this.distance(this.currentLocation, point);

        this.logger.info("taxi: precheck", {
            from: this.currentLocation,
            to: point,
            distance: Number(d.toFixed(2)),
        });
    }
    protected move(point: Point) : void {
        this.logger.debug("taxi: moving", {
            from: this.currentLocation,
            to: point
        })
        super.move(point);
    }

    
}