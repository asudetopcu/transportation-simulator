import { Point } from "../models/Point"

export interface IVehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}