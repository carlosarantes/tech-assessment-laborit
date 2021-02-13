import { Response } from "express";

class BaseController {
    returnException(res: Response, e: any) {
        const statusCode = e.statusCode || 400;
        const message = e.message || "Somwthing went wrong :(). Try it later...";
        return res.status(statusCode).json({ message });
    }
}

export default BaseController;