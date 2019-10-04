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
class MiembrosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const miembros = yield database_1.default.query('SELECT * FROM miembro');
            res.json(miembros);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const miembros = yield database_1.default.query('SELECT * FROM miembro WHERE id = ?', [id]);
            console.log(miembros.length);
            if (miembros.length > 0) {
                return res.json(miembros[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO miembro set ?', [req.body]);
            res.json({ message: 'Game Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE miembro set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM miembro WHERE id = ?', [id]);
            res.json({ message: "The game was deleted" });
        });
    }
}
const miembrosController = new MiembrosController;
exports.default = miembrosController;
