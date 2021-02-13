import Brand from "../../models/Brand";
import HttpError from "../../errors/HttpError";

class BrandService {
    async findAll() {
        return await Brand.findAll();
    }

    async create(body: any) {
        return await Brand.create(body);
    }

    async findById(id: number) {
        const brand = await Brand.findByPk(id);
        if(!brand) {
            throw new HttpError("Brand not found.", 404);
        }
        
        return brand;
    }

    async update(id: number, body: any) {
        const brand = await Brand.update(body, { where : { _id : id }});
        console.log('brand * ', brand);
    }

    async delete(id: number) {
        const result = await Brand.destroy({ where : { _id : id } });
        console.log(' result * ', result)
    }
}

export default new BrandService();