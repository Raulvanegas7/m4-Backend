import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/Categories/categories.entity";
import { Product } from "src/Products/product.entity";
import { CategorySeeder } from "./categories/categories.seed";
import { ProductSeeder } from "./products/products.seed";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Category, Product])],
    providers: [CategorySeeder, ProductSeeder],
    exports: [CategorySeeder, ProductSeeder]
})
export class SeederModule {}