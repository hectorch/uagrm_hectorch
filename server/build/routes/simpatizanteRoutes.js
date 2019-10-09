"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const simpatizanteController_1 = __importDefault(require("../controllers/simpatizanteController"));
class SimpatizanteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', simpatizanteController_1.default.list);
        this.router.get('/:id', simpatizanteController_1.default.getOne);
        this.router.post('/', simpatizanteController_1.default.create);
        this.router.put('/:id', simpatizanteController_1.default.update);
        this.router.delete('/:id', simpatizanteController_1.default.delete);
    }
}
exports.default = new SimpatizanteRoutes().router;
