export interface Jwtresponse {
    dataUser:{
        id:number;
        users: string;
        accessToken: string;
        expiresIn: string;
    }
}