import { Category } from "src/Categories/categories.entity"
import { OrderDetail } from "src/OrderDetails/order-detail.entity"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import {v4 as uuid} from "uuid"

@Entity({
    name: "products"
})
export class Product{

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
        nullable: false
    })
    name: string

    @Column({
        type: "text",
        nullable: false
    })
    description: string

    @Column({
        type: "decimal",
        nullable: false
    })
    price: number

    @Column({
        type: "int",
        nullable: false
    })
    stock: boolean

    @Column({
        type: "text",
        default: "colocarImagen"
    })
    imgUrl: string

    @ManyToOne(() => Category)
    categorie_id: Category

    // @ManyToMany(() => OrderDetail,(orderDetail) => orderDetail.product_id)
    // @JoinTable({name: "productOrderDetails"})
    // orderDetail: OrderDetail[]
}