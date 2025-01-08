import { BadRequestException, Body, Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
// import { User } from "./user.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-userDto";



@Injectable()
export class UserService {    
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}
    
    getUser(){        
        return this.userRepository.find()
    }

    getUserById(id: any) {
        try{
            return this.userRepository.findOne({where: {id}})
        }catch{
            throw new BadRequestException("Error al buscar el usuario")
        }
    }

    createUser(userBody: any){
        return this.userRepository.save(userBody)
    }

    updateUser(id: any, body: any) {
        return this.userRepository.update(id, body)
    }

    async deleteUser(id: any) {
        const user = await this.userRepository.findOne({where: {id}})
        return await this.userRepository.remove(user)
    }

    async findUsersByEmail(email: string){
        return await this.userRepository.findOne({where: {email}})
    }

    pag(page: number, limit: number) {
        const skip = (page -1) * limit;
        return this.userRepository.find({skip: skip,
            take: limit
        })
    }
   
}