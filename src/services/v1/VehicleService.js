const Vehicle = require("../../models/Vehicle");
const HttpError = require("../../errors/HttpError");

class VehicleService {
    async findAll() {
        return await Vehicle.findAll();
    }

    async create(body) {
        return await Vehicle.create(body);
    }

    async findById(id) {
        const vehicle = await Vehicle.findByPk(id);
        if(!vehicle) {
            throw new HttpError("Vehicle not found.", 404);
        }
        
        return vehicle;
    }

    async update(id, body) {
        const result = await Vehicle.update(body, { where : { _id : id }});
        if(!result || !result[0]) {
            throw new HttpError("Vehicle not found.", 404);
        }
    }

    async delete(id) {
        const result = await Vehicle.destroy({ where : { _id : id } });
        if(!result || !result[0]) {
            throw new HttpError("Vehicle not found.", 404);
        }
    }
}

module.exports = new VehicleService();