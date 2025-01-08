import { Order } from "src/Orders/order.entity";
import { Product } from "src/Products/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name: "orderDetails"
})
export class OrderDetail{

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
    
    // Relación 1:1 con Orders
    @OneToOne(()=> Order)
    @JoinColumn({name: "order_id"})
    order_id: Order

    // Relación N:N con Products
    @ManyToMany(() => Product, (product) => product.orderDetail_id) 
    @JoinColumn({name: "product_id"})
    product_id: Product[]

}