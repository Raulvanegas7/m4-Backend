import { Module } from "@nestjs/common";
import { UserService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserDbService } from "./userBb.service";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserDbService, UsersRepository],
    controllers: [UsersController]
})
export class Users {}