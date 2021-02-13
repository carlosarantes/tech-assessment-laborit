import Vehicle from "../../models/Vehicle";
import HttpError from "../../errors/HttpError";

class VehicleService {
    async findAll() {
        return await Vehicle.findAll();
    }

    async create(body: any) {
        return await Vehicle.create(body);
    }

    async findById(id: number) {
        const vehicle = await Vehicle.findByPk(id);
        if(!vehicle) {
            throw new HttpError("Vehicle not found.", 404);
        }
        
        return vehicle;
    }

    async update(id: number, body: any) {
        const vehicle = await Vehicle.update(body, { where : { _id : id }});
        console.log('brand * ', vehicle);
    }

    async delete(id: number) {
        const vehicle = await Vehicle.destroy({ where : { _id : id } });
        console.log(' result * ', vehicle)
    }
}

export default new VehicleService();