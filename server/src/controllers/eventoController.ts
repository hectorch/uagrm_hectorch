import { Request, Response } from 'express';


import pool from '../database';

class EventoController {

    public async list(req: Request, res: Response): Promise<void> {
        const eventos = await pool.query('SELECT e.codevento, e.nombre, e.lugar, e.fecha_ini, e.fecha_fin, e.hora, e.codtipoc, tc.nombre AS tipo_evento FROM evento e, tipo_camp tc WHERE e.codtipoc=tc.codtipoc');
        res.json(eventos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const eventos = await pool.query('SELECT e.codevento, e.nombre, e.lugar, e.fecha_ini, e.fecha_fin, e.hora, e.codtipoc, tc.nombre AS tipo_evento FROM evento e, tipo_camp tc WHERE e.codtipoc=tc.codtipoc AND e.codevento= ?', [id]);
        console.log(eventos.length);
        if (eventos.length > 0) {
            return res.json(eventos[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
            await pool.query('INSERT INTO evento set ?', [req.body]);
           await pool.query("INSERT INTO camp_estado(fecha, num_asistente, observaciones, codestadoc, codevento) values (now(), '0', 'NULL', 1, last_insert_id())");
           res.json({ message: 'evento guradado con exito' });
        }
        catch{
            res.status(404).json({ text: "El codigo del evento no existe" });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldEvento = req.body;
        await pool.query('UPDATE evento set ? WHERE codevento = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try{
            await pool.query('DELETE FROM camp_estado WHERE codevento = ?', [id]);
            await pool.query('DELETE FROM evento WHERE codevento = ?', [id]);
            res.json({ message: "Evento Eliminado" });
        }catch{
            res.json({ message: "No se puedo eliminar" });
        }
    }
}

const eventoController = new EventoController;
export default eventoController;