const { Router } = require("express");

const AuthController = require("../../controllers/v1/AuthController");
const BrandController = require("../../controllers/v1/BrandController");
const ModelController = require("../../controllers/v1/ModelController");
const VehicleController = require("../../controllers/v1/VehicleController");

const AuthMiddleware = require('../../middlewares/AuthMiddleware');

const routes = Router();

routes.post('/users/login', AuthMiddleware.validateBeforeLogin, AuthController.login);
routes.post('/users/registration', AuthMiddleware.validateBeforeCreate, AuthController.register);


routes.get('/brands', AuthMiddleware.validateToken, BrandController.findAll);
routes.post('/brands', AuthMiddleware.validateToken, BrandController.create);
routes.get('/brands/:id', AuthMiddleware.validateToken, BrandController.findById);
routes.put('/brands/:id', AuthMiddleware.validateToken, BrandController.update);
routes.delete('/brands/:id', AuthMiddleware.validateToken, BrandController.delete);
routes.get('/brands/vehicles/:brandId', AuthMiddleware.validateToken, VehicleController.findByBrandId);


routes.get('/models', AuthMiddleware.validateToken, ModelController.findAll);
routes.post('/models', AuthMiddleware.validateToken, ModelController.create);
routes.get('/models/:id', AuthMiddleware.validateToken, ModelController.findById);
routes.put('/models/:id', AuthMiddleware.validateToken, ModelController.update);
routes.delete('/models/:id', AuthMiddleware.validateToken, ModelController.delete);
routes.get('/models/vehicles/:modelId', AuthMiddleware.validateToken, VehicleController.findByModelId);


routes.get('/vehicles', AuthMiddleware.validateToken, VehicleController.findAll);
routes.post('/vehicles', AuthMiddleware.validateToken, VehicleController.create);
routes.get('/vehicles/:id', AuthMiddleware.validateToken, VehicleController.findById);
routes.put('/vehicles/:id', AuthMiddleware.validateToken, VehicleController.update);
routes.delete('/vehicles/:id', AuthMiddleware.validateToken, VehicleController.delete);


module.exports = routes;