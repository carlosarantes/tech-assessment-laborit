const BaseController = require("./BaseController");
const VehicleService = require("../../services/v1/VehicleService");

class VehicleController extends BaseController {
    async findAll(req, res) {
        try {
            const vehicles = await VehicleService.findAll();
            return res.json({ vehicles });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async create(req, res) {
        try {
            const vehicle = await VehicleService.create(req.body);
            return res.status(201).json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const vehicle = await VehicleService.findById(parseInt(id, 10));
            return res.json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const vehicle = await VehicleService.update(parseInt(id, 10), req.body);
            return res.json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const vehicle = await VehicleService.delete(parseInt(id, 10));
            return res.json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }  
}

module.exports = new VehicleController();