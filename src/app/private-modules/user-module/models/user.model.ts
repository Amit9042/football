
export interface UserModel {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    user_name: string;
}


export const UserFormFields = {
    id: "id",
    email: "email",
    first_name: "first_name",
    last_name: "last_name",
    user_name: "user_name",
    password: "password",
    confirmPassword: "confirmPassword",
}