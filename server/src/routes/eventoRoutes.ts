import express, { Router } from 'express';

import eventoController from '../controllers/eventoController';

class EventoRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', eventoController.list);
        this.router.get('/:id', eventoController.getOne);
        this.router.post('/', eventoController.create);
        this.router.put('/:id', eventoController.update);
        this.router.delete('/:id', eventoController.delete);
    }

}

export default new EventoRoutes().router;