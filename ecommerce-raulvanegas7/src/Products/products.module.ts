import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductController } from "./products.controller";
import { ProductsRepository } from "./products.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductsService, ProductsRepository],
    controllers: [ProductController]
})
export class Products {}