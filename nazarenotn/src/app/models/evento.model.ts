
import { Title } from '@angular/platform-browser';
/*
export interface Evento {
    nombre: string,
    lugar: string,
    fecha_ini: string,
    fecha_fin: string,
    hora: string,
    codtipoc: number,
    codevento?: number,
    tipo_evento?: string
};
*/

export class Evento {
    constructor(
        public nombre: string,
        public lugar: string,
        public fecha_ini: string,
        public fecha_fin: string,
        public hora: string,
        public codtipoc: number,
        public codevento?: number,
        public tipo_evento?: string
    ){}
}