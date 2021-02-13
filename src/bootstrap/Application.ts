import express, { Express, Request, Response } from "express";
import routes from "../api/v1/routes";

class Application {

    app : Express;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() : void {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() : void {
        this.app.get('/health', (req: Request, res: Response) => res.json({ message : "Api Is Working fine." }) );
        this.app.use('/api/v1', routes);
    }
}

export default new Application();