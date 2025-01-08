import { Module } from "@nestjs/common";
import { CategoryService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories.entity";
import { CategorySeeder } from "src/seeder/categories/categories.seed";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService, CategorySeeder],
    controllers: [CategoriesController]
})
export class CategoriesModule{
    
}


