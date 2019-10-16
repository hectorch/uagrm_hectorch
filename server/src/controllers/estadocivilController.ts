import { Request, Response } from 'express';


import pool from '../database';

class EstadocivilController {

    public async list(req: Request, res: Response): Promise<void> {
        const estadocivils = await pool.query('SELECT * FROM estado_civil');
        res.json(estadocivils);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const estadocivils = await pool.query('SELECT * FROM estado_civil ec WHERE  ec.codestadoc= ?', [id]);
        console.log(estadocivils.length);
        if (estadocivils.length > 0) {
            return res.json(estadocivils[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
            await pool.query('INSERT INTO estadocivil set ?', [req.body]);
           res.json({ message: 'Estado civil guardado con exito' });
        }
        catch{
            res.status(404).json({ text: "El codigo del estado civil no existe" });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE estado_civil set ? WHERE codestadoc = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try{
            await pool.query('DELETE FROM estado_civil WHERE codestadoc= ?', [id]);
            res.json({ message: "Estado civil Eliminado" });
        }catch{
            res.json({ message: "No se puedo eliminar" });
        }
    }
}

const estadocivilController = new EstadocivilController;
export default estadocivilController;