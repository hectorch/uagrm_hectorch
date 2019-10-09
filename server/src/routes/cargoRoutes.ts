import express, { Router } from 'express';

import cargoController from '../controllers/cargocontroller';

class CargoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', cargoController.list);
        this.router.get('/:id', cargoController.getOne);
        this.router.post('/', cargoController.create);
        this.router.put('/:id', cargoController.update);
        this.router.delete('/:id', cargoController.delete);
    }

}

export default new CargoRoutes().router;