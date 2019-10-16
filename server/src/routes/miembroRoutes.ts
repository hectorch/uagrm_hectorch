import express, { Router } from 'express';

import miembroController from '../controllers/miembroController';

class MiembroRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', miembroController.list);
        this.router.get('/:id', miembroController.getOne);
        this.router.post('/', miembroController.create);
        this.router.put('/:id', miembroController.update);
        this.router.delete('/:id', miembroController.delete);
    }

}

export default new MiembroRoutes().router;