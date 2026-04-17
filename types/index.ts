export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    status: Status;
}

enum Status {
    active = "ACTIVE",
    suspended = "SUSPENDED",
    deactivated = "DEACTIVATED",
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
}