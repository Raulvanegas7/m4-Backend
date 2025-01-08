import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductController } from "./products.controller";
// import { ProductsRepository } from "./products.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Category } from "src/Categories/categories.entity";
import { ProductSeeder } from "src/seeder/products/products.seed";
import { SeederModule } from "src/seeder/seeder.module";


@Module({
    imports: [TypeOrmModule.forFeature([Product, Category]),
    SeederModule
],
    providers: [ProductsService, ProductSeeder],
    controllers: [ProductController]
})
export class ProductsModule {}