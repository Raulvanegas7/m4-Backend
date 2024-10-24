import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./user.interface";
import { AuthGuard } from "src/Auth/auth.guard";
import { UserDbService } from "./userBb.service";
import {User as UserEntity} from "./user.entity"


@Controller("users")
export class UsersController {
    constructor(
        private readonly userService: UserService,
        private readonly usersDbService: UserDbService
    ) {}

    @Get()
    @UseGuards(AuthGuard)
    getUsers(
        @Query("page") page: number = 1,
        @Query("limit") limit: number = 5 
    ){
        return this.userService.getUsers(page, limit)
    }

    // @Post()
    // createUser(@Body() user: UserEntity ){
    //     return this.usersDbService.saveUser({...user})
    // }
    @Post()
    createUser(@Body() user: User ){
        return this.userService.createUser(user)
    }

    @Put(":id")
    updateUser(@Param("id") id: string){
        return this.userService.updateUser(Number(id))
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string){
        return this.userService.deleteUser(Number(id))
    }

    @Get(":id")
    getUserById(@Param("id") id: string){
        return this.userService.getUserById(Number(id))
    }


}