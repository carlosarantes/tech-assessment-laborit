import { Request, Response } from "express";
import BaseController from "./BaseController";
import CarModelService from "../../services/v1/CarModelService";

class ModelController extends BaseController {
    async findAll(req: Request, res: Response) {
        try {
            const models = await CarModelService.findAll();
            return res.json({ models });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const model = await CarModelService.create(req.body);
            return res.status(201).json({ model });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const model = await CarModelService.findById(parseInt(id, 10));
            return res.json({ model });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const model = await CarModelService.update(parseInt(id, 10), req.body);
            return res.json({ model });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const model = await CarModelService.delete(parseInt(id, 10));
            return res.json({ model });
        } catch (e) {
            super.returnException(res, e);
        }
    }  
}

export default new ModelController();