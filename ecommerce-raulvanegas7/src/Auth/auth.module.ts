import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersRepository } from "src/Users/users.repository";
import { AuthGuard } from "./auth.guard";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Users/user.entity";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService, UsersRepository, AuthGuard],
    controllers: [AuthController]
})
export class AuthModule {}