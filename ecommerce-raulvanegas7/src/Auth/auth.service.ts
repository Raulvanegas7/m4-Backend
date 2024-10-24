import { Injectable } from "@nestjs/common";
import { User } from "src/Users/user.interface";
import { UsersRepository } from "src/Users/users.repository";



@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UsersRepository){}
    async createSigninPost(email: string, password: string){
        const user = await this.userRepository.findUserByEmail(email)
        if(user === undefined || user.password !== password){
            return "Credenciales incorrectas"
        }
        return user
    }
}