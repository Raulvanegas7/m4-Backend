import { Order } from "src/Orders/order.entity";
import { Product } from "src/Products/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity({
    name: "ordersDetails"
})
export class OrderDetail{

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
  
    @ManyToOne(()=> Order, /* (order)=> order.orderDetail */)
    @JoinColumn({name: "order_id"})
    order_id: Order
  
    // @ManyToOne(() => Product)
    // @JoinColumn({name: "product_id"})
    // product_id: Product

}