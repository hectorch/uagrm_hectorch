"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SimpatizanteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const simpatizantes = yield database_1.default.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, simpatizante s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo');
            res.json(simpatizantes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const simpatizantes = yield database_1.default.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, simpatizante s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo and p.codpersona= ?', [id]);
            console.log(simpatizantes.length);
            if (simpatizantes.length > 0) {
                return res.json(simpatizantes[0]);
            }
            res.status(404).json({ text: "No existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO simpatizantes set ?', [req.body]);
            res.json({ message: 'Simpatizante guradado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE simpatizantes set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "Modificacion realizado correctamente" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM simpatizantes WHERE id = ?', [id]);
            res.json({ message: "Simpatizante dado de baja" });
        });
    }
}
const simpatizanteController = new SimpatizanteController;
exports.default = simpatizanteController;
