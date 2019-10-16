import { Request, Response } from 'express';


import pool from '../database';

class MiembroController {

    public async list(req: Request, res: Response): Promise<void> {
        const miembros = await pool.query('SELECT p.codpersona, m.foto, m.ci, p.nombre, p.apellido, p.direccion, p.telefono, p.gps, s.codsexo, s.nombre AS sexo, ec.codestadoc, ec.nombre AS estado_civil, ecp.codecp, m.fechamembresia, m.fechanacimiento, m.fechabautizo FROM miembro m, persona p, sexo s, estado_civil ec, ec_p ecp WHERE m.codpersona=p.codpersona AND p.estado_per=1 AND p.codsexo=s.codsexo AND p.codpersona=ecp.codpersona AND ecp.codestadoc=ec.codestadoc');
        res.json(miembros);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const miembro = await pool.query('SELECT e.codmiembro, e.nombre, e.lugar, e.fecha_ini, e.fecha_fin, e.hora, e.codtipoc, tc.nombre AS tipo_miembro FROM miembro e, tipo_camp tc WHERE e.codtipoc=tc.codtipoc AND e.codmiembro= ?', [id]);
        console.log(miembro.length);
        if (miembro.length > 0) {
            return res.json(miembro[0]);
        }
        res.status(404).json({ text: "No existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        try{
            await pool.query('INSERT INTO miembro set ?', [req.body]);
           await pool.query("INSERT INTO camp_estado(fecha, num_asistente, observaciones, codestadoc, codmiembro) values (now(), '0', 'NULL', 1, last_insert_id())");
           res.json({ message: 'miembro guradado con exito' });
        }
        catch{
            res.status(404).json({ text: "El codigo del miembro no existe" });
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldmiembro = req.body;
        await pool.query('UPDATE miembro set ? WHERE codmiembro = ?', [req.body, id]);
        res.json({ message: "Modificacion realizado correctamente" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try{
            await pool.query('DELETE FROM camp_estado WHERE codmiembro = ?', [id]);
            await pool.query('DELETE FROM miembro WHERE codmiembro = ?', [id]);
            res.json({ message: "miembro Eliminado" });
        }catch{
            res.json({ message: "No se puedo eliminar" });
        }
    }
}

const miembroController = new MiembroController;
export default miembroController;