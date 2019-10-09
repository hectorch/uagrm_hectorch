export class Evento {
    constructor(
        public nombre: string,
        public lugar: string,
        public fecha_ini: string,
        public fecha_fin: string,
        public hora: string,
        public codtipoc: number,
        public codevento?: number
    ){}
}