import  { VehicleBase }  from "../core/VehicleBase"

class Bike extends VehicleBase {
    readonly type : "bike";
    protected move(point: Point) : void {
        console.log(`Bisiklet ${this.currentLocation.x}, ${this.currentLocation.y}'den ${point.x}, ${point.y} gidiyor.`);
        this.currentLocation = point;
    }
}