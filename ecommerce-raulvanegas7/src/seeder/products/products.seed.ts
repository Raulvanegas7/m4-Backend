import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/Categories/categories.entity";
import { Product } from "src/Products/product.entity";
import { Repository } from "typeorm";
import { productsMock } from "./products-mock";

@Injectable()
export class ProductSeeder {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ){}

    async findCategories(category: string){
        const foundCategory = await this.categoryRepository.findOne({
            where: {name: category}
        })

        if(!foundCategory){
            throw new Error(`Category ${category} not found`)
        }
        return foundCategory;
    }

    async createSeedProduct(){
        const findProductName = (await this.productRepository.find()).map((product) => product.name)
        
        for(const productData of productsMock){    

            // if(!findProductName.includes(productData.name)) {
            if(!findProductName.some((productName) => productName === productData.name)) {
                const newProduct = new Product();
                newProduct.name = productData.name,
                newProduct.description = productData.description,
                newProduct.price = productData.price,
                newProduct.stock = productData.stock,
                newProduct.categoryId = await this.findCategories(productData.category)
                await this.productRepository.save(newProduct)
            }else{
                return "Ya existen productos"
            }
        }
    }
}