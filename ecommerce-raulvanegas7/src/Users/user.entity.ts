import { Order } from "src/Orders/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity({
    name: "users"
})
export class User{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()
    
    @Column({length: 50, nullable: false})
    name: string

    @Column({length: 50, /* unique: true, */ nullable: false})
    email: string

    @Column({length: 20, nullable: false})
    password: string

    @Column({ type: 'int', nullable: true })
    phone: number

    @Column({length: 50, nullable: true})
    country: string

    @Column({type: 'text', nullable: true})
    address: string

    @Column({length: 50, nullable: true})
    city: string
    
    @Column({type: "boolean",default: false})
    isAdmin: boolean

    // @Column()
    // createdAt: string

    // Relación 1:N con Orders
    @OneToMany(() => Order, (order) => order.user_id )
    order_id: Order[]
}