import { Request, Response } from "express";
import BaseController from "./BaseController";

class BrandController extends BaseController{
        
    async findAll(req: Request, res: Response) {
        try {
            return res.json({ message : "teste" });
        } catch (e) {

        }
    }

    async create(req: Request, res: Response) {
        try {
            return res.json({ message : "teste" });
        } catch (e) {

        }
    }

    async findById(req: Request, res: Response) {
        try {
            return res.json({ message : "teste" });
        } catch (e) {

        }
    }

    async update(req: Request, res: Response) {
        try {
            return res.json({ message : "teste" });
        } catch (e) {

        }
    }

    async delete(req: Request, res: Response) {
        try {
            return res.json({ message : "teste" });
        } catch (e) {

        }
    }  
}

export default new BrandController();