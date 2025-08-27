import { Point } from "../models/Point"

export interface IVehicle {
    type: unknown;
    currentLocation: Point;
    travelTo(point: Point): void;
}