import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "./product.interface";



@Injectable()
export class ProductsService {
    
    constructor (private productsRepository: ProductsRepository){}
    getProducts(page: number = 1, limit: number = 5){       
        return this.productsRepository.getProducts(page, limit)
    }

    getProductById(id: number) {
        return this.productsRepository.getById(id)
    }

    createProduct(product: Product) {
        return this.productsRepository.createProducPost(product)
    }

    upDateProduct(id: number) {
        return this.productsRepository.getUpdateProduct(id)
    }

    deleteProduct(id: number) {
        return this.productsRepository.getDeleteProduct(id)
    }
}