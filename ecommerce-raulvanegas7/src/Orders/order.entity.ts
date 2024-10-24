import { OrderDetail } from "src/OrderDetails/order-detail.entity";
import { User } from "src/Users/user.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity({
    name: "orders"
})
export class Order{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @ManyToOne(() => User, (user) => user.order_id)
    user_id: User

    @Column({default: new Date(), type: "date"})
    date: Date

    @OneToMany(()=> OrderDetail, (orderDetail) => orderDetail.order_id)
    @JoinTable()
    orderDetail: OrderDetail[]
}