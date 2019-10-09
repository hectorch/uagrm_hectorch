import { Request, Response } from 'express';


import pool from '../database';

class TipocampController {

    public async list(req: Request, res: Response): Promise<void> {
        const tipocamps = await pool.query('SELECT * from tipo_camp');
        res.json(tipocamps);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const tipocamp = await pool.query('SELECT * from tipo_camp where codtipoc = ?', [id]);
        console.log(tipocamp.length);
        if (tipocamp.length > 0) {
            return res.json(tipocamp[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tipo_camp set ?', [req.body]);
        res.json({ message: 'Tipocamp guradado con exito' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE tipo_camp set ? WHERE codtipoc = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tipo_camp WHERE codtipoc = ?', [id]);
        res.json({ message: "Tipocamp dado de baja" });
    }
}

const tipocampController = new TipocampController;
export default tipocampController;