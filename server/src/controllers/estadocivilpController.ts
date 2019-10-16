import { Request, Response } from 'express';

import pool from '../database';

class EstadocivilpController {

    public async list(req: Request, res: Response): Promise<void> {
        const estadocivilps = await pool.query('SELECT * FROM ec_p');
        res.json(estadocivilps);
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
            await pool.query('INSERT INTO ec_p set ?', [req.body]);
           res.json({ message: 'Estado civil guardado con exito' });
        }
        catch{
            res.status(404).json({ text: "El codigo del Estado civil no existe" });
        }
    }
}

const estadocivilpController = new EstadocivilpController;
export default estadocivilpController;