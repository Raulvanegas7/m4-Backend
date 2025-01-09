import { Order } from "src/Orders/order.entity";
import { Product } from "src/Products/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name: "orderdetails"
})
export class OrderDetail{

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
    
    // Relación 1:1 con Orders
    @OneToOne(()=> Order)
    @JoinColumn({name: "order_id"})
    order: Order

    // Relación N:N con Products
    @ManyToMany(() => Product, (product) => product.orderDetail) 
    // @JoinColumn({name: "product_id"})
    product: Product[]

}