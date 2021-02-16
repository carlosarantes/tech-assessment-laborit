const BaseController = require("./BaseController");
const CarModelService = require("../../services/v1/CarModelService");

class ModelController extends BaseController {
    async findAll(req, res) {
        try {
            const models = await CarModelService.findAll();
            return res.json({ models });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async create(req, res) {
        try {
            const model = await CarModelService.create(req.body);
            return res.status(201).json({ model });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const model = await CarModelService.findById(id);
            return res.json({ model });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await CarModelService.update(id, req.body);
            return res.status(204).send("");
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await CarModelService.delete(parseInt(id, 10));
            return res.status(204).send("");
        } catch (e) {
            super.returnException(res, e);
        }
    }  
}

module.exports = new ModelController();