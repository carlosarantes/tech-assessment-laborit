import CarModel from "../../models/CarModel";
import HttpError from "../../errors/HttpError";

class CarModelService {
    async findAll() {
        return await CarModel.findAll();
    }

    async create(body: any) {
        return await CarModel.create(body);
    }

    async findById(id: number) {
        const model = await CarModel.findByPk(id);
        if(!model) {
            throw new HttpError("Model not found.", 404);
        }
        
        return model;
    }

    async update(id: number, body: any) {
        const model = await CarModel.update(body, { where : { _id : id }});
        console.log('brand * ', model);
    }

    async delete(id: number) {
        const result = await CarModel.destroy({ where : { _id : id } });
        console.log(' result * ', result)
    }
}

export default new CarModelService();