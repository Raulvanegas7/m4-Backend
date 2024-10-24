import { Module } from "@nestjs/common";
import { CategoryService } from "./categories.service";
import { CategorySeed as CategorySeedService } from "./category.seed";
import { CategoriesController } from "./categories.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService, CategorySeedService],
    controllers: [CategoriesController]
})
export class CategoriesModule{

}


