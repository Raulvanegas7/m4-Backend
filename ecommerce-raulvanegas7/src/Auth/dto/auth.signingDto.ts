import { IsEmail, IsNotEmpty } from "class-validator"


export class AuthSigningDto{
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string
}