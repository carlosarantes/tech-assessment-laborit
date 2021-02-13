import { Request, Response } from "express";
import BaseController from "./BaseController";
import VehicleService from "../../services/v1/VehicleService";

class VehicleController extends BaseController {
    async findAll(req: Request, res: Response) {
        try {
            const vehicles = await VehicleService.findAll();
            return res.json({ vehicles });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const vehicle = await VehicleService.create(req.body);
            return res.status(201).json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vehicle = await VehicleService.findById(parseInt(id, 10));
            return res.json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vehicle = await VehicleService.update(parseInt(id, 10), req.body);
            return res.json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vehicle = await VehicleService.delete(parseInt(id, 10));
            return res.json({ vehicle });
        } catch (e) {
            super.returnException(res, e);
        }
    }  
}

export default new VehicleController();