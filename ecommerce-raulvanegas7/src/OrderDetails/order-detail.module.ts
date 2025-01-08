import { Module } from "@nestjs/common";
import { OrderDetailController } from "./order-detail.controller";
import { OrderDitailService } from "./order-detail.service";
import { OrderDetail } from "./order-detail.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [TypeOrmModule.forFeature([OrderDetail])],
    providers: [OrderDitailService],
    controllers: [OrderDetailController]
})
export class OrderDitailModule {
    
}