export class User {
    constructor(
        public nombre: string,
        public username: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string
    ){}
}