import { Permissions } from "./permissions";

export interface Role {
    id: number;
    name: string;
    permissions: Permissions[]; // Suponiendo que los permisos son una matriz de objetos de permisos.
}
