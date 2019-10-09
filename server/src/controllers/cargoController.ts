import { Request, Response } from 'express';


import pool from '../database';

class CargoController {

    public async list(req: Request, res: Response): Promise<void> {
        const cargo = await pool.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, simpatizante s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo');
        res.json(cargo);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const cargo = await pool.query('SELECT p.codpersona, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.padre_espiritual, se.nombre AS sexo FROM persona p, simpatizante s, sexo se WHERE p.codpersona= s.codpersona AND p.codsexo=se.codsexo and p.codpersona= ?', [id]);
        console.log(cargo.length);
        if (cargo.length > 0) {
            return res.json(cargo[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO cargo set ?', [req.body]);
        res.json({ message: 'Simpatizante guradado con exito' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE cargo set ? WHERE codcargo = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM cargo WHERE codcargo = ?', [id]);
        res.json({ message: "Simpatizante dado de baja" });
    }
}

const cargoController = new CargoController;
export default cargoController;