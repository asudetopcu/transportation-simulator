import  { VehicleBase }  from "../core/VehicleBase"

class Bus extends VehicleBase {
    readonly type : "bus";
    protected move(point: Point) : void {
        console.log(`Otobüs ${this.currentLocation.x}, ${this.currentLocation.y}'den ${point.x}, ${point.y} gidiyor.`);
        this.currentLocation = point;
    }
}