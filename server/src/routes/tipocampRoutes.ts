import express, { Router } from 'express';

import tipocampController from '../controllers/tipocampController';

class TipocampRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', tipocampController.list);
        this.router.get('/:id', tipocampController.getOne);
        this.router.post('/', tipocampController.create);
        this.router.put('/:id', tipocampController.update);
        this.router.delete('/:id', tipocampController.delete);
    }

}

export default new TipocampRoutes().router;