export class Miembro {
    constructor(
        public foto: string,
        public ci: string,
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public gps: string,
        public estado_per: number,
        public codsexo:number,
        public fechamembresia: string,
        public fechanacimiento: string,
        public fechabautizo: string,
        public codpersona?: number,
    ){}
}