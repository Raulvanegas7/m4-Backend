import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { Category } from "src/Categories/categories.entity";



@Injectable()
export class ProductsService {
    
    constructor (
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>,

        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ){}

    async createProduct(productData: any) {                
        const findCategory = await this.categoryRepository.findOne({
            where: { name: productData.category },
        });    
        
          if (!findCategory) {
              throw new BadRequestException('La categoría proporcionada no existe.');
            }    
            
            const newProduct = this.productsRepository.create({
                ...productData,
                categoryId: findCategory,
            });
            // console.log("Product Creado : ", newProduct)
      
          return this.productsRepository.save(newProduct);
        
    }

    async getProduct(page: number, limit: number){       
        const skip = (page -1) * limit;
        return await this.productsRepository.find({skip: skip,
            take: limit
        })
    }

    async getProductById(id: string) {
        try{
            return await this.productsRepository.findOne({where: {id}})

         }catch{
            throw new BadRequestException("Error al buscar el producto")
        }
    }

    async upDateProduct(id: any, productData: any) {    
        const findProduct = await this.productsRepository.findOne({ where: { id } });    
        if (!findProduct) {
        throw new BadRequestException('El producto no existe.');
    }
        // Si se proporciona una nueva categoría, verificar si existe
        if (productData.category) {
        const myCategory = await this.categoryRepository.findOne({
            where: { name: productData.category },
        });

        if (!myCategory) {
            throw new BadRequestException('La categoría proporcionada no existe.');
        }

        findProduct.categoryId = myCategory;
    }

        // Actualizar el resto de los campos del producto
        Object.assign(findProduct, productData);

    
        return this.productsRepository.save(findProduct); 
    }

    async deleteProduct(id: any) {
        const product = await this.productsRepository.findOne({where: {id}})
        return await this.productsRepository.remove(product)   //id?
    }

    async buyProduct(id: string){
        const product = await this.productsRepository.findOneBy({id})
        if(product.stock === 0){
            throw new Error ("Out of stock")
        }
        await this.productsRepository.update(id, {stock: product.stock - 1})
        
        console.log("Product bought successfully");
        return product.price
    }
    
}











// this.seederProduct()
    
    // async seederProduct(){
    //     const seederProduct = [{
    //         "name": "Iphone 15",
    //         "description": "The best smartphone in the world",
    //         "price": 199.99,
    //         "stock": 12,
    //         "category": "smartphone"
    //       },

    //       {
    //         "name": "Iphone 16",
    //         "description": "The best smartphone in the world",
    //         "price": 199.99,
    //         "stock": 12,
    //         "category": "smartphone"
    //       }
    //     ]
        
    //     const existinProducts = await this.getProduct(1, 1)

    //     if(existinProducts.length > 0){            
    //         return "ya existen productos"
    //     }else{
    //         seederProduct.forEach((element) => {
    //             this.createProduct(element)                
    //         })
    //         return "Se han creado los productos correctamente"
    //     }
    // }