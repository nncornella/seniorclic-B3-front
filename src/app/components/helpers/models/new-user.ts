export interface NewUser {
    username: string;
    password: string;
    email: string;
    activo: boolean;
    roles: string[]; // Assuming roles are represented as an array of strings (role names or IDs)
}

