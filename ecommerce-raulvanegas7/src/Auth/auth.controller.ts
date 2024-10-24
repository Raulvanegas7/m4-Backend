import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller("auth")
export class AuthController{
    constructor(private readonly authService: AuthService) {}
    @Post("signin")
    createSignin(
        @Body("email") email: string,
        @Body("password") password: string,

    ){
        console.log("prueba1")
        return this.authService.createSigninPost(email, password)
    }
    @Get()
    prueba(){
        console.log("prueba2")
    }
}