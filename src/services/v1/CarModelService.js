const CarModel = require("../../models/CarModel");
const HttpError = require("../../errors/HttpError");

class CarModelService {
    async findAll() {
        return await CarModel.findAll();
    }

    async create(body) {
        return await CarModel.create(body);
    }

    async findById(id) {
        const model = await CarModel.findByPk(id);
        if(!model) {
            throw new HttpError("Model not found.", 404);
        }
        
        return model;
    }

    async update(id, body) {
        const result = await CarModel.update(body, { where : { id }});
        if(!result || !result[0]) {
            throw new HttpError("Model not found.", 404);
        }
    }

    async delete(id) {
        const result = await CarModel.destroy({ where : { id } });
        if(!result) {
            throw new HttpError("Model not found.", 404);
        }
    }
}

module.exports = new CarModelService();