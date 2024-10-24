import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserDbService{
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ){}

    saveUser(user: User){
        this.usersRepository.save(user)
    }
}