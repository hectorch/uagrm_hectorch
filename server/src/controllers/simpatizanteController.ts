import { Request, Response } from 'express';


import pool from '../database';

class SimpatizanteController {

    public async list(req: Request, res: Response): Promise<void> {
        const simpatizantes = await pool.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, simpatizante s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo');
        res.json(simpatizantes);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const simpatizantes = await pool.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, simpatizante s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo and p.codpersona= ?', [id]);
        console.log(simpatizantes.length);
        if (simpatizantes.length > 0) {
            return res.json(simpatizantes[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO simpatizantes set ?', [req.body]);
        res.json({ message: 'Simpatizante guradado con exito' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE simpatizantes set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM simpatizantes WHERE id = ?', [id]);
        res.json({ message: "Simpatizante dado de baja" });
    }
}

const simpatizanteController = new SimpatizanteController;
export default simpatizanteController;