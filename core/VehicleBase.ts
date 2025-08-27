import { IVehicle } from "../contracts/IVehicle"
import { Point } from "../models/Point";

export abstract class VehicleBase implements IVehicle {
    abstract readonly type: string;
    constructor( private _currentLocation: Point = { x: 0, y:0}) {}

    travelTo(point: Point): void {
        this.move(point);
    }

    protected abstract move(point: Point) : void;

    get currentLocation() {
        return this._currentLocation;
    }

    set currentLocation(value: Point) {
        if(value.x<0 || value.y<0) {
            throw new Error('koordinat bilgileri negatif olamaz')
        } 

        this._currentLocation = value;     
    }
}