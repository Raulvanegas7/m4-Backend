import { Product } from "src/Products/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity({
    name: "categories"
})
export class Category{
    
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({length: 50, nullable: false})
    name: string

    // Relación 1:N con Product
    @OneToMany(()=> Product,(product) => product.categoryId)
    product_id: Product[]
}
