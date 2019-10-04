"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const miembrosController_1 = __importDefault(require("../controllers/miembrosController"));
class MiembrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', miembrosController_1.default.list);
        this.router.get('/:id', miembrosController_1.default.getOne);
        this.router.post('/', miembrosController_1.default.create);
        this.router.put('/:id', miembrosController_1.default.update);
        this.router.delete('/:id', miembrosController_1.default.delete);
    }
}
exports.default = new MiembrosRoutes().router;
