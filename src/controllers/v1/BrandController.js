const BaseController = require("./BaseController");
const BrandService = require("../../services/v1/BrandService");

class BrandController extends BaseController {
        
    async findAll(req, res) {
        try {
            const brands = await BrandService.findAll();
            return res.json({ brands });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async create(req, res) {
        try {
            const brand = await BrandService.create(req.body);
            return res.status(201).json({ brand });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const brand = await BrandService.findById(id);
            return res.json({ brand });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await BrandService.update(id, req.body);
            return res.status(204).send("");
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await BrandService.delete(id);
            return res.status(204).send("");
        } catch (e) {
            super.returnException(res, e);
        }
    }  
}

module.exports = new BrandController();