import  { VehicleBase }  from "../core/VehicleBase"

class Taxi extends VehicleBase {
    readonly type : "taxi";
    protected move(point: Point) : void {
        console.log(`Taksi ${this.currentLocation.x}, ${this.currentLocation.y}'den ${point.x}, ${point.y} gidiyor.`);
        this.currentLocation = point;
    }

    get 
}