import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "./user.interface";


@Injectable()
export class UserService {
    
    constructor(private userRepository: UsersRepository){}
    
    getUsers(page: number , limit: number){
        return this.userRepository.getUsers(page, limit)
    }

    getUserById(id: number) {
        return this.userRepository.getById(id)
    }

    createUser(user: User){
        return this.userRepository.createUser(user)
    }

    updateUser(id: number) {
        return this.userRepository.getUpdate(id)
    }

    deleteUser(id: number) {
        return this.userRepository.getDelete(id)
    }
   
}