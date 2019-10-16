import { Request, Response } from 'express';


import pool from '../database';

class PersonaController {

    public async list(req: Request, res: Response): Promise<void> {
        const personas = await pool.query('SELECT e.codpersona, e.nombre, e.lugar, e.fecha_ini, e.fecha_fin, e.hora, e.codtipoc, tc.nombre AS tipo_persona FROM persona e, tipo_camp tc WHERE e.codtipoc=tc.codtipoc');
        res.json(personas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const personas = await pool.query('SELECT e.codpersona, e.nombre, e.lugar, e.fecha_ini, e.fecha_fin, e.hora, e.codtipoc, tc.nombre AS tipo_persona FROM persona e, tipo_camp tc WHERE e.codtipoc=tc.codtipoc AND e.codpersona= ?', [id]);
        console.log(personas.length);
        if (personas.length > 0) {
            return res.json(personas[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
            await pool.query('INSERT INTO persona set ?', [req.body]);
           await pool.query("INSERT INTO camp_estado(fecha, num_asistente, observaciones, codestadoc, codpersona) values (now(), '0', 'NULL', 1, last_insert_id())");
           res.json({ message: 'persona guradado con exito' });
        }
        catch{
            res.status(404).json({ text: "El codigo del persona no existe" });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldpersona = req.body;
        await pool.query('UPDATE persona set ? WHERE codpersona = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try{
            await pool.query('DELETE FROM camp_estado WHERE codpersona = ?', [id]);
            await pool.query('DELETE FROM persona WHERE codpersona = ?', [id]);
            res.json({ message: "persona Eliminado" });
        }catch{
            res.json({ message: "No se puedo eliminar" });
        }
    }
}

const personaController = new PersonaController;
export default personaController;