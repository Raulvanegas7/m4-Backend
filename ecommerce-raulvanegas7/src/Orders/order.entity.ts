import { OrderDetail } from "src/OrderDetails/order-detail.entity";
import { User } from "src/Users/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
    @ManyToOne(() => User, (user) => user.order)
    @JoinColumn({name: "user_Id"})
    user: User

    // @Column()
    // userId: string;

    // Relación 1:1 con OrderDetails
    @OneToOne(()=> OrderDetail)
    // @JoinColumn({name: "orderDetail_Id"})
    orderDetail: OrderDetail
}