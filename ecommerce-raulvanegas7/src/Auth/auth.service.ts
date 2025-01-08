import { Injectable } from "@nestjs/common";
// import { User } from "src/Users/user.interface";
import { UsersRepository } from "src/Users/users.repository";
import { UserService } from "src/Users/users.service";
import { AuthSigningDto } from "./dto/auth.signingDto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Users/user.entity";
import { Repository } from "typeorm";



@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userService: Repository<User>
    ){}

    async createSignin(credentials: AuthSigningDto){
        const authenticatedUser = await this.userService.findOne({
            where: { email: credentials.email }, // Filtro por email
        });
        if(authenticatedUser && authenticatedUser.password === credentials.password){
            return "Estas logueado"
        }
        return "Email o password incorrectos"
    }
}
