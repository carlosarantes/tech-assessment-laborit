require("dotenv").config();

const express = require("express");
const cors = require("cors");

const routes = require("../api/v1/routes");

require("../providers/Database");

class Application {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.configSwagger();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
    }

    configSwagger() {
        const swaggerUi = require('swagger-ui-express');
        const swaggerJson = require("../../swagger.json");
        this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJson));
    }

    routes() {
        this.app.get('/health', (req, res) => res.json({ message : "Api Is Working fine." }) );
        this.app.use('/api/v1', routes);
    }
}

module.exports = new Application();