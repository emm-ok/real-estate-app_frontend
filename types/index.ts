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