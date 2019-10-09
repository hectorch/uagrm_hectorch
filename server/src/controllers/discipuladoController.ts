import { Request, Response } from 'express';


import pool from '../database';

class DiscipuladoController {

    public async list(req: Request, res: Response): Promise<void> {
        const discipulados = await pool.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, discipulado s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo');
        res.json(discipulados);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const discipulados = await pool.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, discipulado s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo and p.codpersona= ?', [id]);
        console.log(discipulados.length);
        if (discipulados.length > 0) {
            return res.json(discipulados[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO discipulados set ?', [req.body]);
        res.json({ message: 'discipulado guradado con exito' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE discipulados set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM discipulados WHERE id = ?', [id]);
        res.json({ message: "discipulado dado de baja" });
    }
}

const discipuladoController = new DiscipuladoController;
export default discipuladoController;