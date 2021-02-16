const { Router } = require("express");

const AuthController = require("../../controllers/v1/AuthController");
const BrandController = require("../../controllers/v1/BrandController");
const ModelController = require("../../controllers/v1/ModelController");
const VehicleController = require("../../controllers/v1/VehicleController");

const AuthMiddleware = require('../../middlewares/AuthMiddleware');

const routes = Router();

routes.post('/users/login', AuthMiddleware.validateBeforeLogin, AuthController.login);
routes.post('/users/registration', AuthMiddleware.validateBeforeCreate, AuthController.register);


routes.get('/brands', BrandController.findAll);
routes.post('/brands',  BrandController.create);
routes.get('/brands/:id', BrandController.findById);
routes.put('/brands/:id', BrandController.update);
routes.delete('/brands/:id', BrandController.delete);


routes.get('/models', ModelController.findAll);
routes.post('/models', ModelController.create);
routes.get('/models/:id', ModelController.findById);
routes.put('/models/:id', ModelController.update);
routes.delete('/models/:id', ModelController.delete);


routes.get('/vehicles', VehicleController.findAll);
routes.post('/vehicles', VehicleController.create);
routes.get('/vehicles/:id', VehicleController.findById);
routes.put('/vehicles/:id', VehicleController.update);
routes.delete('/vehicles/:id', VehicleController.delete);

module.exports = routes;