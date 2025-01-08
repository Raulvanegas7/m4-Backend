import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthSigningDto } from "./dto/auth.signingDto";


@Controller("auth")
export class AuthController{
    constructor(private readonly authService: AuthService

    ){}

    @Post("signin")
    createSignins(@Body() credentials: AuthSigningDto){
        return this.authService.createSignin(credentials)
    }

}