import { IVehicle } from "../contracts/IVehicle"
import { Point } from "../models/Point";
import { ILogger } from "../logging/ILogger";


export abstract class VehicleBase implements IVehicle {
    abstract readonly type: string;

    constructor( 
        private _currentLocation: Point = { x: 0, y:0},
        protected logger: ILogger //DI: loggeri enjekte ettik
    ) {}

    travelTo(point: Point): void {
        this.logger.info("travel:start", {
            vehicleType: this.type,
            from: this.currentLocation,
            to: point
        });

        try {
            this.beforeTravel(point);
            this.move(point); //polymorphism (alt sınıflar farklı uygular)
            this.afterTravel(point);

            this.logger.info("travel:done", {
                vehicleType: this.type,
                at: this._currentLocation
            });
        }catch (err){
            this.logger.error("travel:failed", {
                vehicleType: this.type,
                to: point,
                err: String(err)
            })
            throw err; 
        }
    }

    get currentLocation() {
        return this._currentLocation;
    }

    set currentLocation(value: Point) {
        if(value.x<0 || value.y<0) {
            throw new Error('koordinat bilgileri negatif olamaz')
        } 

        this._currentLocation = value;     
    }

    protected beforeTravel(point: Point): void {
        //isteğe bağlı hook
        this.logger.debug("travel:before", {
            vehicleType: this.type,
            to: point
        })
    }

    protected move(point: Point) : void {
        //varsayılan taşıma
        this.logger.debug("travel:move", {
            vehicleType: this.type,
            from: this.currentLocation,
            to: point
        })
        this.currentLocation = point
    }

    protected afterTravel(point: Point): void {
         // İsteğe bağlı hook
        this.logger.debug("travel:after", {
            vehicleType: this.type,
            at: this.currentLocation,
            target: point,
        });
    }

    protected distance(a: Point, b: Point): number {
        return Math.hypot(a.x - b.x, a.y - b.y)
    }
}