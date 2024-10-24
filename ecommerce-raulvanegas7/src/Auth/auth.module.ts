import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersRepository } from "src/Users/users.repository";
import { AuthGuard } from "./auth.guard";


@Module({
    providers: [AuthService, UsersRepository, AuthGuard],
    controllers: [AuthController]
})
export class AuthModule {}