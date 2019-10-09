import express, { Router } from 'express';

import simpatizanteController from '../controllers/simpatizanteController';

class SimpatizanteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', simpatizanteController.list);
        this.router.get('/:id', simpatizanteController.getOne);
        this.router.post('/', simpatizanteController.create);
        this.router.put('/:id', simpatizanteController.update);
        this.router.delete('/:id', simpatizanteController.delete);
    }

}

export default new SimpatizanteRoutes().router;