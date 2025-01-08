import { IsEmail, IsOptional, IsString } from "class-validator"


export class CreateUserDto{
    @IsString()
    id: string

    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    address: string

    @IsString()
    @IsOptional()
    country?: string

    @IsString()
    @IsOptional()
    city?: string
}