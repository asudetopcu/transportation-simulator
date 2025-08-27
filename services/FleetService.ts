import { IVehicle } from "../contracts/IVehicle";
import { ILogger } from "../logging/ILogger";

export class FleetService {
    constructor(private logger: ILogger){}

    navigateAll(vehicles: IVehicle[], to: Point){
        this.logger.info("fleet: start", { count: vehicles.length, to});
        let ok = 0;

        for(const v of vehicles){
            try{
                this.logger.debug("fleet: item", {vehicleType: v.type, to})
                v.travelTo(to);
                ok++;
            } catch (e) {
                this.logger.error("fleet: failed", {
                    vehicleType: v.type,
                    to,
                    error: String(e)
                })
            }
        }

        this.logger.info("fleet:done", { success: ok, total: vehicles.length});
    }
}