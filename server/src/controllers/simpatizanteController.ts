import { Request, Response } from 'express';


import pool from '../database';

class SimpatizantesController {

    public async list(req: Request, res: Response): Promise<any> {
        const simpatizantes = await pool.query('SELECT * FROM simpatizante');
        res.json(simpatizantes);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const simpatizantes = await pool.query('SELECT * FROM simpatizante WHERE id = ?', [id]);
        /*if (simpatizantes.length > 0) {
           return res.json(simpatizantes[0]);
        }*/
        res.status(404).json({ text: "El codigo del simpatizante no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO simpatizante set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE simpatizante set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM simpatizante WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
}

const simpatizantesController = new SimpatizantesController;
export default simpatizantesController;