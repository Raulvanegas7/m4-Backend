import { OrderDetail } from "src/OrderDetails/order-detail.entity";
import { User } from "src/Users/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity({
    name: "orders"
})
export class Order{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()
    
    // @Column({default: new Date(), type: "date"})
    @CreateDateColumn()
    date: Date

    // Relación N:1 con Users
    @ManyToOne(() => User, (user) => user.order_id)
    user_id: User

    // Relación 1:1 con OrderDetails
    @OneToOne(()=> OrderDetail)
    orderDetail_id: OrderDetail
}