import { Injectable } from "@nestjs/common";
import { Product } from "./product.interface";


@Injectable()
export class ProductsRepository {
    
    private products: Product[] = [
        {
            id: 1,
            name: "product 1",
            description: "portatil",
            price: "Usd 350",
            stock: true,
            imgUrl: "https://portatilnegro/pc"
        }
    ];
    async getProducts(page: number, limit: number){
        const startIndex = (page -1) * limit
        const endIndex = (page * limit)
        const paginatedProduct = this.products.slice(startIndex, endIndex)
        return paginatedProduct;
    }

    async getById(id: number) {
        return this.products.find((product) => {
            return product.id === id
        })
    }

    async createProducPost(product: Product) {
        const id = this.products.length + 1
        this.products = [...this.products, {id, ...product}]
        return {id, ...product}
    }

    getUpdateProduct(id: number) {
        return this.products.find((product) => product.id === id)
    }

    getDeleteProduct(id: number) {
        return this.products.find((product) => product.id === id)
    }
}