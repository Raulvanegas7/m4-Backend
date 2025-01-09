import { Category } from "src/Categories/categories.entity"
import { OrderDetail } from "src/OrderDetails/order-detail.entity"
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import {v4 as uuid} from "uuid"

@Entity({
    name: "products"
})
export class Product{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({length: 50, nullable: false })
    name: string

    @Column({type: 'text', nullable: false})
    description: string

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number

    @Column({type: 'int', nullable: false})
    stock: number

    @Column({
        type: "text",
        nullable: true,
        default: 'default-image-url.jpg'
    })
    imgUrl: string

    // Relación N:1 con Category
    @ManyToOne(() => Category, (category) => category.product, { onDelete: 'CASCADE', eager: true })
    @JoinColumn({ name: "category_id" })
    category: Category

    // Relación N:N con OrderDetail
    @ManyToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
    @JoinTable({name: "productOrderDetail_id"})
    orderDetail: OrderDetail[]
}