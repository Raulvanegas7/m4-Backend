import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { OrderService } from "./orders.service";
import { OrderController } from "./orders.controller";
import { User } from "src/Users/user.entity";
import { OrderDetail } from "src/OrderDetails/order-detail.entity";
import { Product } from "src/Products/product.entity";
import { UsersModule } from "src/Users/users.module";
import { ProductsModule } from "src/Products/products.module";
import { OrderDitailModule } from "src/OrderDetails/order-detail.module";
import { ProductsService } from "src/Products/products.service";
import { OrderDitailService } from "src/OrderDetails/order-detail.service";
import { Category } from "src/Categories/categories.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Order, User, OrderDetail, Product, Category]),
    UsersModule,
    ProductsModule,
    OrderDitailModule
],
    providers: [OrderService, ProductsService, OrderDitailService],
    controllers: [OrderController]
})
export class OrdersModule{

}