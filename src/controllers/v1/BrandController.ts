import { Request, Response } from "express";
import BaseController from "./BaseController";
import BrandService from "../../services/v1/BrandService";

class BrandController extends BaseController {
        
    async findAll(req: Request, res: Response) {
        try {
            const brands = await BrandService.findAll();
            return res.json({ brands });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const brand = await BrandService.create(req.body);
            return res.status(201).json({ brand });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const brand = await BrandService.findById(parseInt(id, 10));
            return res.json({ brand });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const brand = await BrandService.update(parseInt(id, 10), req.body);
            return res.json({ brand });
        } catch (e) {
            super.returnException(res, e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const brand = await BrandService.delete(parseInt(id, 10));
            return res.json({ brand });
        } catch (e) {
            super.returnException(res, e);
        }
    }  
}

export default new BrandController();