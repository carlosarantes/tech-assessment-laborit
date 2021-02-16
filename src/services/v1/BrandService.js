const Brand = require("../../models/Brand");
const HttpError = require("../../errors/HttpError");

class BrandService {
    async findAll() {
        return await Brand.findAll();
    }

    async create(body) {
        return await Brand.create(body);
    }

    async findById(id) {
        const brand = await Brand.findByPk(id);
        if(!brand) {
            throw new HttpError("Brand not found.", 404);
        }
        
        return brand;
    }

    async update(id, body) {
        const result = await Brand.update(body, { where : { _id : id }});
        if(!result || !result[0]) {
            throw new HttpError("Brand not found.", 404);
        }
    }

    async delete(id) {
        const result = await Brand.destroy({ where : { _id : id } });
        if(!result || !result[0]) {
            throw new HttpError("Brand not found.", 404);
        }
    }
}

module.exports = new BrandService();