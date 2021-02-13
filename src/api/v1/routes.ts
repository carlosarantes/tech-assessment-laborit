import { Router } from "express"

import BrandController from "../../controllers/v1/BrandController";
import ModelController from "../../controllers/v1/ModelController";
import VehicleController from "../../controllers/v1/VehicleController";

const routes = Router();

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

export default routes;