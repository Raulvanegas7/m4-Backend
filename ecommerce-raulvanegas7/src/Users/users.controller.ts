import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./user.interface";
import { AuthGuard } from "src/Auth/auth.guard";
import {User as UserEntity} from "./user.entity"
import { UserResponseDto } from "./dto/user.responseDto";


@Controller("users")
export class UsersController {
    constructor(
        private readonly userService: UserService,
    ){}

    @HttpCode(200)
    @Get("pag")
    @UseGuards(AuthGuard)
    findPagination(
        @Query("page") page: number = 1,
        @Query("limit") limit: number = 5 
    ){
        return this.userService.pag(page, limit)
    }

    @Get()
    @UseGuards(AuthGuard)
    async getUsers(){
        const users = await this.userService.getUser()
        const responseUser = (users).map((user) => new UserResponseDto(user))
        return responseUser
    }

    @HttpCode(200)
    @Get(":id") 
    // @UseGuards(AuthGuard)
    getUsersById(@Param("id") id: string){
        try{
            return this.userService.getUserById(id)
        }catch{
            throw new BadRequestException("No se econtró el usuario")
        }
        
    }

    @Post()
    createUsers(@Body() userBody: User ){
        // console.log("UserBody: ", userBody);        
        return this.userService.createUser(userBody)
    }

    @Put(":id")
    @UseGuards(AuthGuard)
    updateUsers(@Param("id") id: string, @Body() body: any){
        return this.userService.updateUser(id, body)
    }

    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteUsers(@Param("id") id: string){
        return this.userService.deleteUser(id)
    }

}