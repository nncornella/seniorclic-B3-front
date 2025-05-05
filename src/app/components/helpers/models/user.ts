import { Role } from "./role";

export interface User {
    id:string;
    usermame:string;
    password:string;
    email:String;
    activo:boolean;
    roles: Role[]; // Suponiendo que los roles se representan como una matriz de objetos de rol
}
